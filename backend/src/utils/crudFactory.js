/**
 * CRUD Factory — Gera rotas CRUD padrão para qualquer tabela
 * Elimina duplicação de código em 6+ rotas similares
 *
 * Uso:
 * const schema = {
 *   tableName: 'customers',
 *   allowedFields: ['name', 'email', 'phone'],
 *   validations: {
 *     revenue: (val) => val >= 0 ? null : 'Revenue não pode ser negativo',
 *     start_date: (val, obj) => {
 *       if (obj.end_date && new Date(val) >= new Date(obj.end_date)) {
 *         return 'start_date deve ser antes de end_date';
 *       }
 *       return null;
 *     }
 *   },
 *   requiredFields: ['name', 'email'],
 *   rbacDelete: ['ADMIN', 'MANAGER'],
 *   rbacAudit: ['ADMIN']
 * };
 *
 * module.exports = createCRUD(schema);
 */

const express = require('express');
const supabase = require('../../config/supabase');
const checkRole = require('../middleware/rbac');

const createCRUD = (schema) => {
  const router = express.Router();
  const {
    tableName,
    allowedFields = [],
    validations = {},
    requiredFields = [],
    rbacDelete = ['ADMIN', 'MANAGER'],
    rbacAudit = ['ADMIN'],
    searchFields = [], // Campos para busca/filtro
    orderBy = 'created_at'
  } = schema;

  // Validação de schema
  if (!tableName) {
    throw new Error('CRUD Factory: tableName é obrigatório');
  }

  // GET all com pagination
  router.get('/', async (req, res) => {
    try {
      const limit = Math.min(parseInt(req.query.limit) || 50, 100);
      const offset = parseInt(req.query.offset) || 0;

      let query = supabase.from(tableName).select('*', { count: 'exact' });

      // Aplicar filtros de busca
      if (searchFields.length > 0) {
        searchFields.forEach(field => {
          if (req.query[field]) {
            query = query.eq(field, req.query[field]);
          }
        });
      }

      const { data, error, count } = await query
        .order(orderBy, { ascending: false })
        .range(offset, offset + limit - 1);

      if (error) throw error;

      res.json({
        data,
        pagination: { limit, offset, total: count }
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // GET by ID
  router.get('/:id', async (req, res) => {
    try {
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .eq('id', req.params.id)
        .single();

      if (error && error.code === 'PGRST116') {
        return res.status(404).json({ error: `${tableName} não encontrado` });
      }
      if (error) throw error;
      if (!data) return res.status(404).json({ error: `${tableName} não encontrado` });

      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // CREATE
  router.post('/', async (req, res) => {
    try {
      // Validar campos obrigatórios
      const missingFields = requiredFields.filter(field => !req.body[field]);
      if (missingFields.length > 0) {
        return res.status(400).json({
          error: `Campos obrigatórios: ${missingFields.join(', ')}`
        });
      }

      // Rodar validações customizadas
      for (const [field, validator] of Object.entries(validations)) {
        if (req.body[field] !== undefined && req.body[field] !== null) {
          const error = validator(req.body[field], req.body);
          if (error) {
            return res.status(400).json({ error });
          }
        }
      }

      // Preparar dados apenas com campos permitidos
      const insertData = {};
      allowedFields.forEach(field => {
        if (req.body.hasOwnProperty(field)) {
          insertData[field] = req.body[field];
        }
      });

      const { data, error } = await supabase
        .from(tableName)
        .insert([insertData])
        .select();

      if (error) throw error;

      res.status(201).json(data[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // UPDATE
  router.put('/:id', async (req, res) => {
    try {
      // Whitelist explícito
      const updateData = {};
      allowedFields.forEach(field => {
        if (req.body.hasOwnProperty(field)) {
          updateData[field] = req.body[field];
        }
      });

      // Rodar validações customizadas
      for (const [field, validator] of Object.entries(validations)) {
        if (updateData[field] !== undefined && updateData[field] !== null) {
          const error = validator(updateData[field], updateData);
          if (error) {
            return res.status(400).json({ error });
          }
        }
      }

      const { data, error } = await supabase
        .from(tableName)
        .update({
          ...updateData,
          updated_at: new Date().toISOString()
        })
        .eq('id', req.params.id)
        .select();

      if (error) throw error;
      if (!data || data.length === 0) {
        return res.status(404).json({ error: `${tableName} não encontrado` });
      }

      res.json(data[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // DELETE com RBAC
  router.delete('/:id', checkRole(...rbacDelete), async (req, res) => {
    try {
      // Verificar se existe
      const { data: existing } = await supabase
        .from(tableName)
        .select('id')
        .eq('id', req.params.id)
        .single();

      if (!existing) {
        return res.status(404).json({ error: `${tableName} não encontrado` });
      }

      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', req.params.id);

      if (error) throw error;

      res.json({ message: `${tableName} deletado com sucesso` });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return router;
};

module.exports = createCRUD;

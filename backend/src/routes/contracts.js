const express = require('express');
const supabase = require('../../config/supabase');
const checkRole = require('../middleware/rbac');

const router = express.Router();

// GET all contracts com paginação
router.get('/', async (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit) || 50, 100);
    const offset = parseInt(req.query.offset) || 0;

    const { data, error, count } = await supabase
      .from('contracts')
      .select('*, customers(*)', { count: 'exact' })
      .order('number', { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;

    res.json({
      data,
      pagination: { limit, offset, total: count }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// GET contract by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('contracts')
      .select('*, customers(*)')
      .eq('id', id)
      .single();

    if (error) throw error;
    if (!data) return res.status(404).json({ error: 'Contrato não encontrado' });

    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// CREATE contract
router.post('/', async (req, res) => {
  try {
    const { number, customer_id, type, value, start_date, end_date, status, sla_hours } = req.body;

    if (!number || !customer_id || !type || !value) {
      return res.status(400).json({ error: 'Campos obrigatórios faltando' });
    }

    // Validação robusta
    if (start_date && end_date && new Date(start_date) >= new Date(end_date)) {
      return res.status(400).json({ error: 'Data de início deve ser antes da data de fim' });
    }

    if (value < 0) {
      return res.status(400).json({ error: 'Valor do contrato não pode ser negativo' });
    }

    const { data, error } = await supabase
      .from('contracts')
      .insert([
        {
          number,
          customer_id,
          type,
          value,
          start_date,
          end_date,
          status: status || 'ACTIVE',
          sla_hours
        }
      ])
      .select();

    if (error) throw error;

    res.status(201).json(data[0]);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// UPDATE contract
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Whitelist explícito - apenas estes campos podem ser atualizados
    const allowedFields = {};
    const fieldMap = ['number', 'type', 'value', 'start_date', 'end_date', 'status', 'sla_hours'];

    fieldMap.forEach(field => {
      if (req.body.hasOwnProperty(field)) {
        allowedFields[field] = req.body[field];
      }
    });

    // Validação robusta
    if (allowedFields.start_date && allowedFields.end_date &&
        new Date(allowedFields.start_date) >= new Date(allowedFields.end_date)) {
      return res.status(400).json({ error: 'Data de início deve ser antes da data de fim' });
    }

    if (allowedFields.value !== undefined && allowedFields.value < 0) {
      return res.status(400).json({ error: 'Valor do contrato não pode ser negativo' });
    }

    const { data, error } = await supabase
      .from('contracts')
      .update({
        ...allowedFields,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select();

    if (error) throw error;
    if (!data || data.length === 0) return res.status(404).json({ error: 'Contrato não encontrado' });

    res.json(data[0]);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// DELETE contract - RBAC: apenas ADMIN e MANAGER
router.delete('/:id', checkRole('ADMIN', 'MANAGER'), async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('contracts')
      .delete()
      .eq('id', id);

    if (error) throw error;

    res.json({ message: 'Contrato deletado com sucesso' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const express = require('express');
const supabase = require('../../config/supabase');
const checkRole = require('../middleware/rbac');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { type, status, category_id } = req.query;
    const limit = Math.min(parseInt(req.query.limit) || 50, 100);
    const offset = parseInt(req.query.offset) || 0;

    let query = supabase.from('transactions').select('*', { count: 'exact' });

    if (type) query = query.eq('type', type);
    if (status) query = query.eq('status', status);
    if (category_id) query = query.eq('category_id', category_id);

    const { data, error, count } = await query
      .order('due_date', { ascending: false })
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

router.get('/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('id', req.params.id)
      .single();

    if (error) throw error;
    if (!data) return res.status(404).json({ error: 'Transação não encontrada' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { type, status, description, amount, due_date, category_id, bank_account_id, payment_method_id } = req.body;

    if (!type || !description || !amount || !due_date) {
      return res.status(400).json({ error: 'Campos obrigatórios faltando' });
    }

    const { data, error } = await supabase
      .from('transactions')
      .insert([{
        type,
        status: status || 'PENDING',
        description,
        amount,
        due_date,
        category_id,
        bank_account_id,
        payment_method_id
      }])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    // Whitelist explícito - apenas estes campos podem ser atualizados
    const allowedFields = {};
    const fieldMap = ['type', 'status', 'description', 'amount', 'due_date', 'category_id', 'bank_account_id', 'payment_method_id'];

    fieldMap.forEach(field => {
      if (req.body.hasOwnProperty(field)) {
        allowedFields[field] = req.body[field];
      }
    });

    const { data, error } = await supabase
      .from('transactions')
      .update({ ...allowedFields, updated_at: new Date().toISOString() })
      .eq('id', req.params.id)
      .select();

    if (error) throw error;
    if (!data?.length) return res.status(404).json({ error: 'Transação não encontrada' });
    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', checkRole('ADMIN', 'MANAGER'), async (req, res) => {
  try {
    const { error } = await supabase
      .from('transactions')
      .delete()
      .eq('id', req.params.id);

    if (error) throw error;
    res.json({ message: 'Transação deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

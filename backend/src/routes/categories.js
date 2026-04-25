const express = require('express');
const supabase = require('../../config/supabase');
const checkRole = require('../middleware/rbac');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { type } = req.query;
    const results = {};

    if (!type || type === 'INCOME') {
      const { data, error } = await supabase.from('income_categories').select('*').order('name');
      if (error) throw error;
      results.income = data;
    }

    if (!type || type === 'EXPENSE') {
      const { data, error } = await supabase.from('expense_categories').select('*').order('name');
      if (error) throw error;
      results.expense = data;
    }

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/income', checkRole('ADMIN', 'MANAGER'), async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) return res.status(400).json({ error: 'Nome é obrigatório' });
    const { data, error } = await supabase.from('income_categories').insert([{ name, description }]).select();
    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/expense', checkRole('ADMIN', 'MANAGER'), async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name) return res.status(400).json({ error: 'Nome é obrigatório' });
    const { data, error } = await supabase.from('expense_categories').insert([{ name, description }]).select();
    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/income/:id', checkRole('ADMIN'), async (req, res) => {
  try {
    const { error } = await supabase.from('income_categories').delete().eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Categoria removida' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/expense/:id', checkRole('ADMIN'), async (req, res) => {
  try {
    const { error } = await supabase.from('expense_categories').delete().eq('id', req.params.id);
    if (error) throw error;
    res.json({ message: 'Categoria removida' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

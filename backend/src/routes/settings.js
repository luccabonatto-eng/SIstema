const express = require('express');
const supabase = require('../../config/supabase');
const checkRole = require('../middleware/rbac');

const router = express.Router();

// GET a specific setting
router.get('/:key', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('system_settings')
      .select('key, value')
      .eq('key', req.params.key)
      .single();

    if (error && error.code === 'PGRST116') {
      return res.status(404).json({ error: 'Configuração não encontrada' });
    }
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT update a setting — ADMIN/MANAGER
router.put('/:key', checkRole('ADMIN', 'MANAGER'), async (req, res) => {
  try {
    const { value } = req.body;
    if (value === undefined) return res.status(400).json({ error: 'value é obrigatório' });

    const { data, error } = await supabase
      .from('system_settings')
      .upsert({ key: req.params.key, value: String(value), updated_at: new Date().toISOString() })
      .select();

    if (error) throw error;
    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

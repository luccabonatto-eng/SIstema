const express = require('express');
const supabase = require('../../config/supabase');
const checkRole = require('../middleware/rbac');

const router = express.Router();

// GET all users — ADMIN/MANAGER
router.get('/', checkRole('ADMIN', 'MANAGER'), async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('id, name, email, role, status, last_login, created_at')
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.json(data || []);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT update user status/role — ADMIN only
router.put('/:id', checkRole('ADMIN'), async (req, res) => {
  try {
    const allowed = {};
    ['role', 'status', 'name'].forEach(f => {
      if (req.body.hasOwnProperty(f)) allowed[f] = req.body[f];
    });

    const { data, error } = await supabase
      .from('users')
      .update({ ...allowed, updated_at: new Date().toISOString() })
      .eq('id', req.params.id)
      .select('id, name, email, role, status');

    if (error) throw error;
    if (!data?.length) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(data[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE (deactivate) user — ADMIN only
router.delete('/:id', checkRole('ADMIN'), async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .update({ status: 'INACTIVE', updated_at: new Date().toISOString() })
      .eq('id', req.params.id)
      .select('id');

    if (error) throw error;
    if (!data?.length) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json({ message: 'Usuário desativado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const supabase = require('../../config/supabase');

const ACTIONS = { POST: 'Criou', PUT: 'Atualizou', PATCH: 'Atualizou', DELETE: 'Excluiu' };

const createAuditMiddleware = (module) => (req, res, next) => {
  if (req.method === 'GET') return next();
  const orig = res.json.bind(res);
  res.json = function (data) {
    if (res.statusCode >= 200 && res.statusCode < 300 && req.user?.id) {
      const action = ACTIONS[req.method] || req.method;
      const detail = JSON.stringify(req.body || {}).slice(0, 300);
      supabase.from('audit_logs')
        .insert([{ user_id: req.user.id, module, action, detail, ip_address: req.ip }])
        .then(() => {}).catch(() => {});
    }
    return orig(data);
  };
  next();
};

module.exports = createAuditMiddleware;

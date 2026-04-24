/**
 * Role-Based Access Control (RBAC) Middleware
 * Verifica se o usuário tem permissão para acessar o recurso
 *
 * Uso:
 * router.delete('/:id', authMiddleware, checkRole('ADMIN', 'MANAGER'), handler);
 */

const checkRole = (...allowedRoles) => {
  return (req, res, next) => {
    // Verificar se usuário está autenticado (middleware auth deve rodar antes)
    if (!req.user) {
      return res.status(401).json({ error: 'Não autenticado' });
    }

    // Verificar se role do usuário está autorizado
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        error: `Acesso negado. Role necessário: ${allowedRoles.join(', ')}`
      });
    }

    next();
  };
};

module.exports = checkRole;

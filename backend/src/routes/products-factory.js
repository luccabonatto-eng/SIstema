/**
 * Products Route — Usando CRUD Factory
 * Reduz de ~85 linhas para ~25 linhas de código
 * Toda a lógica CRUD é delegada ao factory
 */

const createCRUD = require('../utils/crudFactory');

const schema = {
  tableName: 'products',
  allowedFields: ['name', 'sku', 'category', 'quantity', 'unit_cost', 'unit_price', 'description'],
  requiredFields: ['name', 'sku'],
  validations: {
    quantity: (val) => val < 0 ? 'Quantidade não pode ser negativa' : null,
    unit_cost: (val) => val < 0 ? 'Custo unitário não pode ser negativo' : null,
    unit_price: (val) => val < 0 ? 'Preço unitário não pode ser negativo' : null
  },
  rbacDelete: ['ADMIN', 'MANAGER'],
  searchFields: ['category'],
  orderBy: 'name'
};

module.exports = createCRUD(schema);

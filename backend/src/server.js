require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../config/swagger');

const authRoutes = require('./routes/auth');
const customersRoutes = require('./routes/customers');
const contractsRoutes = require('./routes/contracts');
const ordersRoutes = require('./routes/orders');
const techniciansRoutes = require('./routes/technicians');
const vehiclesRoutes = require('./routes/vehicles');
const productsRoutes = require('./routes/products');
const transactionsRoutes = require('./routes/transactions');
const auditRoutes = require('./routes/audit');
const categoriesRoutes = require('./routes/categories');
const bankAccountsRoutes = require('./routes/bank-accounts');
const paymentMethodsRoutes = require('./routes/payment-methods');

const authMiddleware = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3001;

// Validar CORS obrigatoriamente em produção
const corsOrigins = process.env.CORS_ORIGIN?.split(',') || [];

if (corsOrigins.length === 0 && process.env.NODE_ENV === 'production') {
  throw new Error('❌ CORS_ORIGIN must be defined in production environment');
}

// Middleware
app.use(cors({
  origin: corsOrigins.length > 0 ? corsOrigins : 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // Parse cookies (para HttpOnly tokens)

// Rate Limiters
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // 100 requisições por IP
  message: 'Muitas requisições, tente novamente mais tarde',
  standardHeaders: true, // Retorna rate limit info no header RateLimit-*
  legacyHeaders: false // Desativa o header X-RateLimit-*
});

const authLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hora
  max: 5, // 5 tentativas por hora
  message: 'Muitas tentativas de autenticação, tente novamente em 1 hora',
  skipSuccessfulRequests: true // Não conta requisições bem-sucedidas
});

// Aplicar rate limiting global
app.use('/api/', generalLimiter);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  swaggerOptions: { persistAuthorization: true }
}));

// Routes (sem autenticação) - com rate limiting mais estrito
app.use('/api/auth', authLimiter, authRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Rotas protegidas (requerem autenticação)
app.use('/api/customers', authMiddleware, customersRoutes);
app.use('/api/contracts', authMiddleware, contractsRoutes);
app.use('/api/orders', authMiddleware, ordersRoutes);
app.use('/api/technicians', authMiddleware, techniciansRoutes);
app.use('/api/vehicles', authMiddleware, vehiclesRoutes);
app.use('/api/products', authMiddleware, productsRoutes);
app.use('/api/transactions', authMiddleware, transactionsRoutes);
app.use('/api/audit', authMiddleware, auditRoutes);
app.use('/api/categories', authMiddleware, categoriesRoutes);
app.use('/api/bank-accounts', authMiddleware, bankAccountsRoutes);
app.use('/api/payment-methods', authMiddleware, paymentMethodsRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Opticom API rodando em http://localhost:${PORT}`);
    console.log(`📊 Dashboard em http://localhost:3000`);
    console.log(`✅ Database conectado`);
  });
}

module.exports = app;

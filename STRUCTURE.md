# Estrutura do Opticom ERP

## 📊 Visão Geral da Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                   Opticom ERP System                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────────────┐      ┌──────────────────────┐    │
│  │   Frontend (SPA)     │      │  Backend (API REST)  │    │
│  │   React via CDN      │◄────►│  Express.js + JWT    │    │
│  │                      │      │                      │    │
│  │  • index.html        │      │  • /auth             │    │
│  │  • api-client.js     │      │  • /customers        │    │
│  │  • validators.js     │      │  • /contracts        │    │
│  │  • notifications.js  │      │  • /orders           │    │
│  │                      │      │  • /technicians      │    │
│  │ Deploy: Vercel       │      │  • /vehicles         │    │
│  │                      │      │  • /products         │    │
│  │                      │      │  • /transactions     │    │
│  │                      │      │  • /audit            │    │
│  │                      │      │                      │    │
│  │                      │      │ Deploy: Railway      │    │
│  └──────────────────────┘      └──────────────────────┘    │
│           │                              │                 │
│           └──────────────────┬───────────┘                 │
│                              │                             │
│                    ┌─────────▼─────────┐                  │
│                    │  Supabase Postgres│                  │
│                    │   (Database)      │                  │
│                    │                   │                  │
│                    │  • users          │                  │
│                    │  • customers      │                  │
│                    │  • contracts      │                  │
│                    │  • orders         │                  │
│                    │  • technicians    │                  │
│                    │  • vehicles       │                  │
│                    │  • products       │                  │
│                    │  • transactions   │                  │
│                    │  • audit_logs     │                  │
│                    └───────────────────┘                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## 📂 Árvore de Diretórios Detalhada

### Backend
```
backend/
├── src/
│   ├── routes/
│   │   ├── auth.js           # JWT register, login, refresh, /me
│   │   ├── customers.js      # GET/POST/PUT/DELETE customers
│   │   ├── contracts.js      # GET/POST/PUT/DELETE contracts
│   │   ├── orders.js         # GET/POST/PUT/DELETE orders
│   │   ├── technicians.js    # GET/POST/PUT/DELETE technicians
│   │   ├── vehicles.js       # GET/POST/PUT/DELETE vehicles
│   │   ├── products.js       # GET/POST/PUT/DELETE products
│   │   ├── transactions.js   # GET/POST/PUT/DELETE transactions
│   │   └── audit.js          # GET audit logs
│   │
│   ├── middleware/
│   │   ├── auth.js           # JWT verification (Bearer token)
│   │   └── rbac.js           # Role-based access control
│   │
│   ├── utils/
│   │   └── crudFactory.js    # Reusable CRUD factory (52% code reduction)
│   │
│   └── server.js             # Express setup, CORS, rate limiting
│
├── config/
│   ├── supabase.js           # Supabase client initialization
│   └── swagger.js            # API documentation
│
├── __tests__/
│   ├── auth.test.js
│   └── customers.test.js
│
├── package.json              # Dependencies
├── .env.example              # Environment variables template
├── .gitignore
├── README.md
├── jest.setup.js
├── seed-data.js              # Database seed script
└── railway.json              # Railway deployment config
```

### Frontend
```
frontend/
├── index.html                # Main React app (all components in one file)
│                             # ~290KB (includes all logic)
│
├── api-client.js             # HTTP client with JWT management
│                             # • sessionStorage token handling
│                             # • Authorization header injection
│                             # • Auto-logout on 401
│
├── validators.js             # Input validation rules
│
├── notifications.js          # Toast notification system
│
├── server.js                 # Simple Node server for development
│
├── .env.example              # Environment variables template
├── .gitignore
├── .vercel/                  # Vercel deployment config
├── INSTRUÇÕES.md
└── README.md
```

### Documentação
```
docs/
├── DEPLOY_AUTOMATIZADO.md    # Step-by-step Railway + Vercel guide
├── DEPLOY_CHECKLIST.md       # Pre-deployment checklist
├── DEPLOY_GUIDE.md           # Detailed deployment guide
├── DEPLOY_PRONTO.md          # Ready-to-deploy confirmation
├── DEPLOY_STEPS.md           # Deployment steps
├── FASE3_COMPLETA.md         # Phase 3 completion report
├── MELHORIAS_ANALISE.md      # Improvements analysis
├── PRONTO_PARA_DEPLOY.md     # Pre-deployment ready
├── SPRINT1_CONCLUIDO.md      # Sprint 1 completion
├── SPRINT2_CONCLUIDO.md      # Sprint 2 completion
├── SPRINT3_COMPLETO.md       # Sprint 3 completion
└── SPRINT3_PARCIAL.md        # Sprint 3 partial
```

### Scripts
```
scripts/
└── setup.sh                  # Automated setup for development
```

## 🔄 Fluxo de Dados

### Login Flow
```
User (Frontend)
    │
    ├─► POST /auth/login (email, password)
    │
    ├─► Backend validates & creates JWT
    │
    ├─► Response: { token, user }
    │
    ├─► Frontend stores token in sessionStorage
    │
    └─► All subsequent requests include:
        Authorization: Bearer {token}
```

### Request Flow
```
Frontend Component
    │
    ├─► Call api.getCustomers()
    │
    ├─► api-client adds Authorization header
    │
    ├─► Fetch to /api/customers
    │
    ├─► Backend middleware validates JWT
    │
    ├─► RBAC middleware checks role
    │
    ├─► Route handler executes
    │
    ├─► Supabase database query
    │
    ├─► Response returned to frontend
    │
    └─► Component state updated & re-rendered
```

## 🗄️ Database Schema (Supabase PostgreSQL)

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  role ENUM ('ADMIN', 'MANAGER', 'TECHNICIAN'),
  status ENUM ('ACTIVE', 'INACTIVE'),
  last_login TIMESTAMP,
  created_at TIMESTAMP
);
```

### Customers Table
```sql
CREATE TABLE customers (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  type ENUM ('PJ', 'PF'),
  doc VARCHAR(20),
  email VARCHAR(255),
  phone VARCHAR(20),
  city VARCHAR(255),
  active BOOLEAN,
  revenue DECIMAL(12,2),
  contracts INT,
  openOS INT,
  created_at TIMESTAMP
);
```

Similar structure for: contracts, orders, technicians, vehicles, products, transactions

### Audit Logs Table
```sql
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY,
  user_id UUID,
  entity_type VARCHAR(50),
  entity_id UUID,
  action ENUM ('CREATE', 'UPDATE', 'DELETE'),
  changes JSONB,
  timestamp TIMESTAMP
);
```

## 🔐 Security Features

### Authentication
- ✅ JWT tokens (24h expiration)
- ✅ bcrypt password hashing
- ✅ Authorization Bearer header
- ✅ sessionStorage token (cleared on browser close)

### Authorization
- ✅ Role-based access control (ADMIN, MANAGER, TECHNICIAN)
- ✅ DELETE operations restricted to ADMIN
- ✅ Audit logging of all changes

### API Security
- ✅ CORS configuration
- ✅ Rate limiting (20 requests/second)
- ✅ Input validation
- ✅ SQL injection protection (parameterized queries)

## 📊 Deployment Architecture

### Development
```
Local Machine
├── Backend: npm run dev (localhost:3001)
└── Frontend: Live Server (localhost:3000)
```

### Production
```
Vercel                    Railway                Supabase
┌──────────┐              ┌──────────┐           ┌──────────┐
│ Frontend │◄────────────►│ Backend  │◄────────►│Database  │
│ (React)  │              │(Express) │          │(Postgres)│
└──────────┘              └──────────┘           └──────────┘
  (UI)                      (API)                  (Storage)
```

## 📈 Performance Metrics

| Component | Size | Load Time |
|-----------|------|-----------|
| Frontend (index.html) | 294 KB | ~500ms |
| API Responses | 10-100 KB | ~100-500ms |
| Database Queries | Various | ~50-200ms |

## 🚀 Deployment Checklist

- [ ] Backend `.env` configured with Supabase credentials
- [ ] Frontend `.env` configured with API URL
- [ ] JWT_SECRET generated and stored securely
- [ ] CORS_ORIGIN set to frontend URL
- [ ] Database migrations applied
- [ ] Test user created (teste@teste.com)
- [ ] Backend deployed to Railway
- [ ] Frontend deployed to Vercel
- [ ] HTTPS enforced
- [ ] Rate limiting enabled
- [ ] Audit logging verified

---

**Last Updated:** April 24, 2026
**Version:** 1.0.0 (Production)

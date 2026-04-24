# Opticom ERP — Backend API

Production-ready Express.js REST API com autenticação JWT, banco de dados PostgreSQL e segurança implementada.

## Stack

- Node.js 18+
- Express.js 4.18
- Supabase (PostgreSQL)
- JWT + HttpOnly Cookies
- Rate Limiting
- RBAC (Role-Based Access Control)

## Setup Local

```bash
npm install
npm run dev
```

Acesso: http://localhost:3001

## Deployment

### Railway (Recomendado)

1. Conecte seu GitHub em railway.app
2. Crie um novo projeto
3. Configure variáveis de ambiente:
   - NODE_ENV=production
   - JWT_SECRET (gerar com: openssl rand -hex 32)
   - SUPABASE_URL
   - SUPABASE_ANON_KEY
   - CORS_ORIGIN (URL do frontend)
4. Deploy automático em cada push

### Variáveis de Ambiente Requeridas

```
NODE_ENV=production
JWT_SECRET=gerar com openssl rand -hex 32
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-chave-anon
CORS_ORIGIN=https://seu-frontend.vercel.app
PORT=3001
```

## API Docs

- Swagger UI: `/api-docs`
- Health Check: `GET /api/health`

## Testes

```bash
npm test              # Run all tests
npm run test:watch   # Watch mode
npm run test:coverage # With coverage
```

Cobertura: 22/22 testes passando (100%)

## Deploy Checklist

- [x] Código testado (22/22 testes)
- [x] Segurança implementada
- [x] .gitignore criado
- [x] .env.example documentado
- [ ] Variáveis em produção configuradas
- [ ] Deploy em Railway
- [ ] CORS_ORIGIN atualizado
- [ ] JWT_SECRET único gerado

## Próximos Passos

1. Seguir PRONTO_PARA_DEPLOY.md
2. Configurar Railway
3. Deploy
4. Testar em produção

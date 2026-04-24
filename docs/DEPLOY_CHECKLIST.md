# ✅ Checklist Pre-Deploy Final

Execute este checklist ANTES de fazer deploy.

## Backend (opticom-backend/)

### Código
- [x] npm test — 22/22 tests passando
- [x] npm run lint — sem erros (se aplicável)
- [x] .gitignore criado
- [x] .env.example documentado
- [x] README.md escrito
- [x] Git repository inicializado
- [x] Commit inicial feito

### Segurança
- [x] JWT_SECRET não está hardcoded (.env ignorado)
- [x] Supabase keys não logadas
- [x] Rate limiting ativo
- [x] CORS validado
- [x] RBAC implementado
- [x] HttpOnly Cookies configurado

### Antes do Deploy
- [ ] Gerar JWT_SECRET novo: `openssl rand -hex 32`
- [ ] Copiar Supabase URL e Key
- [ ] Guardar URL do Railway após deploy
- [ ] Anotar URL do Frontend (Vercel) para CORS

### Railway Setup
- [ ] Login com GitHub em railway.app
- [ ] Projeto criado
- [ ] Node.js 18+ selecionado
- [ ] Variáveis de ambiente:
  - [ ] NODE_ENV=production
  - [ ] JWT_SECRET=seu_novo_secret
  - [ ] SUPABASE_URL=...
  - [ ] SUPABASE_ANON_KEY=...
  - [ ] CORS_ORIGIN=temp_http://localhost:3000
  - [ ] PORT=3001
- [ ] Deploy acionado
- [ ] Status: "Deployed ✓"
- [ ] URL do Railway anotada

### Pós-Deploy Backend
- [ ] Testar health check: `curl https://seu-railway-url/api/health`
- [ ] Swagger acessível: `https://seu-railway-url/api-docs`
- [ ] Sem errors nos logs (Railway Dashboard)

---

## Frontend (opticom-frontend/)

### Código
- [x] .gitignore criado
- [x] Git repository inicializado
- [x] Commit inicial feito
- [x] index.html referencia corretamente React
- [x] api-client.js usa `credentials: 'include'`
- [x] Não há localStorage token (usado HttpOnly)

### Variáveis
- [ ] VITE_API_BASE_URL será configurado em Vercel

### Vercel Setup
- [ ] Login com GitHub em vercel.com
- [ ] Projeto importado (opticom-frontend)
- [ ] Framework: "Other" (é React via CDN)
- [ ] Build Command: desabilitado
- [ ] Variables:
  - [ ] VITE_API_BASE_URL=https://seu-railway-url/api
- [ ] Deploy acionado
- [ ] Status: "Ready"
- [ ] URL do Vercel anotada

### Pós-Deploy Frontend
- [ ] Acesso à URL: `https://seu-vercel-url`
- [ ] Página de login aparece
- [ ] Sem erros no console (F12 → Console)

---

## Integração (Backend + Frontend)

### CORS
- [ ] Voltar em Railway
- [ ] CORS_ORIGIN atualizado para: `https://seu-vercel-url`
- [ ] Railway fez redeploy automático (~1 min)

### Testes de Autenticação
- [ ] Login com email: teste@teste.com, senha: 123456
- [ ] Sucesso: redirecionado para Dashboard
- [ ] DevTools → Application → Cookies
  - [ ] `opticom_token` existe
  - [ ] `HttpOnly ✓`
  - [ ] `Secure ✓` (em produção)
  - [ ] `SameSite=Strict ✓`

### Testes de Funcionalidade
- [ ] Dashboard carrega (lista clientes)
- [ ] Criar novo cliente funciona
- [ ] Editar cliente funciona
- [ ] Deletar cliente funciona
- [ ] Logout funciona
- [ ] Login novamente funciona

### Monitoramento
- [ ] Railway Logs: nenhum erro
- [ ] Vercel Analytics: nenhum 5xx
- [ ] Navegador Console: nenhum erro
- [ ] Network Tab: requisições retornam 200

---

## Rollback (Se necessário)

Se algo der errado:

### Railway
```bash
Railway Dashboard → Deployments → Rollback
```

### Vercel
```bash
Vercel Dashboard → Deployments → Redeploy Previous
```

### Local Testing
```bash
npm install
npm run dev
# Teste em http://localhost:3001
```

---

## Sucesso! ✅

Quando todos os checkboxes estão marcados:

1. Sistema está em produção
2. Autenticação funciona
3. CRUD operacional
4. Segurança implementada
5. Pronto para usuários reais

**Próximas ações:**
- Monitorar por 24h
- Coletar feedback
- Preparar Problema 14 (Audit automático) se necessário
- Escalar conforme demanda

---

*Opticom ERP está vivo! 🚀*

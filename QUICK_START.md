# Opticom ERP - Quick Start Guide

## 📂 Onde Encontrar Tudo

```
opticom/
│
├── README.md              ← Leia primeiro (visão geral)
├── STRUCTURE.md           ← Arquitetura detalhada
├── QUICK_START.md         ← Este arquivo
│
├── backend/               ← API REST (Express.js + JWT)
│   └── Pronto para produção em Railway
│
├── frontend/              ← SPA React (React via CDN)
│   └── Pronto para produção em Vercel
│
├── docs/                  ← Documentação completa
│   ├── DEPLOY_AUTOMATIZADO.md  ← Guia passo-a-passo
│   ├── DEPLOY_CHECKLIST.md     ← Checklist de deployment
│   └── SPRINT*.md              ← Histórico de desenvolvimento
│
└── scripts/
    └── setup.sh           ← Instalação automática
```

## 🚀 Para Começar Agora

### Opção 1: Deployment em Produção (Recomendado)

**Tempo estimado: 30 min**

1. Abra [docs/DEPLOY_AUTOMATIZADO.md](docs/DEPLOY_AUTOMATIZADO.md)
2. Siga os passos:
   - Railway login + novo projeto
   - Configurar variáveis de ambiente
   - Vercel login + novo projeto
   - Deploy automático

### Opção 2: Desenvolvimento Local

**Tempo estimado: 10 min**

```bash
# 1. Execute o setup
chmod +x scripts/setup.sh
./scripts/setup.sh

# 2. Abra dois terminais

# Terminal 1 - Backend
cd backend
npm run dev
# Rodará em http://localhost:3001

# Terminal 2 - Frontend
cd frontend
python -m http.server 3000
# Abra http://localhost:3000
```

**Credenciais de teste:**
- Email: `teste@teste.com`
- Senha: `123456`

### Opção 3: Docker (Opcional)

Se preferir usar Docker:

```bash
# Backend
docker build -t opticom-backend backend/
docker run -p 3001:3001 --env-file backend/.env opticom-backend

# Frontend
docker build -t opticom-frontend frontend/
docker run -p 3000:3000 opticom-frontend
```

## 📚 Documentação por Tópico

### 🏗️ Arquitetura
- **[README.md](README.md)** - Visão geral do projeto
- **[STRUCTURE.md](STRUCTURE.md)** - Estrutura detalhada de pastas e fluxos

### 🚀 Deployment
- **[docs/DEPLOY_AUTOMATIZADO.md](docs/DEPLOY_AUTOMATIZADO.md)** ⭐ **Comece aqui**
- **[docs/DEPLOY_CHECKLIST.md](docs/DEPLOY_CHECKLIST.md)** - Checklist pré-deployment
- **[docs/DEPLOY_GUIDE.md](docs/DEPLOY_GUIDE.md)** - Guia detalhado
- **[docs/DEPLOY_STEPS.md](docs/DEPLOY_STEPS.md)** - Passos passo-a-passo

### 📊 Histórico
- **[docs/SPRINT1_CONCLUIDO.md](docs/SPRINT1_CONCLUIDO.md)** - Sprint 1 (Fase 1)
- **[docs/SPRINT2_CONCLUIDO.md](docs/SPRINT2_CONCLUIDO.md)** - Sprint 2 (Fase 2)
- **[docs/SPRINT3_COMPLETO.md](docs/SPRINT3_COMPLETO.md)** - Sprint 3 (Fase 3)
- **[docs/MELHORIAS_ANALISE.md](docs/MELHORIAS_ANALISE.md)** - Análise de melhorias

### ⚙️ Desenvolvimento
- **backend/README.md** - Setup backend
- **frontend/README.md** - Setup frontend
- **backend/config/swagger.js** - API documentation

## 🎯 Tarefas Comuns

### Adicionar Novo Campo em Customers

1. **Backend:** Alterar tabela no Supabase
2. **Backend:** Atualizar route em `backend/src/routes/customers.js`
3. **Frontend:** Adicionar input em `index.html` (componente CustomersPage)
4. **Frontend:** Incluir no form object

### Adicionar Novo Módulo (ex: Suppliers)

1. **Backend:** Criar `backend/src/routes/suppliers.js`
2. **Backend:** Registrar em `backend/src/server.js`
3. **Frontend:** Criar componente `SuppliersPage` em `index.html`
4. **Frontend:** Adicionar opção no menu Sidebar
5. **Frontend:** Adicionar case no switch de renderização

### Deploy de Mudanças

```bash
# Backend (Railway via git push)
git add .
git commit -m "feat: descrição da mudança"
git push origin main
# Railway faz deploy automaticamente

# Frontend (Vercel via git push)
git add .
git commit -m "feat: descrição da mudança"
git push origin main
# Vercel faz deploy automaticamente
```

## 🔧 Troubleshooting Comum

### "Token não fornecido" ao fazer login

**Problema:** Backend não está recebendo o Authorization header

**Solução:**
1. Verifique se `api-client.js` tem: `headers['Authorization'] = Bearer ${token}`
2. Verifique se token está em sessionStorage
3. Verifique CORS em `backend/src/server.js`

### App volta para login ao clicar em outra página

**Problema:** Detectado em anterior, corrigido no commit [b5c24f3]

**Solução já aplicada:**
- App monitora sessionStorage a cada 500ms
- Detecta logout automático (erro 401)
- Retorna para LoginPage automaticamente

### Erro CORS ao chamar API

**Problema:** Frontend em `https://domain1.com`, backend em `https://domain2.com`

**Solução:**
1. Configurar `CORS_ORIGIN` no backend `.env`
2. Exemplo: `CORS_ORIGIN=https://seu-frontend.vercel.app`
3. Fazer redeploy do backend

## 📋 Checklist Pré-Deployment

Antes de publicar em produção:

- [ ] Todas as variáveis `.env` configuradas
- [ ] Testes passando (`npm test`)
- [ ] Lint sem erros (`npm run lint`)
- [ ] Login funciona com credenciais de teste
- [ ] Pelo menos um CRUD (customers) testado end-to-end
- [ ] Nenhum console.error ou warning
- [ ] HTTPS ativado em ambos domínios
- [ ] Backup do banco de dados configurado

## 🆘 Suporte

### Perguntas Frequentes

**P: Posso mudar a porta 3001?**
R: Sim, altere em `backend/package.json` scripts e `.env` PORT

**P: Como adicionar mais usuários?**
R: POST /auth/register com { name, email, password, role }

**P: Como resetar a senha?**
R: Implementar endpoint `/auth/forgot-password` (not yet implemented)

**P: Posso usar banco MySQL em vez de Supabase?**
R: Sim, alterar em `backend/config/supabase.js` para seu client SQL

### Contatos

- Documentation: Ver `/docs` folder
- Code Issues: Check git history
- Emergency: Check backend logs em Railway dashboard

## 📈 Próximos Passos

1. **[Deployment] →** [docs/DEPLOY_AUTOMATIZADO.md](docs/DEPLOY_AUTOMATIZADO.md)
2. **[Desenvolvimento] →** [README.md](README.md)
3. **[Arquitetura] →** [STRUCTURE.md](STRUCTURE.md)

---

**Última atualização:** 24 de Abril de 2026  
**Status:** ✅ Pronto para Produção  
**Versão:** 1.0.0

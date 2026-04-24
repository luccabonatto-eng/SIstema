# Opticom ERP — Guia de Execução

## 🚀 Iniciar o Sistema Completo

### Terminal 1 — Backend API
```bash
cd /Users/luccabonattodepaula/Documents/educacao/opticom-backend
npm start
# Servidor rodando em http://localhost:3001
```

### Terminal 2 — Frontend
```bash
cd /Users/luccabonattodepaula/Documents/educacao/opticom-frontend

# Opção 1: Abrir no navegador (com Python ou Node)
python3 -m http.server 8000
# ou
npx http-server

# Acesse: http://localhost:8000 (ou http://localhost:3000 conforme a porta)
```

---

## 🔐 Credenciais de Teste

**Email:** `joao@opticom.com.br`  
**Senha:** `senha123`

**Outros usuários disponíveis:**
- ana@opticom.com.br / senha123 (Gerente)
- carlos@opticom.com.br / senha123 (Técnico)

---

## 📊 Dados de Teste

O banco foi populado com:
- ✅ 3 usuários
- ✅ 3 clientes (PJ)
- ✅ 3 técnicos
- ✅ 3 contratos
- ✅ 3 ordens de serviço

---

## ✨ Funcionalidades Integradas

### ✅ Fase 2 Completa

| Feature | Status | Detalhes |
|---------|--------|----------|
| **Login JWT** | ✅ Funcional | Autenticação real com token |
| **Clientes** | ✅ Integrado | Carrega da API em tempo real |
| **Contratos** | ✅ Integrado | Carrega da API em tempo real |
| **Ordens de Serviço** | ✅ Integrado | Carrega da API em tempo real |
| **Token Persistência** | ✅ localStorage | Mantém sessão ativa |

---

## 🧪 Teste Rápido

1. **Abra 2 navegadores lado a lado**
   - Browser 1: Faça login e navegue
   - Browser 2: Faça login com outro usuário

2. **Teste criação de cliente:**
   - Vá para "Clientes"
   - Clique "Novo Cliente"
   - Preencha os dados
   - O novo cliente aparecerá em tempo real

3. **Teste autenticação:**
   - Abra Console (F12)
   - Execute: `api.isAuthenticated()` → deve retornar `true`
   - Execute: `api.user` → mostra dados do usuário logado

---

## 🔗 URLs Importantes

| Serviço | URL |
|---------|-----|
| **Frontend** | http://localhost:8000 |
| **Backend API** | http://localhost:3001 |
| **Supabase** | https://tromofnnttxwtphbxqlw.supabase.co |
| **Health Check** | http://localhost:3001/api/health |

---

## 📁 Arquivos Principais

```
opticom-frontend/
├── index.html          # Aplicação React completa
├── api-client.js       # Cliente HTTP com autenticação
└── INSTRUÇÕES.md       # Este arquivo

opticom-backend/
├── src/
│   ├── server.js       # Servidor Express
│   ├── middleware/auth.js
│   └── routes/         # Endpoints CRUD
├── config/supabase.js  # Conexão ao Supabase
├── .env                # Credenciais
└── seed-data.js        # Script para popular BD
```

---

## 🐛 Troubleshooting

### "API não responde"
```bash
# Verificar se backend está rodando
curl http://localhost:3001/api/health
```

### "Login falha"
- Verificar credenciais: `joao@opticom.com.br / senha123`
- Checar console do browser (F12) para erro exato
- Verificar logs do backend

### "Dados não carregam"
- Abrir Console (F12)
- Verificar se `api.isAuthenticated()` retorna `true`
- Verificar Network → requests à API

---

## 📈 Próximos Passos (Fase 3)

- [ ] Adicionar validação de campos
- [ ] Implementar tratamento de erros melhorado
- [ ] Adicionar testes unitários
- [ ] Deploy em produção (Vercel + Railway)
- [ ] Integrar dashboard com dados reais
- [ ] Implementar módulos financeiros (transações)

---

## 🎯 Checklist Integração

- [x] Backend API funcionando
- [x] Banco Supabase com dados
- [x] Login com JWT integrado
- [x] Clientes carregando da API
- [x] Contratos carregando da API
- [x] Ordens carregando da API
- [x] Token persistido em localStorage
- [x] Erro handling básico implementado
- [ ] Validação de campos
- [ ] Testes automatizados

---

## 📞 Suporte

**Projeto Supabase:** `tromofnnttxwtphbxqlw`  
**Backend:** `/Users/luccabonattodepaula/Documents/educacao/opticom-backend`  
**Frontend:** `/Users/luccabonattodepaula/Documents/educacao/opticom-frontend`

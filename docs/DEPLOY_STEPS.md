# 🚀 Guia Prático de Deployment — Opticom ERP

**Tempo estimado:** 45 minutos  
**Status:** Sistema pronto para ir ao ar

---

## 🎯 Visão Geral do Processo

```
1. Preparar variáveis de ambiente         (5 min)
2. Deploy Backend em Railway              (15 min)
3. Deploy Frontend em Vercel              (15 min)
4. Testar autenticação em produção        (10 min)
5. Monitorar primeiras 24h                (contínuo)
```

---

## ✅ PRÉ-REQUISITOS

Antes de começar, você precisa ter:

- [ ] GitHub account (para integração com Railway/Vercel)
- [ ] Railway account (railway.app) — FREE
- [ ] Vercel account (vercel.com) — FREE
- [ ] Supabase account (supabase.com) — JÁ ATIVADA
- [ ] Credenciais do Supabase anotadas

**Credenciais do Supabase que você já tem:**
```
SUPABASE_URL=https://tromofnnttxwtphbxqlw.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## PASSO 1: Gerar JWT_SECRET (5 min)

No terminal, execute:

```bash
openssl rand -hex 32
```

**Resultado esperado:**
```
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
```

**⚠️ Importante:** Salve este valor em um lugar seguro. Você vai usar em Railway.

---

## PASSO 2: Deploy Backend em Railway (15 min)

### 2.1 — Acessar Railway

1. Abra https://railway.app
2. Clique em **"Login with GitHub"**
3. Autorize o acesso

### 2.2 — Criar Novo Projeto

1. Clique em **"+ New Project"**
2. Selecione **"Deploy from GitHub"**
3. Autorize Railway a acessar seu GitHub
4. Selecione o repositório **opticom-backend**
5. Clique em **"Deploy"**

### 2.3 — Configurar Variáveis de Ambiente

No painel do Railway:

1. Vá para **"Variables"** (abaixo de "Deployments")
2. Adicione as variáveis:

```
NODE_ENV              = production
PORT                  = 3001
JWT_SECRET            = COLE_O_VALOR_GERADO_ACIMA
SUPABASE_URL          = https://tromofnnttxwtphbxqlw.supabase.co
SUPABASE_ANON_KEY     = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
CORS_ORIGIN           = http://localhost:3000
```

**⚠️ CORS_ORIGIN temporário:** Use `http://localhost:3000` por enquanto. Você vai atualizar depois que deployer o frontend.

### 2.4 — Aguardar Deploy

- Você verá "Building..." → "Deployed ✓"
- Isso leva ~2-3 minutos
- Quando ver "Deployed", clique no projeto para ver a URL

**URL do Backend:** Algo como:
```
https://opticom-production-abc123.up.railway.app
```

✅ **Backend está ao vivo!**

---

## PASSO 3: Deploy Frontend em Vercel (15 min)

### 3.1 — Acessar Vercel

1. Abra https://vercel.com
2. Clique em **"Sign Up"** → **"Continue with GitHub"**
3. Autorize o acesso

### 3.2 — Importar Projeto

1. Clique em **"Add New Project"**
2. Selecione **"Import Git Repository"**
3. Procure por **opticom-frontend**
4. Clique em **"Import"**

### 3.3 — Configurar Build

Na tela de configuração:

- **Framework Preset:** Selecione **"Other"** (é React via CDN)
- **Root Directory:** `/` (deixar padrão)
- Desabilite o **"Build Command"** (não precisa)

### 3.4 — Adicionar Variáveis de Ambiente

Clique em **"Environment Variables"** e adicione:

```
VITE_API_BASE_URL = https://SEU_URL_RAILWAY/api
```

**Exemplo:**
```
VITE_API_BASE_URL = https://opticom-production-abc123.up.railway.app/api
```

### 3.5 — Deploy

Clique em **"Deploy"**

- Você verá "Building..." → "Ready"
- Isso leva ~1-2 minutos
- Quando terminar, clique em "Visit" para abrir

**URL do Frontend:** Algo como:
```
https://opticom-frontend-abc123.vercel.app
```

✅ **Frontend está ao vivo!**

---

## PASSO 4: Atualizar CORS (5 min)

Agora que você tem as URLs finais, volte em Railway e atualize:

**Em Railway → Variables:**

```
CORS_ORIGIN = https://opticom-frontend-abc123.vercel.app
```

Salve. Railway fará redeploy automático (~1 min).

---

## PASSO 5: Testar Autenticação (10 min)

### 5.1 — Abrir Frontend em Produção

1. Acesse: https://opticom-frontend-abc123.vercel.app
2. Você deve ver o **Login**

### 5.2 — Fazer Login de Teste

```
Email:    teste@teste.com
Senha:    123456
```

**O que esperar:**
- ✅ Login bem-sucedido
- ✅ Redirecionado para Dashboard
- ✅ Deve listar clientes/contratos

### 5.3 — Verificar Cookie HttpOnly

Abra as Dev Tools (**F12**):

1. **Application** → **Cookies**
2. Procure por `opticom_token`
3. Deve ter: `HttpOnly ✓`, `Secure ✓`, `SameSite=Strict ✓`

### 5.4 — Testar Operações

No Dashboard:

- [ ] Listar clientes
- [ ] Criar novo cliente
- [ ] Editar cliente
- [ ] Deletar cliente
- [ ] Logout

**Se tudo funciona, o sistema está 100% pronto! 🎉**

---

## 🚨 Se Algo Não Funcionar

### Login não funciona?

1. Verifique CORS_ORIGIN em Railway
2. Verifique console do navegador (F12 → Console)
3. Verifique Network tab para ver a requisição

```bash
# No seu computador, teste a API diretamente:
curl https://seu-railway-url/api/health

# Deve retornar:
# {"status":"OK","timestamp":"2026-04-24T..."}
```

### API retorna 401 (não autorizado)?

1. Verifique JWT_SECRET em Railway
2. Verifique se .env.example está correto
3. Verifique Supabase (user existe?)

### CORS error?

1. Volte em Railway
2. Atualize CORS_ORIGIN para a URL exata do Vercel
3. Refaça o teste

---

## 📊 Após Deployment — Primeiras 24h

### Monitorar:

**Railway (Backend):**
- Logs: Procure por erros
- Requests: Deve ver tráfego de logins
- Errors: Deve estar vazio

**Vercel (Frontend):**
- Analytics: Procure por 5xx errors
- Deployments: Deve estar "Ready"
- Visitors: Deve ver acessos

### Teste Real:

Peça para alguém (ou você em outro navegador):
1. Acessar https://opticom-frontend-abc123.vercel.app
2. Fazer login
3. Criar/editar um cliente
4. Verificar que funciona

---

## 🎉 Sucesso! O Sistema Está Vivo!

Quando tudo funciona:

✅ Backend rodando em Railway  
✅ Frontend rodando em Vercel  
✅ Autenticação funcionando  
✅ CRUD operacional  
✅ Cookies HttpOnly securos  

**Próximos passos opcionais:**

1. **Custom Domain:** Adicione seu domínio em Vercel
2. **SSL:** Automático em ambas plataformas
3. **Monitoramento:** Configure alertas no Railway
4. **Backups:** Ative backups automáticos no Supabase

---

## 📞 Checklist Final

- [ ] JWT_SECRET gerado e salvo
- [ ] Railway configurado com variáveis
- [ ] Vercel configurado com VITE_API_BASE_URL
- [ ] CORS_ORIGIN atualizado após Vercel
- [ ] Login funciona em produção
- [ ] Cookies vistos no navegador
- [ ] CRUD testado
- [ ] Logout funciona
- [ ] Nenhum erro no console (F12)
- [ ] Nenhum erro nos logs (Railway/Vercel)

---

## 🎬 Video Resumo

**Se tiver dúvida, siga este fluxo:**

```
1. github.com → Copie links dos repos
2. railway.app → Deploy opticom-backend
3. Gere JWT_SECRET com openssl
4. Configure variáveis em Railway
5. Copie URL do Railway
6. vercel.com → Deploy opticom-frontend
7. Configure VITE_API_BASE_URL no Vercel
8. Atualize CORS_ORIGIN em Railway
9. Teste em produção
10. Celebre! 🎉
```

---

**Dúvidas? Leia PRONTO_PARA_DEPLOY.md para mais detalhes.**

**Sucesso! 🚀**

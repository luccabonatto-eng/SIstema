# 🚀 Deploy Automatizado — Copy-Paste Ready

**Sua credencial JWT_SECRET:**
```
40adae30d6d0bca841dbecec477008d6f27335d83f88ee6972c38b0a06895a6a
```

**Suas credenciais Supabase (já configuradas):**
```
SUPABASE_URL: https://tromofnnttxwtphbxqlw.supabase.co
SUPABASE_ANON_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyb21vZm5udHR4d3RwaGJ4cWx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwMzIwNjMsImV4cCI6MjA5MjYwODA2M30.nvh5Ogk2nI8RJlRPU1zPzYaQVoGxJqU0P5U8KFgxb_c
```

---

## 🎯 O Que Você Precisa Fazer

### PASSO 1: Abrir Railway (5 min)

1. Vá para: **https://railway.app**
2. Clique em **"Login with GitHub"**
3. Autorize e entre

### PASSO 2: Criar Projeto Backend (5 min)

1. Clique em **"+ New Project"**
2. Selecione **"Deploy from GitHub"**
3. Selecione o repositório: **opticom-backend**
4. Clique em **"Deploy"**

### PASSO 3: Configurar Variáveis (3 min)

Quando o projeto aparecer, vá em **"Variables"** (abaixo de Deployments) e adicione:

```
NODE_ENV                 = production
PORT                     = 3001
JWT_SECRET               = 40adae30d6d0bca841dbecec477008d6f27335d83f88ee6972c38b0a06895a6a
SUPABASE_URL             = https://tromofnnttxwtphbxqlw.supabase.co
SUPABASE_ANON_KEY        = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyb21vZm5udHR4d3RwaGJ4cWx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwMzIwNjMsImV4cCI6MjA5MjYwODA2M30.nvh5Ogk2nI8RJlRPU1zPzYaQVoGxJqU0P5U8KFgxb_c
CORS_ORIGIN              = http://localhost:3000
```

**Copie e cole cada um.**

### PASSO 4: Aguardar Deploy (3 min)

- Você verá "Building..." depois "Deployed ✓"
- Clique no projeto para ver a URL

**Anote a URL do Railway:**
```
https://seu-backend-railway-url.up.railway.app
```

---

## PASSO 5: Deploy Frontend em Vercel (5 min)

1. Vá para: **https://vercel.com**
2. Clique em **"Add New Project"**
3. Selecione **"Import Git Repository"**
4. Selecione: **opticom-frontend**
5. Clique em **"Import"**

### PASSO 6: Configurar Variáveis (2 min)

Clique em **"Environment Variables"** e adicione:

```
VITE_API_BASE_URL = https://seu-backend-railway-url/api
```

**Cole a URL do Railway que você copiou acima!**

### PASSO 7: Deploy (clique em "Deploy" e aguarde ~2 min)

**Anote a URL do Vercel:**
```
https://seu-frontend-vercel-url.vercel.app
```

---

## PASSO 8: Atualizar CORS em Railway (2 min)

Volte em Railway:
1. Vá em **"Variables"** novamente
2. Atualize:
```
CORS_ORIGIN = https://seu-frontend-vercel-url.vercel.app
```
3. Salve (Railway faz redeploy automático)

---

## PASSO 9: Testar (5 min)

1. Acesse: `https://seu-frontend-vercel-url.vercel.app`
2. Login:
   - Email: `teste@teste.com`
   - Senha: `123456`
3. Você deve ver o Dashboard

✅ **Pronto! Sistema está vivo!**

---

## ⏱️ Timeline Total

```
5 min   → Railway login + criar projeto
3 min   → Configurar variáveis
3 min   → Aguardar build
5 min   → Vercel login + criar projeto
2 min   → Configurar VITE_API_BASE_URL
2 min   → Deploy Vercel
2 min   → Atualizar CORS em Railway
5 min   → Testar
─────────
27 min  → Sistema em produção! 🎉
```

---

## 📞 Dúvidas?

- **Qual é a URL do meu Railway?** Aparece no Dashboard quando termina o build
- **Qual é a URL do meu Vercel?** Aparece quando clica em "Visit"
- **CORS_ORIGIN?** Use exatamente a URL do Vercel (com https://)
- **VITE_API_BASE_URL?** Use exatamente a URL do Railway + `/api`

---

**COMECE AGORA! ⏱️**

Volte quando terminar o deploy!

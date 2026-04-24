# Guia de Deploy — Opticom ERP

**Fase 3 — Produção**

---

## 📋 Pré-requisitos

- Conta GitHub
- Conta Vercel (frontend)
- Conta Railway (backend)
- Git instalado

---

## 🚀 Parte 1: Deploy Backend (Railway)

### Passo 1: Preparar repositório

```bash
cd /Users/luccabonattodepaula/Documents/educacao/opticom-backend

# Inicializar git se ainda não estiver
git init
git add .
git commit -m "Initial commit: Opticom API ready for production"
```

### Passo 2: Criar conta Railway

1. Acesse https://railway.app
2. Sign up com GitHub
3. Autorize Railway a acessar seus repositórios

### Passo 3: Deploy no Railway

1. Clique em "New Project"
2. Selecione "Deploy from GitHub repo"
3. Conecte o repositório `opticom-backend`
4. Railway detectará automaticamente Node.js
5. Adicione variáveis de ambiente:
   ```
   SUPABASE_URL=https://tromofnnttxwtphbxqlw.supabase.co
   SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   JWT_SECRET=seu_jwt_secret_mudado_em_producao
   NODE_ENV=production
   PORT=3001
   ```

### Passo 4: Verificar Deploy

```bash
# Após deploy, teste a API
curl https://seu-projeto.railway.app/api/health
```

---

## 🎨 Parte 2: Deploy Frontend (Vercel)

### Passo 1: Preparar frontend

```bash
cd /Users/luccabonattodepaula/Documents/educacao/opticom-frontend

# Criar package.json para servir arquivos estáticos
cat > package.json << 'EOF'
{
  "name": "opticom-frontend",
  "version": "1.0.0",
  "description": "Opticom ERP Frontend",
  "scripts": {
    "dev": "node server.js",
    "start": "node server.js"
  },
  "dependencies": {}
}
EOF

# Atualizar api-client.js para usar API de produção
# Mudar: const API_BASE_URL = 'http://localhost:3001/api';
# Para:  const API_BASE_URL = 'https://seu-projeto.railway.app/api';
```

### Passo 2: Criar conta Vercel

1. Acesse https://vercel.com
2. Sign up com GitHub
3. Autorize Vercel a acessar seus repositórios

### Passo 3: Deploy no Vercel

1. Clique em "Add New"
2. Selecione "Project"
3. Importe `opticom-frontend`
4. Configure:
   - **Framework**: "Other"
   - **Build Command**: (deixe em branco)
   - **Output Directory**: "."
   - **Install Command**: `npm install` (ou deixe vazio)
5. Vercel fará deploy automático

### Passo 4: Atualizar URL da API

No Vercel, adicione variável de ambiente:
```
REACT_APP_API_URL=https://seu-projeto.railway.app/api
```

Atualize `api-client.js`:
```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';
```

---

## 🔐 Variáveis de Ambiente

### Backend (Railway)
```
SUPABASE_URL=https://tromofnnttxwtphbxqlw.supabase.co
SUPABASE_ANON_KEY=[sua_chave_anon]
JWT_SECRET=[gerado_secretamente]
NODE_ENV=production
PORT=3001
CORS_ORIGIN=https://seu-frontend.vercel.app
```

### Frontend (Vercel)
```
REACT_APP_API_URL=https://seu-backend.railway.app/api
```

---

## ✅ Checklist de Deploy

### Backend
- [ ] Git configurado no repositório
- [ ] Railway conta criada
- [ ] Variáveis de ambiente definidas
- [ ] API respondendo em produção
- [ ] Testes passando (npm test)

### Frontend
- [ ] Vercel conta criada
- [ ] Repositório conectado
- [ ] URL da API de produção configurada
- [ ] Frontend carregando corretamente
- [ ] Login funcionando

### Pós-Deploy
- [ ] Testar login em produção
- [ ] Verificar se dados carregam
- [ ] Verificar console para erros (F12)
- [ ] Testar CRUD operations
- [ ] Monitorar logs

---

## 📊 URLs Pós-Deploy

| Serviço | URL |
|---------|-----|
| Frontend | https://seu-frontend.vercel.app |
| Backend API | https://seu-backend.railway.app |
| API Docs | https://seu-backend.railway.app/api-docs |
| Supabase | https://app.supabase.com/project/tromofnnttxwtphbxqlw |

---

## 🔄 CI/CD Automático

### GitHub Actions (Backend)

Criar `.github/workflows/test-and-deploy.yml`:

```yaml
name: Test and Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
      - run: npm run lint # (quando implementado)

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Railway deployment
        run: |
          curl -X POST https://railway.app/api/webhooks/deploy \
            -H "Authorization: Bearer ${{ secrets.RAILWAY_TOKEN }}"
```

---

## 🐛 Troubleshooting

### Erro: "Cannot find module"
```bash
npm install  # Railway deve executar automaticamente
```

### Erro: "SUPABASE_URL is undefined"
- Verificar se variáveis estão definidas no painel Railway
- Reiniciar deploy

### Erro: "CORS error in frontend"
- Verificar CORS_ORIGIN no backend
- Deve incluir URL do frontend Vercel

### API retorna 503
- Verificar logs no Railway
- Verificar se Supabase está online

---

## 📈 Monitoramento

### Railway Dashboard
- Acesse https://railway.app
- Monitor CPU, RAM, requisições
- Ver logs em tempo real

### Vercel Dashboard
- Acesse https://vercel.com/dashboard
- Ver estatísticas de deployment
- Rollback se necessário

### Supabase Dashboard
- Acesse https://app.supabase.com
- Monitor banco de dados
- Ver query performance

---

## 🔄 Atualizar em Produção

### Backend
```bash
git push origin main
# Railway fará deploy automático
```

### Frontend
```bash
git push origin main
# Vercel fará deploy automático
```

---

## 💡 Dicas Finais

1. **Senhas seguras**: Gerar JWT_SECRET aleatório em produção
2. **HTTPS apenas**: Vercel e Railway usam HTTPS automaticamente
3. **Backups**: Supabase faz backups automáticos
4. **Monitoramento**: Configurar alertas no Railway
5. **Rate limiting**: Adicionar rate limit na API em Fase 4

---

## 📞 Suporte

Para dúvidas sobre deploy:
- Railway: https://docs.railway.app
- Vercel: https://vercel.com/docs
- Supabase: https://supabase.com/docs

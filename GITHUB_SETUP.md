# GitHub Setup — Opticom ERP

Sistema pronto para upload no GitHub! Siga os passos abaixo.

## 🔧 Pré-requisitos

- ✅ Git instalado (verificado: `git --version`)
- ✅ Repositório local criado
- ✅ Primero commit feito
- ⏳ GitHub CLI (`gh`) disponível

## 📝 Opção 1: GitHub CLI (Automatizado)

### 1. Autenticar no GitHub

```bash
# Terminal interativo
gh auth login --web

# Segua o fluxo:
# 1. Selecione: GitHub.com
# 2. Selecione: HTTPS
# 3. Selecione: Y (autenticar com GitHub.com)
# 4. Será aberto seu navegador
# 5. Autorize a aplicação
```

### 2. Criar Repositório Automaticamente

```bash
cd /Users/luccabonattodepaula/Documents/educacao/Opticom-ERP

# Criar repo público no GitHub
gh repo create Opticom-ERP \
  --public \
  --source=. \
  --remote=origin \
  --push

# Você será solicitado a confirmar
```

**Resultado:**
- Repositório criado: `github.com/seu-usuario/Opticom-ERP`
- Código feito push automaticamente
- Pronto para colaboração! 🎉

---

## 📝 Opção 2: Criar Repositório Manualmente + Git Push

### 1. Criar Repositório no GitHub Manualmente

1. Acesse: **https://github.com/new**
2. Preencha:
   - **Repository name:** `Opticom-ERP`
   - **Description:** `Full-stack ERP system with Express.js + React + PostgreSQL`
   - **Public:** Sim
   - **Initialize with:** Não (já temos commits)
3. Clique: **Create repository**
4. Copie a URL (ex: `https://github.com/seu-usuario/Opticom-ERP.git`)

### 2. Fazer Push do Código

```bash
cd /Users/luccabonattodepaula/Documents/educacao/Opticom-ERP

# Adicionar remote
git remote add origin https://github.com/seu-usuario/Opticom-ERP.git

# Renomear branch (se necessário)
git branch -M main

# Fazer push
git push -u origin main
```

**Se pedir credenciais:**
- Username: seu-usuario-github
- Password: seu-personal-access-token (não é sua senha!)

**Para gerar Personal Access Token:**
1. GitHub → Settings → Developer settings → Personal access tokens
2. Clique: **Generate new token (classic)**
3. Selecione: `repo` (todos os permissionamentos)
4. Gere e copie o token
5. Cole como password no terminal

---

## ✅ Verificar se Deu Certo

```bash
# Ver remote configurado
git remote -v

# Resultado esperado:
# origin  https://github.com/seu-usuario/Opticom-ERP.git (fetch)
# origin  https://github.com/seu-usuario/Opticom-ERP.git (push)

# Ver último commit
git log -1

# Verificar no navegador
# https://github.com/seu-usuario/Opticom-ERP
```

---

## 🚀 Próximos Passos

Depois de fazer push:

1. **Adicionar Topics** (no GitHub):
   - `erp-system`
   - `express-js`
   - `react`
   - `postgresql`
   - `supabase`

2. **Adicionar Descrição** (no GitHub):
   ```
   Full-stack ERP system for contract and service order management
   
   - Backend: Express.js + JWT + PostgreSQL
   - Frontend: React SPA with Supabase
   - Deployment: Railway + Vercel
   - Documentation: Complete with deployment guides
   ```

3. **Habilitar Issues** (para feedback)

4. **Criar Releases** (quando publicar em produção):
   ```bash
   gh release create v1.0.0 --title "Opticom ERP v1.0.0" --notes "Production release"
   ```

---

## 📋 Checklist

- [ ] GitHub CLI instalado (`gh --version`)
- [ ] Autenticado no GitHub (`gh auth status`)
- [ ] Repositório criado no GitHub
- [ ] Remote configurado (`git remote -v`)
- [ ] Código feito push (`git push origin main`)
- [ ] Repositório visível em github.com/seu-usuario/Opticom-ERP
- [ ] Commits histórico aparecendo
- [ ] Topics adicionados
- [ ] Descrição atualizada

---

## 🆘 Troubleshooting

**Erro: "fatal: 'origin' does not appear to be a 'git' repository"**
```bash
# Solução: Adicionar remote
git remote add origin https://github.com/seu-usuario/Opticom-ERP.git
```

**Erro: "Permission denied (publickey)"**
```bash
# Solução 1: Usar HTTPS em vez de SSH
git remote set-url origin https://github.com/seu-usuario/Opticom-ERP.git

# Solução 2: Ou configurar chave SSH
ssh-keygen -t ed25519 -C "seu-email@example.com"
# e adicionar em GitHub → Settings → SSH Keys
```

**Erro: "Support for password authentication was removed"**
```bash
# Solução: Usar Personal Access Token (veja acima)
```

---

**Status:** ✅ Pronto para GitHub
**Data:** 24 de Abril de 2026
**Versão:** 1.0.0

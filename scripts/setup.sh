#!/bin/bash

# Opticom ERP - Setup Script
# Instala dependências e configura ambiente para desenvolvimento local

set -e

echo "🚀 Opticom ERP - Setup"
echo "===================="
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js não instalado${NC}"
    echo "Instale de https://nodejs.org/"
    exit 1
fi

echo -e "${GREEN}✓ Node.js $(node -v)${NC}"

# Setup Backend
echo ""
echo "📦 Configurando Backend..."
cd backend

if [ ! -f .env ]; then
    echo "Criando .env..."
    cp .env.example .env
    echo -e "${YELLOW}⚠️  Configure as variáveis em backend/.env${NC}"
fi

npm install

echo -e "${GREEN}✓ Backend pronto${NC}"

# Setup Frontend
echo ""
echo "🎨 Configurando Frontend..."
cd ../frontend

if [ ! -f .env ]; then
    echo "Criando .env..."
    cp .env.example .env
    echo -e "${YELLOW}⚠️  Configure VITE_API_BASE_URL em frontend/.env${NC}"
fi

echo -e "${GREEN}✓ Frontend pronto${NC}"

# Resumo
echo ""
echo -e "${GREEN}✅ Setup concluído!${NC}"
echo ""
echo "Para iniciar:"
echo "  Backend:  cd backend && npm run dev"
echo "  Frontend: cd frontend && python -m http.server 3000"
echo ""
echo "Teste o sistema:"
echo "  http://localhost:3000"
echo "  Email: teste@teste.com"
echo "  Senha: 123456"
echo ""

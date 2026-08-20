#!/usr/bin/env bash

# ==============================================================================
# Script de Inicialização Rápida - Guia Treinadores de IA
# ==============================================================================

# Garante que o diretório de execução seja a pasta do projeto
cd "$(dirname "$0")" || exit 1

echo "=================================================="
echo "🚀 Iniciando Guia Treinadores de IA (Localhost)..."
echo "=================================================="

# Adiciona caminhos padrão do Node.js ao PATH se necessário
export PATH="$HOME/.local/node/bin:$PATH:/usr/local/bin:/opt/homebrew/bin"

# Verifica se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não foi encontrado no PATH padrão."
    echo "💡 Tentando localizar em ~/.local/node/bin..."
    if [ -f "$HOME/.local/node/bin/node" ]; then
        export PATH="$HOME/.local/node/bin:$PATH"
        echo "✅ Node.js encontrado em $HOME/.local/node/bin"
    else
        echo "⚠️ Node.js não está instalado. Por favor, instale o Node.js em https://nodejs.org"
        exit 1
    fi
fi

echo "📦 Node versão: $(node -v)"
echo "📦 NPM versão: $(npm -v)"
echo ""

# Verifica e instala dependências se a pasta node_modules não existir
if [ ! -d "node_modules" ]; then
    echo "📥 Instalando dependências (npm install)..."
    npm install
    echo "✅ Dependências instaladas!"
    echo ""
fi

# Abre a URL no navegador após 2 segundos em segundo plano
(sleep 2 && (open "http://localhost:3000" 2>/dev/null || open "http://localhost:3001" 2>/dev/null || xdg-open "http://localhost:3000" 2>/dev/null)) &

echo "🌐 Iniciando servidor Next.js..."
echo "👉 Acesse: http://localhost:3000 (ou http://localhost:3001 caso a 3000 esteja em uso)"
echo "🛑 Para parar o servidor, pressione: CTRL + C"
echo "=================================================="
echo ""

# Executa o servidor de desenvolvimento
npm run dev

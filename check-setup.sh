#!/bin/bash

# Script para verificar que el entorno está configurado correctamente

echo "🔍 Verificando configuración del entorno..."
echo ""

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contadores
errors=0
warnings=0

# Función para verificar
check() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✓${NC} $2"
    else
        echo -e "${RED}✗${NC} $2"
        ((errors++))
    fi
}

check_warn() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✓${NC} $2"
    else
        echo -e "${YELLOW}⚠${NC} $2"
        ((warnings++))
    fi
}

echo "📋 Verificando archivos de configuración:"
echo "─────────────────────────────────────────"

# Verificar archivos críticos del DevContainer
[ -f ".devcontainer/devcontainer.json" ]
check $? "devcontainer.json existe"

[ -f ".devcontainer/Dockerfile" ]
check $? "Dockerfile existe"

[ -f ".devcontainer/setup-env.sh" ]
check $? "setup-env.sh existe"

[ -x ".devcontainer/setup-env.sh" ]
check $? "setup-env.sh es ejecutable"

echo ""
echo "🛠️  Verificando archivos del proyecto:"
echo "─────────────────────────────────────────"

[ -f ".gitignore" ]
check $? ".gitignore existe"

[ -f ".editorconfig" ]
check $? ".editorconfig existe"

[ -f ".prettierrc" ]
check $? ".prettierrc existe"

[ -f "init-vite.sh" ]
check $? "init-vite.sh existe"

[ -x "init-vite.sh" ]
check $? "init-vite.sh es ejecutable"

[ -f "Makefile" ]
check $? "Makefile existe"

[ -f "docker-compose.yml" ]
check $? "docker-compose.yml existe"

echo ""
echo "🔧 Verificando herramientas:"
echo "─────────────────────────────────────────"

# Verificar Docker
command -v docker >/dev/null 2>&1
check $? "Docker está instalado"

# Verificar Docker Compose
command -v docker-compose >/dev/null 2>&1
check_warn $? "Docker Compose está instalado"

# Verificar Node (si estamos en local)
command -v node >/dev/null 2>&1
check_warn $? "Node.js está instalado (local)"

if command -v node >/dev/null 2>&1; then
    NODE_VERSION=$(node --version)
    echo "  → Versión: $NODE_VERSION"
fi

# Verificar Make
command -v make >/dev/null 2>&1
check_warn $? "Make está instalado"

echo ""
echo "🔐 Verificando SSH:"
echo "─────────────────────────────────────────"

[ -d "$HOME/.ssh" ]
check $? "Directorio ~/.ssh existe"

[ -f "$HOME/.ssh/id_rsa" ] || [ -f "$HOME/.ssh/id_ed25519" ]
check_warn $? "Claves SSH encontradas"

if [ -d "$HOME/.ssh" ]; then
    SSH_PERMS=$(stat -c "%a" "$HOME/.ssh" 2>/dev/null || stat -f "%A" "$HOME/.ssh" 2>/dev/null)
    if [ "$SSH_PERMS" = "700" ]; then
        echo -e "${GREEN}✓${NC} Permisos de ~/.ssh son correctos (700)"
    else
        echo -e "${YELLOW}⚠${NC} Permisos de ~/.ssh: $SSH_PERMS (se recomienda 700)"
        ((warnings++))
    fi
fi

echo ""
echo "👤 Información del usuario:"
echo "─────────────────────────────────────────"
echo "USER: $USER"
echo "UID: $(id -u)"
echo "GID: $(id -g)"
echo "HOME: $HOME"

echo ""
echo "📁 Estructura del proyecto:"
echo "─────────────────────────────────────────"
tree -L 2 -a -I 'node_modules|.git' . 2>/dev/null || find . -maxdepth 2 -not -path '*/\.*' -not -path '*/node_modules/*' | head -20

echo ""
echo "═══════════════════════════════════════════"
echo "📊 RESUMEN:"
echo "═══════════════════════════════════════════"

if [ $errors -eq 0 ] && [ $warnings -eq 0 ]; then
    echo -e "${GREEN}✅ Todo está configurado correctamente!${NC}"
    echo ""
    echo "🚀 Próximos pasos:"
    echo "  1. Abrir VSCode: code ."
    echo "  2. Reabrir en contenedor: F1 -> 'Reopen in Container'"
    echo "  3. Inicializar Vite: ./init-vite.sh"
    echo "  4. Iniciar desarrollo: npm run dev"
elif [ $errors -eq 0 ]; then
    echo -e "${YELLOW}⚠️  Configuración completa con $warnings advertencias${NC}"
    echo "El proyecto debería funcionar, pero revisa las advertencias arriba."
else
    echo -e "${RED}❌ Encontrados $errors errores y $warnings advertencias${NC}"
    echo "Por favor, corrige los errores antes de continuar."
    exit 1
fi

echo ""
echo "📚 Para más información, consulta:"
echo "  • QUICK_START.md - Guía de inicio rápido"
echo "  • README.md - Documentación principal"
echo "  • .devcontainer/README.md - Documentación del DevContainer"


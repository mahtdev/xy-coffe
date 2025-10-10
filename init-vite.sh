#!/bin/bash

# Script para inicializar el proyecto Vite con TypeScript
# Ejecutar este script dentro del DevContainer o en tu sistema local

echo "🚀 Inicializando proyecto Vite con TypeScript..."
echo ""

# Verificar si ya existe un package.json
if [ -f "package.json" ]; then
    echo "⚠️  Ya existe un package.json en este directorio."
    echo "¿Deseas continuar? Esto puede sobrescribir archivos existentes."
    read -p "Continuar? (s/n): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Ss]$ ]]; then
        echo "❌ Cancelado."
        exit 1
    fi
fi

# Crear proyecto Vite con plantilla TypeScript
echo "📦 Creando proyecto con Vite..."
npm create vite@latest . -- --template vanilla-ts

echo ""
echo "📥 Instalando dependencias..."
npm install

echo ""
echo "🔧 Instalando herramientas de desarrollo adicionales..."
npm install -D \
    eslint \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser \
    prettier \
    eslint-config-prettier \
    eslint-plugin-prettier \
    vitest \
    @vitest/ui \
    happy-dom

echo ""
echo "⚙️  Configurando ESLint..."
cat > .eslintrc.json << 'EOF'
{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "prettier/prettier": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
EOF

echo ""
echo "⚙️  Actualizando package.json con scripts adicionales..."

# Usar node para modificar package.json de forma segura
node << 'NODESCRIPT'
const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

packageJson.scripts = {
  ...packageJson.scripts,
  "lint": "eslint . --ext .ts,.tsx --report-unused-disable-directives --max-warnings 0",
  "lint:fix": "eslint . --ext .ts,.tsx --fix",
  "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
  "format:check": "prettier --check \"src/**/*.{ts,tsx,css}\"",
  "test": "vitest",
  "test:ui": "vitest --ui",
  "type-check": "tsc --noEmit"
};

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2) + '\n');
console.log('✅ Scripts agregados a package.json');
NODESCRIPT

echo ""
echo "📝 Creando archivo de configuración de Vitest..."
cat > vitest.config.ts << 'EOF'
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
  },
});
EOF

echo ""
echo "✅ ¡Proyecto inicializado correctamente!"
echo ""
echo "📚 Comandos disponibles:"
echo "  npm run dev          - Iniciar servidor de desarrollo"
echo "  npm run build        - Construir para producción"
echo "  npm run preview      - Vista previa de producción"
echo "  npm run lint         - Ejecutar ESLint"
echo "  npm run lint:fix     - Corregir problemas de ESLint"
echo "  npm run format       - Formatear código con Prettier"
echo "  npm run test         - Ejecutar tests con Vitest"
echo "  npm run test:ui      - Ejecutar tests con interfaz UI"
echo "  npm run type-check   - Verificar tipos de TypeScript"
echo ""
echo "🎉 ¡Listo para comenzar a desarrollar!"
echo "Ejecuta: npm run dev"


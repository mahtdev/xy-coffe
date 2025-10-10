# XY Coffee Project

Proyecto Vite + TypeScript con DevContainer configurado.

## 🚀 Inicio Rápido

### Opción 1: Usar DevContainer (Recomendado)

1. **Instalar requisitos previos:**

   - Docker
   - Visual Studio Code
   - Extensión "Dev Containers" de VSCode

2. **Abrir en DevContainer:**

   - Abre VSCode: `code .`
   - Presiona `Ctrl+Shift+P`
   - Selecciona "Dev Containers: Reopen in Container"
   - Espera a que se construya el contenedor (primera vez: ~5-10 minutos)

3. **Inicializar el proyecto:**

   ```bash
   # Dentro del contenedor
   ./init-vite.sh
   ```

4. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

### Opción 2: Desarrollo Local

1. **Instalar Node.js 20 o superior**

2. **Inicializar proyecto:**

   ```bash
   ./init-vite.sh
   ```

3. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

## 📁 Estructura del Proyecto

```
xy.coffe/
├── .devcontainer/          # Configuración del DevContainer
│   ├── devcontainer.json   # Configuración principal
│   └── README.md           # Documentación del DevContainer
├── .vscode/                # Configuración de VSCode
│   ├── settings.json       # Configuración del editor
│   └── extensions.json     # Extensiones recomendadas
├── src/                    # Código fuente (se crea con init-vite.sh)
├── check-setup.sh          # Verificar configuración
├── init-vite.sh            # Inicializar proyecto Vite
├── Makefile                # Comandos simplificados
├── .editorconfig           # Configuración del editor
├── .gitignore              # Archivos ignorados por Git
├── .prettierrc             # Configuración de Prettier
├── QUICK_START.md          # Guía de inicio rápido
├── SETUP_COMPLETE.md       # Documentación de configuración
└── README.md               # Este archivo
```

## 🛠️ Scripts Disponibles

Una vez inicializado el proyecto Vite con `./init-vite.sh`, tendrás disponibles:

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Vista previa del build de producción
- `npm run lint` - Ejecuta el linter
- `npm run lint:fix` - Corrige problemas automáticamente
- `npm run format` - Formatea el código con Prettier
- `npm run test` - Ejecuta tests con Vitest
- `npm run type-check` - Verifica tipos de TypeScript

### Comandos con Make

También puedes usar el `Makefile` para comandos simplificados:

```bash
make help       # Ver todos los comandos disponibles
make check      # Verificar configuración
make init       # Inicializar proyecto Vite
make install    # Instalar dependencias
make dev        # Iniciar servidor de desarrollo
make build      # Construir para producción
make lint       # Ejecutar linter
make format     # Formatear código
make test       # Ejecutar tests
make clean      # Limpiar archivos generados
```

## 🔐 Configuración SSH

El devcontainer monta automáticamente tu directorio `~/.ssh` en modo lectura, permitiendo:

- ✅ Clonar repositorios privados
- ✅ Push/Pull sin configuración adicional
- ✅ Mantener tus claves seguras (solo lectura)
- ✅ Compartible con otros contenedores (network: host)

## ✨ Características del DevContainer

- ✅ **Usuario no-root** - Usa el usuario `node` predeterminado
- ✅ **Node.js 20 LTS** - Preinstalado con npm, pnpm y yarn
- ✅ **TypeScript y Vite** - Configurados automáticamente
- ✅ **Git y GitHub CLI** - Para control de versiones
- ✅ **Zsh + Oh My Zsh** - Shell mejorado
- ✅ **30+ Extensiones VSCode** - ESLint, Prettier, GitLens y más
- ✅ **SSH Keys montadas** - En modo solo lectura
- ✅ **Hot Reload** - Recarga automática en desarrollo

## 📚 Más Información

- [Guía de Inicio Rápido](QUICK_START.md) - Pasos detallados para comenzar
- [Configuración Completa](SETUP_COMPLETE.md) - Detalles de la configuración
- [Documentación del DevContainer](.devcontainer/README.md) - Información técnica
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de TypeScript](https://www.typescriptlang.org/)

## 🐛 Solución de Problemas

### El DevContainer no inicia

```bash
# Limpiar cachés de Docker
docker system prune -af

# En VSCode: F1 → "Dev Containers: Rebuild Container"
```

### Verificar configuración

```bash
./check-setup.sh
```

## 🤝 Contribuir

Este proyecto usa:

- **Prettier** para formateo de código
- **ESLint** para linting
- **EditorConfig** para consistencia entre editores
- **TypeScript** para tipado estático

El formateo se aplica automáticamente al guardar cuando usas el DevContainer.

## 📝 Licencia

[Especificar licencia]

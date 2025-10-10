# DevContainer para Vite + TypeScript

Este devcontainer está configurado para desarrollo con Vite y TypeScript, usando la imagen oficial de Microsoft para DevContainers.

## Características

### ✨ Usuario No-Root

- El contenedor usa el usuario `node` (no-root) por defecto
- Configurado automáticamente por las features de DevContainers
- No se ejecuta como root para mayor seguridad

###🔐 SSH Keys Montadas

- Tu directorio `~/.ssh` se monta en modo **solo lectura**
- Puedes hacer push/pull a Git sin problemas
- Las claves están protegidas y no pueden ser modificadas desde el contenedor

### 🛠️ Herramientas Instaladas

- Node.js 20 (LTS)
- npm, pnpm, yarn
- TypeScript
- Vite
- ts-node
- Git
- GitHub CLI
- Zsh + Oh My Zsh

### 📦 Extensiones de VSCode Incluidas

- **Desarrollo TypeScript/JavaScript**: ESLint, Prettier, IntelliCode
- **Git**: GitLens, Git Graph
- **Productividad**: Error Lens, Auto Import, Path Intellisense
- **Estilos**: Tailwind CSS, Stylelint
- **Testing**: Vitest
- **Y muchas más...**

## 🚀 Uso

### Primera vez

1. Asegúrate de tener instalado:

   - Docker
   - Visual Studio Code
   - Extensión "Dev Containers" de VSCode

2. Abre el proyecto en VSCode:

   ```bash
   code /media/mahtdev/develop/projects/xy.coffe
   ```

3. VSCode detectará el devcontainer y preguntará si quieres reabrir en contenedor

   - Click en "Reopen in Container"
   - O usa `Ctrl+Shift+P` y busca "Dev Containers: Reopen in Container"

4. Espera a que se construya el contenedor (primera vez: ~5-10 minutos)

5. Una vez dentro, inicializa el proyecto Vite:

   ```bash
   ./init-vite.sh
   ```

6. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Acceso a SSH

Las claves SSH se montan automáticamente desde `~/.ssh` en modo lectura.
Puedes usar Git normalmente:

```bash
git clone git@github.com:usuario/repo.git
git push
git pull
```

### Puertos

- **5173**: Servidor de desarrollo de Vite
- **4173**: Vista previa de producción de Vite

Estos puertos se reenvían automáticamente a tu máquina host.

## 🔧 Personalización

### Agregar más extensiones

Edita `.devcontainer/devcontainer.json` y agrega extensiones en la sección `customizations.vscode.extensions`:

```json
"customizations": {
  "vscode": {
    "extensions": [
      "publisher.extension-name"
    ]
  }
}
```

### Cambiar versión de Node

Edita `.devcontainer/devcontainer.json` y cambia la imagen base:

```json
"image": "mcr.microsoft.com/devcontainers/typescript-node:1-18-bookworm"
```

Versiones disponibles: 18, 20, 22

## 📝 Notas

- El contenedor usa `--network=host` para compartir la red con otros contenedores
- Se instala automáticamente pnpm, typescript y vite después de crear el contenedor
- El usuario `node` tiene privilegios sudo sin contraseña
- Zsh está configurado como shell por defecto con Oh My Zsh

## 🐛 Solución de Problemas

### Problemas al construir el contenedor

Si encuentras errores al construir:

```bash
# Limpiar cachés de Docker
docker system prune -af

# Reintentar en VSCode
# Ctrl+Shift+P → "Dev Containers: Rebuild Container"
```

### SSH no funciona

Verifica que `~/.ssh` existe y contiene tus claves:

```bash
ls -la ~/.ssh
```

Verifica permisos (en el host):

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_rsa  # o id_ed25519
chmod 644 ~/.ssh/id_rsa.pub
```

### El contenedor no inicia

Verifica los logs:

- `Ctrl+Shift+P` → "Dev Containers: Show Container Log"

### Puerto 5173 ya está en uso

Cambia el puerto en `vite.config.ts`:

```typescript
export default defineConfig({
  server: {
    port: 3000, // Cambiar a otro puerto
  },
});
```

## 🎯 Diferencias con la configuración anterior

Esta configuración simplificada:

- ✅ **No requiere Dockerfile** - Todo se maneja con features
- ✅ **Usa imágenes oficiales de Microsoft** - Mejor mantenidas y actualizadas
- ✅ **Sin conflictos de usuario** - El usuario `node` ya existe correctamente
- ✅ **Construcción más rápida** - Menos capas que construir
- ✅ **Más simple de mantener** - Menos archivos que gestionar

## 📚 Más información

- [Documentación de DevContainers](https://containers.dev/)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de TypeScript](https://www.typescriptlang.org/)

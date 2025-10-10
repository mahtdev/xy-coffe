# 🚀 Guía de Inicio Rápido - XY Coffee

## Opción 1: VSCode DevContainer (Recomendado) ⭐

### Paso 1: Abrir en DevContainer

1. Abre VSCode: `code .`
2. VSCode detectará la configuración del DevContainer
3. Haz clic en "Reopen in Container" en la notificación
   - O presiona `F1` y busca: "Dev Containers: Reopen in Container"
4. Espera a que se construya el contenedor (primera vez: ~5-10 minutos)

### Paso 2: Inicializar el proyecto Vite

```bash
# Dentro del contenedor (terminal de VSCode)
./init-vite.sh
```

### Paso 3: Iniciar desarrollo

```bash
npm run dev
```

¡Listo! Abre tu navegador en `http://localhost:5173`

---

## Opción 2: Desarrollo Local 💻

### Requisitos

- Node.js 20 o superior
- npm, pnpm o yarn

### Pasos

```bash
# Inicializar proyecto
./init-vite.sh

# Iniciar desarrollo
npm run dev
```

---

## 📋 Comandos Útiles

### Con Make (facilita la vida)

```bash
make help              # Ver todos los comandos disponibles
make check             # Verificar configuración
make init              # Inicializar proyecto Vite
make install           # Instalar dependencias
make dev               # Iniciar servidor de desarrollo
make build             # Construir para producción
make clean             # Limpiar archivos generados
make lint              # Ejecutar linter
make format            # Formatear código
make test              # Ejecutar tests
```

### Con npm

```bash
npm run dev            # Servidor de desarrollo
npm run build          # Build de producción
npm run preview        # Vista previa del build
npm run lint           # Ejecutar linter
npm run lint:fix       # Corregir problemas automáticamente
npm run format         # Formatear código
npm run test           # Ejecutar tests
npm run test:ui        # Tests con interfaz UI
npm run type-check     # Verificar tipos TypeScript
```

---

## 🔐 SSH y Git

El devcontainer monta automáticamente tu directorio `~/.ssh` en **modo solo lectura**.

### Verificar SSH

```bash
# Dentro del contenedor
ls -la ~/.ssh

# Probar conexión con GitHub
ssh -T git@github.com
```

### Usar Git normalmente

```bash
git clone git@github.com:usuario/repo.git
git add .
git commit -m "mensaje"
git push
```

---

## 🐛 Solución de Problemas

### El DevContainer no inicia

```bash
# Limpiar cachés de Docker
docker system prune -af

# Reconstruir el contenedor
# En VSCode: F1 -> "Dev Containers: Rebuild Container"
```

### Verificar configuración

```bash
./check-setup.sh
```

### SSH no funciona

```bash
# Verificar que existe el directorio
ls -la ~/.ssh

# Verificar permisos (en el host)
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_rsa  # o id_ed25519
chmod 644 ~/.ssh/id_rsa.pub
```

### Puerto 5173 ya está en uso

```bash
# Cambiar el puerto en vite.config.ts
export default defineConfig({
  server: {
    port: 3000  // Cambiar a otro puerto
  }
})
```

### Error: "Cannot find module"

```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Recursos

- [Documentación del DevContainer](.devcontainer/README.md)
- [README principal](README.md)
- [Configuración completa](SETUP_COMPLETE.md)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de TypeScript](https://www.typescriptlang.org/)

---

## ✨ Características del DevContainer

✅ Usuario no-root (usa el usuario `node` predeterminado)  
✅ SSH keys montadas en modo lectura  
✅ Node.js 20 preinstalado  
✅ Git y GitHub CLI  
✅ 30+ extensiones de VSCode configuradas  
✅ ESLint, Prettier, TypeScript configurados  
✅ Hot reload automático  
✅ Network mode host (compartir con otros contenedores)  
✅ Zsh + Oh My Zsh configurado

---

## 🎉 Configuración Simplificada

Esta versión del DevContainer:

- ✅ **No requiere configuración manual** - Todo automático
- ✅ **Usa imagen oficial de Microsoft** - Más confiable y rápida
- ✅ **Sin conflictos de permisos** - Usuario configurado correctamente
- ✅ **Construcción más rápida** - Mejor uso de caché de Docker
- ✅ **Más fácil de mantener** - Configuración mínima

**¿Necesitas ayuda?** Revisa la documentación completa en [.devcontainer/README.md](.devcontainer/README.md)

# ☕ XY.COFFE - Café Artesanal

Una página web moderna y responsive para una cafetería artesanal, desarrollada con Vite y TypeScript. Inspirada en el diseño de Starbucks con una paleta de colores azul rey distintiva.

![XY Coffee](public/logo.svg)

## 🎨 Características

### Diseño y UX
- ✨ **Diseño moderno y elegante** inspirado en Starbucks
- 🎨 **Paleta de colores azul rey** (#1E3A8A) como color principal
- 📱 **Completamente responsive** - optimizado para móviles, tablets y escritorio
- 🌊 **Animaciones suaves** y transiciones fluidas
- ♿ **Accesible** - soporte para modo de alto contraste y movimiento reducido
- 🌓 **Modo oscuro** automático según las preferencias del sistema

### Secciones

1. **Hero Section**
   - Banner principal con gradiente azul rey
   - Animaciones de fade-in
   - Indicador de scroll animado
   - Call-to-action destacados

2. **Featured Cards**
   - Tres características principales de la cafetería
   - Iconos y descripciones
   - Efectos hover elegantes

3. **Menú**
   - Grid de productos con imágenes
   - Filtros por categoría (Todos, Calientes, Fríos, Especiales)
   - Animaciones de transición
   - Precios destacados

4. **Sobre Nosotros**
   - Historia de la cafetería
   - Estadísticas destacadas
   - Diseño en dos columnas

5. **Ubicación**
   - Información de contacto
   - Horarios de atención
   - Mapa placeholder interactivo

6. **Contacto**
   - Formulario de suscripción
   - Newsletter

7. **Footer**
   - Enlaces rápidos
   - Redes sociales
   - Newsletter adicional
   - Multi-columna responsive

### Funcionalidades JavaScript/TypeScript

- 🧭 **Navegación sticky** con efecto de scroll (hide/show)
- 📱 **Menú hamburguesa** para móviles
- 🔗 **Smooth scrolling** para enlaces internos
- 🎯 **Intersection Observer** para animaciones on-scroll
- 🎪 **Parallax effect** en el hero
- 🔄 **Sistema de filtros** para el menú
- 📝 **Formulario funcional** con validación

## 🚀 Tecnologías

- **Vite 7.1.7** - Build tool y dev server
- **TypeScript 5.9.3** - Type safety y mejor experiencia de desarrollo
- **CSS3** - Variables CSS, Grid, Flexbox, animaciones
- **HTML5 Semantic** - Estructura semántica y accesible
- **Google Fonts** - Tipografía Poppins

## 📦 Instalación y Uso

### Prerequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/xy.coffe.git

# Navegar al directorio
cd xy.coffe

# Instalar dependencias
npm install
```

### Comandos Disponibles

```bash
# Desarrollo - inicia el servidor de desarrollo
npm run dev

# Build - compila para producción
npm run build

# Preview - previsualiza el build de producción
npm run preview
```

El servidor de desarrollo se iniciará en `http://localhost:5173`

## 🚀 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

### Configuración inicial

1. **Activa GitHub Pages en tu repositorio:**
   - Ve a Settings → Pages en tu repositorio de GitHub
   - En "Source", selecciona "GitHub Actions"
   - Guarda los cambios

2. **Haz push a la rama principal:**
   ```bash
   git add .
   git commit -m "Configurar GitHub Pages"
   git push origin main
   ```

3. **Espera a que se complete el workflow:**
   - Ve a la pestaña "Actions" en tu repositorio
   - Verás un workflow llamado "Deploy to GitHub Pages"
   - Espera a que termine (generalmente toma 1-2 minutos)

4. **Accede a tu sitio:**
   - Una vez completado, tu sitio estará disponible en:
   - `https://tusuario.github.io/xy.coffe`
   - O si tu repositorio se llama diferente: `https://tusuario.github.io/nombre-del-repo`

### Actualizaciones automáticas

Cada vez que hagas push a la rama `main` o `master`, el sitio se actualizará automáticamente.

### Build manual

Si prefieres hacer el build manualmente:

```bash
# Hacer build
npm run build

# Los archivos estarán en la carpeta dist/
# Puedes subirlos a la rama gh-pages manualmente
```

## 🎨 Personalización

### Colores

Los colores se definen en variables CSS en `src/style.css`:

```css
:root {
  --primary-color: #1E3A8A;      /* Azul Rey */
  --primary-dark: #1E40AF;        /* Azul Rey Oscuro */
  --primary-light: #3B82F6;       /* Azul Rey Claro */
  --secondary-color: #60A5FA;     /* Azul Secundario */
  --accent-color: #DBEAFE;        /* Azul Acento */
}
```

### Logo

El logo SVG se encuentra en `public/logo.svg` y se puede editar para cambiar:
- Colores
- Animaciones del vapor
- Texto "XY"
- Forma de la taza

### Contenido

Para modificar el contenido:
- **Texto**: Edita `src/main.ts` (líneas de HTML template)
- **Productos del menú**: Modifica la sección `.menu-grid` en `src/main.ts`
- **Estilos**: Edita `src/style.css`

## 📱 Responsive Breakpoints

- **Desktop**: > 768px (diseño completo)
- **Tablet**: 481px - 768px (adaptado)
- **Mobile**: ≤ 480px (menú hamburguesa, columnas simples)

## ⚡ Performance

- Carga rápida con Vite
- CSS optimizado con variables
- Imágenes placeholder ligeras
- Lazy loading con Intersection Observer
- Animaciones con CSS transforms (GPU accelerated)

## 🌐 Soporte de Navegadores

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📝 Estructura del Proyecto

```
xy.coffe/
├── public/
│   ├── logo.svg              # Logo principal
│   └── vite.svg              # Logo de Vite
├── src/
│   ├── main.ts               # JavaScript principal + HTML
│   └── style.css             # Estilos CSS
├── index.html                # HTML base
├── package.json              # Dependencias
├── tsconfig.json             # Configuración TypeScript
└── README.md                 # Este archivo
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: amazing feature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autor

Desarrollado con ❤️ y ☕ para XY Coffee

## 🎯 Próximas Mejoras

- [ ] Integración con sistema de pedidos online
- [ ] Galería de fotos real
- [ ] Integración con Google Maps
- [ ] Sistema de reviews/testimonios
- [ ] Blog de café
- [ ] Programa de lealtad
- [ ] Multi-idioma (i18n)
- [ ] PWA (Progressive Web App)
- [ ] Backend con Node.js/Express
- [ ] Base de datos para productos

## 📞 Contacto

- Website: [xy.coffe](https://xy.coffe)
- Email: info@xy.coffe
- Instagram: [@xycoffe](https://instagram.com/xycoffe)

---

**¡Disfruta tu café! ☕**

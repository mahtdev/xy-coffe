# 🎨 Guía de Personalización - XY.COFFE

Esta guía te ayudará a personalizar fácilmente la página web de XY Coffee para adaptarla a tus necesidades específicas.

## 📋 Tabla de Contenidos

1. [Cambiar Colores](#cambiar-colores)
2. [Modificar el Logo](#modificar-el-logo)
3. [Actualizar Contenido de Texto](#actualizar-contenido-de-texto)
4. [Agregar/Modificar Productos del Menú](#agregar-modificar-productos-del-menú)
5. [Cambiar Información de Contacto](#cambiar-información-de-contacto)
6. [Personalizar Animaciones](#personalizar-animaciones)
7. [Agregar Imágenes Reales](#agregar-imágenes-reales)

---

## 🎨 Cambiar Colores

### Paleta Principal

Edita el archivo `src/style.css` y modifica las variables CSS al inicio del archivo:

```css
:root {
  /* Cambia estos valores para tu paleta de colores */
  --primary-color: #1E3A8A;      /* Color principal */
  --primary-dark: #1E40AF;        /* Variante oscura */
  --primary-light: #3B82F6;       /* Variante clara */
  --secondary-color: #60A5FA;     /* Color secundario */
  --accent-color: #DBEAFE;        /* Color de acento */
}
```

### Ejemplos de Paletas Alternativas

**Verde Oscuro (Starbucks style):**
```css
--primary-color: #00704A;
--primary-dark: #005236;
--primary-light: #008C5E;
--secondary-color: #00A862;
--accent-color: #D4E9E2;
```

**Marrón Café:**
```css
--primary-color: #6F4E37;
--primary-dark: #5A3D2B;
--primary-light: #8B6F47;
--secondary-color: #A0826D;
--accent-color: #E8DDD3;
```

**Naranja Vibrante:**
```css
--primary-color: #D97706;
--primary-dark: #B45309;
--primary-light: #F59E0B;
--secondary-color: #FCA5A5;
--accent-color: #FED7AA;
```

---

## 🖼️ Modificar el Logo

### Cambiar Colores del Logo

Edita `public/logo.svg` y busca los valores de fill:

```svg
<!-- Cambiar color del círculo principal -->
<circle cx="50" cy="50" r="48" fill="#1E3A8A"/>

<!-- Cambiar color de la taza -->
<path d="..." fill="url(#cupGradient)"/>
```

### Reemplazar con Logo Propio

1. Crea tu logo en formato SVG (recomendado) o PNG
2. Colócalo en la carpeta `public/`
3. Actualiza la referencia en `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="/tu-logo.svg" />
```

4. Actualiza la referencia en `src/main.ts` (busca la sección `nav-logo`)

---

## ✍️ Actualizar Contenido de Texto

Todo el contenido de texto se encuentra en `src/main.ts`. Aquí están las secciones principales:

### Hero Section (Banner Principal)

```typescript
<h1 class="hero-title animate-fade-in">Despierta tus Sentidos</h1>
<p class="hero-subtitle animate-fade-in-delay">El mejor café artesanal en cada taza</p>
```

### Características Destacadas

```typescript
<div class="featured-card">
  <div class="featured-icon">☕</div>
  <h3>Café Premium</h3>
  <p>Granos seleccionados de las mejores regiones cafeteras del mundo</p>
</div>
```

Cambia los emojis, títulos y descripciones según tus necesidades.

### Sección "Nosotros"

Busca la sección con `id="nosotros"` y modifica:

```typescript
<h2 class="section-title">Nuestra Historia</h2>
<p class="about-text">
  Desde 2020, XY Coffee ha sido el refugio perfecto...
</p>
```

---

## 🍽️ Agregar/Modificar Productos del Menú

### Agregar un Nuevo Producto

En `src/main.ts`, busca `.menu-grid` y agrega:

```typescript
<div class="menu-item" data-category="caliente">
  <div class="menu-item-image">
    <div class="menu-image-placeholder" style="background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);">
      <span class="menu-emoji">☕</span>
    </div>
  </div>
  <div class="menu-item-content">
    <h3>Nombre del Producto</h3>
    <p>Descripción del producto</p>
    <span class="menu-price">$5.00</span>
  </div>
</div>
```

### Categorías Disponibles

- `data-category="caliente"` - Bebidas calientes
- `data-category="frio"` - Bebidas frías
- `data-category="especial"` - Bebidas especiales

### Cambiar Emojis de Productos

Emojis recomendados:
- ☕ - Café caliente
- 🥛 - Leche/Latte
- 🧊 - Bebidas frías
- ❄️ - Frappé
- 🍃 - Té/Matcha
- 🌟 - Especiales
- 🍫 - Chocolate
- 🥤 - Smoothies

### Modificar Gradientes de Fondo

Usa generadores de gradientes como [cssgradient.io](https://cssgradient.io/):

```css
background: linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%);
```

---

## 📞 Cambiar Información de Contacto

### Ubicación

En `src/main.ts`, busca `id="ubicacion"`:

```typescript
<div class="location-card">
  <div class="location-icon">📍</div>
  <h3>Dirección</h3>
  <p>Tu Dirección Aquí<br>Ciudad, País</p>
</div>
```

### Horarios

```typescript
<div class="location-card">
  <div class="location-icon">🕐</div>
  <h3>Horario</h3>
  <p>Lunes a Viernes: 7:00 AM - 9:00 PM<br>
     Sábados: 8:00 AM - 10:00 PM<br>
     Domingos: 9:00 AM - 8:00 PM</p>
</div>
```

### Teléfono y Email

```typescript
<div class="location-card">
  <div class="location-icon">📞</div>
  <h3>Contacto</h3>
  <p>Tel: +1 (555) 123-4567<br>
     Email: tu@email.com<br>
     Instagram: @tuinstagram</p>
</div>
```

### Redes Sociales en Footer

Busca `.social-links` y modifica los enlaces:

```typescript
<div class="social-links">
  <a href="https://facebook.com/tupagina" class="social-link">📘</a>
  <a href="https://instagram.com/tupagina" class="social-link">📷</a>
  <a href="https://twitter.com/tupagina" class="social-link">🐦</a>
  <a href="https://linkedin.com/company/tupagina" class="social-link">💼</a>
</div>
```

---

## 🎬 Personalizar Animaciones

### Velocidad de Animaciones

En `src/style.css`, modifica las variables de transición:

```css
:root {
  --transition-fast: 0.2s ease;    /* Rápida */
  --transition-normal: 0.3s ease;  /* Normal */
  --transition-slow: 0.5s ease;    /* Lenta */
}
```

### Desactivar Parallax

En `src/main.ts`, comenta o elimina:

```typescript
// window.addEventListener('scroll', () => {
//   const scrolled = window.pageYOffset
//   const hero = document.querySelector('.hero') as HTMLElement
//   if (hero) {
//     hero.style.transform = `translateY(${scrolled * 0.5}px)`
//   }
// })
```

### Modificar Delays de Fade-In

En `src/style.css`:

```css
.animate-fade-in-delay {
  animation: fadeIn 1s ease 0.3s forwards; /* Cambia 0.3s */
}

.animate-fade-in-delay-2 {
  animation: fadeIn 1s ease 0.6s forwards; /* Cambia 0.6s */
}
```

---

## 📸 Agregar Imágenes Reales

### Paso 1: Preparar Imágenes

1. Optimiza tus imágenes (usa [TinyPNG](https://tinypng.com/))
2. Tamaños recomendados:
   - Hero: 1920x1080px
   - Productos: 600x600px
   - Sección About: 800x1000px

### Paso 2: Agregar a la Carpeta Public

```bash
public/
├── images/
│   ├── hero-bg.jpg
│   ├── products/
│   │   ├── espresso.jpg
│   │   ├── cappuccino.jpg
│   │   └── ...
│   └── about-image.jpg
```

### Paso 3: Actualizar el Hero

En `src/style.css`, modifica `.hero`:

```css
.hero {
  background: linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0.7)),
              url('/images/hero-bg.jpg') center/cover no-repeat;
}
```

### Paso 4: Actualizar Productos

En `src/main.ts`, reemplaza `.menu-image-placeholder` con:

```typescript
<div class="menu-item-image">
  <img src="/images/products/espresso.jpg" alt="Espresso" />
</div>
```

Y agrega en `src/style.css`:

```css
.menu-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.menu-item:hover img {
  transform: scale(1.1);
}
```

---

## 🔧 Integración con Google Maps

### Paso 1: Obtener API Key

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un proyecto
3. Habilita "Maps JavaScript API"
4. Crea una API Key

### Paso 2: Agregar el Script

En `index.html`:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY"></script>
```

### Paso 3: Reemplazar el Placeholder

En `src/main.ts`, reemplaza `.map-placeholder` con:

```typescript
<div id="map" style="width: 100%; height: 100%; min-height: 400px;"></div>
```

### Paso 4: Inicializar el Mapa

En `src/main.ts`, agrega al final:

```typescript
// Google Maps
const map = new google.maps.Map(document.getElementById('map')!, {
  center: { lat: -34.397, lng: 150.644 }, // Tus coordenadas
  zoom: 15,
  styles: [ /* Tu estilo personalizado */ ]
})

new google.maps.Marker({
  position: { lat: -34.397, lng: 150.644 },
  map: map,
  title: 'XY Coffee'
})
```

---

## 📱 Personalizar Breakpoints Responsive

En `src/style.css`, modifica los media queries:

```css
/* Tablet */
@media (max-width: 768px) {
  /* Estilos para tablet */
}

/* Mobile */
@media (max-width: 480px) {
  /* Estilos para móvil */
}
```

---

## 🌐 Cambiar Idioma

Para cambiar el idioma de la página:

1. Modifica `index.html`:
```html
<html lang="en"> <!-- Cambia "es" por "en", "fr", etc. -->
```

2. Traduce todo el contenido en `src/main.ts`

---

## 💡 Tips Adicionales

### Performance

- Usa imágenes WebP para mejor compresión
- Implementa lazy loading: `<img loading="lazy" />`
- Minimiza el CSS y JS para producción

### SEO

- Agrega meta tags en `index.html`
- Usa títulos descriptivos (H1, H2, etc.)
- Agrega alt text a todas las imágenes

### Accesibilidad

- Mantén buen contraste de colores
- Usa etiquetas semánticas
- Asegúrate que sea navegable por teclado

---

## 🆘 Solución de Problemas

### El servidor no inicia

```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Los cambios no se reflejan

- Refresca el navegador (Ctrl+F5)
- Limpia el cache del navegador
- Reinicia el servidor de desarrollo

### Errores de TypeScript

```bash
# Verifica la configuración
npx tsc --noEmit
```

---

## 📚 Recursos Útiles

- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google Fonts](https://fonts.google.com/)
- [Coolors (Paletas)](https://coolors.co/)
- [CSS Gradient Generator](https://cssgradient.io/)

---

¿Necesitas más ayuda? Consulta el archivo `README.md` o contacta al desarrollador.

**¡Feliz personalización! 🎨☕**



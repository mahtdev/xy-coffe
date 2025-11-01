# Feature-Based Architecture

Este proyecto ha sido refactorizado para seguir una arquitectura basada en características (feature-based), lo que mejora la mantenibilidad, escalabilidad y organización del código.

## Estructura del Proyecto

```
src/
├── features/                    # Módulos de características
│   ├── navigation/             # Barra de navegación
│   │   ├── navigation.ts       # Lógica de navegación
│   │   ├── navigation.html.ts  # Plantilla HTML
│   │   ├── navigation.css      # Estilos específicos
│   │   └── index.ts           # Exportaciones
│   ├── hero/                  # Sección principal
│   │   ├── hero.ts
│   │   ├── hero.html.ts
│   │   ├── hero.css
│   │   └── index.ts
│   ├── menu/                  # Menú de productos
│   │   ├── menu.ts
│   │   ├── menu.html.ts
│   │   ├── menu.css
│   │   └── index.ts
│   ├── about/                 # Sección "Nosotros"
│   │   ├── about.ts
│   │   ├── about.html.ts
│   │   ├── about.css
│   │   └── index.ts
│   ├── location/              # Sección de ubicación
│   │   ├── location.ts
│   │   ├── location.html.ts
│   │   ├── location.css
│   │   └── index.ts
│   ├── contact/               # Formulario de contacto
│   │   ├── contact.ts
│   │   ├── contact.html.ts
│   │   ├── contact.css
│   │   └── index.ts
│   └── footer/                # Pie de página
│       ├── footer.ts
│       ├── footer.html.ts
│       ├── footer.css
│       └── index.ts
├── shared/                    # Código compartido
│   ├── types/                 # Definiciones de tipos
│   │   └── index.ts
│   ├── utils/                 # Utilidades comunes
│   │   └── index.ts
│   └── styles/                # Estilos base
│       └── base.css
├── app.ts                     # Aplicación principal
└── main.ts                    # Punto de entrada
```

## Beneficios de la Arquitectura Feature-Based

### 1. **Separación de Responsabilidades**

- Cada feature maneja su propia lógica, estilos y plantillas
- Fácil localización de código relacionado
- Reducción de acoplamiento entre módulos

### 2. **Mantenibilidad**

- Cambios en una feature no afectan otras
- Código más fácil de entender y modificar
- Debugging más eficiente

### 3. **Escalabilidad**

- Fácil agregar nuevas features
- Reutilización de código compartido
- Estructura clara para equipos de desarrollo

### 4. **Organización**

- Estructura predecible y consistente
- Fácil navegación en el código
- Separación clara entre lógica, presentación y estilos

## Patrones Utilizados

### 1. **Separación de Concerns**

- **Lógica**: Archivos `.ts` con clases y funciones
- **Presentación**: Archivos `.html.ts` con plantillas
- **Estilos**: Archivos `.css` específicos por feature

### 2. **Composición**

- La clase `App` orquesta todas las features
- Cada feature es independiente y autocontenida
- Uso de inyección de dependencias implícita

### 3. **Tipado Fuerte**

- Interfaces TypeScript para datos compartidos
- Tipos específicos para cada feature
- Mejor IntelliSense y detección de errores

## Cómo Agregar una Nueva Feature

1. **Crear la estructura de carpetas**:

   ```
   src/features/nueva-feature/
   ├── nueva-feature.ts
   ├── nueva-feature.html.ts
   ├── nueva-feature.css
   └── index.ts
   ```

2. **Definir tipos** (si es necesario):

   ```typescript
   // src/shared/types/index.ts
   export interface NuevaFeatureData {
     // propiedades
   }
   ```

3. **Implementar la lógica**:

   ```typescript
   // src/features/nueva-feature/nueva-feature.ts
   export class NuevaFeature {
     // implementación
   }
   ```

4. **Crear la plantilla HTML**:

   ```typescript
   // src/features/nueva-feature/nueva-feature.html.ts
   export const createNuevaFeatureHTML = (data: NuevaFeatureData): string => {
     // plantilla HTML
   };
   ```

5. **Agregar estilos**:

   ```css
   /* src/features/nueva-feature/nueva-feature.css */
   .nueva-feature {
     /* estilos específicos */
   }
   ```

6. **Exportar desde index.ts**:

   ```typescript
   // src/features/nueva-feature/index.ts
   export { NuevaFeature } from './nueva-feature';
   export { createNuevaFeatureHTML } from './nueva-feature.html';
   ```

7. **Integrar en App**:
   ```typescript
   // src/app.ts
   import {
     NuevaFeature,
     createNuevaFeatureHTML,
   } from './features/nueva-feature';
   ```

## Convenciones de Nomenclatura

- **Archivos**: kebab-case (`navigation.ts`, `hero-section.css`)
- **Clases**: PascalCase (`Navigation`, `HeroSection`)
- **Funciones**: camelCase (`createNavigationHTML`)
- **Variables**: camelCase (`navLinks`, `menuItems`)
- **Constantes**: UPPER_SNAKE_CASE (`PRIMARY_COLOR`)

## Mejores Prácticas

1. **Mantener features independientes**
2. **Usar tipos compartidos para datos comunes**
3. **Seguir convenciones de nomenclatura**
4. **Documentar interfaces y funciones públicas**
5. **Mantener estilos específicos en cada feature**
6. **Usar utilidades compartidas para lógica común**

Esta arquitectura facilita el desarrollo, mantenimiento y escalabilidad del proyecto XY Coffee.

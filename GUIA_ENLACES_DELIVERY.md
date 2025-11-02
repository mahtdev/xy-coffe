# Guía de Enlaces de Delivery

Este documento contiene todas las reglas y consideraciones para implementar enlaces de delivery (Uber Eats, DiDi Food, Rappy) en la aplicación XY.COFFE.

## 📋 Tabla de Contenidos

1. [Reglas Generales](#reglas-generales)
2. [Uber Eats](#uber-eats)
3. [DiDi Food](#didi-food)
4. [Rappy](#rappy)
5. [Implementación Técnica](#implementación-técnica)
6. [Fallbacks y Manejo de Errores](#fallbacks-y-manejo-de-errores)

---

## 🔧 Reglas Generales

### Estructura de Datos

Cada plataforma de delivery debe tener la siguiente estructura:

```typescript
{
  name: string;           // Nombre de la plataforma
  image: string;         // Ruta de la imagen (usar getPublicPath())
  webUrl: string;        // URL para versión web
  mobileUrl: string;     // URL para app móvil (deep link)
  alt: string;           // Texto alternativo para accesibilidad
}
```

### Ubicación del Código

- **Archivo**: `src/features/delivery/delivery.ts`
- **Método**: `deliveryLinks` (array privado dentro de la clase `Delivery`)

### Imágenes

- **Ubicación**: `public/delivery/`
- **Uso**: Siempre usar `getPublicPath('delivery/nombre-imagen.png')` para las rutas
- **Formato recomendado**: PNG con fondo transparente
- **Tamaño**: Optimizar para web, mantener proporciones originales

---

## 🍔 Uber Eats

### Formato de Deep Link

**Formato correcto** (uso actual):
```
ubereats://store/browse?client_id=eats&storeUUID=UUID_DE_LA_TIENDA
```

**Ejemplo**:
```
ubereats://store/browse?client_id=eats&storeUUID=994e0e4d-26be-5d65-b6f5-46b98446defb
```

### Cómo Obtener el UUID de la Tienda

1. Acceder a la página web de tu tienda en Uber Eats
2. La URL tendrá el formato:
   ```
   https://www.ubereats.com/store-browse-uuid/UUID?diningMode=DELIVERY
   ```
3. Copiar el UUID de la URL (cadena alfanumérica después de `/store-browse-uuid/`)
4. Ejemplo: `https://www.ubereats.com/store-browse-uuid/994e0e4d-26be-5d65-b6f5-46b98446defb`
   - UUID: `994e0e4d-26be-5d65-b6f5-46b98446defb`

### URL Web

**Formato**:
```
https://www.ubereats.com/store-browse-uuid/UUID?diningMode=DELIVERY
```

**Ejemplo completo**:
```typescript
{
  name: 'Uber Eats',
  image: getPublicPath('delivery/ubereats.png'),
  webUrl: 'https://www.ubereats.com/store-browse-uuid/994e0e4d-26be-5d65-b6f5-46b98446defb?diningMode=DELIVERY',
  mobileUrl: 'ubereats://store/browse?client_id=eats&storeUUID=994e0e4d-26be-5d65-b6f5-46b98446defb',
  alt: 'Uber Eats - Pedidos a domicilio'
}
```

### ⚠️ Formatos INCORRECTOS (NO usar)

❌ `ubereats://store-browse-uuid/UUID`  
❌ `ubereats://stores/UUID`  
❌ `ubereats://store/UUID`  
❌ `uber://eats?storeUUID=UUID`

### Notas Importantes

- El `storeUUID` debe coincidir exactamente con el UUID de la URL web
- El parámetro `client_id=eats` es obligatorio
- El deep link funciona en iOS y Android cuando la app está instalada
- Si la app no está instalada, se redirige automáticamente a la versión web

---

## 🚗 DiDi Food

### Formato de Deep Link

**Formato actual**:
```
didifood://
```

### URL Web

**Formato**:
```
https://didi-food.com
```

### Ejemplo Completo

```typescript
{
  name: 'DiDi Food',
  image: getPublicPath('delivery/didi.png'),
  webUrl: 'https://didi-food.com',
  mobileUrl: 'didifood://',
  alt: 'DiDi Food - Pedidos a domicilio'
}
```

### Notas

- El deep link genérico `didifood://` abre la app pero no lleva a una tienda específica
- Si se obtiene un deep link específico de tienda, actualizar este documento

---

## 🛵 Rappy

### Formato de Deep Link

**Formato actual**:
```
rappi://
```

### URL Web

**Formato**:
```
https://rappi.com
```

### Ejemplo Completo

```typescript
{
  name: 'Rappy',
  image: getPublicPath('delivery/rappy.png'),
  webUrl: 'https://rappi.com',
  mobileUrl: 'rappi://',
  alt: 'Rappy - Pedidos a domicilio'
}
```

### Notas

- El deep link genérico `rappi://` abre la app pero no lleva a una tienda específica
- Si se obtiene un deep link específico de tienda, actualizar este documento

---

## 💻 Implementación Técnica

### Lógica de Detección de Dispositivos

El código detecta dispositivos móviles usando:
```typescript
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
```

### Lógica de Deep Links

1. **Detectar si es deep link**:
   ```typescript
   const isDeepLink = /^[a-z]+:\/\//.test(data.mobileUrl) && !data.mobileUrl.startsWith('http');
   ```

2. **Abrir app en móvil**:
   ```typescript
   window.location.href = data.mobileUrl;
   ```

3. **Fallback a web**:
   - Si después de 2 segundos la app no se abre, redirige a la versión web
   - Se detecta si el usuario sigue en la página usando `document.hasFocus()`

### Código Completo de Implementación

```typescript
if (isMobile && data.mobileUrl) {
  const isDeepLink = /^[a-z]+:\/\//.test(data.mobileUrl) && !data.mobileUrl.startsWith('http');
  
  if (isDeepLink) {
    const startTime = Date.now();
    window.location.href = data.mobileUrl;
    
    setTimeout(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed > 500 && document.hasFocus()) {
        window.location.href = data.webUrl;
      }
    }, 2000);
  } else {
    window.open(data.webUrl, '_blank', 'noopener,noreferrer');
  }
} else {
  window.open(data.webUrl, '_blank', 'noopener,noreferrer');
}
```

---

## 🔄 Fallbacks y Manejo de Errores

### Escenarios de Fallback

1. **App no instalada**: Redirige a versión web después de 2 segundos
2. **Deep link inválido**: Usa la URL web directamente
3. **Dispositivo desktop**: Siempre abre la versión web
4. **Error en deep link**: El navegador puede mostrar un error, luego se redirige a web

### Comportamiento Esperado

- **Móvil con app instalada**: Abre la app directamente en la tienda
- **Móvil sin app**: Abre la versión web después de intento fallido
- **Desktop**: Abre la versión web en nueva pestaña

---

## 📝 Checklist para Actualizar Enlaces

Cuando se solicite actualizar un enlace de delivery, verificar:

- [ ] ¿Es Uber Eats? → Obtener UUID de la URL web y usar formato correcto
- [ ] ¿Es DiDi Food o Rappy? → Verificar si hay nuevo formato de deep link específico
- [ ] ¿La URL web es correcta? → Verificar que funcione en navegador
- [ ] ¿El deep link sigue el formato correcto? → Revisar este documento
- [ ] ¿Las imágenes están en `public/delivery/`? → Usar `getPublicPath()`
- [ ] ¿Probar en dispositivo móvil real? → Verificar que abre la app correctamente

---

## 🔍 Cómo Actualizar un Enlace de Uber Eats

### Pasos Detallados

1. **Obtener la nueva URL web de Uber Eats**:
   - Ejemplo: `https://www.ubereats.com/store-browse-uuid/NUEVO-UUID?diningMode=DELIVERY`
   
2. **Extraer el UUID**:
   - Copiar la parte entre `/store-browse-uuid/` y `?`
   - Ejemplo: `NUEVO-UUID`

3. **Construir el deep link**:
   ```
   ubereats://store/browse?client_id=eats&storeUUID=NUEVO-UUID
   ```

4. **Actualizar en `delivery.ts`**:
   ```typescript
   {
     name: 'Uber Eats',
     image: getPublicPath('delivery/ubereats.png'),
     webUrl: 'https://www.ubereats.com/store-browse-uuid/NUEVO-UUID?diningMode=DELIVERY',
     mobileUrl: 'ubereats://store/browse?client_id=eats&storeUUID=NUEVO-UUID',
     alt: 'Uber Eats - Pedidos a domicilio'
   }
   ```

5. **Probar**:
   - Build: `npm run build`
   - Verificar que no hay errores
   - Probar en dispositivo móvil real

---

## ⚡ Comandos Útiles

```bash
# Build del proyecto
npm run build

# Desarrollo local
npm run dev

# Verificar tipos TypeScript
npm run type-check  # Si está disponible
```

---

## 📚 Referencias

- **Ubicación del código**: `src/features/delivery/delivery.ts`
- **Estilos**: `src/features/delivery/delivery.css`
- **HTML**: `src/features/delivery/delivery.html.ts`
- **Imágenes**: `public/delivery/`

---

## 🎯 Resumen Rápido

### Uber Eats (Más Importante)

**Formato deep link CORRECTO**:
```
ubereats://store/browse?client_id=eats&storeUUID=UUID_AQUI
```

**Formato URL web**:
```
https://www.ubereats.com/store-browse-uuid/UUID_AQUI?diningMode=DELIVERY
```

**Cómo obtener UUID**: De la URL web, copiar lo que está entre `/store-browse-uuid/` y `?`

---

**Última actualización**: 2024  
**Mantenido por**: Equipo XY.COFFE


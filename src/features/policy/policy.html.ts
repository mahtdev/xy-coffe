export const createPolicyHTML = (): string => {
  return `
      <!-- Policy Header -->
      <section class="policy-header">
        <div class="policy-header-overlay"></div>
        <div class="policy-header-content">
          <h1 class="policy-title">Política de Cookies</h1>
          <p class="policy-subtitle">Información sobre el uso de cookies en nuestro sitio web</p>
        </div>
      </section>

      <!-- Policy Content -->
      <section class="policy-content">
        <div class="container">
          <!-- Coffee Section 1 -->
          <div class="policy-section">
            <div class="policy-image-section">
              <div class="policy-image coffee-image-1">
                <div class="image-placeholder">
                  <span class="coffee-emoji">☕</span>
                  <p>Ambiente acogedor de cafetería</p>
                </div>
              </div>
            </div>
            <div class="policy-text">
              <h2>¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
                (computadora, tablet o móvil) cuando visitas un sitio web. Estas cookies nos
                ayudan a recordar tus preferencias y a mejorar tu experiencia de navegación.
              </p>
              <p>
                En XY.COFFE utilizamos cookies para garantizar que nuestro sitio web funcione
                correctamente y para personalizar tu experiencia según tus intereses.
              </p>
            </div>
          </div>

          <!-- Coffee Section 2 -->
          <div class="policy-section reverse">
            <div class="policy-text">
              <h2>Tipos de cookies que utilizamos</h2>
              <h3>Cookies esenciales</h3>
              <p>
                Estas cookies son necesarias para que el sitio web funcione correctamente.
                Incluyen cookies que permiten recordar tus preferencias de cookies y mantener
                tu sesión activa.
              </p>
              <h3>Cookies de funcionalidad</h3>
              <p>
                Estas cookies nos permiten recordar las elecciones que haces (como tu idioma
                preferido) y proporcionan características mejoradas y más personalizadas.
              </p>
              <h3>Cookies de análisis</h3>
              <p>
                Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web,
                proporcionándonos información sobre las áreas visitadas, el tiempo de
                permanencia y cualquier problema encontrado.
              </p>
            </div>
            <div class="policy-image-section">
              <div class="policy-image coffee-image-2">
                <div class="image-placeholder">
                  <span class="coffee-emoji">🍰</span>
                  <p>Deliciosos acompañamientos</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Coffee Section 3 -->
          <div class="policy-section">
            <div class="policy-image-section">
              <div class="policy-image coffee-image-3">
                <div class="image-placeholder">
                  <span class="coffee-emoji">🌿</span>
                  <p>Ingredientes naturales</p>
                </div>
              </div>
            </div>
            <div class="policy-text">
              <h2>Gestión de cookies</h2>
              <p>
                Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas
                las cookies que ya están en tu dispositivo y puedes configurar la mayoría de
                los navegadores para evitar que se coloquen cookies.
              </p>
              <p>
                Si decides eliminar las cookies, es posible que tengas que volver a introducir
                tus preferencias cada vez que visites nuestro sitio.
              </p>
              <p>
                Para obtener más información sobre cómo gestionar las cookies, visita la
                sección de ayuda de tu navegador web.
              </p>
            </div>
          </div>

          <!-- Coffee Section 4 -->
          <div class="policy-section reverse">
            <div class="policy-text">
              <h2>Actualizaciones de esta política</h2>
              <p>
                Podemos actualizar nuestra Política de Cookies de vez en cuando para reflejar
                cambios en nuestras prácticas o por otras razones operativas, legales o
                reglamentarias.
              </p>
              <p>
                Te recomendamos que revises esta página periódicamente para estar informado
                sobre cómo utilizamos las cookies.
              </p>
              <div class="policy-contact">
                <h3>Contacto</h3>
                <p>
                  Si tienes alguna pregunta sobre nuestra Política de Cookies, puedes
                  contactarnos:
                </p>
                <ul>
                  <li>📧 Email: info@xy.coffe</li>
                  <li>📞 Teléfono: +1 (555) 123-4567</li>
                  <li>📍 Dirección: Avenida Principal 123, Centro Comercial Plaza</li>
                </ul>
              </div>
            </div>
            <div class="policy-image-section">
              <div class="policy-image coffee-image-4">
                <div class="image-placeholder">
                  <span class="coffee-emoji">👥</span>
                  <p>Comunidad de amantes del café</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Back to Home Section -->
          <div class="policy-cta">
            <h2>¿Listo para disfrutar del mejor café?</h2>
            <p>Regresa a nuestra página principal y descubre nuestra selección especial</p>
            <a href="#inicio" class="btn btn-primary btn-large">
              ← Volver al Inicio
            </a>
          </div>
        </div>
      </section>
  `;
};

export const createCookiesHTML = (): string => {
  return `
    <!-- Cookie Banner -->
    <div class="cookie-banner" id="cookieBanner">
      <div class="cookie-content">
        <div class="cookie-icon">🍪</div>
        <div class="cookie-text">
          <h3>Uso de Cookies</h3>
          <p>
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.
            Al continuar navegando, aceptas nuestro uso de cookies. Puedes
            <a href="#policy" class="cookie-link">leer más sobre nuestra política de cookies</a>.
          </p>
        </div>
        <div class="cookie-actions">
          <button class="btn btn-secondary cookie-btn" id="cookieReject">
            Rechazar
          </button>
          <button class="btn btn-primary cookie-btn" id="cookieAccept">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  `;
};

import type { NavLink, SocialLink } from '../../shared/types';

export const createFooterHTML = (
  navLinks: NavLink[],
  socialLinks: SocialLink[],
  footerLinks: NavLink[]
): string => {
  return `
    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <h4>XY.COFFE</h4>
            <p>Tu destino para el mejor café artesanal. Calidad, pasión y dedicación en cada taza.</p>
            <div class="social-links">
              ${socialLinks
                .map(
                  (link) =>
                    `<a href="${link.href}" class="social-link">${link.icon}</a>`
                )
                .join('')}
            </div>
          </div>

          <div class="footer-column">
            <h4>Enlaces Rápidos</h4>
            <ul class="footer-links">
              ${navLinks
                .map(
                  (link) => `<li><a href="${link.href}">${link.text}</a></li>`
                )
                .join('')}
            </ul>
          </div>

          <div class="footer-column">
            <h4>Información</h4>
            <ul class="footer-links">
              ${footerLinks
                .map(
                  (link) => `<li><a href="${link.href}">${link.text}</a></li>`
                )
                .join('')}
            </ul>
          </div>

          <div class="footer-column">
            <h4>Newsletter</h4>
            <p>Recibe nuestras ofertas especiales</p>
            <div class="newsletter-form">
              <input type="email" placeholder="Tu email" class="newsletter-input">
              <button class="btn btn-primary">→</button>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 XY.COFFE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;
};

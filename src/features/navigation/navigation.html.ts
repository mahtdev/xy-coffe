import type { NavLink } from '../../shared/types';
import { getPublicPath } from '../../shared/utils';

export const createNavigationHTML = (navLinks: NavLink[]): string => {
  return `
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <img src="${getPublicPath('logo.webp')}" alt="XY.COFFE Logo" class="logo-image" width="50" height="50" />
          <span class="logo-text">XY.COFFE</span>
        </div>

        <div class="nav-menu" id="navMenu">
          ${navLinks
            .map((link) => {
              if (link.submenu && link.submenu.length > 0) {
                return `
                  <div class="nav-item nav-item-with-submenu">
                    <a href="${link.href}" class="nav-link">
                      ${link.text}
                      <span class="nav-arrow">▼</span>
                    </a>
                    <ul class="nav-submenu">
                      ${link.submenu
                        .map(
                          (subLink) =>
                            `<li><a href="${subLink.href}" class="nav-submenu-link">${subLink.text}</a></li>`
                        )
                        .join('')}
                    </ul>
                  </div>
                `;
              }
              return `<a href="${link.href}" class="nav-link">${link.text}</a>`;
            })
            .join('')}
        </div>

        <button class="nav-toggle" id="navToggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `;
};

import type { Stat } from '../../shared/types';

export const createAboutHTML = (statsData: Stat[]): string => {
  return `
    <!-- About Section -->
    <section class="about-section" id="nosotros">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <h2 class="section-title">Nuestra Historia</h2>
            <p class="about-text">
              Desde 2020, XY Coffee ha sido el refugio perfecto para los amantes del café.
              Comenzamos con una visión simple: crear la mejor experiencia de café artesanal,
              combinando granos de la más alta calidad con la pasión de nuestros baristas.
            </p>
            <p class="about-text">
              Cada taza que servimos cuenta una historia de dedicación, desde la selección
              cuidadosa de nuestros proveedores hasta el arte de la preparación perfecta.
              No solo servimos café, creamos momentos memorables.
            </p>
            <div class="about-stats">
              ${statsData
                .map(
                  (stat) => `
                <div class="stat">
                  <div class="stat-number">${stat.number}</div>
                  <div class="stat-label">${stat.label}</div>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
          <div class="about-image">
            <div class="about-image-placeholder">
              <svg width="100%" height="100%" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="500" fill="#1E3A8A" opacity="0.1"/>
                <circle cx="200" cy="250" r="120" fill="#1E3A8A" opacity="0.2"/>
                <path d="M150 200C150 200 170 150 200 150C230 150 250 200 250 200" stroke="#1E3A8A" stroke-width="8" stroke-linecap="round"/>
                <ellipse cx="200" cy="250" rx="60" ry="80" fill="#1E3A8A" opacity="0.3"/>
                <text x="200" y="400" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#1E3A8A" text-anchor="middle">XY COFFEE</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};

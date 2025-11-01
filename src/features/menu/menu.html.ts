import type { MenuCategory, MenuItem } from '../../shared/types';

export const createMenuHTML = (menuData: MenuItem[]): string => {
  const categories: MenuCategory[] = ['all', 'caliente', 'frio', 'especial'];
  const categoryLabels = {
    all: 'Todos',
    caliente: 'Calientes',
    frio: 'Fríos',
    especial: 'Especiales',
  };

  return `
    <!-- Menu Section -->
    <section class="menu-section" id="menu">
      <div class="container">
        <h2 class="section-title">Nuestro Menú</h2>
        <p class="section-subtitle">Descubre nuestra selección de bebidas artesanales</p>

        <div class="menu-categories">
          ${categories
            .map(
              (category) =>
                `<button class="category-btn ${
                  category === 'all' ? 'active' : ''
                }" data-category="${category}">${
                  categoryLabels[category]
                }</button>`
            )
            .join('')}
        </div>

        <div class="menu-grid">
          ${menuData
            .map(
              (item) => `
            <div class="menu-item" data-category="${item.category}">
              <div class="menu-item-image">
                <div class="menu-image-placeholder" style="background: ${item.gradient};">
                  <span class="menu-emoji">${item.emoji}</span>
                </div>
              </div>
              <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="menu-price">${item.price}</span>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
};

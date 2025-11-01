export const createHeroHTML = (): string => {
  return `
    <!-- Hero Section -->
    <section class="hero" id="inicio">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title animate-fade-in">Despierta tus Sentidos</h1>
        <p class="hero-subtitle animate-fade-in-delay">El mejor café artesanal en cada taza</p>
        <div class="hero-buttons animate-fade-in-delay-2">
          <a href="#menu" class="btn btn-primary">Ver Menú</a>
          <a href="#ubicacion" class="btn btn-secondary">Visítanos</a>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="mouse"></div>
      </div>
    </section>

    <!-- Featured Section -->
    <section class="featured">
      <div class="container">
        <div class="featured-grid">
          <div class="featured-card">
            <div class="featured-icon">☕</div>
            <h3>Café Premium</h3>
            <p>Granos seleccionados de las mejores regiones cafeteras del mundo</p>
          </div>
          <div class="featured-card">
            <div class="featured-icon">🎨</div>
            <h3>Arte Latte</h3>
            <p>Baristas expertos que convierten cada bebida en una obra de arte</p>
          </div>
          <div class="featured-card">
            <div class="featured-icon">🌿</div>
            <h3>100% Orgánico</h3>
            <p>Comprometidos con el medio ambiente y la sostenibilidad</p>
          </div>
        </div>
      </div>
    </section>
  `;
};

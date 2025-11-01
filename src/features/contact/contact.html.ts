export const createContactHTML = (): string => {
  return `
    <!-- Contact Section -->
    <section class="contact-section" id="contacto">
      <div class="container">
        <h2 class="section-title">Mantente Conectado</h2>
        <p class="section-subtitle">Suscríbete para recibir ofertas especiales y novedades</p>

        <form class="contact-form" id="contactForm">
          <div class="form-group">
            <input type="text" name="name" placeholder="Nombre" required class="form-input">
          </div>
          <div class="form-group">
            <input type="email" name="email" placeholder="Email" required class="form-input">
          </div>
          <div class="form-group">
            <textarea name="message" placeholder="Mensaje (opcional)" rows="4" class="form-input"></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-large">Suscribirse</button>
        </form>
      </div>
    </section>
  `;
};

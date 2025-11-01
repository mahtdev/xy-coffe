export const createDeliveryHTML = (deliveryLinks: Array<{
  name: string;
  image: string;
  webUrl: string;
  mobileUrl: string;
  alt: string;
}>): string => {
  return `
    <!-- Delivery Section -->
    <section class="delivery-section" id="delivery">
      <div class="container">
        <h2 class="section-title">Pedidos a Domicilio</h2>
        <p class="section-subtitle">Ordena desde la comodidad de tu hogar</p>

        <div class="delivery-grid">
          ${deliveryLinks
            .map(
              (link, index) => `
            <a href="${link.webUrl}"
               class="delivery-link"
               target="_blank"
               rel="noopener noreferrer"
               data-index="${index}">
              <div class="delivery-card">
                <div class="delivery-image-wrapper">
                  <img src="${link.image}"
                       alt="${link.alt}"
                       class="delivery-image"
                       loading="lazy">
                </div>
                <div class="delivery-name">${link.name}</div>
              </div>
            </a>
          `
            )
            .join('')}
        </div>

        <p class="delivery-info">
          Elige tu plataforma favorita y disfruta de nuestros productos en casa.
          <br>
          Tiempo estimado de entrega: 30-45 minutos
        </p>
      </div>
    </section>
  `;
};

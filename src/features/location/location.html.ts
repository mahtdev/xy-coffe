import type { LocationInfo } from '../../shared/types';

export const createLocationHTML = (locationData: LocationInfo): string => {
  return `
    <!-- Location Section -->
    <section class="location-section" id="ubicacion">
      <div class="container">
        <div class="location-header">
          <h2 class="section-title">Encuéntranos</h2>
          <p class="section-subtitle">Visítanos y disfruta de la mejor experiencia</p>
        </div>

        <div class="location-info-grid">
          <div class="location-card">
            <div class="location-icon">📍</div>
            <h3>Dirección</h3>
            <p>${locationData.address}</p>
          </div>

          <div class="location-card">
            <div class="location-icon">🕐</div>
            <h3>Horario</h3>
            <p>${locationData.hours}</p>
          </div>

          <div class="location-card">
            <div class="location-icon location-whatsapp">
              <img src="/whatsapp.png" alt="WhatsApp" class="whatsapp-icon" />
            </div>
            <h3>Contacto</h3>
            <p>${locationData.contact}</p>
          </div>
        </div>

        <div class="location-map-wrapper">
          <div class="map-container">
            <iframe
              src="https://maps.google.com/maps?q=Cerrada+San+Vicente+304,+Irapuato,+Guanajuato,+36558&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allow="geolocation; fullscreen"
              class="map-iframe"
              title="Ubicación XY.COFFE - Cerrada San Vicente 304, Irapuato"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  `;
};

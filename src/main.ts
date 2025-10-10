import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Navigation -->
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <div class="nav-logo">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="24" fill="#1E3A8A" stroke="#1E3A8A" stroke-width="2"/>
          <path d="M15 20C15 20 18 15 25 15C32 15 35 20 35 20" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
          <ellipse cx="25" cy="27" rx="8" ry="10" fill="white"/>
          <rect x="23" y="35" width="4" height="3" fill="white"/>
          <text x="25" y="30" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#1E3A8A" text-anchor="middle">XY</text>
        </svg>
        <span class="logo-text">XY.COFFE</span>
      </div>
      
      <div class="nav-menu" id="navMenu">
        <a href="#inicio" class="nav-link">Inicio</a>
        <a href="#menu" class="nav-link">Menú</a>
        <a href="#nosotros" class="nav-link">Nosotros</a>
        <a href="#ubicacion" class="nav-link">Ubicación</a>
        <a href="#contacto" class="nav-link">Contacto</a>
      </div>
      
      <button class="nav-toggle" id="navToggle">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>

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

  <!-- Menu Section -->
  <section class="menu-section" id="menu">
    <div class="container">
      <h2 class="section-title">Nuestro Menú</h2>
      <p class="section-subtitle">Descubre nuestra selección de bebidas artesanales</p>
      
      <div class="menu-categories">
        <button class="category-btn active" data-category="all">Todos</button>
        <button class="category-btn" data-category="caliente">Calientes</button>
        <button class="category-btn" data-category="frio">Fríos</button>
        <button class="category-btn" data-category="especial">Especiales</button>
      </div>

      <div class="menu-grid">
        <div class="menu-item" data-category="caliente">
          <div class="menu-item-image">
            <div class="menu-image-placeholder" style="background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);">
              <span class="menu-emoji">☕</span>
            </div>
          </div>
          <div class="menu-item-content">
            <h3>Espresso Clásico</h3>
            <p>Intenso y aromático, la base perfecta</p>
            <span class="menu-price">$3.50</span>
          </div>
        </div>

        <div class="menu-item" data-category="caliente">
          <div class="menu-item-image">
            <div class="menu-image-placeholder" style="background: linear-gradient(135deg, #A0522D 0%, #DEB887 100%);">
              <span class="menu-emoji">🥛</span>
            </div>
          </div>
          <div class="menu-item-content">
            <h3>Cappuccino</h3>
            <p>Espresso con espuma de leche sedosa</p>
            <span class="menu-price">$4.50</span>
          </div>
        </div>

        <div class="menu-item" data-category="caliente">
          <div class="menu-item-image">
            <div class="menu-image-placeholder" style="background: linear-gradient(135deg, #6F4E37 0%, #C19A6B 100%);">
              <span class="menu-emoji">☕</span>
            </div>
          </div>
          <div class="menu-item-content">
            <h3>Latte</h3>
            <p>Suave y cremoso, nuestro favorito</p>
            <span class="menu-price">$4.75</span>
          </div>
        </div>

        <div class="menu-item" data-category="frio">
          <div class="menu-item-image">
            <div class="menu-image-placeholder" style="background: linear-gradient(135deg, #4A90E2 0%, #87CEEB 100%);">
              <span class="menu-emoji">🧊</span>
            </div>
          </div>
          <div class="menu-item-content">
            <h3>Cold Brew</h3>
            <p>Café frío preparado en 24 horas</p>
            <span class="menu-price">$5.00</span>
          </div>
        </div>

        <div class="menu-item" data-category="frio">
          <div class="menu-item-image">
            <div class="menu-image-placeholder" style="background: linear-gradient(135deg, #5DADE2 0%, #AED6F1 100%);">
              <span class="menu-emoji">❄️</span>
            </div>
          </div>
          <div class="menu-item-content">
            <h3>Frappé Caramelo</h3>
            <p>Bebida helada con caramelo y crema</p>
            <span class="menu-price">$5.50</span>
          </div>
        </div>

        <div class="menu-item" data-category="frio">
          <div class="menu-item-image">
            <div class="menu-image-placeholder" style="background: linear-gradient(135deg, #48C9B0 0%, #76D7C4 100%);">
              <span class="menu-emoji">🍃</span>
            </div>
          </div>
          <div class="menu-item-content">
            <h3>Iced Matcha Latte</h3>
            <p>Té verde matcha con leche fría</p>
            <span class="menu-price">$5.25</span>
          </div>
        </div>

        <div class="menu-item" data-category="especial">
          <div class="menu-item-image">
            <div class="menu-image-placeholder" style="background: linear-gradient(135deg, #E74C3C 0%, #F1948A 100%);">
              <span class="menu-emoji">🌟</span>
            </div>
          </div>
          <div class="menu-item-content">
            <h3>XY Special</h3>
            <p>Nuestra receta secreta premium</p>
            <span class="menu-price">$6.50</span>
          </div>
        </div>

        <div class="menu-item" data-category="especial">
          <div class="menu-item-image">
            <div class="menu-image-placeholder" style="background: linear-gradient(135deg, #9B59B6 0%, #BB8FCE 100%);">
              <span class="menu-emoji">🍫</span>
            </div>
          </div>
          <div class="menu-item-content">
            <h3>Mocha Premium</h3>
            <p>Chocolate belga con espresso doble</p>
            <span class="menu-price">$5.75</span>
          </div>
        </div>
      </div>
    </div>
  </section>

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
            <div class="stat">
              <div class="stat-number">5K+</div>
              <div class="stat-label">Clientes Felices</div>
            </div>
            <div class="stat">
              <div class="stat-number">15+</div>
              <div class="stat-label">Variedades de Café</div>
            </div>
            <div class="stat">
              <div class="stat-number">100%</div>
              <div class="stat-label">Orgánico</div>
            </div>
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

  <!-- Location Section -->
  <section class="location-section" id="ubicacion">
    <div class="container">
      <h2 class="section-title">Encuéntranos</h2>
      <p class="section-subtitle">Visítanos y disfruta de la mejor experiencia</p>
      
      <div class="location-grid">
        <div class="location-info">
          <div class="location-card">
            <div class="location-icon">📍</div>
            <h3>Dirección</h3>
            <p>Avenida Principal 123<br>Centro Comercial Plaza<br>Ciudad, País</p>
          </div>
          
          <div class="location-card">
            <div class="location-icon">🕐</div>
            <h3>Horario</h3>
            <p>Lunes a Viernes: 7:00 AM - 9:00 PM<br>
               Sábados: 8:00 AM - 10:00 PM<br>
               Domingos: 9:00 AM - 8:00 PM</p>
          </div>
          
          <div class="location-card">
            <div class="location-icon">📞</div>
            <h3>Contacto</h3>
            <p>Tel: +1 (555) 123-4567<br>
               Email: info@xy.coffe<br>
               Instagram: @xycoffe</p>
          </div>
        </div>
        
        <div class="location-map">
          <div class="map-placeholder">
            <div class="map-icon">🗺️</div>
            <p>Mapa Interactivo</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="contact-section" id="contacto">
    <div class="container">
      <h2 class="section-title">Mantente Conectado</h2>
      <p class="section-subtitle">Suscríbete para recibir ofertas especiales y novedades</p>
      
      <form class="contact-form" id="contactForm">
        <div class="form-group">
          <input type="text" placeholder="Nombre" required class="form-input">
        </div>
        <div class="form-group">
          <input type="email" placeholder="Email" required class="form-input">
        </div>
        <div class="form-group">
          <textarea placeholder="Mensaje (opcional)" rows="4" class="form-input"></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-large">Suscribirse</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <h4>XY.COFFE</h4>
          <p>Tu destino para el mejor café artesanal. Calidad, pasión y dedicación en cada taza.</p>
          <div class="social-links">
            <a href="#" class="social-link">📘</a>
            <a href="#" class="social-link">📷</a>
            <a href="#" class="social-link">🐦</a>
            <a href="#" class="social-link">💼</a>
          </div>
        </div>
        
        <div class="footer-column">
          <h4>Enlaces Rápidos</h4>
          <ul class="footer-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#menu">Menú</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#ubicacion">Ubicación</a></li>
          </ul>
        </div>
        
        <div class="footer-column">
          <h4>Información</h4>
          <ul class="footer-links">
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Trabaja con Nosotros</a></li>
            <li><a href="#">Blog</a></li>
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
`

// Navigation functionality
const navbar = document.getElementById('navbar')
const navToggle = document.getElementById('navToggle')
const navMenu = document.getElementById('navMenu')
const navLinks = document.querySelectorAll('.nav-link')

// Toggle mobile menu
navToggle?.addEventListener('click', () => {
  navMenu?.classList.toggle('active')
  navToggle.classList.toggle('active')
})

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu?.classList.remove('active')
    navToggle?.classList.remove('active')
  })
})

// Navbar scroll effect
let lastScroll = 0
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset
  
  if (currentScroll <= 0) {
    navbar?.classList.remove('scroll-up')
    navbar?.classList.remove('scrolled')
    return
  }
  
  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scrolling down
    navbar?.classList.remove('scroll-up')
    navbar?.classList.add('scroll-down')
  } else if (currentScroll < lastScroll) {
    // Scrolling up
    navbar?.classList.remove('scroll-down')
    navbar?.classList.add('scroll-up')
  }
  
  if (currentScroll > 50) {
    navbar?.classList.add('scrolled')
  } else {
    navbar?.classList.remove('scrolled')
  }
  
  lastScroll = currentScroll
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href') || '')
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  })
})

// Menu category filter
const categoryButtons = document.querySelectorAll('.category-btn')
const menuItems = document.querySelectorAll('.menu-item')

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    categoryButtons.forEach(btn => btn.classList.remove('active'))
    // Add active class to clicked button
    button.classList.add('active')
    
    const category = button.getAttribute('data-category')
    
    // Filter menu items
    menuItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block'
        setTimeout(() => {
          item.style.opacity = '1'
          item.style.transform = 'scale(1)'
        }, 10)
      } else {
        item.style.opacity = '0'
        item.style.transform = 'scale(0.8)'
        setTimeout(() => {
          item.style.display = 'none'
        }, 300)
      }
    })
  })
})

// Contact form submission
const contactForm = document.getElementById('contactForm')
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault()
  alert('¡Gracias por suscribirte! Te mantendremos informado de nuestras novedades.')
  contactForm.reset()
})

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll('.menu-item, .featured-card, .about-content, .location-card').forEach(el => {
  observer.observe(el)
})

// Parallax effect for hero
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector('.hero') as HTMLElement
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

console.log('🎉 XY Coffee website loaded successfully!')

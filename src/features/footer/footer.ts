import type { NavLink, SocialLink } from '../../shared/types';
import './footer.css';

export class Footer {
  private navLinksData: NavLink[] = [
    { href: '#inicio', text: 'Inicio' },
    { href: '#menu', text: 'Menú' },
    { href: '#ubicacion', text: 'Ubicación' },
    { href: '#delivery', text: 'Delivery' },
    { href: '#contacto', text: 'Contacto' },
  ];

  private socialLinksData: SocialLink[] = [
    { icon: '📘', href: '#' },
    { icon: '📷', href: '#' },
    { icon: '🐦', href: '#' },
    { icon: '💼', href: '#' },
  ];

  private footerLinksData: NavLink[] = [
    { href: '#', text: 'Términos y Condiciones' },
    { href: '#', text: 'Política de Privacidad' },
    { href: '#policy', text: 'Política de Cookies' },
    { href: '#', text: 'Trabaja con Nosotros' },
    { href: '#', text: 'Blog' },
  ];

  constructor() {
    this.init();
  }

  private init(): void {
    this.setupNewsletterForm();
  }

  private setupNewsletterForm(): void {
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector(
      '.newsletter-input'
    ) as HTMLInputElement;
    const newsletterButton = newsletterForm?.querySelector('.btn');

    newsletterButton?.addEventListener('click', (e) => {
      e.preventDefault();
      if (newsletterInput?.value) {
        console.log('Newsletter subscription:', newsletterInput.value);
        alert('¡Gracias por suscribirte a nuestro newsletter!');
        newsletterInput.value = '';
      }
    });
  }

  public getNavLinks(): NavLink[] {
    return this.navLinksData;
  }

  public getSocialLinks(): SocialLink[] {
    return this.socialLinksData;
  }

  public getFooterLinks(): NavLink[] {
    return this.footerLinksData;
  }
}

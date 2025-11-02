import type { NavLink } from '../../shared/types';
import { smoothScrollTo, throttle } from '../../shared/utils';
import './navigation.css';

export class Navigation {
  private navbar: HTMLElement | null = null;
  private navToggle: HTMLElement | null = null;
  private navMenu: HTMLElement | null = null;
  private navLinks: NodeListOf<Element> = document.querySelectorAll('.nav-link');
  private lastScroll: number = 0;

  private navLinksData: NavLink[] = [
    { href: '#inicio', text: 'Inicio' },
    { href: '#menu', text: 'Menú' },
    { href: '#ubicacion', text: 'Ubicación' },
    { href: '#delivery', text: 'Delivery' },
    { href: '#contacto', text: 'Contacto' },
    { href: '#policy', text: 'Política de Cookies' },
  ];

  constructor() {
    // Don't initialize immediately - wait for DOM to be ready
    // Call init() manually after DOM is rendered
  }

  public initialize(): void {
    // Re-query elements after DOM is rendered
    this.navbar = document.getElementById('navbar');
    this.navToggle = document.getElementById('navToggle');
    this.navMenu = document.getElementById('navMenu');
    this.navLinks = document.querySelectorAll('.nav-link');

    this.init();
  }

  private init(): void {
    this.setupMobileMenu();
    this.setupScrollEffects();
    this.setupSmoothScrolling();
    this.setupSubmenu();
  }

  private setupMobileMenu(): void {
    this.navToggle?.addEventListener('click', () => {
      this.navMenu?.classList.toggle('active');
      this.navToggle?.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    this.navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        this.navMenu?.classList.remove('active');
        this.navToggle?.classList.remove('active');
      });
    });
  }

  private setupScrollEffects(): void {
    const handleScroll = throttle(() => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        this.navbar?.classList.remove('scroll-up');
        this.navbar?.classList.remove('scrolled');
        return;
      }

      if (currentScroll > this.lastScroll && currentScroll > 100) {
        // Scrolling down
        this.navbar?.classList.remove('scroll-up');
        this.navbar?.classList.add('scroll-down');
      } else if (currentScroll < this.lastScroll) {
        // Scrolling up
        this.navbar?.classList.remove('scroll-down');
        this.navbar?.classList.add('scroll-up');
      }

      if (currentScroll > 50) {
        this.navbar?.classList.add('scrolled');
      } else {
        this.navbar?.classList.remove('scrolled');
      }

      this.lastScroll = currentScroll;
    }, 10);

    window.addEventListener('scroll', handleScroll);
  }

  private setupSmoothScrolling(): void {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        // Don't prevent default for policy page links
        if (href === '#policy' || href === '#politica-cookies') {
          return; // Let Policy class handle it
        }
        e.preventDefault();
        if (href && href !== '#') {
          smoothScrollTo(href);
        }
      });
    });
  }

  private setupSubmenu(): void {
    // Wait for DOM to be ready
    setTimeout(() => {
      // Setup submenu toggle for desktop
      const navItems = document.querySelectorAll('.nav-item-with-submenu');

      navItems.forEach((navItem) => {
        const navLink = navItem.querySelector<HTMLElement>('.nav-link[href="#nosotros"]');
        const submenu = navItem.querySelector<HTMLElement>('.nav-submenu');

        if (navLink && submenu) {
          // Desktop: hover to show
          navItem.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
              submenu.classList.add('active');
            }
          });

          navItem.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
              submenu.classList.remove('active');
            }
          });

          // Mobile: click to toggle
          navLink.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
              e.preventDefault();
              navItem.classList.toggle('active');
            }
          });
        }
      });

      // Close submenu when clicking submenu links on mobile
      const submenuLinks = document.querySelectorAll('.nav-submenu-link');
      submenuLinks.forEach((link) => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 768) {
            this.navMenu?.classList.remove('active');
            this.navToggle?.classList.remove('active');
            // Close submenu
            const navItem = link.closest('.nav-item-with-submenu');
            navItem?.classList.remove('active');
          }
        });
      });
    }, 100);
  }

  public getNavLinks(): NavLink[] {
    return this.navLinksData;
  }
}

import './policy.css';

export class Policy {
  private policyPage: HTMLElement | null;
  private mainPage: HTMLElement | null;

  constructor() {
    this.policyPage = document.getElementById('policyPage');
    this.mainPage = document.getElementById('mainPage');

    this.init();
  }

  private init(): void {
    this.setupNavigation();
    this.checkRoute();
    this.setupBackButton();
  }

  private setupNavigation(): void {
    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      this.checkRoute();
    });

    // Handle initial load
    this.checkRoute();
  }

  private checkRoute(): void {
    const hash = window.location.hash;

    if (hash === '#policy' || hash === '#politica-cookies') {
      this.showPolicyPage();
    } else {
      this.showMainPage();
    }
  }

  private showPolicyPage(): void {
    if (this.policyPage) {
      this.policyPage.style.display = 'block';
    }
    if (this.mainPage) {
      this.mainPage.style.display = 'none';
    }
    // Re-initialize navigation for policy page
    setTimeout(() => {
      const navbar = document.getElementById('navbar');
      if (navbar && navbar.parentElement === this.policyPage) {
        // Navigation is inside policy page, should work normally
      }
    }, 100);
    // Scroll to top
    window.scrollTo(0, 0);
  }

  private showMainPage(): void {
    if (this.policyPage) {
      this.policyPage.style.display = 'none';
    }
    if (this.mainPage) {
      this.mainPage.style.display = 'block';
    }
    // Scroll to top
    window.scrollTo(0, 0);
  }

  private setupBackButton(): void {
    // Handle clicks on home buttons
    const handleHomeLinks = () => {
      document.querySelectorAll('a[href="#inicio"]').forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          window.location.hash = '';
          this.showMainPage();
          // Smooth scroll to top
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      });
    };

    // Handle clicks on policy links
    const handlePolicyLinks = () => {
      document.querySelectorAll('a[href="#policy"], a[href="#politica-cookies"]').forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          window.location.hash = '#policy';
          this.showPolicyPage();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      });
    };

    // Set up event listeners
    handleHomeLinks();
    handlePolicyLinks();

    // Re-setup after DOM changes (e.g., when cookies banner is added)
    setTimeout(() => {
      handleHomeLinks();
      handlePolicyLinks();
    }, 100);
  }

  public navigateToPolicy(): void {
    window.location.hash = '#policy';
    this.showPolicyPage();
  }

  public navigateToHome(): void {
    window.location.hash = '';
    this.showMainPage();
  }
}

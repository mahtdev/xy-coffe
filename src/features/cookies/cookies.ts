import './cookies.css';

export class Cookies {
  private cookieBanner: HTMLElement | null;
  private acceptButton: HTMLElement | null;
  private rejectButton: HTMLElement | null;
  private readonly COOKIE_CONSENT_KEY = 'xy-coffe-cookie-consent';

  constructor() {
    this.cookieBanner = document.getElementById('cookieBanner');
    this.acceptButton = document.getElementById('cookieAccept');
    this.rejectButton = document.getElementById('cookieReject');

    this.init();
  }

  private init(): void {
    // Verificar si ya se ha dado consentimiento
    if (!this.hasConsent()) {
      this.showBanner();
      this.setupEventListeners();
    }
  }

  private hasConsent(): boolean {
    return localStorage.getItem(this.COOKIE_CONSENT_KEY) !== null;
  }

  private setupEventListeners(): void {
    this.acceptButton?.addEventListener('click', () => {
      this.acceptCookies();
    });

    this.rejectButton?.addEventListener('click', () => {
      this.rejectCookies();
    });
  }

  private showBanner(): void {
    if (this.cookieBanner) {
      setTimeout(() => {
        this.cookieBanner?.classList.add('show');
      }, 500); // Aparece después de 500ms
    }
  }

  private hideBanner(): void {
    if (this.cookieBanner) {
      this.cookieBanner.classList.remove('show');
      setTimeout(() => {
        this.cookieBanner?.remove();
      }, 300); // Espera a que termine la animación
    }
  }

  private acceptCookies(): void {
    localStorage.setItem(this.COOKIE_CONSENT_KEY, 'accepted');
    this.hideBanner();
  }

  private rejectCookies(): void {
    localStorage.setItem(this.COOKIE_CONSENT_KEY, 'rejected');
    this.hideBanner();
  }

  public getConsentStatus(): 'accepted' | 'rejected' | null {
    const status = localStorage.getItem(this.COOKIE_CONSENT_KEY);
    return status as 'accepted' | 'rejected' | null;
  }
}

import { getPublicPath } from '../../shared/utils';
import './delivery.css';

export class Delivery {
  private deliveryLinks = [
    {
      name: 'DiDi Food',
      image: getPublicPath('delivery/didi.png'),
      webUrl: 'https://didi-food.com',
      mobileUrl: 'didifood://',
      alt: 'DiDi Food - Pedidos a domicilio'
    },
    {
      name: 'Rappy',
      image: getPublicPath('delivery/rappy.png'),
      webUrl: 'https://rappi.com',
      mobileUrl: 'rappi://',
      alt: 'Rappy - Pedidos a domicilio'
    },
    {
      name: 'Uber Eats',
      image: getPublicPath('delivery/ubereats.png'),
      webUrl: 'https://www.ubereats.com/store-browse-uuid/994e0e4d-26be-5d65-b6f5-46b98446defb?diningMode=DELIVERY',
      mobileUrl: 'ubereats://store/browse?client_id=eats&storeUUID=994e0e4d-26be-5d65-b6f5-46b98446defb',
      alt: 'Uber Eats - Pedidos a domicilio'
    }
  ];

  constructor() {
    this.init();
  }

  private init(): void {
    this.setupDeliveryLinks();
  }

  private setupDeliveryLinks(): void {
    // Wait for DOM to be ready
    setTimeout(() => {
      // Setup click handlers for delivery links
      const deliveryLinks = document.querySelectorAll('.delivery-link');

      deliveryLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const data = this.deliveryLinks[index];
          if (!data) return;

          // Check if mobile
          const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

          if (isMobile && data.mobileUrl) {
            // Check if mobileUrl is a deep link (custom scheme, not http/https)
            const isDeepLink = /^[a-z]+:\/\//.test(data.mobileUrl) && !data.mobileUrl.startsWith('http');
            
            if (isDeepLink) {
              // Try to open mobile app using deep link
              // Use window.location.href which is more reliable for deep links
              const startTime = Date.now();
              window.location.href = data.mobileUrl;
              
              // Fallback to web if app doesn't open after a short delay
              // If the app opens, the page will lose focus and we won't execute the timeout
              setTimeout(() => {
                // Check if enough time has passed and we're still on the page
                const elapsed = Date.now() - startTime;
                if (elapsed > 500 && document.hasFocus()) {
                  // App didn't open, fallback to web
                  window.location.href = data.webUrl;
                }
              }, 2000);
            } else {
              // Mobile but using web URL - open directly
              window.open(data.webUrl, '_blank', 'noopener,noreferrer');
            }
          } else {
            // Desktop: open web
            window.open(data.webUrl, '_blank', 'noopener,noreferrer');
          }
        });
      });
    }, 100);
  }

  public getDeliveryLinks() {
    return this.deliveryLinks;
  }
}

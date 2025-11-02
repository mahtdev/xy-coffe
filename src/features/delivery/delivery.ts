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
      webUrl: 'https://www.ubereats.com/mx/store/xy/mU4OTSa-XWW29Ua5hEbe-w?diningMode=DELIVERY',
      mobileUrl: 'https://www.ubereats.com/mx/store/xy/mU4OTSa-XWW29Ua5hEbe-w?diningMode=DELIVERY',
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
          const data = this.deliveryLinks[index];
          if (!data) return;

          // Check if mobile
          const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

          if (isMobile && data.mobileUrl && data.mobileUrl !== data.webUrl) {
            // Try to open mobile app first
            const mobileLink = document.createElement('a');
            mobileLink.href = data.mobileUrl;
            mobileLink.style.display = 'none';
            document.body.appendChild(mobileLink);
            mobileLink.click();
            document.body.removeChild(mobileLink);

            // Fallback to web after short delay if app doesn't open
            setTimeout(() => {
              window.open(data.webUrl, '_blank');
            }, 1000);
          } else {
            // Desktop or same URL: open web
            e.preventDefault();
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

import { Contact, createContactHTML } from './features/contact';
import { createCookiesHTML } from './features/cookies';
import { Delivery, createDeliveryHTML } from './features/delivery';
import { Footer, createFooterHTML } from './features/footer';
import { Hero, createHeroHTML } from './features/hero';
import { Location, createLocationHTML } from './features/location';
import { Menu, createMenuHTML } from './features/menu';
import { Navigation, createNavigationHTML } from './features/navigation';
import { createPolicyHTML } from './features/policy';

export class App {
  private navigation: Navigation;
  private menu: Menu;
  private location: Location;
  private delivery: Delivery;
  private footer: Footer;

  constructor() {
    this.navigation = new Navigation();
    new Hero(); // Initialize hero for parallax effects
    this.menu = new Menu();
    this.location = new Location();
    this.delivery = new Delivery();
    new Contact(); // Initialize contact for form handling
    this.footer = new Footer();
  }

  public render(): string {
    const navHTML = createNavigationHTML(this.navigation.getNavLinks());
    const footerHTML = createFooterHTML(
      this.footer.getNavLinks(),
      this.footer.getSocialLinks(),
      this.footer.getFooterLinks()
    );

    return `
      <div id="mainPage">
        ${navHTML}
        ${createHeroHTML()}
        ${createMenuHTML(this.menu.getMenuData())}
        ${createLocationHTML(this.location.getLocationData())}
        ${createDeliveryHTML(this.delivery.getDeliveryLinks())}
        ${createContactHTML()}
        ${footerHTML}
        ${createCookiesHTML()}
      </div>
      <div id="policyPage" class="policy-page" style="display: none;">
        ${navHTML}
        ${createPolicyHTML()}
        ${footerHTML}
      </div>
    `;
  }
}

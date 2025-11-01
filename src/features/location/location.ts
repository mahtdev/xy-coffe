import type { LocationInfo } from '../../shared/types';
import { addScrollAnimation } from '../../shared/utils';
import './location.css';

export class Location {
  private locationCards: NodeListOf<Element>;

  private locationData: LocationInfo = {
    address: 'Cerrada San Vicente 304<br>Irapuato, LATAM<br>36558',
    hours: 'Lunes a Viernes: 8:00 AM - 11:00 PM',
    contact: 'Contacta con nosotros vía WhatsApp',
  };

  constructor() {
    this.locationCards = document.querySelectorAll('.location-card');
    this.init();
  }

  private init(): void {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations(): void {
    addScrollAnimation(Array.from(this.locationCards));
  }

  public getLocationData(): LocationInfo {
    return this.locationData;
  }
}

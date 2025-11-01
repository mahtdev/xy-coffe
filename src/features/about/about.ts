import type { Stat } from '../../shared/types';
import { addScrollAnimation } from '../../shared/utils';
import './about.css';

export class About {
  private aboutContent: HTMLElement | null;

  private statsData: Stat[] = [
    { number: '5K+', label: 'Clientes Felices' },
    { number: '15+', label: 'Variedades de Café' },
    { number: '100%', label: 'Orgánico' },
  ];

  constructor() {
    this.aboutContent = document.querySelector('.about-content');
    this.init();
  }

  private init(): void {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations(): void {
    if (this.aboutContent) {
      addScrollAnimation([this.aboutContent]);
    }
  }

  public getStatsData(): Stat[] {
    return this.statsData;
  }
}

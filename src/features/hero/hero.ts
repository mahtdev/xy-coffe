import { throttle } from '../../shared/utils';
import './hero.css';

export class Hero {
  private heroElement: HTMLElement | null;

  constructor() {
    this.heroElement = document.querySelector('.hero');
    this.init();
  }

  private init(): void {
    this.setupParallaxEffect();
  }

  private setupParallaxEffect(): void {
    const handleScroll = throttle(() => {
      const scrolled = window.pageYOffset;
      if (this.heroElement) {
        this.heroElement.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    }, 10);

    window.addEventListener('scroll', handleScroll);
  }
}

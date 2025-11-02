import { throttle, getPublicPath } from '../../shared/utils';
import './hero.css';

export class Hero {
  private heroElement: HTMLElement | null;

  constructor() {
    this.heroElement = document.querySelector('.hero');
    this.init();
  }

  private init(): void {
    this.setupBackgroundImage();
    this.setupParallaxEffect();
  }

  private setupBackgroundImage(): void {
    if (this.heroElement) {
      const backgroundImage = getPublicPath('fondo.webp');
      this.heroElement.style.backgroundImage = `url('${backgroundImage}')`;
    }
  }

  private setupParallaxEffect(): void {
    const handleScroll = throttle(() => {
      if (!this.heroElement) return;
      
      const scrolled = window.pageYOffset;
      const heroHeight = this.heroElement.offsetHeight;
      
      // Only apply parallax when hero is in viewport
      if (scrolled < heroHeight) {
        this.heroElement.style.transform = `translateY(${scrolled * 0.5}px)`;
      } else {
        // Reset transform when scrolled past hero to prevent overlap
        this.heroElement.style.transform = `translateY(${heroHeight * 0.5}px)`;
      }
    }, 10);

    window.addEventListener('scroll', handleScroll);
  }
}

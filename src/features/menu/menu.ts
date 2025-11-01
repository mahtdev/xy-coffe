import type { MenuCategory, MenuItem } from '../../shared/types';
import { addScrollAnimation } from '../../shared/utils';
import './menu.css';

export class Menu {
  private categoryButtons: NodeListOf<Element>;
  private menuItems: NodeListOf<Element>;

  private menuData: MenuItem[] = [
    {
      id: 'espresso',
      name: 'Espresso Clásico',
      description: 'Intenso y aromático, la base perfecta',
      price: '$3.50',
      category: 'caliente',
      emoji: '☕',
      gradient: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
    },
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      description: 'Espresso con espuma de leche sedosa',
      price: '$4.50',
      category: 'caliente',
      emoji: '🥛',
      gradient: 'linear-gradient(135deg, #A0522D 0%, #DEB887 100%)',
    },
    {
      id: 'latte',
      name: 'Latte',
      description: 'Suave y cremoso, nuestro favorito',
      price: '$4.75',
      category: 'caliente',
      emoji: '☕',
      gradient: 'linear-gradient(135deg, #6F4E37 0%, #C19A6B 100%)',
    },
    {
      id: 'cold-brew',
      name: 'Cold Brew',
      description: 'Café frío preparado en 24 horas',
      price: '$5.00',
      category: 'frio',
      emoji: '🧊',
      gradient: 'linear-gradient(135deg, #4A90E2 0%, #87CEEB 100%)',
    },
    {
      id: 'frappe',
      name: 'Frappé Caramelo',
      description: 'Bebida helada con caramelo y crema',
      price: '$5.50',
      category: 'frio',
      emoji: '❄️',
      gradient: 'linear-gradient(135deg, #5DADE2 0%, #AED6F1 100%)',
    },
    {
      id: 'matcha',
      name: 'Iced Matcha Latte',
      description: 'Té verde matcha con leche fría',
      price: '$5.25',
      category: 'frio',
      emoji: '🍃',
      gradient: 'linear-gradient(135deg, #48C9B0 0%, #76D7C4 100%)',
    },
    {
      id: 'xy-special',
      name: 'XY Special',
      description: 'Nuestra receta secreta premium',
      price: '$6.50',
      category: 'especial',
      emoji: '🌟',
      gradient: 'linear-gradient(135deg, #E74C3C 0%, #F1948A 100%)',
    },
    {
      id: 'mocha',
      name: 'Mocha Premium',
      description: 'Chocolate belga con espresso doble',
      price: '$5.75',
      category: 'especial',
      emoji: '🍫',
      gradient: 'linear-gradient(135deg, #9B59B6 0%, #BB8FCE 100%)',
    },
  ];

  constructor() {
    this.categoryButtons = document.querySelectorAll('.category-btn');
    this.menuItems = document.querySelectorAll('.menu-item');

    this.init();
  }

  private init(): void {
    this.setupCategoryFilter();
    this.setupScrollAnimations();
  }

  private setupCategoryFilter(): void {
    this.categoryButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        this.categoryButtons.forEach((btn) => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const category = button.getAttribute('data-category') as MenuCategory;
        this.filterMenuItems(category);
      });
    });
  }

  private filterMenuItems(category: MenuCategory): void {
    this.menuItems.forEach((item) => {
      const htmlItem = item as HTMLElement;
      if (
        category === 'all' ||
        item.getAttribute('data-category') === category
      ) {
        htmlItem.style.display = 'block';
        setTimeout(() => {
          htmlItem.style.opacity = '1';
          htmlItem.style.transform = 'scale(1)';
        }, 10);
      } else {
        htmlItem.style.opacity = '0';
        htmlItem.style.transform = 'scale(0.8)';
        setTimeout(() => {
          htmlItem.style.display = 'none';
        }, 300);
      }
    });
  }

  private setupScrollAnimations(): void {
    addScrollAnimation(Array.from(this.menuItems));
  }

  public getMenuData(): MenuItem[] {
    return this.menuData;
  }
}

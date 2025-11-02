import { App } from './app';
import { Cookies } from './features/cookies';
import { Hero } from './features/hero';
import { Policy } from './features/policy';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;
const coffeeApp = new App();

app.innerHTML = coffeeApp.render();

// Initialize hero after DOM is rendered
new Hero();

// Initialize cookies banner after DOM is rendered
new Cookies();

// Initialize policy page navigation
new Policy();

console.log('🎉 XY Coffee website loaded successfully!');

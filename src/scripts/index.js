import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import swRegister from './utils/sw-register';
import './custom-element/footer';
import App from './views/app';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});


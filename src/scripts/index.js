import 'regenerator-runtime'; /* for async await transpile */
import css from '../styles/main.scss';
// import '../styles/responsive.css';
import swRegister from './utils/sw-register';
// import './custom-element/footer';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

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

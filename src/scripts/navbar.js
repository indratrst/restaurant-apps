const menu = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  this.classList.toggle('active');
  drawer.classList.toggle('open');
  event.stopPropagation();
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});

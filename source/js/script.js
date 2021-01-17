const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const overlay = document.querySelector('.overlay');
const  modal = document.querySelector('.modal');
const  featuredButton = document.querySelector('.featured__button');
const  catalogButtons = document.querySelectorAll('.catalog-item__cart');

if (featuredButton) {
  featuredButton.addEventListener('click', function (event) {
  event.preventDefault();
  modal.classList.add('modal--show');
  overlay.classList.add('overlay--show');
  })
}

if (overlay) {
  overlay.addEventListener('click', function (event) {
  event.preventDefault();
    if (overlay.classList.contains('overlay--show')) {
      modal.classList.remove('modal--show');
      overlay.classList.remove('overlay--show');
    }
  })
}

if (catalogButtons) {
  for (let catalogButton of catalogButtons) {
    catalogButton.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.add('modal--show');
    overlay.classList.add('overlay--show');
    })
  }
}

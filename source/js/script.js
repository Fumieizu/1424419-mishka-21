//mobile navigation menu


const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

if (navMain.classList.contains('main-nav--opened')) {
  navMain.classList.remove('main-nav--opened');
  navMain.classList.add('main-nav--closed');
}

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

//modal popup

const overlay = document.querySelector('.overlay');
const  modal = document.querySelector('.modal');
const buttons = document.querySelectorAll('.js-modal');

if (buttons) {
  for (let button of buttons) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      modal.classList.add('modal--show');
      overlay.classList.add('overlay--show');
    })
  }
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

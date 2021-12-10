let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');
let modalNoButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let ctaButton = document.querySelector('.main-nav__item--cta');

// if used querySelectorAll('.backdrop') would get a NodeList (array-like), 1st instance would be in element 0

// console.log(backdrop);
// console.dir(backdrop); // shows it in object notation
// has many properties (& methods). We are insterested in 'style' property and it's properties
// but only shows inline styles (so won't show what classes are giving it)

// console.dir(selectPlanButtons);

//backdrop.style.display = 'block';

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', openModal);
}

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

backdrop.addEventListener('click', () => {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

toggleButton.addEventListener('click', () => {
  // mobileNav.style.display = 'block';
  mobileNav.classList.add('open');
  // backdrop.style.display = 'block';
  backdrop.classList.add('open');
})

// ctaButton.addEventListener('animationstart', function(event) {
//   console.log('Animation started', event);
// });

// ctaButton.addEventListener('animationend', function(event) {
//   console.log('Animation ended', event);
// });

// ctaButton.addEventListener('animationiteration', function(event) {
//   console.log('Animation iteration', event);
// });

function openModal() {
  // modal.style.display = 'block';
  // backdrop.style.display = 'block';
  // modal.className = 'open'; // this would override the complete class list
  modal.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(() => {backdrop.classList.add('open')}, 10);
}

function closeModal() {
  // modal.style.display = 'none';
  // backdrop.style.display = 'none';
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');

  setTimeout(() => {  backdrop.style.display = 'none';}, 1000); // should match .backdrop transition
}




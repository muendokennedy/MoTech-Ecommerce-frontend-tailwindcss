const accordion = document.querySelectorAll('.accordion-container .accordion');

accordion.forEach(accordion => {
  accordion.onclick = () => {
    accordion.classList.toggle('active');
    accordion.querySelector('.accordion i').classList.toggle('fa-minus');
    accordion.querySelector('.accordion i').classList.toggle('fa-plus');
  }
}); 


// Making the mobile menu work

const menubarBtn = document.getElementById('humbuger-btn');

const mobileMenu = document.querySelector('.mobile-menu-navigation-bar');

const mobileMenuToggler = document.querySelector('.menu-toggle');



function toggleMobileMenu(){
  mobileMenu.classList.toggle('active');
  menubarBtn.classList.toggle('fa-xmark');
}
// Toggling the mobile menu navigation bar by click the icon bar icon at the top
menubarBtn.onclick = () => {
  toggleMobileMenu();
}

// Optionally toggling the mobile menu by clicking outside the naviagation bar
mobileMenuToggler.onclick = () => {
  mobileMenu.classList.remove('active');
  menubarBtn.classList.remove('fa-xmark');
}

// Working of the home slider container

const homeSlides = document.querySelectorAll('.slide');

let slideIndex = 0;

function next(){
  // Remove the display active class from the current slide
  homeSlides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % homeSlides.length;
  homeSlides[slideIndex].classList.add('active');
}

function prev(){
  // Remove the display active class from the current slide
  homeSlides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex - 1 + homeSlides.length) % homeSlides.length;
  homeSlides[slideIndex].classList.add('active');
}

// call the next function after 6 seconds
setInterval(next, 4000);
console.log('The code up to here')
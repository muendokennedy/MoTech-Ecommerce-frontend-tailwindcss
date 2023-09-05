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
  toggleMobileMenu();
}
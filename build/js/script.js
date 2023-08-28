const accordion = document.querySelectorAll('.accordion-container .accordion');

accordion.forEach(accordion => {
  accordion.onclick = () => {
    accordion.classList.toggle('active');
    accordion.querySelector('.accordion i').classList.toggle('fa-minus');
    accordion.querySelector('.accordion i').classList.toggle('fa-plus');
  }
}); 
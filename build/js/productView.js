const heroImage = document.querySelector('.master-image img');

const smallImages = document.querySelectorAll('.small-image img');

smallImages.forEach((image) => {
  image.onclick = () => {
    heroImage.src = image.src;
  }
});
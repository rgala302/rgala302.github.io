document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery img');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  let currentIndex = 0;

  const showImage = (index) => {
    images.forEach((img) => img.classList.remove('active'));
    images[index].classList.add('active'); 
  };

  const showNextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  };

  const showPrevImage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  };

  leftArrow.addEventListener('click', () => showPrevImage()); 
  rightArrow.addEventListener('click', () => showNextImage());
});

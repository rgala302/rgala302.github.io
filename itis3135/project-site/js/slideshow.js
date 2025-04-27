const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const images = document.querySelectorAll('.gallery img');
let currentIndex = 0;

function showImage(index) {
  images.forEach(img => img.classList.remove('active'));
  if (images[index]) {
    images[index].classList.add('active');
  }
}

function moveLeft() {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
}

function moveRight() {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  showImage(currentIndex);
}

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

showImage(currentIndex);

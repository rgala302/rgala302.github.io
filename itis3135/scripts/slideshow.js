let slideIndex = 0;

function showSlide(index) {
  let slides = document.getElementsByClassName("mySlides");
  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

document.addEventListener("DOMContentLoaded", function() {
  showSlide(slideIndex);

  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);
  
  let thumbnails = document.querySelectorAll(".thumbnail-row img");
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener("click", function() {
      showSlide(i);
    });
  });
});

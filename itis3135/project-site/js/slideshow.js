let currentIndex = 0;
const images = document.querySelectorAll('.gallery img'); // Get all images in the gallery

// Function to show the next image
function showNextImage() {
  images[currentIndex].style.display = 'none'; // Hide the current image
  currentIndex = (currentIndex + 1) % images.length; // Move to the next image (loop back to the first image)
  images[currentIndex].style.display = 'block'; // Show the new image
}

// Initialize the slideshow
function initSlideshow() {
  images.forEach((img, index) => {
    if (index !== currentIndex) {
      img.style.display = 'none'; // Hide all images except the first one
    } else {
      img.style.display = 'block'; // Show the first image
    }
  });
  
  // Set an interval to switch images every 3 seconds
  setInterval(showNextImage, 3000);
}

// Call the initSlideshow function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initSlideshow);

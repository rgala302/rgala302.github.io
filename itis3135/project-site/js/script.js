// Add click event listeners to all article headers
document.querySelectorAll('article h3').forEach((header) => {
    header.addEventListener('click', () => {
      const article = header.parentElement;
      article.classList.toggle('active');
    });
  });
  
  // Activate the first article by default
  document.querySelector('article').classList.add('active');
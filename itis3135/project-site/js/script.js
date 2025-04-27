document.addEventListener('DOMContentLoaded', function () {
    const collapsibleArticles = document.querySelectorAll('.collapsible');
  
    collapsibleArticles.forEach((article) => {
        article.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.querySelector('p');
            if (content) {
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});

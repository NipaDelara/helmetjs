searchInput.addEventListener('keyup', function(event) {
   
    if (event.keyCode === 13) {
        performSearch();
    }
});


function performSearch() {
    var searchQuery = searchInput.value;
    console.log('Searching for:', searchQuery);
}


document.addEventListener('DOMContentLoaded', function() {
    // Get all anchor elements inside the footer menu
    const footerLinks = document.querySelectorAll('.footer-menu a');
  
    // Add smooth scroll behavior to anchor links
    footerLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  
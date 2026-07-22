// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Highlight active nav link
  const currentLocation = location.pathname;
  const menuItems = document.querySelectorAll('.nav-link');
  
  menuItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentLocation || (currentLocation === '/' && href === 'index.html') || (currentLocation.endsWith('/') && href === 'index.html')) {
      item.classList.add('active');
    }
  });

  // Mobile menu toggle
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (navbarToggler) {
    navbarToggler.addEventListener('click', function() {
      navbarCollapse.classList.toggle('show');
    });
  }

  // Close mobile menu when a link is clicked
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
});

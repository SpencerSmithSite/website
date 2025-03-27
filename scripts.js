// scripts.js

// Function to toggle the visibility of the navigation menu
function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu'); // Select the navigation menu
  navMenu.classList.toggle('show'); // Toggle the 'show' class to show/hide the menu
}

// Event listener to handle navigation link clicks
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a'); // Select all navigation links

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior
      const targetUrl = link.getAttribute('href'); // Get the URL from the link's href attribute
      window.location.href = targetUrl; // Navigate to the target URL
    });
  });
});

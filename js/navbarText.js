// navbarText.js

// Function to update the text based on window width
function updateNavText() {
  const navLink = document.querySelector('.navbar-brand');
  if (window.innerWidth <= 535) {
    navLink.textContent = 'EF';
  } else {
    navLink.textContent = 'Elvira Fagerholm';
  }
}

// Initial call to set the text on page load
updateNavText();

// Event listener to update text when window is resized
window.addEventListener('resize', updateNavText);

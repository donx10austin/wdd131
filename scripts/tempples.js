// Mobile menu toggle
const menuButton = document.getElementById('menuButton');
const mainNav = document.getElementById('mainNav');

menuButton.addEventListener('click', () => {
  const isOpen = mainNav.style.display === 'flex';
  mainNav.style.display = isOpen ? 'none' : 'flex';
});

// Footer info
document.getElementById('copyrightYear')
  .textContent = new Date().getFullYear();

document.getElementById('lastModified')
  .textContent = document.lastModified;
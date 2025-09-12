const menuButton = document.getElementById('menuButton');
const mainNav = document.getElementById('mainNav');

menuButton.addEventListener('click', () => {
  mainNav.classList.toggle('show');
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', !expanded);
});

document.getElementById('copyrightYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
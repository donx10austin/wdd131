document.addEventListener('DOMContentLoaded', () => {
  const cy = document.getElementById('copyrightYear');
  const lm = document.getElementById('lastModified');
  if (cy) cy.textContent = new Date().getFullYear();
  if (lm) lm.textContent = document.lastModified;
});
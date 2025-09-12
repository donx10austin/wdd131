document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('currentyear');
  const lmEl = document.getElementById('lastModified');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (lmEl) {
    const m = new Date(document.lastModified || Date.now());
    lmEl.textContent = `Last updated: ${m.toLocaleString(undefined, { dateStyle: 'long', timeStyle: 'short' })}`;
  }
});
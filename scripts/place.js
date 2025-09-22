// Display current year in the footer
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Display last modified date of the page
const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
  lastModifiedElement.textContent = document.lastModified;
}

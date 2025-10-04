// Display current year
const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Display last modified date in a nice format
const lastModified = document.getElementById('lastModified');
if (lastModified) {
  const modifiedDate = new Date(document.lastModified);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  lastModified.textContent = `Last Modified: ${modifiedDate.toLocaleDateString(undefined, options)}`;
}
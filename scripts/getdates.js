// Get the current year and set it in the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date of the document and format it
const lastModifiedDate = new Date(document.lastModified);
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};

const formattedDate = lastModifiedDate.toLocaleString('en-US', options);

document.getElementById('lastModified').textContent = `Last Modified: ${formattedDate}`;

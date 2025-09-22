document.addEventListener('DOMContentLoaded', (event) => {
    const lastModified = new Date(document.lastModified);
    const formattedDate = lastModified.toLocaleString('en-GB');
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last modified: ${formattedDate}`;
    }
});
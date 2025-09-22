document.addEventListener('DOMContentLoaded', (event) => {
    // Get the last modified date of the document
    const lastModified = new Date(document.lastModified);

    // Format the date to a more readable string (e.g., "DD/MM/YYYY HH:MM:SS")
    const formattedDate = lastModified.toLocaleString('en-GB');

    // Find the element with the ID 'last-modified' and update its text
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last modified: ${formattedDate}`;
    }
});

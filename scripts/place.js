/* JavaScript to update the last modified date */
const lastModifiedElement = document.getElementById('last-modified-date');
const lastModifiedDate = new Date(document.lastModified);

if (lastModifiedElement) {
    const formattedDate = lastModifiedDate.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    lastModifiedElement.textContent = formattedDate;
}
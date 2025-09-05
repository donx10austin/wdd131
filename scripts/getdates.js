document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const formattedDate = new Date(document.lastModified).toLocaleDateString('en-US', options);
        lastModifiedParagraph.textContent = `Last Modified: ${formattedDate}`;
    }
});
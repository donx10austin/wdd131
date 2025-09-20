document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedElement = document.getElementById('last-modified-date');
    if (lastModifiedElement) {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
        lastModifiedElement.textContent = formattedDate;
    }
});
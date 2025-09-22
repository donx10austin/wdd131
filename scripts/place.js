// Update the last modified date dynamically
document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedElem = document.getElementById('last-modified');
    if (lastModifiedElem) {
        const lastModified = new Date(document.lastModified);
        const formattedDate = lastModified.toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        lastModifiedElem.textContent = `Last modified: ${formattedDate}`;
    }

    // Temperature toggle example
    const tempElem = document.querySelector('.temperature');
    if (tempElem) {
        tempElem.style.cursor = 'pointer';
        tempElem.addEventListener('click', () => {
            let current = tempElem.textContent;
            if (current.includes('°C')) {
                let c = parseFloat(current);
                let f = (c * 9/5 + 32).toFixed(1);
                tempElem.textContent = `${f}°F`;
            } else {
                let f = parseFloat(current);
                let c = ((f - 32) * 5/9).toFixed(1);
                tempElem.textContent = `${c}°C`;
            }
        });
    }
});

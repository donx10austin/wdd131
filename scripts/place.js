// scripts/script.js

// Function to display the last modified date in the footer
function displayLastModifiedDate() {
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        // Get the last modified date of the document
        const lastModified = document.lastModified;
        
        // Format the date to a more readable format
        const date = new Date(lastModified);
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        
        // Update the element with the formatted date
        lastModifiedElement.textContent = formattedDate;
    }
}

// Execute the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', displayLastModifiedDate);
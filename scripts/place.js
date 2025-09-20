// Set last modified date in the format DD/MM/YYYY HH:MM:SS
function formatLastModified() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

document.getElementById('last-modified').textContent = formatLastModified();

// Add click event to the large image for interactivity
const largeImage = document.querySelector('.large-image');

largeImage.addEventListener('click', function() {
    // Create a modal to show the full-size image
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '1000';
    modal.style.cursor = 'pointer';
    
    // Create the image element for the modal
    const modalImage = document.createElement('img');
    modalImage.src = this.src.replace(/-\w+\.jpg/, '-large.jpg');
    modalImage.style.maxWidth = '90%';
    modalImage.style.maxHeight = '90%';
    modalImage.style.borderRadius = '8px';
    modalImage.style.boxShadow = '0 0 30px rgba(255,255,255,0.3)';
    
    modal.appendChild(modalImage);
    document.body.appendChild(modal);
    
    // Close modal when clicked
    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });
    
    // Add a caption to the modal
    const caption = document.createElement('div');
    caption.textContent = 'Eiffel Tower - Paris, France';
    caption.style.position = 'absolute';
    caption.style.bottom = '20px';
    caption.style.left = '0';
    caption.style.width = '100%';
    caption.style.textAlign = 'center';
    caption.style.color = 'white';
    caption.style.fontSize = '1.2rem';
    caption.style.textShadow = '0 2px 4px rgba(0,0,0,0.5)';
    
    modal.appendChild(caption);
});

// Add a notification when the page loads to demonstrate srcset
window.addEventListener('load', function() {
    // Check if srcset is supported
    const srcsetSupported = 'srcset' in document.createElement('img');
    
    if (srcsetSupported) {
        const notification = document.createElement('div');
        notification.textContent = 'Responsive images loaded using srcset!';
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
        notification.style.backgroundColor = '#1a237e';
        notification.style.color = 'white';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '1000';
        notification.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 3000);
    }
});
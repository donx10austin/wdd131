//
// JavaScript for Product Review Form (script.js)
//

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('review-form');
    const productNameSelect = document.getElementById('product-name');

    // Populate the Product Name dropdown (for realism)
    const products = [
        "Tech Gadget Pro",
        "Smart Home Hub X1",
        "Ergonomic Keyboard Deluxe",
        "Wireless Mouse 3000"
    ];

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.replace(/\s/g, '-').toLowerCase();
        option.textContent = product;
        productNameSelect.appendChild(option);
    });

    // Handle form submission
    form.addEventListener('submit', function(event) {
        let isValid = true;

        // 1. Basic validation: Check if a product is selected
        if (productNameSelect.value === "") {
            alert("Please select a Product Name before submitting the review.");
            productNameSelect.focus();
            isValid = false;
        }

        // 2. Prevent submission if invalid
        if (!isValid) {
            event.preventDefault();
            return;
        }

        // 3. Log data to console for testing purposes
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Handle multiple checkboxes
        data['useful-features'] = Array.from(form.querySelectorAll('input[name="useful-feature"]:checked'))
                                       .map(el => el.value);

        console.log("Form Submitted Successfully (simulated). Data:", data);
        
        // In a real application, you would use fetch(form.action, { method: form.method, body: JSON.stringify(data) }) here
        
        // Since the form action is set to 'review.html' in your HTML,
        // we allow the default action here after logging. 
        // If you were submitting via AJAX, you would call event.preventDefault() 
        // and handle the success/error message in the JS.
    });
});
// 1. MOCK DATA: New Product Array (as provided in the instructions)
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// 2. MOCK DATA: Array of useful features (No longer used to populate, but kept for reference)
const features = [
    "Durability", 
    "Ease of Setup", 
    "Battery Life", 
    "Ergonomics", 
    "Aesthetic Design"
];

// 3. Dynamic population functions
document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product-name');
    // const featuresContainer = document.getElementById('features-container'); // No longer needed for population

    // Populate Product Select (Use ID for value and NAME for display text)
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id; // Use ID for the option value
            // Capitalize the first letter of the product name for a professional look
            option.textContent = product.name.charAt(0).toUpperCase() + product.name.slice(1); 
            productSelect.appendChild(option);
        });
    }

    // *** The code to populate checkboxes was REMOVED as they are now hardcoded in HTML. ***
});
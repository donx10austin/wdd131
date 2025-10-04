// Product and Features Data
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const features = [
  "Durability",
  "Ease of Setup",
  "Battery Life",
  "Ergonomics",
  "Aesthetic Design"
];

// Populate dropdown and checkboxes
document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product-name");
  const featuresContainer = document.getElementById("features-container");

  // Add products
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  // Add features
  features.forEach((feature, index) => {
    const featureId = "feature-" + index;
    const checkboxHtml = `
      <div class="flex items-center">
        <input type="checkbox" id="${featureId}" name="feature" value="${feature}"
          class="h-4 w-4 text-primary-indigo border-gray-300 rounded focus:ring-primary-indigo">
        <label for="${featureId}" class="ml-3 text-sm font-medium text-gray-700">${feature}</label>
      </div>`;
    featuresContainer.insertAdjacentHTML("beforeend", checkboxHtml);
  });
});

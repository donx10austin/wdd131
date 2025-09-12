// ==========================
// Footer Date Management
// ==========================
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// ==========================
// Album Data
// ==========================
const temples = [
  { name: "San Diego Temple", location: "USA", image: "images/temple1.jpg", category: ["old", "large"] },
  { name: "Accra Temple", location: "Ghana", image: "images/temple2.jpg", category: ["old", "small"] },
  { name: "Manila Temple", location: "Philippines", image: "images/temple3.jpg", category: ["new", "large"] },
  { name: "Rome Temple", location: "Italy", image: "images/temple4.jpg", category: ["old", "large"] },
  { name: "Salt Lake Temple", location: "USA", image: "images/temple5.jpg", category: ["home", "large"] },
  { name: "Lagos Temple", location: "Nigeria", image: "images/temple6.jpg", category: ["new", "small", "home"] }
];

// ==========================
// Section Rendering Function
// ==========================
function renderSection(sectionId, filter) {
  const container = document.querySelector(`#${sectionId} .album-container`);
  container.innerHTML = "";

  const filtered = temples.filter(temple => temple.category.includes(filter));

  if (filtered.length === 0) {
    container.innerHTML = "<p>No temples in this category.</p>";
    return;
  }

  filtered.forEach(temple => {
    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.image;
    img.alt = `${temple.name}, ${temple.location}`;

    const caption = document.createElement("figcaption");
    caption.textContent = `${temple.name}, ${temple.location}`;

    figure.appendChild(img);
    figure.appendChild(caption);

    container.appendChild(figure);
  });
}

// ==========================
// Render All Sections
// ==========================
renderSection("home-temples", "home");
renderSection("old-temples", "old");
renderSection("new-temples", "new");
renderSection("large-temples", "large");
renderSection("small-temples", "small");
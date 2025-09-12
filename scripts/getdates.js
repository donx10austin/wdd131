// ==========================
// Footer Date Management
// ==========================

// Show current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Helper: add leading zero
const pad = (num) => (num < 10 ? "0" + num : num);

// Format last modified date
const lastModifiedDate = new Date(document.lastModified);
const formattedDate = `${lastModifiedDate.getFullYear()}-${pad(lastModifiedDate.getMonth() + 1)}-${pad(lastModifiedDate.getDate())} ${pad(lastModifiedDate.getHours())}:${pad(lastModifiedDate.getMinutes())}`;

// Insert into footer
document.getElementById("lastModified").textContent = `Last Modified: ${formattedDate}`;





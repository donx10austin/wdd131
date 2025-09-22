document.addEventListener("DOMContentLoaded", () => {
  const lastModified = new Date(document.lastModified);
  document.getElementById("lastModified").textContent =
    lastModified.toLocaleString();
});
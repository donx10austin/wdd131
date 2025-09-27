// script.js

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById("templeContainer");
  const navItems = document.querySelectorAll("nav li");

  const STUDENT_NAME = "Austin Anumudu";

  // Render function
  function renderTemples(list) {
    container.innerHTML = "";

    if (!list || list.length === 0) {
      container.innerHTML = `<p class="no-temples" style="text-align:center; font-weight:bold; color:#5a2a83;">No temples found for this filter.</p>`;
      return;
    }

    list.forEach(temple => {
      const card = document.createElement("div");
      card.className = "temple-card";
      card.innerHTML = `
        <h2>${escapeHtml(temple.templeName)}</h2>
        <p><span>Location:</span> ${escapeHtml(temple.location)}</p>
        <p><span>Dedicated:</span> ${escapeHtml(temple.dedicated)}</p>
        <p><span>Size:</span> ${Number(temple.area).toLocaleString()} sq ft</p>
        <img src="${escapeAttr(temple.imageUrl)}" alt="${escapeAttr(temple.templeName)}" loading="lazy">
      `;
      container.appendChild(card);
    });
  }

  // Simple escaping helpers (prevents accidental HTML injection)
  function escapeHtml(str = "") {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttr(str = "") {
    return escapeHtml(str).replace(/\n/g, " ");
  }

  // Initial render (requires temples array from temples.js)
  if (typeof temples === "undefined") {
    console.error("temples array not found — make sure temples.js is loaded before script.js");
    container.innerHTML = `<p style="text-align:center; color:#c0392b;">Error: temple data not loaded.</p>`;
  } else {
    renderTemples(temples);
  }

  // Filtering logic
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const filter = item.getAttribute("data-filter");
      navItems.forEach(nav => nav.classList.remove("active"));
      item.classList.add("active");

      let filtered = temples || [];

      if (filter === "old") {
        filtered = filtered.filter(t => {
          const year = parseInt(String(t.dedicated).split(",")[0], 10);
          return !isNaN(year) && year < 1900;
        });
      } else if (filter === "new") {
        filtered = filtered.filter(t => {
          const year = parseInt(String(t.dedicated).split(",")[0], 10);
          return !isNaN(year) && year > 2000;
        });
      } else if (filter === "large") {
        filtered = filtered.filter(t => Number(t.area) > 90000);
      } else if (filter === "small") {
        filtered = filtered.filter(t => Number(t.area) < 10000);
      } // 'home' just leaves filtered as all temples

      renderTemples(filtered);
    });
  });

  // Footer: year, lastModified, student name injection
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");
  const studentSpan = document.getElementById("studentName");

  // set year and lastModified where possible
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified || "Unknown";

  // Ensure student name is present — create/replace the first footer copyright <p> if needed
  if (studentSpan) {
    studentSpan.textContent = STUDENT_NAME;
  } else {
    // find the first <p> inside footer to inject the student name and year
    const footer = document.querySelector("footer");
    if (footer) {
      const firstP = footer.querySelector("p");
      if (firstP) {
        firstP.innerHTML = `&copy; <span id="year">${new Date().getFullYear()}</span> | <span id="studentName">${escapeHtml(STUDENT_NAME)}</span>`;
        // re-set lastModified if it exists in a second <p>
        if (!lastModifiedSpan) {
          const secondP = footer.querySelectorAll("p")[1];
          if (secondP) {
            secondP.innerHTML = `Last Modified: <span id="lastModified">${escapeHtml(document.lastModified || "Unknown")}</span>`;
          } else {
            // create a second <p>
            const p2 = document.createElement("p");
            p2.innerHTML = `Last Modified: <span id="lastModified">${escapeHtml(document.lastModified || "Unknown")}</span>`;
            footer.appendChild(p2);
          }
        }
      } else {
        // no <p> at all — create them
        const p1 = document.createElement("p");
        p1.innerHTML = `&copy; <span id="year">${new Date().getFullYear()}</span> | <span id="studentName">${escapeHtml(STUDENT_NAME)}</span>`;
        footer.appendChild(p1);
        const p2 = document.createElement("p");
        p2.innerHTML = `Last Modified: <span id="lastModified">${escapeHtml(document.lastModified || "Unknown")}</span>`;
        footer.appendChild(p2);
      }
    }
  }
});

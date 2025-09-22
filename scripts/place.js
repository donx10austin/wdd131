// Insert current year
document.getElementById("year").textContent = new Date().getFullYear();

// Insert last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// One-line Wind Chill function
function calculateWindChill(t, s) {
  return (t <= 10 && s > 4.8)
    ? (13.12 + 0.6215*t - 11.37*Math.pow(s,0.16) + 0.3965*t*Math.pow(s,0.16)).toFixed(1)
    : "N/A";
}

// Update wind chill only if conditions met
const t = parseFloat(document.getElementById("tempDisplay").textContent);
const s = parseFloat(document.getElementById("windDisplay").textContent);
document.getElementById("windchill").textContent = calculateWindChill(t, s);
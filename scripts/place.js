// ✅ Wind Chill Function (single line)
function calculateWindChill(t, v) {
  return (13.12 + 0.6215*t - 11.37*Math.pow(v,0.16) + 0.3965*t*Math.pow(v,0.16)).toFixed(1);
}

document.addEventListener("DOMContentLoaded", () => {
  const temp = parseFloat(document.querySelector("#tempDisplay").textContent);
  const wind = parseFloat(document.querySelector("#windDisplay").textContent);
  const windChillEl = document.querySelector("#windchill");

  // Only compute if conditions are met
  if (temp <= 10 && wind > 4.8) {
    windChillEl.textContent = calculateWindChill(temp, wind) + " °C";
  } else {
    windChillEl.textContent = "N/A";
  }

  // ✅ Footer year + last modified
  document.querySelector("#year").textContent = new Date().getFullYear();
  document.querySelector("#lastModified").textContent = document.lastModified;
});
✨ With this setup:
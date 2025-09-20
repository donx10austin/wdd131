// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Footer last modified
document.getElementById("lastModified").textContent = document.lastModified;

// Standalone wind chill function
function calculateWindChill(tempC, windKmh) {
  return (tempC <= 10 && windKmh > 4.8)
    ? (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)).toFixed(1)
    : "N/A";
}

// Static weather values
const temperature = 12;  // °C
const windSpeed = 8;     // km/h

window.addEventListener("DOMContentLoaded", () => {
  const windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById("windchill").textContent = windChill === "N/A" ? "N/A" : `${windChill} °C`;
});
// =============================
// Wind Chill Calculation (°C)
// =============================
function calculateWindChill(tempC, windKmh) {
  if (tempC <= 10 && windKmh > 4.8) {
    return (
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(windKmh, 0.16) +
      0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(1) + " °C";
  } else {
    return "N/A";
  }
}

// =============================
// Page Load
// =============================
document.addEventListener("DOMContentLoaded", () => {
  // Static example values
  let temperature = 10;  // °C
  let windSpeed = 5;     // km/h

  // Wind Chill
  document.querySelector("#windchill").textContent =
    calculateWindChill(temperature, windSpeed);

  // Footer Year + Last Modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});
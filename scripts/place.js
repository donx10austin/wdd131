// -------------------------------
// Footer: Current Year & Last Modified
// -------------------------------
const yearSpan = document.getElementById('current-year');
yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.getElementById('last-modified');
modifiedSpan.textContent = document.lastModified;

// -------------------------------
// Weather: Wind Chill Calculation
// -------------------------------

// Static values for temperature (°C) and wind speed (km/h)
const temperature = 32; // °C
const windSpeed = 15;   // km/h

// Single-line wind chill function
function calculateWindChill(tempC, windKmh) {
  return (tempC <= 10 && windKmh > 4.8) 
    ? (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windK


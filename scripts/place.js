// Show current year
document.getElementById("year").textContent = new Date().getFullYear();

// Show last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill calculation
function calculateWindChill(tempC, windKmh) {
  if (tempC <= 10 && windKmh > 4.8) {
    return (
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(windKmh, 0.16) +
      0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(1);
  } else {
    return "N/A";
  }
}

// Update wind chill
const temp = parseFloat(document.getElementById("tempDisplay").textContent);
const wind = parseFloat(document.getElementById("windDisplay").textContent);
document.getElementById("windchill").textContent = calculateWindChill(temp, wind);
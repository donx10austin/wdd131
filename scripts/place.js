// Display last modified date
document.addEventListener("DOMContentLoaded", () => {
  const lastModified = document.lastModified;
  document.getElementById("last-modified").textContent = lastModified;

  // Example wind chill calculation (dummy values)
  const temp = 32; // Celsius
  const wind = 8;  // km/h

  const windChill = calculateWindChill(temp, wind);
  document.getElementById("windchill").textContent = windChill ? `${windChill}°C` : "N/A";
});

// Wind chill formula (Celsius version, simplified)
function calculateWindChill(temp, windSpeed) {
  if (temp <= 10 && windSpeed > 4.8) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(windSpeed, 0.16) +
      0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
  }
  return null;
}


/* script.js
   - deferred in index.html
   - handles footer dates, wind chill calc, and previewing a country image
*/

/* ---------------------------
   calculateWindChill
   - This function returns the wind-chill calculation (one-line return).
   - Units:
      - Metric: tempC in °C, windKmh in km/h
      - Imperial: tempF in °F, windMph in mph
   - 'unit' argument can be "metric" or "imperial".
---------------------------- */
function calculateWindChill(temp, wind, unit = "metric") {
  if (unit === "metric") {
    // °C formula
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(wind, 0.16) +
      0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
  } else {
    // °F formula
    return (
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(wind, 0.16) +
      0.4275 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
  }
}

/* ---------------------------
   DOM Ready
---------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // --- Footer: current year + last modified
  const yearEl = document.getElementById("year");
  const lmEl = document.getElementById("lastModified");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (lmEl) lmEl.textContent = document.lastModified || "Unknown";

  // --- WEATHER: static values (assignment requirement)
  // ⚠️ Make sure these match the numbers in your HTML!
  const unit = "metric";   // change to "imperial" if needed
  const temperature = 10;  // °C if metric, °F if imperial
  const windSpeed = 5;     // km/h if metric, mph if imperial

  // Display static values in DOM
  const tempDisplay = document.getElementById("tempDisplay");
  const windDisplay = document.getElementById("windDisplay");
  if (tempDisplay) tempDisplay.textContent = temperature;
  if (windDisplay) windDisplay.textContent = windSpeed;

  // Wind Chill Viability Check
  const windchillEl = document.getElementById("windchill");
  if (windchillEl) {
    let viable = false;
    if (unit === "metric" && temperature <= 10 && windSpeed > 4.8) viable = true;
    if (unit === "imperial" && temperature <= 50 && windSpeed > 3) viable = true;

    if (viable) {
      const wc = calculateWindChill(temperature, windSpeed, unit);
      windchillEl.textContent = `${wc} °${unit === "metric" ? "C" : "F"}`;
    } else {
      windchillEl.textContent = "N/A";
    }
  }

  // --- COUNTRY IMAGE PREVIEW
  const countryFile = document.getElementById("countryFile");
  const countryImage = document.getElementById("countryImage");
  if (countryFile && countryImage) {
    countryFile.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        countryImage.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });
  }
});
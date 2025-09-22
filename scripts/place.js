// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {

  // 1️⃣ Update footer last modified
  const lastModified = document.lastModified;
  document.getElementById('last-modified').textContent = lastModified;

  // 2️⃣ Calculate wind chill
  function calculateWindChill(tempC, windKmh) {
    // Only calculate if temp <= 10°C and wind >= 4.8 km/h
    if (tempC <= 10 && windKmh >= 4.8) {
      // Metric wind chill formula
      const wc = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
      return Math.round(wc);
    } else {
      return 'N/A';
    }
  }

  // 3️⃣ Get temperature and wind elements
  const tempEl = document.getElementById('temperature');
  const windEl = document.getElementById('wind');
  const windChillEl = document.getElementById('windchill');

  // Convert displayed text to numbers
  const temp = parseFloat(tempEl.textContent);
  const wind = parseFloat(windEl.textContent);

  // 4️⃣ Set wind chill
  windChillEl.textContent = calculateWindChill(temp, wind) + (calculateWindChill(temp, wind) !== 'N/A' ? '°C' : '');
});



document.addEventListener('DOMContentLoaded', () => {
  // ✅ Dynamic copyright year
  const currentYear = new Date().getFullYear();
  document.getElementById('copyright').innerHTML =
    `&copy;${currentYear} Austin Anumudu | Nigeria`;

  // ✅ Last modified date
  document.getElementById('last-modified').textContent = document.lastModified;

  // ✅ Wind chill calculation
  const temperature = parseFloat(document.getElementById('temperature').textContent);
  const wind = parseFloat(document.getElementById('wind').textContent);
  const windchillEl = document.getElementById('windchill');

  function calculateWindChill(t, s) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
  }

  // Only run if conditions are met
  if (temperature <= 10 && wind > 4.8) {
    windchillEl.textContent = `${calculateWindChill(temperature, wind)} °C`;
  } else {
    windchillEl.textContent = "N/A";
  }
});


document.addEventListener('DOMContentLoaded', () => {
  // Last Modified Date
  const lastModified = document.lastModified;
  document.getElementById('last-modified').textContent = lastModified;

  // Wind chill calculation
  const tempText = document.getElementById('temperature').textContent;
  const temp = parseFloat(tempText.replace('°C', ''));
  const windSpeed = 8; // km/h

  let windChill = 'N/A';
  if (temp <= 10 && windSpeed > 4.8) {
    windChill = (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) 
                + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + '°C';
  }

  document.getElementById('windchill').textContent = windChill;
});


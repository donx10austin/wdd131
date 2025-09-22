// script.js

document.addEventListener("DOMContentLoaded", () => {
  // === 1. Update last modified date automatically ===
  const footer = document.querySelector("footer p");
  if (footer) {
    const lastModified = new Date(document.lastModified);
    const formattedDate = lastModified.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    footer.innerHTML = `©2024 🌸 Austin Anumudu 🌸 Nigeria<br>
    Last Modification: ${formattedDate}`;
  }

  // === 2. Example: make weather data dynamic ===
  const weatherData = {
    temperature: "10°C",
    condition: "Partly Cloudy",
    wind: "5 km/h",
    windChill: "9.8°C"
  };

  const weatherItems = document.querySelectorAll(".weather-card li");

  if (weatherItems.length > 0) {
    weatherItems[0].innerHTML = `<strong>Temperature:</strong> ${weatherData.temperature}`;
    weatherItems[1].innerHTML = `<strong>Conditions:</strong> ${weatherData.condition}`;
    weatherItems[2].innerHTML = `<strong>Wind:</strong> ${weatherData.wind}`;
    weatherItems[3].innerHTML = `<strong>Wind Chill:</strong> ${weatherData.windChill}`;
  }
});
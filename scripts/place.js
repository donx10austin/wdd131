// Update the last modified time to current time
document.addEventListener('DOMContentLoaded', function() {
    const lastModifiedElement = document.getElementById('last-modified');
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const formattedTime = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    lastModifiedElement.textContent = `Last modified: ${formattedDate} ${formattedTime}`;
});

// Add interactivity to data items
document.querySelectorAll('.data-item, .weather-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        this.style.paddingLeft = '5px';
        this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'transparent';
        this.style.paddingLeft = '0';
    });
});

// Simulate weather data updates
function updateWeatherData() {
    const temperatures = [9, 10, 11, 12];
    const conditions = ['Cloudy', 'Partly Cloudy', 'Sunny'];
    const windSpeeds = [4, 5, 6, 7];
    const humidity = [60, 65, 70, 75];
    
    const randomTemp = temperatures[Math.floor(Math.random() * temperatures.length)];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    const randomWind = windSpeeds[Math.floor(Math.random() * windSpeeds.length)];
    const randomHumidity = humidity[Math.floor(Math.random() * humidity.length)];
    
    document.querySelector('.temperature').textContent = `${randomTemp}°C`;
    document.querySelector('.weather-item:nth-child(1) span').textContent = randomCondition;
    document.querySelector('.weather-item:nth-child(2) span').textContent = `${randomWind} km/h`;
    document.querySelector('.weather-item:nth-child(4) span').textContent = `Humidity: ${randomHumidity}%`;
    
    // Update weather icon based on condition
    const weatherIcon = document.querySelector('.weather-icon i');
    if (randomCondition === 'Sunny') {
        weatherIcon.className = 'fas fa-sun';
    } else if (randomCondition === 'Partly Cloudy') {
        weatherIcon.className = 'fas fa-cloud-sun';
    } else {
        weatherIcon.className = 'fas fa-cloud';
    }
}

// Update weather every 30 seconds
setInterval(updateWeatherData, 30000);

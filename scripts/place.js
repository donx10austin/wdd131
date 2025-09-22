// Get the current year
const currentYear = new Date().getFullYear();
const yearSpan = document.getElementById('currentYear');
if (yearSpan) {
    yearSpan.textContent = currentYear;
}

// Get the last modified date of the document
const lastModifiedDate = document.lastModified;
const lastModifiedSpan = document.getElementById('lastModified');
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = lastModifiedDate;
}

// The function to calculate the windchill factor
function calculateWindchill(temp, wind) {
    // Check if the conditions for the windchill formula are met
    if (temp <= 50 && wind > 3.0) {
        // One-line return for the windchill calculation
        return Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16)));
    } else {
        // Return "N/A" if the conditions are not met
        return "N/A";
    }
}

// Define static variables for temperature and wind speed
// Matching the static values from the weather section content
const tempFahrenheit = 40;
const windSpeedMph = 10;

// Get the windchill factor
const windchillFactor = calculateWindchill(tempFahrenheit, windSpeedMph);

// Select the HTML element to display the windchill
const windchillElement = document.getElementById('windchillFactor');

// Display the windchill factor on the page
if (windchillElement) {
    windchillElement.textContent = windchillFactor;
}

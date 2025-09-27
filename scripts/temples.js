// JavaScript Logic for Data and Filtering

// UPDATED Array of temple objects with three new entries
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Kinshasa DRC",
    location: "Kinshasa, Democratic Republic of Congo",
    dedicated: "2019, April, 14",
    area: 37000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kinshasa-democratic-republic-of-congo/400x250/01-Kinshasa-DRC-Temple-2244247.jpg"
  },
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Hokkaido, Japan",
    dedicated: "2016, August, 21",
    area: 48480,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945115.jpg"
  },
  {
    templeName: "Oakland California",
    location: "Oakland, California, United States",
    dedicated: "1964, November, 17",
    area: 87948,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/400x250/oakland-temple-lds-801550-wallpaper.jpg"
  },
];

// Constants for filtering criteria (UPDATED)
const OLD_TEMPLES_YEAR = 1900;    // Old: before 1900
const NEW_TEMPLES_YEAR = 2000;    // New: after 2000
const LARGE_TEMPLES_AREA = 90000; // Large: larger than 90,000 sq ft
const SMALL_TEMPLES_AREA = 10000; // Small: smaller than 10,000 sq ft

// Get DOM elements
const gallery = document.getElementById('temple-gallery');
const pageTitle = document.querySelector('.page-title');
const navLinks = document.querySelectorAll('#mainNav a');

// Helper function to extract the year from the dedicated string (e.g., "2005, August, 7" -> 2005)
function getDedicatedYear(dedicatedString) {
    // The format is "YYYY, Month, Day"
    const year = dedicatedString.split(',')[0].trim();
    return parseInt(year);
}

// --- Core Functions ---

// Function to create and render the HTML for the gallery
const createTempleCards = (filteredTemples) => {
    gallery.innerHTML = ''; // Clear existing content

    filteredTemples.forEach(temple => {
        const figure = document.createElement('figure');
        
        // 1. Image
        const img = document.createElement('img');
        img.src = temple.imageUrl; 
        img.alt = temple.templeName;
        img.loading = 'lazy'; // Required Lazy loading 

        // 2. Caption
        const figcaption = document.createElement('figcaption');
        // Display location, full dedicated date, and area
        figcaption.innerHTML = `
            ${temple.templeName}<br>
            <small>Location: ${temple.location}<br>
            Dedicated: ${temple.dedicated}<br>
            Size: ${temple.area.toLocaleString()} sq ft</small>`;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    });
};

// Function to handle the actual filtering based on the data-filter attribute (UPDATED LOGIC)
const filterTemples = (filter) => {
    let filteredList = [];
    let title = '';

    switch (filter) {
        case 'all':
            filteredList = temples;
            title = 'All Temples (Home)';
            break;
        case 'old':
            // Temples built BEFORE 1900
            filteredList = temples.filter(t => t.dedicatedYear < OLD_TEMPLES_YEAR);
            title = `Dedicated Before ${OLD_TEMPLES_YEAR}`;
            break;
        case 'new':
            // Temples built AFTER 2000
            filteredList = temples.filter(t => t.dedicatedYear > NEW_TEMPLES_YEAR);
            title = `Dedicated After ${NEW_TEMPLES_YEAR}`;
            break;
        case 'large':
            // Temples LARGER THAN 90,000 sq ft
            filteredList = temples.filter(t => t.area > LARGE_TEMPLES_AREA);
            title = `Large Temples (Over ${LARGE_TEMPLES_AREA.toLocaleString()} sq ft)`;
            break;
        case 'small':
            // Temples SMALLER THAN 10,000 sq ft
            filteredList = temples.filter(t => t.area < SMALL_TEMPLES_AREA);
            title = `Smaller Temples (Under ${SMALL_TEMPLES_AREA.toLocaleString()} sq ft)`;
            break;
        default:
            filteredList = temples;
            title = 'All Temples';
            break;
    }
    
    // Handle case where no temples match the filter
    if (filteredList.length === 0) {
        gallery.innerHTML = `<p style="text-align: center; grid-column: 1 / -1; font-size: 1.2rem; color: #555;">No temples found for this filter criteria.</p>`;
        pageTitle.textContent = title;
        return;
    }

    // Update the page title and render the filtered list
    pageTitle.textContent = title;
    createTempleCards(filteredList);
};

// --- Event Listeners and Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Preprocess data to add a numeric year property for easy filtering
    temples.forEach(temple => {
        temple.dedicatedYear = getDedicatedYear(temple.dedicated);
    });
    
    // 2. Footer initialization
    const cy = document.getElementById('copyrightYear');
    const lm = document.getElementById('lastModified');
    
    // Ensuring valid JavaScript reference for footer output
    if (cy) cy.textContent = new Date().getFullYear();
    if (lm) lm.textContent = document.lastModified;

    // 3. Add click listener to all navigation links for filtering
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            
            // Get the filter type from the data-filter attribute
            const filterType = link.getAttribute('data-filter');
            filterTemples(filterType);

            // Update active link class for styling
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // 4. Initial load: Display all temples
    filterTemples('all'); 
});

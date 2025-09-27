// Array of Temple Objects (12 Entries)
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
    templeName: "Oakland California",
    location: "Oakland, California, United States",
    dedicated: "1964, November, 17",
    area: 87948,
    imageUrl:
    "https://raw.githubusercontent.com/donx10austin/oakland-temple-images/a50f9413a378586a85d10ba17aa3be2d4c9b52c9/oakland_california_temple.png"
  },
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Hokkaido, Japan",
    dedicated: "2016, August, 21",
    area: 48480,
    imageUrl:
    "https://raw.githubusercontent.com/donx10austin/sapparo-japan-temple/09f2d24661c40eb61e0adf966cddaa39aac69716/sapporo_japan_temple_night_photo.jpeg"
  },
  {
    templeName: "London England",
    location: "Newchapel, Surrey, England",
    dedicated: "1958, September, 7", 
    area: 46000, 
    imageUrl:
    "https://raw.githubusercontent.com/donx10austin/london-england-temple/149bc390e3c66bfed2304f4974e8b53af92d061c/london_england_temple_lds.jpeg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl:
    "https://raw.githubusercontent.com/donx10austin/rome-italy-temple/4535843a6dd6322ab9a1184651d34864596c4e4a/rome_italy_temple.jpeg"
  },
  {
    templeName: "Hartford Connecticut",
    location: "Farmington, Connecticut, United States",
    dedicated: "2016, November, 20",
    area: 32000,
    imageUrl:
    "https://raw.githubusercontent.com/donx10austin/hartford-connecticut-temple/090ba5f4133321f8fee305cf15e728db4189c0ad/hartford_connecticut_temples_exterior_steeples_clouds.jpeg"
  },
];

// Constants for filtering criteria
const OLD_TEMPLES_YEAR = 1900;    
const NEW_TEMPLES_YEAR = 2000;    
const LARGE_TEMPLES_AREA = 90000; 
const SMALL_TEMPLES_AREA = 10000; 

// Get DOM elements
const gallery = document.getElementById('temple-gallery');
const pageTitle = document.querySelector('.page-title');
const navLinks = document.querySelectorAll('#mainNav a');

// Helper function to extract the dedication year as a number
function getDedicatedYear(dedicatedString) {
    const year = dedicatedString.split(',')[0].trim();
    return parseInt(year);
}

// Function to create and render the HTML for the gallery
const createTempleCards = (filteredTemples) => {
    gallery.innerHTML = '';

    filteredTemples.forEach(temple => {
        // Create the figure element for the temple card
        const figure = document.createElement('figure');
        
        // 1. Image
        const img = document.createElement('img');
        img.src = temple.imageUrl; 
        img.alt = temple.templeName;
        img.loading = 'lazy'; // Enables native lazy loading

        // 2. Caption
        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area.toLocaleString()} sq ft</p>`;

        // Assemble the card
        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    });
};


const filterTemples = (filter) => {
    let filteredList = [];
    let title = '';

    switch (filter) {
        case 'all':
            filteredList = temples;
            title = 'All Temples (Home)';
            break;
        case 'old':
            filteredList = temples.filter(t => t.dedicatedYear < OLD_TEMPLES_YEAR);
            title = `Dedicated Before ${OLD_TEMPLES_YEAR}`;
            break;
        case 'new':
            filteredList = temples.filter(t => t.dedicatedYear > NEW_TEMPLES_YEAR);
            title = `Dedicated After ${NEW_TEMPLES_YEAR}`;
            break;
        case 'large':
            filteredList = temples.filter(t => t.area > LARGE_TEMPLES_AREA);
            title = `Large Temples (Over ${LARGE_TEMPLES_AREA.toLocaleString()} sq ft)`;
            break;
        case 'small':
            filteredList = temples.filter(t => t.area < SMALL_TEMPLES_AREA);
            title = `Smaller Temples (Under ${SMALL_TEMPLES_AREA.toLocaleString()} sq ft)`;
            break;
        default:
            filteredList = temples;
            title = 'All Temples';
            break;
    }
    
    
    if (filteredList.length === 0) {
        gallery.innerHTML = `<p class="no-temples-message">No temples found for this filter criteria.</p>`;
        pageTitle.textContent = title;
        return;
    }

    pageTitle.textContent = title;
    createTempleCards(filteredList);
};



document.addEventListener('DOMContentLoaded', () => {
    
    
    temples.forEach(temple => {
        temple.dedicatedYear = getDedicatedYear(temple.dedicated);
    });
    
    
    const cy = document.getElementById('copyrightYear');
    const lm = document.getElementById('lastModified');
    
    if (cy) cy.textContent = new Date().getFullYear();
    if (lm) lm.textContent = document.lastModified;

   
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            const filterType = link.getAttribute('data-filter');
            filterTemples(filterType);

            
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

   
    filterTemples('all'); 
});

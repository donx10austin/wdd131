


const currentYear = new Date().getFullYear();

const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
    yearSpan.textContent = currentYear;
}


const lastModified = document.lastModified;

const lastModifiedPara = document.getElementById('lastModified');
if (lastModifiedPara) {
    lastModifiedPara.textContent = `Last Modified: ${lastModified}`;
}






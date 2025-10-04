// Smooth scroll for navigation links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // adjust for sticky header height
            behavior: "smooth"
        });
    });
});

// Simple form submission message
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset(); // clears the form
});
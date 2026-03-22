// Mobile Menu Toggle
function toggleMenu() {
    document.querySelector("nav").classList.toggle("active");
}

// Dark / Light Mode
function toggleTheme() {
    document.body.classList.toggle("light");
}

// Active Navbar Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

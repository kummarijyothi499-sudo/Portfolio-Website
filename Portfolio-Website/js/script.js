// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});
// =========================
// TYPING ANIMATION
// =========================

const typingText = document.getElementById("typing-text");

const words = [
    "Software Developer",
    "Web Developer",
    "Python Programmer",
    "CSE Student"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {
        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;
    } else {
        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;
    }

    let speed = deleting ? 60 : 100;

    if (!deleting && characterIndex === currentWord.length) {
        speed = 1500;
        deleting = true;
    }

    else if (deleting && characterIndex === 0) {
        deleting = false;
        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
// =========================
// SCROLL ANIMATION
// =========================

const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .certificate-card, .about-content, .contact-container"
);

function revealOnScroll() {

    animatedElements.forEach(function (element) {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
// =========================
// DARK MODE
// =========================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});
// =========================
// BACK TO TOP BUTTON
// =========================

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
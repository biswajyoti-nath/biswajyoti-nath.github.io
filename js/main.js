// ===================================
// Lenis Smooth Scroll Initialization
// ===================================

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    smooth: true,
    smoothTouch: false
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// ===================================
// Feather Icons Initialization
// ===================================

window.addEventListener("DOMContentLoaded", () => {
    if (window.feather) feather.replace();
});


// ===================================
// Mobile Navigation Toggle
// ===================================

const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".nav-links");

if (mobileToggle && navLinks) {

    mobileToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        mobileToggle.classList.toggle("active");
        document.body.classList.toggle("nav-open");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            mobileToggle.classList.remove("active");
            document.body.classList.remove("nav-open");
        });
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            navLinks.classList.remove("active");
            mobileToggle.classList.remove("active");
            document.body.classList.remove("nav-open");
        }
    });
}


// ===================================
// Fade-in Scroll Animations
// ===================================

const observer = new IntersectionObserver((entries, obs) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));


// ===================================
// Navigation Highlight + Section Glow
// ===================================

const sections = document.querySelectorAll("section[id]");
const navLinksArray = document.querySelectorAll(".nav-links a");

function highlightNavigation(scrollY) {

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            navLinksArray.forEach(link => link.classList.remove("active"));
            sections.forEach(sec => sec.classList.remove("active"));

            const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            if (activeLink) activeLink.classList.add("active");

            section.classList.add("active");
        }

    });

}


// ===================================
// Scroll Progress Bar
// ===================================

function updateScrollProgress() {

    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / height) * 100;

    const bar = document.getElementById("scroll-progress");
    if (bar) bar.style.width = progress + "%";
}


// ===================================
// Auto Hide Navbar (Mobile)
// ===================================

const navbar = document.querySelector(".nav");
let lastScroll = 0;

function handleNavbarVisibility(scrollY) {

    if (window.innerWidth > 768) return;
    if (document.body.classList.contains("nav-open")) return;

    if (scrollY > lastScroll && scrollY > 120) {
        navbar.classList.add("nav-hidden");
    } else {
        navbar.classList.remove("nav-hidden");
    }

    lastScroll = scrollY;
}


// ===================================
// Back To Top Button
// ===================================

const backToTop = document.getElementById("backToTop");

function handleBackToTop(scrollY) {

    if (!backToTop) return;

    if (scrollY > 300) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }

}

if (backToTop) {
    backToTop.addEventListener("click", () => {
        lenis.scrollTo(0, { duration: 1.2 });
    });
}


// ===================================
// Lenis Scroll Event Hub
// ===================================

lenis.on("scroll", ({ scroll }) => {

    highlightNavigation(scroll);
    handleNavbarVisibility(scroll);
    handleBackToTop(scroll);
    updateScrollProgress();

});


// ===================================
// Smooth Anchor Scrolling
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", (e) => {

        const href = link.getAttribute("href");

        if (href !== "#" && href.startsWith("#")) {

            const target = document.getElementById(href.substring(1));

            if (target) {

                e.preventDefault();

                const navHeight = document.querySelector(".nav").offsetHeight;

                lenis.scrollTo(target, {
                    offset: -navHeight,
                    duration: 1
                });

            }

        }

    });

});

// ===================================
// Visitor Counter (CountAPI)
// ===================================

const visitCounter = document.getElementById("visit-counter");

if (visitCounter) {

    fetch("https://api.countapi.xyz/hit/biswajyoti-nath-portfolio-2968/visits")

    .then(res => res.json())

    .then(data => {
    visitCounter.textContent = `visitor #${data.value} connected`;
    })

    .catch(() => {
    visitCounter.textContent = "connection established";
    });

}


// ===================================
// Session Timer
// ===================================

const sessionTimer = document.getElementById("session-time");

if (sessionTimer) {

let seconds = 0;

setInterval(() => {

seconds++;

const mins = Math.floor(seconds / 60);
const secs = seconds % 60;

const formatted =
String(mins).padStart(2,"0") + ":" +
String(secs).padStart(2,"0");

sessionTimer.textContent = `session started: ${formatted}`;

}, 1000);

}

// ===================================
// Console Branding
// ===================================

console.log(
    "%cBiswajyoti Nath Portfolio",
    "color:#00d9ff;font-size:18px;font-weight:bold;"
);

console.log(
    "%cCybersecurity & Quantum Cryptography",
    "color:#a0a0a0;font-size:13px;"
);

// ================================
// Visitor Counter
// ================================

document.addEventListener("DOMContentLoaded", () => {

const visitCounter = document.getElementById("visit-counter");

if(!visitCounter) return;

fetch("https://api.countapi.xyz/hit/biswajyoti-nath-portfolio/visits")

.then(response => response.json())

.then(data => {
visitCounter.textContent = `visitor #${data.value} connection established`;
})

.catch(() => {
visitCounter.textContent = "visitor connected";
});

});
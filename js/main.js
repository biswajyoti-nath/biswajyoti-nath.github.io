// ===================================
// Lenis Smooth Scroll Initialization
// ===================================

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true,
    smoothTouch: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ===================================
// Feather Icons Initialization
// ===================================

window.addEventListener('DOMContentLoaded', () => {
    if (window.feather) {
        feather.replace();
    }
});

// ===================================
// Mobile Navigation Toggle
// ===================================

const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileToggle && navLinks) {

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    });

    // Close menu when clicking nav link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.classList.remove('nav-open');
        });
    });

    // Close menu with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    });
}

// ===================================
// Scroll Animations (Fade In)
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observerInstance.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ===================================
// Active Navigation Highlight
// (Lenis-synced scroll detection)
// ===================================

const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-links a');

function highlightNavigation() {

    if (!sections.length) return;

    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksArray.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Sync with Lenis scroll
lenis.on('scroll', highlightNavigation);

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {

        const href = link.getAttribute('href');

        if (href !== '#' && href.startsWith('#')) {

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();

                const navHeight = document.querySelector('.nav').offsetHeight;

                lenis.scrollTo(targetElement, {
                    offset: -navHeight,
                    duration: 1
                });
            }
        }
    });
});

// ===================================
// Console Branding
// ===================================

console.log(
    '%cBiswajyoti Nath Portfolio',
    'color: #00d9ff; font-size: 18px; font-weight: bold;'
);

console.log(
    '%cCybersecurity & Quantum Cryptography',
    'color: #a0a0a0; font-size: 13px;'
);
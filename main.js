// Quantum Neon Portfolio - JS

// Typing Effect 
const typingText = "Quantum Cryptography Enthusiast | Randomness Explorer | Cybersecurity Learner"; 
const typingElement = document.getElementById("typing"); 
let index = 0;

function typeEffect() { 
    if (index < typingText.length) { 
        typingElement.textContent += typingText.charAt(index); 
        index++; 
        setTimeout(typeEffect, 75);
    } 
} 
typeEffect();

// Theme Toggle 
const themeToggle = document.getElementById("theme-toggle"); 
const body = document.body;

themeToggle.addEventListener("click", () => { 
    body.classList.toggle("light-theme"); 
});

// Scroll Reveal Animations 
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => { 
    entries.forEach(entry => { 
        if (entry.isIntersecting) { 
            entry.target.classList.add("visible");
        } 
    }); 
}, { 
    threshold: 0.15 
});

sections.forEach(section => { 
    observer.observe(section); 
});
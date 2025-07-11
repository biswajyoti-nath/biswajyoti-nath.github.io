// Quantum Neon Portfolio - Enhanced JS

// Typing Effect 
const typingText = "Aspiring Researcher in Quantum Cybersecurity | Quantum Randomness Explorer | Science Communicator"; 
const typingElement = document.getElementById("typing"); 
let index = 0;

function typeEffect() { if (index < typingText.length) { typingElement.textContent += typingText.charAt(index); index++; setTimeout(typeEffect, 75); } } typeEffect();

// Theme Toggle 
const themeToggle = document.getElementById("theme-toggle"); 
const body = document.body;

function updateThemeButton() { 
    if (body.classList.contains("light-theme")) { 
        themeToggle.textContent = "🌙 Go Dark"; 
    } 
    else { 
        themeToggle.textContent = "☀️ Go Light"; 
    } 
}

// Initial Button Label 
updateThemeButton();

themeToggle.addEventListener("click", () => { 
    body.classList.toggle("light-theme"); 
    updateThemeButton(); 
});

// Scroll Reveal Animations 
const sections = document.querySelectorAll(".section, .card");

const observer = new IntersectionObserver(entries => { 
    entries.forEach(entry => { 
        if (entry.isIntersecting) { 
            entry.target.classList.add("visible"); 
        } 
    }); 
}, { 
    threshold: 0.1 
});

sections.forEach(section => { observer.observe(section); });
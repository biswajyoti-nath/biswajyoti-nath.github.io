// Quantum Neon Portfolio - Enhanced JS

// Typing Effect 
const typingText = "💻 Computer Science Undergraduate.\n🔏 Aspiring Researcher in Quantum Security\n🧑‍💻 Locked-In Coder"; 
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


// Responsive Scroll Reveal Animations with Staggered Delay
const sections = document.querySelectorAll(".section");

const baseDelay = window.innerWidth < 768 ? 50 : 150;

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, index * baseDelay);
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => {
  observer.observe(section);
});

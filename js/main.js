// js/main.js - Option B: Modern Minimal + Slight Neon

// Typing effect (faster, crisp)
const typingText = "🔏 Research-aware engineer — building software, security tools, and exploration prototypes.\n📚 Interests: Systems, Cybersecurity, Web Engineering, Quantum-aware ideas.";
const typingEl = document.getElementById("typing");
let tIdx = 0;
const TYPE_SPEED = 35; // lower = faster
const LOOP = false;

function typeTick() {
  if (!typingEl) return;
  if (tIdx < typingText.length) {
    typingEl.textContent += typingText.charAt(tIdx++);
    setTimeout(typeTick, TYPE_SPEED);
  } else if (LOOP) {
    setTimeout(() => { typingEl.textContent = ""; tIdx = 0; typeTick(); }, 900);
  }
}
typeTick();

// Theme toggle + persistence
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function updateThemeButton() {
  const light = body.classList.contains('light-theme');
  themeToggle.textContent = light ? '🌙 Go Dark' : '☀️ Go Light';
  themeToggle.setAttribute('aria-pressed', light ? 'true' : 'false');
}

(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') body.classList.add('light-theme');
  else if (saved === 'dark') body.classList.remove('light-theme');
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    body.classList.add('light-theme');
  }
  updateThemeButton();
})();

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
  updateThemeButton();
});

// Scroll reveal with per-element data-delay, fast
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced) {
  const sections = document.querySelectorAll('.section');
  const baseDelay = window.innerWidth < 768 ? 20 : 40;

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const custom = parseInt(el.dataset.delay || 0, 10);
        const delay = custom || baseDelay;
        setTimeout(() => {
          el.classList.add('visible');
          observer.unobserve(el);
        }, delay);
      }
    });
  }, { threshold: 0.12 });

  sections.forEach((s, i) => {
    if (!s.dataset.delay) s.dataset.delay = (i % 6) * baseDelay;
    obs.observe(s);
  });

  // keep delays stable on resize (debounced)
  let rt = null;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => {}, 200);
  });
} else {
  document.querySelectorAll('.section').forEach(s => s.classList.add('visible'));
}

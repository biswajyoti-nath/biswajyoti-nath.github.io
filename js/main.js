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

// Scroll-highlight navigation (updates nav link active state)
(function initNavHighlight() {
  const navLinks = document.querySelectorAll('.nav-link');
  if (!navLinks.length) return;

  // Map target id -> nav link
  const linkMap = {};
  navLinks.forEach(a => linkMap[a.dataset.target] = a);

  // Sections to observe (must exist in DOM)
  const sectionIds = ['about','skills','research','projects','contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  // Safety: if no sections found, abort
  if (!sections.length) return;

  // IntersectionObserver options tuned for section highlighting
  const obsOptions = {
    root: null,
    rootMargin: '0px 0px -40% 0px', // triggers when section top crosses ~60% viewport
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = linkMap[id];
      if (!link) return;
      if (entry.isIntersecting) {
        // remove active from all then set this one
        document.querySelectorAll('.nav-link.active').forEach(n => {
          n.classList.remove('active'); n.removeAttribute('aria-current');
        });
        link.classList.add('active'); link.setAttribute('aria-current','true');
      }
    });
  }, obsOptions);

  sections.forEach(s => observer.observe(s));

  // Also support click -> smooth scroll + immediate active state
  navLinks.forEach(a => {
    a.addEventListener('click', (e) => {
      // let default anchor behavior (smooth scroll) occur; update active state immediately
      navLinks.forEach(n => { n.classList.remove('active'); n.removeAttribute('aria-current'); });
      a.classList.add('active'); a.setAttribute('aria-current','true');
    });
  });
})();
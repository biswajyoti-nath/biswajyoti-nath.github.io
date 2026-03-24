# Biswajyoti Nath — Systems & Research Portfolio

A high-performance, strictly structured developer portfolio engineered for the presentation of Machine Learning pipelines and Quantum Cryptography research.

Built with an aggressive focus on clean systems-architecture aesthetics, semantic typography, and WebGL optimization.

## Architecture & Stack
- **Frontend Framework:** React 18, Vite
- **Styling:** Tailwind CSS (Strict Monochrome + `#00f5ff` Accents)
- **Motion & Physics:** Framer Motion, `@splinetool/react-spline`
- **Typography:** Custom Monospace mappings and highly structured hierarchies
- **Deployment:** GitHub Pages (SPA strict static routing)

## Design Philosophy (The "5-Second System")
This portfolio strips away common visual clutter, glossy animations, and dense UI navbars in favor of a single-column focal point architecture:
1. **Hero Initialization:** Terminal-based sequence visually masking the WebGL load time.
2. **Visual Hierarchy:** Dominant typography paired cleanly with a responsive, hardware-accelerated 3D Spline scene.
3. **Applied Systems View:** Projects are framed as "Architectures" and "Applied Inferences" rather than basic feature lists, utilizing a highly optimized, un-laggy Bento Grid.

## Local Development Initialization

```bash
# 1. Clone the repository
git clone https://github.com/biswajyoti-nath/biswajyoti-nath.github.io.git
cd biswajyoti-nath.github.io

# 2. Install dependencies
npm install

# 3. Initialize the development server
npm run dev
```

## Build & Deployment
The system is configured for automated deployment via GitHub Pages using the `dist/` directory output.

```bash
# Generate the minified production build
npm run build

# Preview the minified output locally
npm run preview
```

## Internal Performance Optimizations
- **Hardware Acceleration:** Critical rendering paths run strictly on the GPU via `transform-gpu` and `will-change-transform`.
- **WebGL Segregation:** The active 3D Spline scene is decoupled from the main thread via React `<Suspense>` and `lazy` imports to prevent TTI (Time to Interactive) degradation.
- **Paint Thrashing Mitigated:** Refactored complex box-shadows over the Spline canvas into structural CSS borders, verifying a locked 60 FPS scroll velocity even on mobile.

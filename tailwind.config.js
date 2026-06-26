/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--cream-300)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: {
          50: "var(--cream-50)",
          100: "var(--cream-100)",
          200: "var(--cream-200)",
          300: "var(--cream-300)",
        },
        caramel: {
          DEFAULT: "var(--caramel)",
          dark: "var(--caramel-dark)",
        },
        coffee: {
          light: "var(--coffee-light)",
          DEFAULT: "var(--coffee)",
        },
        espresso: "var(--espresso)",
        "warm-white": "var(--warm-white)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Lora", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "letter-space": {
          "0%": { letterSpacing: "normal" },
          "100%": { letterSpacing: "0.025em" },
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        "fade-in-up-delayed": "fade-in-up 1s ease-out 0.4s forwards",
        "letter-space": "letter-space 3s ease-out forwards",
      }
    },
  },
  plugins: [],
}

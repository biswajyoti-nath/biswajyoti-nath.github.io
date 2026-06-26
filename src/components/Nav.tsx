import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { profile } from "../data/profile";
import { motion, AnimatePresence } from "framer-motion";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Research", href: "#research" },
    { name: "Publications", href: "#publications" },
    { name: "Open Source", href: "#open-source" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/60 backdrop-blur-md border-b border-white/50 py-3 shadow-ambient"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-[1088px] mx-auto px-6 md:px-8 flex items-center justify-between relative z-50">
        <a
          href="#"
          className="text-espresso font-sans font-medium text-lg tracking-tight hover:text-caramel transition-colors"
        >
          {profile.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-coffee-light hover:text-caramel text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-espresso p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-white/50 py-2 px-6 flex flex-col shadow-[0_20px_40px_rgba(140,90,53,0.15)]"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 + 0.1 }}
                key={link.name}
                href={link.href}
                className="text-coffee-light hover:text-caramel text-base font-medium py-4 border-b border-caramel/10 last:border-0 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { profile } from "../data/profile";
import { Button } from "../components/ui/Button";
import { Magnetic } from "../components/ui/Magnetic";
import { StaggeredText } from "../components/ui/StaggeredText";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const [firstName, lastName] = profile.name.split(" ");
  
  const { scrollYProgress } = useScroll();
  const avatarY = useTransform(scrollYProgress, [0, 0.2], [0, 80]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16 md:pt-20 md:pb-0"
    >
      {/* Subtle math grid background element */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.08] animate-pan-grid"
        style={{
          backgroundImage: 'linear-gradient(var(--coffee) 1px, transparent 1px), linear-gradient(90deg, var(--coffee) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 70% 50%, black, transparent 60%)'
        }}
      />

      <div className="max-w-[1088px] mx-auto px-6 md:px-8 w-full flex flex-col md:grid md:grid-cols-[1fr,auto] gap-8 md:gap-12 items-center">

        {/* Profile Image (Desktop only) */}
        <div className="hidden md:flex order-last w-full justify-end">
          <motion.div style={{ y: avatarY }} className="relative w-[28rem] group perspective-1000 mt-0">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-full h-auto object-contain rounded-[2rem] drop-shadow-[0_0_40px_rgba(196,154,108,0.15)] transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:drop-shadow-[0_20px_40px_rgba(196,154,108,0.3)] group-hover:scale-[1.02]"
            />
          </motion.div>
        </div>

          {/* Text Content */}
        <div className="max-w-2xl w-full text-center md:text-left flex flex-col items-center md:items-start pt-8 md:pt-0">
          <div className="mb-6 md:mb-8 flex flex-col items-center md:items-start md:flex-row gap-4">
            <motion.img 
              style={{ y: avatarY }}
              src={profile.avatar} 
              alt={profile.name} 
              className="w-28 h-28 sm:w-32 sm:h-32 object-contain md:hidden opacity-0 animate-fade-in-up rounded-3xl"
            />
            <span className="text-[0.7rem] sm:text-xs md:text-sm font-semibold tracking-wider text-caramel-dark uppercase opacity-0 animate-fade-in-up text-center md:text-left">
              {profile.role} <span className="hidden sm:inline">·</span><span className="sm:hidden"><br/></span> {profile.institution}
            </span>
          </div>

          <h1 className="text-[clamp(3.2rem,10vw,7.5rem)] leading-[1.2] font-serif mb-6 md:mb-8 w-full drop-shadow-sm">
            <StaggeredText text={firstName} className="block text-espresso pb-3 md:pb-4" />
            <StaggeredText text={lastName} className="block text-espresso pb-3 md:pb-4" />
          </h1>

          <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-caramel-dark font-semibold mb-6 opacity-0 animate-fade-in-up-delayed px-4 md:px-0" style={{ animationDelay: '0.5s' }}>
            {profile.location}
          </p>

          <p className="text-base sm:text-lg md:text-xl text-coffee mb-8 max-w-[640px] leading-relaxed opacity-0 animate-fade-in-up-delayed px-4 md:px-0" style={{ animationDelay: '0.6s' }}>
            {profile.tagline}
          </p>

          <div className="flex items-start gap-3.5 bg-cream-100/50 backdrop-blur-sm border border-caramel/20 rounded-2xl p-4 md:p-5 mb-10 max-w-[640px] mx-4 md:mx-0 opacity-0 animate-fade-in-up-delayed" style={{ animationDelay: '0.7s' }}>
            <span className="relative flex h-3 w-3 mt-1.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <div className="text-left">
              <p className="text-xs font-bold text-espresso uppercase tracking-wider mb-1">{profile.status.label}</p>
              <p className="text-sm md:text-base text-coffee-light italic leading-relaxed">{profile.status.text}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full sm:w-auto gap-4 opacity-0 animate-fade-in-up-delayed" style={{ animationDelay: '0.8s' }}>
            <Magnetic>
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#research" className="group">
                  Read Research <span className="inline-block transition-transform duration-300 group-hover:translate-y-1 ml-1">&darr;</span>
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href={profile.cvPath} target="_blank" rel="noopener noreferrer" className="group">
                  Download CV <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ml-1">↗</span>
                </a>
              </Button>
            </Magnetic>
            <div className="flex items-center justify-center gap-3 mt-2 sm:mt-0 sm:ml-2">
              {profile.socials.map((social) => (
                <Magnetic key={social.label}>
                  <Button asChild variant="ghost" size="icon">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                    >
                      {social.label === "GitHub" && (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      )}
                      {social.label === "LinkedIn" && (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      )}
                      {social.label === "ORCID" && (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.44h2.381c2.616 0 3.778-1.584 3.778-3.719 0-1.922-1.059-3.722-3.872-3.722h-2.287z" />
                        </svg>
                      )}
                    </a>
                  </Button>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

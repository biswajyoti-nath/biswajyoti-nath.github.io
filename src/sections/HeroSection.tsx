import { Github, Linkedin, ArrowUpRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { SplineScene } from "../components/ui/spline-scene";
import { profile } from "../data/profile";

interface HeroSectionProps {
  isLoaded: boolean;
}

export function HeroSection({ isLoaded }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen flex border-b border-white/5 overflow-hidden">
      {/* Ambient grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,245,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-10 opacity-30 transform-gpu" />

      {/* Spline background — SplineScene handles its own Suspense internally */}
      <div className="absolute right-0 top-0 w-full md:w-[75%] h-full z-0 opacity-100 pointer-events-none md:pointer-events-auto will-change-transform transform-gpu">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 md:via-transparent to-transparent z-10 pointer-events-none" />
        {isLoaded && (
          <ErrorBoundary fallback={<div className="w-full h-full bg-black" />}>
            <SplineScene
              scene={profile.splineScene}
              className="w-full h-full brightness-110 contrast-125"
            />
          </ErrorBoundary>
        )}
        {/* Watermark blocker */}
        <div className="absolute bottom-0 right-0 w-40 h-16 bg-black z-50 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col justify-center pt-20 pb-20 md:pt-0 md:pb-0 h-full max-w-7xl">
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 border border-white/10 bg-black/40 px-4 py-2 text-xs text-neutral-300 backdrop-blur-md w-fit font-mono rounded-md shadow-2xl"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            {profile.badge}
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl pb-2 leading-none uppercase"
          >
            {profile.nameDisplay.first.slice(0, 5)}
            <span className="opacity-90">{profile.nameDisplay.first.slice(5)}</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {profile.nameDisplay.last}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-start gap-4 border-l border-cyan-500/30 pl-6"
          >
            <p className="text-lg md:text-xl text-neutral-400 max-w-md leading-relaxed font-mono">
              Building resilient <span className="text-white">ML infrastructure</span> &amp;
              researching adversarial randomness in the{" "}
              <span className="text-cyan-200">quantum era</span>.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-3 pt-6"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 font-mono text-sm rounded hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(0,245,255,0.05)] hover:shadow-[0_0_30px_rgba(0,245,255,0.2)]"
            >
              <span className="tracking-wider font-semibold">INITIALIZE_SYSTEM</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href={profile.cvPath}
              download
              aria-label="Download CV as PDF"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-neutral-300 font-mono text-sm rounded hover:bg-white/10 hover:border-white/30 hover:text-white transition-all"
            >
              <span className="tracking-wider font-semibold">DOWNLOAD_CV</span>
              <Download className="w-4 h-4" />
            </a>
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className="p-3 rounded border border-white/5 bg-black/40 hover:bg-white/5 transition-colors backdrop-blur-md"
              >
                {social.label === "GitHub" ? (
                  <Github className="w-5 h-5 text-neutral-400 hover:text-white transition-colors" />
                ) : (
                  <Linkedin className="w-5 h-5 text-neutral-400 hover:text-white transition-colors" />
                )}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { profile } from "../data/profile";

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-24 bg-black border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
        <h3 className="text-xs font-mono text-cyan-500 mb-8 uppercase tracking-widest">
          {">"} SYSTEM_INIT_
        </h3>
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-sans text-white leading-tight tracking-tight">
            {profile.headline}
          </h2>
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed font-mono">
            {profile.bio}
          </p>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Terminal, Code2, BookOpen, Shield, Award } from "lucide-react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  projects,
  capabilities,
  publication,
  researchFraming,
  certifications,
} from "../data/projects";

export function ProjectsSection() {
  return (
    <section className="relative w-full py-32 bg-black border-b border-white/5" id="projects">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h3 className="text-xs font-mono text-cyan-500 mb-4 uppercase tracking-widest">
            {">"} DEPLOYMENTS_AND_RESEARCH_
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-white uppercase">
            APPLIED SYSTEMS.
          </h2>
        </div>

        <BentoGrid className="h-full">
          {/* System Architectures */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-2 bg-[#050505] border-white/5 hover:border-white/10"
            title={<span className="text-lg font-bold text-neutral-200">System Architectures</span>}
            icon={<Terminal className="w-5 h-5 text-neutral-500" />}
            description={
              <div className="flex flex-col gap-3 mt-6">
                {projects.map((project) => (
                  <a
                    key={project.title}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-lg bg-black border border-white/5 hover:border-cyan-500/30 transition-colors group"
                  >
                    <div className="flex justify-between items-start">
                      <strong className="text-neutral-200 font-medium text-sm">{project.title}</strong>
                      <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{project.description}</p>
                  </a>
                ))}
              </div>
            }
          />

          {/* Core Capabilities */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-1 bg-[#050505] border-white/5 hover:border-white/10"
            title={<span className="text-neutral-200 font-medium">Core Capabilities</span>}
            icon={<Code2 className="w-5 h-5 text-neutral-500" />}
            description={
              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-neutral-400 font-mono">
                {capabilities.map((cap) => (
                  <span key={cap} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-cyan-500 rounded-full" />
                    {cap}
                  </span>
                ))}
              </div>
            }
          />

          {/* Publication */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-3 bg-[#0a0a0a] border-white/10 relative overflow-hidden group"
            title={<span className="text-2xl font-bold text-white tracking-tight">{publication.title}</span>}
            icon={<BookOpen className="w-5 h-5 text-neutral-400" />}
            description={
              <div className="flex flex-col h-full mt-6 justify-between relative z-10">
                <div>
                  <span className="inline-block px-2 py-1 bg-white/5 text-neutral-300 border border-white/10 rounded-md text-[10px] font-mono tracking-wider uppercase mb-6">
                    {publication.venue}
                  </span>
                  <p className="text-sm text-neutral-400 leading-relaxed max-w-[90%] mb-4">
                    {publication.description}
                  </p>
                  <div className="mt-6 p-4 bg-black/50 border border-white/5 rounded-lg">
                    <span className="text-[10px] text-neutral-500 font-mono">
                      DOI_REF: {publication.doi}
                    </span>
                  </div>
                </div>
                <div className="mt-8">
                  <a
                    href={publication.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2 bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400 px-6 py-3 rounded transition-all w-full text-sm font-mono font-semibold tracking-wider shadow-[0_0_20px_rgba(0,245,255,0.05)] hover:shadow-[0_0_30px_rgba(0,245,255,0.2)]"
                  >
                    ACCESS_PAPER{" "}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </a>
                </div>
              </div>
            }
          />

          {/* Research Framing */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-1 bg-[#050505] border-white/5 hover:border-white/10"
            title={<span className="text-neutral-200 font-medium">Research Framing</span>}
            icon={<Shield className="w-5 h-5 text-neutral-500" />}
            description={
              <div className="mt-4 text-xs text-neutral-400 leading-relaxed">
                <p className="mb-3 text-neutral-200 font-medium">{researchFraming.title}</p>
                <p className="text-[11px] text-neutral-500">{researchFraming.description}</p>
              </div>
            }
          />

          {/* Certifications */}
          <BentoGridItem
            className="md:col-span-1 md:row-span-2 bg-[#050505]"
            title={<span className="text-neutral-200 font-medium">Certifications</span>}
            icon={<Award className="w-5 h-5 text-cyan-400" />}
            description={
              <div className="mt-4 flex flex-col gap-3">
                {certifications.map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-lg border border-cyan-500/10 bg-black hover:border-cyan-400/40 hover:shadow-[0_0_12px_rgba(0,255,255,0.08)] transition-all"
                  >
                    {cert.img ? (
                      <img
                        src={cert.img}
                        alt={cert.title}
                        width={40}
                        height={40}
                        loading="lazy"
                        className="w-10 h-10 rounded object-contain bg-white/5 p-1 border border-white/10 flex-shrink-0"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <Code2 className="w-5 h-5 text-cyan-400" />
                      </div>
                    )}
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors truncate">
                        {cert.title}
                      </span>
                      <span className="text-[10px] text-cyan-500/70 font-mono mt-0.5">
                        {cert.issuer}
                        {cert.ongoing ? " · Ongoing" : ""}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-cyan-400 flex-shrink-0 transition-colors" />
                  </a>
                ))}
              </div>
            }
          />
        </BentoGrid>
      </div>
    </section>
  );
}

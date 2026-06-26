import { appliedProjects } from "../data/research";
import { SectionLabel } from "../components/ui/SectionLabel";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";
import { ScrollRevealText } from "../components/ui/ScrollRevealText";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

export function ProjectsSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-[1088px] mx-auto px-6 md:px-8">
          <RevealOnScroll>
            <div className="mb-16">
              <SectionLabel>Applied Projects</SectionLabel>
              <ScrollRevealText className="text-4xl font-serif text-espresso justify-center">Engineering & Systems</ScrollRevealText>
            </div>
          </RevealOnScroll>

          <div className="space-y-16">
            {appliedProjects.map((project, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150}>
                <div 
                  className="bg-white/20 backdrop-blur-xl backdrop-saturate-150 rounded-[32px] border border-white/60 shadow-ambient overflow-hidden group hover:bg-white/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgb(140,90,53,0.25)] transition-all duration-500"
                >
                  <div className="p-10 md:p-14">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-espresso mb-2 group-hover:text-caramel transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-coffee-light font-medium text-lg">
                          {project.subtitle}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 md:justify-end max-w-sm">
                        {project.tech.map(tech => (
                          <Tag key={tech} className="bg-cream-100 border border-cream-200">{tech}</Tag>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      {project.description.split('**').filter(Boolean).reduce((acc, part, i, arr) => {
                        if (i % 2 === 0) {
                          acc.push(
                            <div key={i} className="mb-4 last:mb-0">
                              <span className="block font-bold text-xs tracking-wider uppercase text-caramel-dark mb-1">{part.replace(':', '')}</span>
                              <span className="text-coffee leading-relaxed block">{arr[i+1]}</span>
                            </div>
                          );
                        }
                        return acc;
                      }, [] as JSX.Element[])}
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-espresso uppercase tracking-wider mb-4">Engineering Highlights</h4>
                      <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                        {project.highlights.map((highlight, hIdx) => (
                          <RevealOnScroll key={hIdx} delay={hIdx * 100}>
                            <li className="flex items-start text-coffee text-sm">
                              <span className="text-caramel mr-3 mt-1 opacity-70 group-hover:opacity-100 transition-opacity">•</span>
                              {highlight}
                            </li>
                          </RevealOnScroll>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 pt-6 border-t border-cream-200">
                      {project.demo && (
                        <Button asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="group/btn">
                            Live Demo <span className="inline-block transition-transform duration-300 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 ml-1">↗</span>
                          </a>
                        </Button>
                      )}
                      {project.href && (
                        <Button asChild variant="outline">
                          <a href={project.href} target="_blank" rel="noopener noreferrer" className="gap-2 group/btn">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            View Repository <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1 ml-1">&rarr;</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
      </div>
    </section>
  );
}

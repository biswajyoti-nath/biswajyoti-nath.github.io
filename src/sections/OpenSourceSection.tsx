import { openSource } from "../data/research";
import { SectionLabel } from "../components/ui/SectionLabel";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";
import { ScrollRevealText } from "../components/ui/ScrollRevealText";
import { Tag } from "../components/ui/Tag";
import { Button } from "../components/ui/Button";

export function OpenSourceSection() {
  return (
    <section id="open-source" className="py-24 relative">
      <div className="max-w-[1088px] mx-auto px-6 md:px-8">
          <RevealOnScroll>
            <div className="mb-12">
              <SectionLabel>Open Source</SectionLabel>
              <ScrollRevealText className="text-4xl font-serif text-espresso justify-center">Research Software & Tools</ScrollRevealText>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {openSource.map((project, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150} className="h-full">
                <div 
                  className="flex flex-col p-8 bg-white/20 backdrop-blur-xl backdrop-saturate-150 rounded-2xl border border-white/60 shadow-sm hover:border-white/80 hover:bg-white/30 hover:-translate-y-2 hover:shadow-ambient transition-all duration-300 h-full group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-espresso group-hover:text-caramel transition-colors">
                      {project.title}
                    </h3>
                    <Tag>{project.language}</Tag>
                  </div>
                  
                  <div className="flex-grow mb-8 text-sm">
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
                  
                  <div className="mt-auto">
                    <Button asChild variant="outline" className="w-full sm:w-auto">
                      <a href={project.href} target="_blank" rel="noopener noreferrer" className="gap-2 group/btn">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                        View on GitHub <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1 ml-1">&rarr;</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
      </div>
    </section>
  );
}

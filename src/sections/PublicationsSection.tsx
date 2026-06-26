import { publications } from "../data/research";
import { profile } from "../data/profile";
import { SectionLabel } from "../components/ui/SectionLabel";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 relative">
      <div className="max-w-[1088px] mx-auto px-6 md:px-8">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <SectionLabel>Publications</SectionLabel>
                <h2 className="text-4xl font-serif text-espresso">Preprints & Papers</h2>
              </div>
            </div>
          </RevealOnScroll>

          <div className="space-y-16">
            {publications.map((pub, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150}>
                <div 
                  className="group flex flex-col md:flex-row gap-6 md:gap-12 bg-white/20 backdrop-blur-xl backdrop-saturate-150 rounded-[32px] border border-white/60 shadow-ambient p-8 md:p-10 hover:-translate-y-2 hover:bg-white/30 hover:shadow-[0_12px_40px_rgb(140,90,53,0.18)] transition-all duration-500"
                >
                  <div className="md:w-32 flex-shrink-0 pt-1 relative">
                    <span className="font-mono text-xl text-cream-300 group-hover:text-caramel transition-colors">
                      {pub.year}
                    </span>
                    <div className="hidden md:block absolute top-8 left-6 w-[1px] h-[calc(100%+3rem)] bg-gradient-to-b from-cream-300/50 to-transparent"></div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl font-semibold text-espresso group-hover:text-caramel transition-colors">
                        {pub.title}
                      </h3>
                      {pub.isPrevious && (
                        <span className="shrink-0 text-xs font-medium px-2.5 py-1 bg-cream-200 text-coffee-light rounded-full uppercase tracking-wider">
                          Previous Research
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-mono text-coffee-light mb-6">
                      <span>{pub.venue}</span>
                      <span>·</span>
                      <a href={pub.href} target="_blank" rel="noopener noreferrer" className="hover:text-caramel transition-colors">
                        doi:{pub.doi.split("zenodo.")[1]}
                      </a>
                    </div>
                    
                    <details className="group/details">
                      <summary className="cursor-pointer text-sm font-medium text-caramel hover:text-caramel-dark mb-4 select-none list-none flex items-center gap-1">
                        <svg className="w-4 h-4 transition-transform group-open/details:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        Abstract
                      </summary>
                      <p className="text-coffee leading-relaxed text-sm mb-6 pl-5 border-l-2 border-cream-200">
                        {pub.abstract}
                      </p>
                    </details>
                    
                    <a 
                      href={pub.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-espresso hover:text-caramel transition-colors group/link"
                    >
                      Read Paper 
                      <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          
          {profile.zenodo && (
            <RevealOnScroll delay={300}>
              <div className="mt-12 text-center">
                <a 
                  href={profile.zenodo}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-coffee-light hover:text-caramel transition-colors border-b border-transparent hover:border-caramel pb-0.5"
                >
                  View all records on Zenodo →
                </a>
              </div>
            </RevealOnScroll>
          )}
      </div>
    </section>
  );
}

import { publications } from "../data/research";
import { SectionLabel } from "../components/ui/SectionLabel";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";
import { Button } from "../components/ui/Button";

export function FeaturedPaperSection() {
  const featured = publications[0];

  return (
    <section className="py-24 relative">
      <div className="max-w-[1088px] mx-auto px-6 md:px-8">
        <RevealOnScroll>
          <SectionLabel>Featured Research</SectionLabel>
          
          <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-24 items-center mt-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-serif font-medium text-espresso italic mb-6 leading-tight">
                {featured.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-coffee-light font-mono mb-8">
                <span>{featured.venue}</span>
                <span>·</span>
                <a href={featured.href} className="hover:text-caramel transition-colors" target="_blank" rel="noopener noreferrer">
                  doi:{featured.doi.split("zenodo.")[1]}
                </a>
              </div>
              
              <p className="text-coffee leading-relaxed mb-6">
                A controlled empirical study on constrained operator representations in symbolic regression. Quantified structural effects including node inflation, depth increase, and task-dependent inductive biases under constrained operator grammars. Built a reproducible evolutionary pipeline with strict numeric validation and multi-trial evaluation.
              </p>
              
              <div className="mb-10">
                <h4 className="text-sm font-semibold text-espresso uppercase tracking-wider mb-4">Key Findings</h4>
                <ul className="space-y-3">
                  {[
                    "Constrained grammars induce systematic node inflation",
                    "Depth increases are task-dependent, not uniform",
                    "Rejection-aware evaluation reveals throughput bottlenecks"
                  ].map((finding, idx) => (
                    <li key={idx} className="flex items-start text-coffee text-sm">
                      <span className="text-caramel mr-3 mt-1">•</span>
                      {finding}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <a href={featured.href} target="_blank" rel="noopener noreferrer">
                    Read Full Paper ↗
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://github.com/biswajyoti-nath/eml-framework" target="_blank" rel="noopener noreferrer">
                    View Source Code ↗
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Abstract Decorative Element */}
            <div className="hidden md:flex justify-center items-center p-12 bg-white/20 backdrop-blur-xl backdrop-saturate-150 rounded-[32px] border border-white/60 shadow-ambient">
              <svg viewBox="0 0 200 200" className="w-full h-auto text-cream-300" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="100" cy="40" r="12" className="text-caramel" fill="currentColor" />
                
                <path d="M100 52 L60 100" />
                <path d="M100 52 L140 100" />
                
                <circle cx="60" cy="112" r="12" />
                <circle cx="140" cy="112" r="12" />
                
                <path d="M60 124 L40 160" />
                <path d="M60 124 L80 160" />
                
                <circle cx="40" cy="172" r="12" />
                <circle cx="80" cy="172" r="12" />
                
                <path d="M140 124 L140 160" />
                <circle cx="140" cy="172" r="12" />
              </svg>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

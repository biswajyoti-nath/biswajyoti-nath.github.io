import { useState } from "react";
import { publications } from "../data/research";
import { SectionLabel } from "../components/ui/SectionLabel";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";
import { Button } from "../components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";

export function FeaturedPaperSection() {
  const featured = publications[0];
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleDashboardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      window.location.href = "/EML_Export/index.html";
      return;
    }
    
    setIsTransitioning(true);
    setTimeout(() => {
      window.location.href = "/EML_Export/index.html";
    }, 400); // 400ms matches the wipe animation duration
  };

  return (
    <>
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
                
                <div className="flex flex-wrap gap-4 mb-8">
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

                {/* Elevated Action Area for the Dashboard */}
                <div className="bg-caramel/5 border border-caramel/20 rounded-2xl p-6 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-caramel/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-espresso mb-1">Dive into the Data</h4>
                      <p className="text-sm text-coffee-light">Explore interactive charts, metrics, and the raw dataset.</p>
                    </div>
                    <a 
                      href="/EML_Export/index.html" 
                      onClick={handleDashboardClick}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-espresso text-cream-50 rounded-full text-sm font-semibold hover:bg-caramel-dark transition-colors shadow-sm whitespace-nowrap group-hover:shadow-md"
                    >
                      Enter Dashboard 
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
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

      {/* Full Screen Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[9999] bg-cream-50 pointer-events-auto flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="w-12 h-12 rounded-full border-4 border-caramel border-t-transparent animate-spin"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

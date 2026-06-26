import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { timeline } from "../data/research";
import { SectionLabel } from "../components/ui/SectionLabel";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";
import { ScrollRevealText } from "../components/ui/ScrollRevealText";

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-24 relative">
      <div className="max-w-[1088px] mx-auto px-6 md:px-8">
          <RevealOnScroll>
            <div className="mb-16 md:text-center flex flex-col items-center">
              <SectionLabel>Timeline</SectionLabel>
              <ScrollRevealText className="text-4xl font-serif text-espresso justify-center">Milestones</ScrollRevealText>
            </div>
          </RevealOnScroll>

          <div ref={containerRef} className="relative max-w-3xl mx-auto">
            {/* Background Line (Faint) */}
            <div className="absolute left-[15px] md:left-1/2 -translate-x-1/2 top-6 bottom-4 w-[2px] bg-caramel/10 rounded-full" />
            
            {/* Scroll-Driven Active Line */}
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute left-[15px] md:left-1/2 -translate-x-1/2 top-6 bottom-4 w-[3px] bg-gradient-to-b from-caramel via-caramel-dark to-transparent rounded-full shadow-[0_0_12px_rgba(140,90,53,0.6)] z-10" 
            />

            <div className="space-y-12">
              {timeline.map((entry, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <RevealOnScroll key={idx} delay={idx * 150} className="relative flex items-center md:justify-between w-full group">
                    {/* Dot */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.8, 1] }}
                      viewport={{ once: true, margin: "-20%" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute left-[15px] md:left-1/2 -translate-x-1/2 w-[9px] h-[9px] bg-caramel rounded-full shadow-[0_0_0_4px_var(--cream-50)] transition-colors duration-300 group-hover:bg-caramel-dark group-hover:shadow-[0_0_0_4px_var(--cream-100)] z-20" 
                    />
                    
                    {/* Content (Mobile: all left, Desktop: alternate) */}
                    <div className={`w-full ml-12 md:w-[calc(50%-2.5rem)] ${
                      isEven 
                        ? 'md:ml-0 md:mr-auto md:text-right' 
                        : 'md:ml-auto md:text-left'
                    }`}>
                      <div className="flex flex-col gap-1 p-4 rounded-2xl border border-transparent transition-all duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-xl group-hover:backdrop-saturate-150 group-hover:border-white/60 group-hover:shadow-sm">
                        <span className="font-mono text-sm text-caramel-dark font-medium">
                          {entry.year}
                        </span>
                        <h3 className="text-lg font-medium text-espresso group-hover:text-caramel transition-colors">
                          {entry.title}
                        </h3>
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
      </div>
    </section>
  );
}

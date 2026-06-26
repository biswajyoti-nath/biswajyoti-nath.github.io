import { focusAreas } from "../data/research";
import { SectionLabel } from "../components/ui/SectionLabel";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";

export function ResearchFocusSection() {
  return (
    <section id="research" className="py-24 relative">
      <div className="max-w-[1088px] mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-[1fr,2fr] gap-12 md:gap-24">
          <RevealOnScroll>
            <div>
              <SectionLabel>Research Focus</SectionLabel>
              <h3 className="text-4xl font-serif text-espresso leading-tight">
                Investigating the foundations of automated scientific discovery.
              </h3>
            </div>
          </RevealOnScroll>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {focusAreas.map((area, idx) => (
              <RevealOnScroll key={area.title} delay={idx * 150} className="h-full">
                <div
                  className="bg-white/40 backdrop-blur-sm p-8 rounded-2xl shadow-sm relative overflow-hidden group hover:-translate-y-1 hover:shadow-ambient transition-all duration-300 h-full border border-white/50"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-caramel opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h4 className="text-lg font-semibold text-espresso mb-3">
                    {area.title}
                  </h4>
                  <p className="text-coffee text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

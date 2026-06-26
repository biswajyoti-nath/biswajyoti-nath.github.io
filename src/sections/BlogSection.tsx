import { blogPosts } from "../data/research";
import { SectionLabel } from "../components/ui/SectionLabel";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";

export function BlogSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-[1088px] mx-auto px-6 md:px-8">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <SectionLabel>Writing</SectionLabel>
              <h2 className="text-4xl font-serif text-espresso">Research Notes</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, idx) => (
              <div 
                key={idx}
                className="flex flex-col p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-white/50 relative group shadow-ambient hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center gap-3 mb-4 text-sm font-mono text-coffee-light">
                  <span className="text-caramel-dark">{post.status}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-espresso mb-3">
                  {post.title}
                </h3>
                
                <p className="text-coffee leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  {post.status === "Draft" ? (
                    <span className="text-sm font-medium text-cream-300">Read →</span>
                  ) : (
                    <a href={post.href} className="text-sm font-medium text-caramel hover:text-caramel-dark transition-colors inline-flex items-center gap-1">
                      Read <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-coffee-light">
              Articles published as Zenodo notes or hosted here.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

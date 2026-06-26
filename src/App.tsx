import { ErrorBoundary } from "./components/ErrorBoundary";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { HeroSection } from "./sections/HeroSection";
import { ResearchFocusSection } from "./sections/ResearchFocusSection";
import { FeaturedPaperSection } from "./sections/FeaturedPaperSection";
import { PublicationsSection } from "./sections/PublicationsSection";
import { OpenSourceSection } from "./sections/OpenSourceSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { TimelineSection } from "./sections/TimelineSection";
import { BlogSection } from "./sections/BlogSection";
import { ContactSection } from "./sections/ContactSection";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <ErrorBoundary>
      {/* Ambient Background Blobs for Glassmorphism */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div style={{ y: y1 }} className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-caramel/25 blur-[120px] animate-blob" />
        <motion.div style={{ y: y2 }} className="absolute top-[30%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-coffee-light/15 blur-[130px] animate-blob animation-delay-2000" />
        <motion.div style={{ y: y3 }} className="absolute -bottom-[10%] left-[15%] w-[55vw] h-[55vw] rounded-full bg-caramel/20 blur-[140px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-0">
        <Nav />
        <main>
          <HeroSection />
          <ResearchFocusSection />
          <FeaturedPaperSection />
          <PublicationsSection />
          <OpenSourceSection />
          <ProjectsSection />
          <TimelineSection />
          <BlogSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;

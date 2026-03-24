import { useState } from "react";
import { TerminalLoader } from "./components/ui/TerminalLoader";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { FooterSection } from "./sections/FooterSection";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black font-mono text-white selection:bg-cyan-500/30 overflow-x-hidden">
        {!isLoaded && <TerminalLoader onLoadComplete={() => setIsLoaded(true)} />}
        <HeroSection isLoaded={isLoaded} />
        <AboutSection />
        <ProjectsSection />
        <FooterSection />
      </div>
    </ErrorBoundary>
  );
}

export default App;

import React, { Suspense, lazy } from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Shield, Award, Terminal, Code2, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";
import { TerminalLoader } from "./components/ui/TerminalLoader";

const SplineScene = lazy(() => import("./components/ui/spline-scene").then(m => ({ default: m.SplineScene })));

function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className="min-h-screen bg-black font-mono text-white selection:bg-cyan-500/30 overflow-x-hidden">
      {!isLoaded && <TerminalLoader onLoadComplete={() => setIsLoaded(true)} />}

      {/* Hero Section */}
      <section className="relative w-full h-screen flex border-b border-white/5 overflow-hidden">
        
        {/* Ambient Grid overlay for computational feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,245,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,245,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-10 opacity-30 transform-gpu" />
        
        {/* Spline Background */}
        <div className="absolute right-0 top-0 w-full md:w-[75%] h-full z-0 opacity-100 pointer-events-none md:pointer-events-auto will-change-transform transform-gpu">
          {/* Stark masking gradient: intense black on the left seam to integrate text, completely transparent on the right to preserve the star */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 md:via-transparent to-transparent z-10 pointer-events-none" />
          {isLoaded && (
            <Suspense fallback={null}>
              <SplineScene 
                scene="https://prod.spline.design/p8NTHTPG4so8FDlE/scene.splinecode" 
                className="w-full h-full brightness-110 contrast-125"
              />
            </Suspense>
          )}
          
          {/* Watermark Blocker: A pure black patch over the bottom right corner to visually erase the Spline logo */}
          <div className="absolute bottom-0 right-0 w-40 h-16 bg-black z-50 pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 relative z-20 flex flex-col justify-center h-full max-w-7xl">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 border border-white/10 bg-black/40 px-4 py-2 text-xs text-neutral-300 backdrop-blur-md w-fit font-mono rounded-md shadow-2xl"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              SYS.SEC_RESEARCH_MODE
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl pb-2 leading-none uppercase"
            >
              BISWA<span className="opacity-90">JYOTI</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                NATH.
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-start gap-4 border-l border-cyan-500/30 pl-6"
            >
              <p className="text-lg md:text-xl text-neutral-400 max-w-md leading-relaxed font-mono">
                Building resilient <span className="text-white">ML infrastructure</span> & researching adversarial randomness in the <span className="text-cyan-200">quantum era</span>.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-4 pt-8"
            >
              <a href="#projects" className="group relative inline-flex items-center gap-3 px-6 py-3 bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 font-mono text-sm rounded hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(0,245,255,0.05)] hover:shadow-[0_0_30px_rgba(0,245,255,0.2)]">
                <span className="relative z-10 tracking-wider font-semibold">INITIALIZE_SYSTEM</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <a href="https://github.com/biswajyoti-nath" target="_blank" rel="noopener noreferrer" className="p-3 rounded border border-white/5 bg-black/40 hover:bg-white/5 transition-colors backdrop-blur-md">
                <Github className="w-5 h-5 text-neutral-400 hover:text-white transition-colors" />
              </a>
              <a href="https://linkedin.com/in/biswajyoti-nath-984404323" target="_blank" rel="noopener noreferrer" className="p-3 rounded border border-white/5 bg-black/40 hover:bg-white/5 transition-colors backdrop-blur-md">
                <Linkedin className="w-5 h-5 text-neutral-400 hover:text-white transition-colors" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="about" className="relative w-full py-24 bg-black border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
          <h2 className="text-xl md:text-2xl font-medium text-neutral-400 leading-relaxed font-mono">
            <span className="text-cyan-500 mr-6 text-sm block mb-4">/01 SYSTEM_INIT</span> 
            I am a systems engineer creating real-world <span className="text-white">machine learning pipelines</span> and researching the foundational limits of <span className="text-white">quantum cryptography</span>. My core focus lies in the structural integrity and security of computational models.
          </h2>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative w-full py-32 bg-black" id="projects">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <h3 className="text-xs font-mono text-cyan-500 mb-4 uppercase tracking-widest">/02 DEPLOYMENTS & RESEARCH</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Applied Systems View.</h2>
          </div>

          <BentoGrid className="h-full">
            {/* TALL LEFT: Highlighted Systems */}
            <BentoGridItem
              className="md:col-span-1 md:row-span-2 bg-[#050505] border-white/5 hover:border-white/10"
              title={<span className="text-lg font-bold text-neutral-200">System Architectures</span>}
              icon={<Terminal className="w-5 h-5 text-neutral-500" />}
              description={
                <div className="flex flex-col gap-3 mt-6">
                  <a href="https://github.com/biswajyoti-nath/startup-llm-content-pipeline" target="_blank" className="block p-4 rounded-lg bg-black border border-white/5 hover:border-cyan-500/30 transition-colors group">
                    <div className="flex justify-between items-start">
                      <strong className="text-neutral-200 font-medium text-sm">Startup LLM Pipeline</strong>
                      <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <p className="text-xs text-neutral-500 mt-2 leading-relaxed">End-to-end AI pipeline orchestrating startup discovery operations.</p>
                  </a>
                  
                  <a href="https://github.com/biswajyoti-nath/ATC_Project" target="_blank" className="block p-4 rounded-lg bg-black border border-white/5 hover:border-cyan-500/30 transition-colors group">
                    <div className="flex justify-between items-start">
                      <strong className="text-neutral-200 font-medium text-sm">Cattle Condition Analyzer</strong>
                      <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <p className="text-xs text-neutral-500 mt-2 leading-relaxed">Computer vision inference engine via YOLOv8 for automated analytics.</p>
                  </a>
                  
                  <a href="https://github.com/biswajyoti-nath/sample-site-startup" target="_blank" className="block p-4 rounded-lg bg-black border border-white/5 hover:border-cyan-500/30 transition-colors group">
                    <div className="flex justify-between items-start">
                      <strong className="text-neutral-200 font-medium text-sm">Sample Site Startup</strong>
                      <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <p className="text-xs text-neutral-500 mt-2 leading-relaxed">Custom frontend systems architecture and web deployment.</p>
                  </a>
                </div>
              }
            />
            
            {/* SMALL LEFT BOTTOM: Capabilities */}
            <BentoGridItem
              className="md:col-span-1 md:row-span-1 bg-[#050505] border-white/5 hover:border-white/10"
              title={<span className="text-neutral-200 font-medium">Core Capabilities</span>}
              icon={<Code2 className="w-5 h-5 text-neutral-500" />}
              description={
                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-neutral-400 font-mono">
                  <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span>Python & C/C++</span>
                  <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span>Scikit-Learn</span>
                  <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span>YOLO & OpenCV</span>
                  <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span>Ethical Hacking</span>
                  <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span>Linux Systems</span>
                  <span className="flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span>Quantum Comp</span>
                </div>
              }
            />

            {/* LARGE CENTRE: Publication */}
            <BentoGridItem
              className="md:col-span-1 md:row-span-3 bg-[#0a0a0a] border-white/10 relative overflow-hidden group"
              title={<span className="text-2xl font-bold text-white tracking-tight">Randomness in Quantum Cryptography</span>}
              icon={<BookOpen className="w-5 h-5 text-neutral-400" />}
              description={
                <div className="flex flex-col h-full mt-6 justify-between relative z-10">
                  <div>
                    <span className="inline-block px-2 py-1 bg-white/5 text-neutral-300 border border-white/10 rounded-md text-[10px] font-mono tracking-wider uppercase mb-6">
                      Zenodo Preprint
                    </span>
                    <p className="text-sm text-neutral-400 leading-relaxed max-w-[90%] mb-4">
                      Comprehensive report analyzing randomness in quantum cryptographic structures. Exploring Bell tests, quantum random number generation (QRNG), and adversarial boundaries of pseudorandomness in post-quantum environments.
                    </p>
                    <div className="mt-6 p-4 bg-black/50 border border-white/5 rounded-lg flex items-center justify-between">
                      <span className="text-[10px] text-neutral-500 font-mono">DOI_REF: 10.5281/zenodo.15867370</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a href="https://doi.org/10.5281/zenodo.15867370" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-neutral-200 px-6 py-3 rounded-md transition-colors w-full text-sm font-semibold">
                      Access Paper <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              }
            />

            {/* SMALL TOP RIGHT: Strategy */}
            <BentoGridItem
              className="md:col-span-1 md:row-span-1 bg-[#050505] border-white/5 hover:border-white/10"
              title={<span className="text-neutral-200 font-medium">Research Framing</span>}
              icon={<Shield className="w-5 h-5 text-neutral-500" />}
              description={
                <div className="mt-4 text-xs text-neutral-400 leading-relaxed">
                  <p className="mb-3 text-neutral-200 font-medium">PQC & Quantum Entropy</p>
                  <p className="text-[11px] text-neutral-500">
                    Conceptual framing around quantum distribution and randomness boundaries established through exchanges with Prof. Gilles Brassard and Prof. Nicolas Gisin.
                  </p>
                </div>
              }
            />

            {/* TALL BOTTOM RIGHT: Certs */}
            <BentoGridItem
              className="md:col-span-1 md:row-span-2 bg-[#050505] border-white/5 hover:border-white/10"
              title={<span className="text-neutral-200 font-medium">Certifications</span>}
              icon={<Award className="w-5 h-5 text-neutral-500" />}
              description={
                <div className="mt-6 flex flex-col gap-3">
                  {[
                    { title: "Cisco Ethical Hacker", inst: "Credly Verified", link: "https://www.credly.com/badges/0a0a3b9c-f4b4-4efb-86e2-d0a04e03df08" },
                    { title: "IBM Quantum Enigmas", inst: "Credly Verified", link: "https://www.credly.com/badges/e3b74512-fb95-4fce-ab1f-0722bb5d45a9" },
                    { title: "Python Essentials 1", inst: "Credly Verified", link: "https://www.credly.com/badges/dd414912-2a92-4f2a-89d6-9feba448f778/public_url" },
                    { title: "Python Essentials 2", inst: "Credly Verified", link: "https://www.credly.com/badges/627bcdfe-9f8b-404d-9ab6-01c1e978a223/public_url" },
                    { title: "Applied ML Inference", inst: "Great Learning (Ongoing)", link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/machine-learning-with-python" }
                  ].map((cert, i) => (
                    <a key={i} href={cert.link} target="_blank" rel="noopener noreferrer" className="flex flex-col p-3 rounded-lg border border-white/5 bg-black hover:border-white/20 transition-colors group">
                      <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">{cert.title}</span>
                      <span className="text-[10px] text-cyan-500/70 font-mono mt-1">{cert.inst}</span>
                    </a>
                  ))}
                </div>
              }
            />
            
          </BentoGrid>
        </div>
      </section>
      
      {/* Contact Section */}
      <footer className="w-full relative bg-black border-t border-white/5 py-16">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-neutral-400 font-mono">
            <div className="flex items-center gap-6">
              <a href="mailto:biswajyotinath125@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email
              </a>
              <a href="https://github.com/biswajyoti-nath" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://linkedin.com/in/biswajyoti-nath-984404323" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
            
            <p className="text-[10px] text-neutral-600 uppercase tracking-widest">
              SYSVER 1.0.0 // {new Date().getFullYear()} BINARY
            </p>
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default App;

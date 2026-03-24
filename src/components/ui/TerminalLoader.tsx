import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalLoaderProps {
  onLoadComplete: () => void;
}

export function TerminalLoader({ onLoadComplete }: TerminalLoaderProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const lines = [
    "Initializing portfolio...",
    "Loading 3D scene...",
    "Optimizing shaders...",
    "Ready."
  ];

  useEffect(() => {
    // Check if we've already loaded in this session to avoid annoyance
    const hasLoaded = sessionStorage.getItem("portfolioLoaderHasRun");
    if (hasLoaded) {
      setIsVisible(false);
      onLoadComplete();
      return;
    }

    let timeoutIds: NodeJS.Timeout[] = [];
    
    // Sequence the text appearance
    lines.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setCurrentLine(index);
      }, index * 400); // 400ms per line
      timeoutIds.push(timeout);
    });

    // End loader slightly after the last line
    const finishTimeout = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("portfolioLoaderHasRun", "true");
      onLoadComplete();
    }, lines.length * 400 + 400);
    
    timeoutIds.push(finishTimeout);

    return () => timeoutIds.forEach(clearTimeout);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black font-mono text-sm"
        >
          <div className="flex flex-col items-start space-y-2 text-cyan-500/80">
            {lines.slice(0, currentLine + 1).map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={idx === lines.length - 1 ? "text-cyan-400 font-bold" : ""}
              >
                {`> ${line}`}
                {idx === currentLine && idx !== lines.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-cyan-500/80 ml-1 translate-y-1"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

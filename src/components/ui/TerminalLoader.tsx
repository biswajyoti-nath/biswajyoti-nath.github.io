import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalLoaderProps {
  onLoadComplete: () => void;
}

// Static constant — defined outside component to avoid re-creation and lint warnings
const LINES = [
  "Initializing portfolio...",
  "Loading 3D scene...",
  "Optimizing shaders...",
  "Ready.",
];

export function TerminalLoader({ onLoadComplete }: TerminalLoaderProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const complete = useCallback(() => {
    setIsVisible(false);
    onLoadComplete();
  }, [onLoadComplete]);

  useEffect(() => {
    // Skip animation if already shown this session
    if (sessionStorage.getItem("portfolioLoaderHasRun")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      complete();
      return;
    }

    const timeoutIds: NodeJS.Timeout[] = [];

    LINES.forEach((_, index) => {
      timeoutIds.push(
        setTimeout(() => setCurrentLine(index), index * 400)
      );
    });

    timeoutIds.push(
      setTimeout(() => {
        sessionStorage.setItem("portfolioLoaderHasRun", "true");
        complete();
      }, LINES.length * 400 + 400)
    );

    return () => timeoutIds.forEach(clearTimeout);
  }, [complete]);

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
            {LINES.slice(0, currentLine + 1).map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={idx === LINES.length - 1 ? "text-cyan-400 font-bold" : ""}
              >
                {`> ${line}`}
                {idx === currentLine && idx !== LINES.length - 1 && (
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

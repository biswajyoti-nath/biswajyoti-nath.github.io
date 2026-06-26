import { motion } from "framer-motion";

export function StaggeredText({ text, className = "" }: { text: string, className?: string }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 250, 
        damping: 15,
        mass: 1.5
      } 
    }
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      className={`inline-block ${className}`}
    >
      {text.split(" ").map((word, wordIdx, arr) => (
        <span key={wordIdx} className={`inline-block whitespace-nowrap ${wordIdx < arr.length - 1 ? "mr-[0.25em]" : ""}`}>
          {word.split("").map((char, charIdx) => (
            <motion.span 
              key={charIdx} 
              variants={item} 
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

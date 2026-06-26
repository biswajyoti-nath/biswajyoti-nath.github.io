import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function Word({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [8, 0]);
  return <motion.span style={{ opacity, y }} className="mr-[0.25em] inline-block">{children}</motion.span>
}

export function ScrollRevealText({ children, className = "" }: { children: string, className?: string }) {
  const container = useRef<HTMLHeadingElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 90%", "start 60%"]
  });
  
  const words = children.split(" ");
  
  return (
    <h2 ref={container} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
      })}
    </h2>
  );
}

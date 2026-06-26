import * as React from "react";
import { useRef } from "react";
import { motion, useSpring } from "framer-motion";

export function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    x.set(middleX * 0.3);
    y.set(middleY * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x, y }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

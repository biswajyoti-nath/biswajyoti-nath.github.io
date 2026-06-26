import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface RevealOnScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
}

export function RevealOnScroll({
  className,
  children,
  delay = 0,
  ...props
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay / 1000, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={cn(className)}
      {...props as any}
    >
      {children}
    </motion.div>
  );
}

import * as React from "react";
import { cn } from "../../lib/utils";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-cream-200 px-2.5 py-0.5 text-xs font-semibold text-coffee-light transition-colors hover:bg-cream-300",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

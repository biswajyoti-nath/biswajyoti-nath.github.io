import * as React from "react";
import { cn } from "../../lib/utils";

interface SectionLabelProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionLabel({ className, children, ...props }: SectionLabelProps) {
  return (
    <h2
      className={cn(
        "text-sm font-semibold uppercase tracking-wider text-caramel-dark mb-4",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

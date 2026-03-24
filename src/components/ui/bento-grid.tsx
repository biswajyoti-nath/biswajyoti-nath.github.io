import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[16rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento transition duration-200 p-6 bg-[#050505] border border-white/10 hover:border-white/20 flex flex-col space-y-4 overflow-hidden relative",
        className
      )}
    >
      <div className="absolute inset-0 z-0 opacity-50 transition-opacity duration-300 group-hover/bento:opacity-100 pointer-events-none">
         {header}
      </div>
      <div className="relative z-10 flex flex-col h-full justify-end group-hover/bento:translate-x-1 transform-gpu transition duration-200">
        <div className="text-cyan-400 mb-2">
          {icon}
        </div>
        <div className="font-mono font-bold text-white mb-2 text-lg">
          {title}
        </div>
        <div className="font-mono font-normal text-neutral-300 text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};

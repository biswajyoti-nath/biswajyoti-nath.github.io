import { cn } from "@/lib/utils";

export function DisplayCards({
  cards,
}: {
  cards: { title: string; subtitle: string; icon?: React.ReactNode; link?: string }[];
}) {
  return (
    <div className="flex flex-col gap-3 w-full relative z-10 w-full">
      {cards.map((card, i) => (
        <a
          key={i}
          href={card.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "group relative flex items-center justify-between rounded-lg border border-white/10 bg-black/40 p-4 transition-all hover:bg-black/60 hover:border-cyan-400/50",
            card.link ? "cursor-pointer" : "cursor-default pointer-events-none"
          )}
        >
          <div className="flex flex-col">
            <h3 className="font-mono font-bold text-sm text-white transition-colors group-hover:text-cyan-400">
              {card.title}
            </h3>
            <p className="font-mono text-xs text-neutral-400 mt-1">
              {card.subtitle}
            </p>
          </div>
          {card.icon && <div className="text-cyan-400/70 group-hover:text-cyan-400 transition-colors">{card.icon}</div>}
        </a>
      ))}
    </div>
  );
}

import { useState, useEffect } from "react";
import { profile } from "../data/profile";

/** Fetches a real cross-user visitor count from counterapi.dev.
 *  Falls back to localStorage + seed if the API is unreachable.
 *  Returns a count-up animated number. */
export function useVisitorCount(): number {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      let total: number;

      try {
        const res = await fetch(
          `https://api.counterapi.dev/v1/${profile.counterNamespace}/${profile.counterKey}/up`
        );
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        total = data.count as number;
      } catch {
        // Fallback: localStorage with a realistic seed
        const stored = parseInt(localStorage.getItem("portfolio_visits") || "0", 10);
        total = profile.counterSeed + stored + 1;
        localStorage.setItem("portfolio_visits", String(stored + 1));
      }

      if (cancelled) return;

      // Count-up animation
      let current = 0;
      const step = Math.ceil(total / 40);
      const timer = setInterval(() => {
        if (cancelled) { clearInterval(timer); return; }
        current = Math.min(current + step, total);
        setVisitorCount(current);
        if (current >= total) clearInterval(timer);
      }, 30);
    };

    run();
    return () => { cancelled = true; };
  }, []);

  return visitorCount;
}

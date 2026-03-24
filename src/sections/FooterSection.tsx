import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useVisitorCount } from "../hooks/useVisitorCount";
import { profile } from "../data/profile";

export function FooterSection() {
  const [terminalMsg, setTerminalMsg] = useState("");
  const [terminalSent, setTerminalSent] = useState(false);
  const visitorCount = useVisitorCount();

  return (
    <footer className="w-full relative bg-black border-t border-cyan-500/10 pt-0">
      {/* Scanline overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.015)_2px,rgba(0,255,255,0.015)_4px)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <div className="rounded-lg border border-cyan-500/20 overflow-hidden shadow-[0_0_40px_rgba(0,255,255,0.05)]">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0a] border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-4 text-[11px] text-neutral-500 font-mono tracking-widest uppercase">
              terminal — biswajyoti@sys:~
            </span>
          </div>

          {/* Terminal body */}
          <div className="bg-[#050505] px-6 py-8 font-mono text-sm">
            <p className="text-neutral-500 mb-1">
              $ <span className="text-cyan-400">./contact --mode=human</span>
            </p>
            <p className="text-neutral-400 mb-4 ml-2">
              Initializing secure channel... <span className="text-green-400">OK</span>
            </p>

            {/* Interactive compose */}
            <div className="mb-6">
              <p className="text-neutral-500 mb-2">
                $ <span className="text-yellow-400/80">compose --to={profile.email}</span>
              </p>
              <div className="mt-2 flex items-start gap-2">
                <span className="text-cyan-500 mt-2.5 select-none">›</span>
                <textarea
                  rows={3}
                  value={terminalMsg}
                  onChange={(e) => {
                    setTerminalMsg(e.target.value);
                    setTerminalSent(false);
                  }}
                  placeholder="type your message here..."
                  aria-label="Message to Biswajyoti"
                  className="flex-1 resize-none bg-transparent border-none outline-none text-neutral-200 placeholder-neutral-600 font-mono text-sm leading-relaxed caret-cyan-400 py-2"
                />
              </div>
              <div className="w-full h-px bg-cyan-500/20 mt-1" />
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={`mailto:${profile.email}?subject=Hello%20from%20your%20portfolio&body=${encodeURIComponent(terminalMsg)}`}
                onClick={() => setTerminalSent(true)}
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 font-mono text-xs rounded hover:bg-cyan-500/20 hover:border-cyan-400 transition-all hover:shadow-[0_0_20px_rgba(0,245,255,0.15)]"
              >
                <Mail className="w-4 h-4" /> SEND_EMAIL_
              </a>
              <a
                href={profile.socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={profile.socials[0].ariaLabel}
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-neutral-300 font-mono text-xs rounded hover:bg-white/10 hover:border-white/30 hover:text-white transition-all"
              >
                <Github className="w-4 h-4" /> VIEW_GITHUB_
              </a>
              <a
                href={profile.socials[1].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={profile.socials[1].ariaLabel}
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-neutral-300 font-mono text-xs rounded hover:bg-white/10 hover:border-white/30 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" /> CONNECT_
              </a>
            </div>

            {terminalSent && (
              <p className="text-green-400 text-xs mb-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                ✓ mail client opened — message pre-loaded.
              </p>
            )}

            {/* Footer bar */}
            <div className="border-t border-white/5 mt-2 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="text-[11px] text-neutral-500 font-mono">
                $ <span className="text-cyan-500">sys.visitors</span>{" "}
                <span className="text-white font-bold">{visitorCount.toLocaleString()}</span>
                <span className="text-neutral-600"> unique hits logged</span>
              </p>
              <p className="text-[10px] text-neutral-600 uppercase tracking-widest">
                SYSVER 1.0.0 // {new Date().getFullYear()} BISWAJYOTI NATH
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

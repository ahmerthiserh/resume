import { FileDown } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio";

const LINKS = [
  { href: "#projects", label: "Platforms" },
  { href: "#apps", label: "Apps" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-2.5 shadow-lg shadow-black/30 backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2.5 font-semibold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 font-mono text-sm shadow-md shadow-blue-600/40">
            AI
          </span>
          <span className="hidden sm:inline">{PROFILE_DATA.name}</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden rounded-lg px-3 py-1.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white md:inline-block"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PROFILE_DATA.resumePath}
            download="Ahmad_Isah_CV.pdf"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <FileDown className="h-4 w-4" />
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}

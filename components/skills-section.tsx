import { Terminal, Server, Cloud, Network } from "lucide-react";
import { TECHNICAL_STACK } from "@/data/portfolio";

const CATEGORY_ICONS: Record<string, typeof Terminal> = {
  "Mobile & Frontend": Terminal,
  "Backend & Systems": Server,
  "DevOps & Tools": Cloud,
  "Architecture Patterns": Network,
};

export function SkillsSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-400 font-mono">
            Technical Stack & Core Architecture
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Toolchains, distributed design patterns, and engineering domains
          </p>
        </div>
        <span className="text-xs font-mono text-slate-500 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
          4 Domains
        </span>
      </div>

      {/* Modern 2x2 Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TECHNICAL_STACK.map((category) => {
          const Icon = CATEGORY_ICONS[category.title] || Terminal;
          return (
            <div
              key={category.title}
              className="relative rounded-2xl border border-slate-800/90 bg-slate-900/60 backdrop-blur-md p-6 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden shadow-lg shadow-slate-950/40"
            >
              {/* Glowing Top Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 group-hover:via-blue-400 transition-colors" />

              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800/40 text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-base tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Monospace Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono bg-slate-950/80 border border-slate-800/90 text-slate-300 group-hover:border-slate-700/80 px-2.5 py-1 rounded-md transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import { EXPERIENCE } from "@/data/portfolio";
import { CheckCircle2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-400 font-mono">
            Professional Work Experience
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Engineering leadership, production uptime metrics, and core backend architectures
          </p>
        </div>
        <span className="text-xs font-mono text-slate-500 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
          2022 — Present
        </span>
      </div>

      <div className="relative pl-6 border-l-2 border-slate-800/80 space-y-12 ml-2">
        {EXPERIENCE.map((item, index) => (
          <div key={item.company + index} className="relative group">
            {/* Glowing Blue Timeline Node */}
            <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20 shadow-sm shadow-blue-500/50 group-hover:scale-125 transition-transform duration-200" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.role}
                </h3>
                <p className="text-sm font-semibold text-blue-400 font-mono mt-0.5">
                  {item.company} <span className="text-slate-600 font-normal">|</span> <span className="text-slate-400 font-normal">{item.location}</span>
                </p>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-900/80 border border-slate-800/80 px-2.5 py-1 rounded-md">
                {item.period}
              </span>
            </div>

            {/* Exact Bullet Achievements from CV */}
            <ul className="mt-3.5 space-y-2 text-sm">
              {item.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            {/* Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mt-4">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono bg-slate-950/90 border border-slate-800/90 text-slate-300 px-2.5 py-0.5 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { EXPERIENCE } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-400 font-mono">
            Commercial Work Experience
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Career trajectory and engineering leadership milestones
          </p>
        </div>
        <span className="text-xs font-mono text-slate-500 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
          2022 — Present
        </span>
      </div>

      <div className="relative pl-6 border-l-2 border-slate-800/80 space-y-10 ml-2">
        {EXPERIENCE.map((item, index) => (
          <div key={item.company + index} className="relative group">
            {/* Glowing Blue Timeline Node */}
            <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20 shadow-sm shadow-blue-500/50 group-hover:scale-125 transition-transform duration-200" />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.role}
                </h3>
                <p className="text-sm font-semibold text-blue-400/90 font-mono">
                  {item.company}
                </p>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-900/80 border border-slate-800/80 px-2 py-0.5 rounded">
                {item.period}
              </span>
            </div>

            <p className="text-sm text-slate-300 mt-2.5 leading-relaxed font-normal">
              {item.description}
            </p>

            {/* Stack Pills for Technical Recruiters */}
            <div className="flex flex-wrap gap-1.5 mt-3.5">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono bg-slate-950/90 border border-slate-800/90 text-slate-300 px-2 py-0.5 rounded-md"
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

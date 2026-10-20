import { EXPERIENCE } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section className="mt-16 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Commercial Work Experience
        </h2>
        <span className="text-xs text-neutral-600 font-mono">2022 — Present</span>
      </div>

      <div className="relative pl-6 border-l border-neutral-800 space-y-10">
        {EXPERIENCE.map((item, index) => (
          <div key={item.company + index} className="relative group">
            {/* Timeline node */}
            <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-neutral-900 border-2 border-neutral-600 group-hover:border-blue-400 group-hover:bg-blue-400 transition-colors" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="text-base font-semibold text-white">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-neutral-400">
                  {item.company}
                </p>
              </div>
              <span className="text-xs font-mono text-neutral-500">
                {item.period}
              </span>
            </div>

            <p className="text-sm text-neutral-300 mt-2.5 leading-relaxed">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] bg-neutral-900/60 border border-neutral-800/80 text-neutral-400 px-2 py-0.5 rounded"
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

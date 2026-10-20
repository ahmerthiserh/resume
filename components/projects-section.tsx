import { PROJECTS } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-400 font-mono">
            Shipped Systems & Commercial Architecture
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Production-grade systems, high-concurrency engines, and revenue platforms
          </p>
        </div>
        <span className="text-xs text-slate-500 font-mono bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
          {String(PROJECTS.length).padStart(2, "0")} Systems
        </span>
      </div>

      <div className="grid gap-8" style={{ perspective: "1000px" }}>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id || project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

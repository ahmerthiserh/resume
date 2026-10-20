import Link from "next/link";
import { PROJECTS } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section className="mt-16 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Shipped Systems & Commercial Architecture
        </h2>
        <span className="text-xs text-neutral-600 font-mono">
          {String(PROJECTS.length).padStart(2, "0")} Systems
        </span>
      </div>

      <div className="grid gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group p-6 rounded-xl border border-neutral-800/80 bg-[#121212] hover:border-neutral-700 transition-all hover:shadow-lg hover:shadow-black/40"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-neutral-400 border border-neutral-800 bg-neutral-900/90 px-2 py-0.5 rounded">
                    {project.status}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 font-medium mt-1">
                  {project.role}
                </p>
              </div>

              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap"
              >
                {project.actionText}
              </Link>
            </div>

            <p className="text-sm text-neutral-300 mt-4 leading-relaxed">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-neutral-900/90 border border-neutral-800 text-neutral-400 px-2.5 py-1 rounded"
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

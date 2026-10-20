import Link from "next/link";
import Image from "next/image";
import { Cpu, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-400 font-mono">
            Shipped Systems & Commercial Architecture
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Production-grade systems, high-concurrency engines, and offline protocols
          </p>
        </div>
        <span className="text-xs text-slate-500 font-mono bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
          {String(PROJECTS.length).padStart(2, "0")} Systems
        </span>
      </div>

      <div className="grid gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group relative rounded-2xl border border-slate-800/90 bg-slate-900/60 backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 overflow-hidden shadow-lg shadow-slate-950/50 hover:shadow-blue-950/20"
          >
            {/* Top Media Preview Container */}
            {project.image ? (
              <div className="relative w-full aspect-[21/9] sm:aspect-[2.4/1] overflow-hidden bg-slate-950 border-b border-slate-800/80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute top-4 right-4 text-[11px] font-mono font-medium text-emerald-400 bg-slate-950/80 border border-emerald-500/30 px-2.5 py-1 rounded-full backdrop-blur-md shadow-sm">
                  ● {project.status}
                </span>
              </div>
            ) : (
              <div className="relative w-full py-6 px-6 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  <span>FAULT-TOLERANT EMBEDDED ENGINE</span>
                </div>
                <span className="text-[11px] font-mono font-medium text-blue-400 bg-blue-950/60 border border-blue-800/60 px-2.5 py-1 rounded-full">
                  ● {project.status}
                </span>
              </div>
            )}

            {/* Card Content & Meta */}
            <div className="p-6 sm:p-7 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-400/90 font-medium mt-0.5">
                    {project.role}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {project.summary}
              </p>

              {/* Categorized Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-slate-950/80 border border-slate-800/90 text-slate-300 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Direct Action Link */}
              <div className="pt-4 border-t border-slate-800/70 flex items-center justify-end">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 text-slate-200 hover:text-white text-xs font-semibold transition-all shadow-sm active:scale-[0.98]"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                  {project.actionText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

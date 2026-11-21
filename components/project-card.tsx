import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { TiltCard } from "@/components/motion/tilt-card";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const links = project.links?.length
    ? project.links
    : [{ label: project.actionText, url: project.live }];
  const isPrivate = !project.links?.length;

  return (
    <TiltCard max={featured ? 6 : 9} className="glass-card group flex flex-col overflow-hidden">
      <div className={featured ? "grid h-full lg:grid-cols-[1.15fr_1fr]" : "flex h-full flex-col"}>
        {/* Media */}
        <div
          className={`relative overflow-hidden bg-slate-950 ${
            featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[340px]" : "aspect-[16/9]"
          }`}
          style={{ transform: "translateZ(30px)" }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes={featured ? "(max-width: 1024px) 100vw, 640px" : "(max-width: 1024px) 100vw, 560px"}
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.35),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.3),transparent_55%)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-slate-950/80 px-2.5 py-1 font-mono text-[11px] font-medium text-emerald-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {project.status}
          </span>
        </div>

        {/* Content */}
        <div className={`relative flex flex-1 flex-col p-6 ${featured ? "sm:p-8" : "sm:p-7"}`} style={{ transform: "translateZ(20px)" }}>
          <p className="font-mono text-xs font-medium text-blue-400">{project.role}</p>
          <h3 className={`mt-2 font-bold tracking-tight text-white ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-[15px]">{project.summary}</p>

          {featured && (
            <ul className="mt-4 space-y-2">
              {[project.highlights[0], project.highlights[2]].filter(Boolean).map((h) => (
                <li key={h} className="flex gap-2.5 text-sm text-slate-400">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-violet-500" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {links.map((link) => (
              <a
                key={link.url + link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                {isPrivate ? <Lock className="h-3.5 w-3.5 text-slate-400" /> : null}
                {link.label.replace(" ↗", "")}
                <ArrowUpRight className="h-3.5 w-3.5 text-blue-400" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  );
}

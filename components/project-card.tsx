import Image from "next/image";
import { ArrowUpRight, Smartphone } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { TiltCard } from "@/components/motion/tilt-card";

const isStore = (url: string) => /play\.google\.com|apps\.apple\.com/.test(url);

export function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  const allLinks = project.links?.length
    ? project.links
    : [{ label: project.actionText, url: project.live }];
  const webLinks = allLinks.filter((l) => !isStore(l.url));
  const hasApps = allLinks.some((l) => isStore(l.url));

  return (
    <TiltCard max={wide ? 5 : 8} className="glass-card group flex h-full flex-col overflow-hidden">
      {/* Media */}
      <div className="relative h-36 overflow-hidden bg-slate-950 sm:h-32 lg:h-36" style={{ transform: "translateZ(25px)" }}>
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes={wide ? "(max-width: 1024px) 100vw, 580px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 290px"}
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-slate-950/80 px-2 py-0.5 font-mono text-[10px] text-emerald-300 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5" style={{ transform: "translateZ(15px)" }}>
        <p className="truncate font-mono text-[11px] text-blue-400">{project.role}</p>
        <h3 className={`mt-1 font-bold leading-snug tracking-tight text-white ${wide ? "text-xl" : "text-base"}`}>
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-slate-400">{project.summary}</p>
        {project.note && (
          <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-blue-200/70">{project.note}</p>
        )}

        {project.stack.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {project.stack.slice(0, wide ? 5 : 3).map((tech) => (
              <span key={tech} className="rounded border border-white/10 bg-white/4 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {webLinks.map((link) => (
            <a
              key={link.url + link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-semibold text-white transition-colors hover:border-blue-400/50 hover:bg-blue-500/10"
            >
              {link.label.replace(" ↗", "")}
              <ArrowUpRight className="h-3 w-3 text-blue-400" />
            </a>
          ))}
          {hasApps && (
            <a
              href="#apps"
              title="Also available on iOS & Android"
              className="inline-flex items-center gap-1 rounded-md border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1.5 text-[11px] font-semibold text-emerald-200 transition-colors hover:bg-emerald-500/20"
            >
              <Smartphone className="h-3 w-3" />
              App
            </a>
          )}
        </div>
      </div>
    </TiltCard>
  );
}

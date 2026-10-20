"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { PROJECTS, type Project } from "@/data/portfolio";
import { ProjectModal } from "@/components/project-modal";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
            role="button"
            tabIndex={0}
            onClick={() => setActiveProject(project)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActiveProject(project);
              }
            }}
            className="group relative p-6 rounded-xl border border-neutral-800/80 bg-[#121212] hover:border-neutral-600 hover:bg-[#151515] transition-all hover:shadow-xl hover:shadow-black/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-700"
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

              <div className="flex items-center gap-2">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-xs font-medium text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 px-3 py-1.5 rounded-md transition-colors whitespace-nowrap"
                >
                  {project.actionText}
                </Link>
              </div>
            </div>

            {project.image && (
              <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-neutral-800/80 bg-neutral-900/60 mt-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>
            )}

            <p className="text-sm text-neutral-300 mt-4 leading-relaxed">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-3 border-t border-neutral-800/60">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-neutral-900/90 border border-neutral-800 text-neutral-400 px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-1 text-xs text-neutral-400 group-hover:text-white transition-colors font-medium">
                Deep Architecture Specs
                <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Interactive Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}

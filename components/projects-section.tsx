import { Briefcase } from "lucide-react";
import { PROJECTS } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function ProjectsSection() {
  const own = PROJECTS.filter((p) => p.group !== "freelance");
  const freelance = PROJECTS.filter((p) => p.group === "freelance");

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 sm:px-8">
      <SectionHeading
        index="01"
        eyebrow="Web platforms"
        title="Platforms I've shipped"
        subtitle="Web platforms I've built and launched, from my own Vetris Tech ventures to systems for clients: payments, utilities, commerce, telecom and the public sector."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {own.map((project, i) => (
          <Reveal key={project.id} delay={(i % 4) * 80} className={project.wide ? "sm:col-span-2" : ""}>
            <ProjectCard project={project} wide={project.wide} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 mb-6">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-white sm:text-2xl">
              <Briefcase className="h-5 w-5 text-violet-300" />
              Freelance &amp; subcontracted work
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Platforms I built or contributed to through agencies and partners, rather than directly for the end client.
            </p>
          </div>
          <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-400">
            {String(freelance.length).padStart(2, "0")} projects
          </span>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {freelance.map((project, i) => (
          <Reveal key={project.id} delay={(i % 4) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { PROJECTS } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function ProjectsSection() {
  const [featured, ...rest] = PROJECTS;
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 sm:px-8">
      <SectionHeading
        index="01"
        eyebrow="Selected work"
        title="Products I've shipped"
        subtitle="Live products used by real customers: a marketplace on three platforms, a payment gateway and a sales analytics platform."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="lg:col-span-2">
          <ProjectCard project={featured} featured />
        </Reveal>
        {rest.map((project, i) => (
          <Reveal key={project.id} delay={i * 120}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

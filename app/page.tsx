import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-300 font-sans selection:bg-neutral-800">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <Footer />
      </div>
    </main>
  );
}

import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { CertificationsSection } from "@/components/certifications-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-blue-600/30 selection:text-white overflow-hidden">
      {/* Ambient Radial Gradient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.18),rgba(255,255,255,0))]" />

      <div className="relative max-w-3xl mx-auto px-6 py-20 z-10 space-y-16">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <Footer />
      </div>
    </main>
  );
}

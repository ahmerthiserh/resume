import { SiteNav } from "@/components/site-nav";
import { HeroSection } from "@/components/hero-section";
import { HighlightsSection } from "@/components/highlights-section";
import { ProjectsSection } from "@/components/projects-section";
import { MobileAppsSection } from "@/components/mobile-apps-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { buildJsonLd } from "@/lib/site";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#030712] text-slate-200 selection:bg-blue-600/30 selection:text-white">
      {/* Background: perspective grid + colour glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-150 w-225 -translate-x-1/2 rounded-full bg-blue-700/20 blur-[140px]" />
        <div className="absolute bottom-0 -right-[10%] h-125 w-125 rounded-full bg-violet-700/10 blur-[140px]" />
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c") }}
      />
      <SiteNav />
      <div className="relative z-10 space-y-28 sm:space-y-36">
        <HeroSection />
        <HighlightsSection />
        <ProjectsSection />
        <MobileAppsSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}

import { Smartphone, Server, Database, ShieldCheck, Terminal, Monitor } from "lucide-react";
import { TECHNICAL_STACK } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { TechGlobe } from "@/components/three/tech-globe";

const CATEGORY_ICONS: Record<string, typeof Terminal> = {
  "Web Frontend": Monitor,
  "Mobile Development": Smartphone,
  "Backend & APIs": Server,
  "Databases & Cloud": Database,
  "FinTech & Integrations": ShieldCheck,
};

// Short names for the globe; long labels like "Payment Gateways (...)" are split up.
const GLOBE_TAGS = Array.from(
  new Set(
    TECHNICAL_STACK.flatMap((c) => c.skills)
      .flatMap((s) => (s.startsWith("Payment Gateways") ? ["Paystack", "Flutterwave", "Stripe"] : [s]))
      .filter((s) => s.length <= 22)
  )
);

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 sm:px-8">
      <SectionHeading
        index="04"
        eyebrow="Toolbox"
        title="Technologies I use"
        subtitle="From mobile clients to payment back ends. Move your mouse over the globe to spin it."
      />

      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <Reveal>
          <TechGlobe tags={GLOBE_TAGS} />
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {TECHNICAL_STACK.map((category, i) => {
            const Icon = CATEGORY_ICONS[category.title] || Terminal;
            return (
              <Reveal key={category.title} delay={i * 80} className={i === TECHNICAL_STACK.length - 1 && TECHNICAL_STACK.length % 2 === 1 ? "sm:col-span-2" : ""}>
                <div className="glass-card h-full p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="rounded-lg border border-blue-400/20 bg-blue-500/10 p-2 text-blue-300">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-sm font-semibold text-white">{category.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{category.skills.join(" · ")}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

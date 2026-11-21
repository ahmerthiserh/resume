import { Award, GraduationCap } from "lucide-react";
import { CREDENTIALS } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";

export function CertificationsSection() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl scroll-mt-24 px-5 sm:px-8">
      <SectionHeading index="05" eyebrow="Credentials" title="Certifications & education" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CREDENTIALS.map((cred, i) => {
          const Icon = cred.type === "education" ? GraduationCap : Award;
          return (
            <Reveal key={cred.title} delay={i * 70}>
              <TiltCard max={10} className="glass-card h-full p-5">
                <div className="flex items-start gap-3.5">
                  <span className="rounded-xl border border-violet-400/20 bg-linear-to-br from-blue-500/15 to-violet-500/15 p-2.5 text-violet-200">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold leading-snug text-white">{cred.title}</h3>
                    <p className="mt-1.5 font-mono text-xs text-slate-400">
                      {cred.issuer}
                      {cred.year && <span className="text-blue-400"> · {cred.year}</span>}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

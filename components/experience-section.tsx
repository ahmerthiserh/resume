import { EXPERIENCE } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 sm:px-8">
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="Where I've worked"
        subtitle="Point-of-sale software for retail, a commerce and fintech startup I co-founded, and four years building business web apps."
      />

      <div className="relative">
        {/* Glowing timeline spine */}
        <div className="absolute bottom-0 left-1.75 top-2 w-px bg-linear-to-b from-blue-500 via-violet-500/60 to-transparent md:left-1/2" />

        <div className="space-y-10 md:space-y-16">
          {EXPERIENCE.map((item, i) => {
            const right = i % 2 === 1;
            return (
              <div key={item.company} className="relative md:grid md:grid-cols-2 md:gap-14">
                <span className="absolute left-0 top-7 z-10 h-3.75 w-3.75 rounded-full border-2 border-blue-400 bg-slate-950 shadow-[0_0_0_6px_rgba(59,130,246,0.15),0_0_20px_rgba(59,130,246,0.7)] md:left-1/2 md:-translate-x-1/2" />

                <Reveal
                  delay={80}
                  className={`pl-8 md:pl-0 ${right ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}
                >
                  <p className="pt-5 font-mono text-sm font-semibold text-blue-400">{item.period}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                </Reveal>

                <Reveal
                  delay={160}
                  className={`mt-3 pl-8 md:mt-0 md:pl-0 ${right ? "md:col-start-1 md:row-start-1" : "md:col-start-2"}`}
                >
                  <TiltCard max={6} className="glass-card p-6 sm:p-7">
                    <h3 className="text-xl font-bold tracking-tight text-white">{item.role}</h3>
                    <p className="mt-1 font-semibold text-blue-300">{item.company}</p>
                    <ul className="mt-4 space-y-2.5">
                      {item.achievements.map((a) => (
                        <li key={a} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                          <span className="mt-1.75 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {item.technologies.map((t) => (
                        <span key={t} className="rounded-md border border-white/10 bg-white/4 px-2 py-0.5 font-mono text-[11px] text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

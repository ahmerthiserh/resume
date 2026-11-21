import { HIGHLIGHTS } from "@/data/portfolio";
import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";

export function HighlightsSection() {
  return (
    <section id="highlights" className="relative mx-auto max-w-6xl px-5 sm:px-8">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal key={h.label} delay={i * 90}>
            <div className="glass-card group h-full p-5 sm:p-6">
              <div className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <CountUp to={h.value} from={h.from ?? 0} decimals={h.decimals ?? 0} />
                <span className="text-blue-400">{h.suffix}</span>
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-200">{h.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{h.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

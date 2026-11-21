import { Reveal } from "@/components/motion/reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  subtitle,
}: {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-blue-400">
        <span className="text-slate-500">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-blue-500 to-transparent" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 max-w-2xl text-base text-slate-400 sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}

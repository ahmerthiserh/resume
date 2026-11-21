import Image from "next/image";
import { MOBILE_APPS, type MobileApp } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path fill="#34d399" d="M3.6 1.8 13.8 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Z" />
      <path fill="#60a5fa" d="m17.2 8.6-3.4 3.4-10.2-10.2c.3-.2.8-.2 1.2 0l12.4 6.8Z" />
      <path fill="#f87171" d="M17.2 15.4 4.8 22.2c-.4.2-.9.2-1.2 0L13.8 12l3.4 3.4Z" />
      <path fill="#fbbf24" d="m21 12.9-3.8 2.5-3.4-3.4 3.4-3.4 3.8 2.5c.9.5.9 1.3 0 1.8Z" />
    </svg>
  );
}

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.37 12.6c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.9-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.24 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.38.81 1.4-.02 2.29-1.27 3.14-2.53.99-1.45 1.4-2.85 1.42-2.92-.03-.01-2.72-1.04-2.73-4.12ZM13.79 4.96c.72-.87 1.2-2.07 1.07-3.27-1.03.04-2.28.69-3.02 1.55-.66.77-1.24 1.99-1.09 3.17 1.15.09 2.32-.58 3.04-1.45Z" />
    </svg>
  );
}

/** A phone frame drawn in CSS, holding a real app screenshot. */
function Phone({ app }: { app: MobileApp }) {
  return (
    <div
      className="relative mx-auto aspect-[9/19] w-[62%] max-w-[210px] rounded-[2rem] border border-white/15 bg-slate-950 p-[6px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.04),inset_0_0_0_2px_rgba(148,163,184,0.15)]"
      style={{ transform: "translateZ(50px)" }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-slate-900">
        <Image src={app.screenshot} alt={`${app.name} app screen`} fill sizes="210px" className="object-cover object-top" />
        {/* camera notch */}
        <div className="absolute left-1/2 top-1.5 h-[14px] w-[34%] -translate-x-1/2 rounded-full bg-black/90" />
        {/* glass reflection */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />
      </div>
    </div>
  );
}

function StoreButton({ href, store }: { href: string; store: "play" | "apple" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg border border-white/10 bg-black/40 px-2 py-2 text-[11px] font-semibold text-white transition-colors hover:border-blue-400/50 hover:bg-blue-500/10"
    >
      {store === "play" ? <PlayIcon className="h-4 w-4" /> : <AppleIcon className="h-4 w-4" />}
      {store === "play" ? "Google Play" : "App Store"}
    </a>
  );
}

export function MobileAppsSection() {
  return (
    <section id="apps" className="mx-auto max-w-6xl scroll-mt-24 px-5 sm:px-8">
      <SectionHeading
        index="02"
        eyebrow="Mobile apps"
        title="Apps on iOS & Android"
        subtitle="Apps I've built and published under the Vetris Tech developer account, from marketplaces and payments to a student planner and a game."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {MOBILE_APPS.map((app, i) => (
          <Reveal key={app.id} delay={(i % 4) * 90}>
            <TiltCard max={12} className="glass-card flex h-full flex-col overflow-hidden">
              {/* Phone stage */}
              <div className="relative bg-[radial-gradient(circle_at_50%_35%,rgba(59,130,246,0.28),transparent_65%)] pb-4 pt-7" style={{ transformStyle: "preserve-3d" }}>
                <div className="phone-float" style={{ animationDelay: `${i * 0.4}s`, transformStyle: "preserve-3d" }}>
                  <Phone app={app} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5" style={{ transform: "translateZ(20px)" }}>
                <div className="flex items-center gap-3">
                  <Image src={app.icon} alt="" width={44} height={44} className="h-11 w-11 rounded-xl shadow-md shadow-black/40" />
                  <div className="min-w-0">
                    <h3 className="truncate font-bold text-white">{app.name}</h3>
                    <p className="truncate font-mono text-[11px] text-blue-400">{app.category}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{app.summary}</p>
                <div className="mt-auto flex gap-2 pt-5">
                  {app.playStore && <StoreButton href={app.playStore} store="play" />}
                  {app.appStore && <StoreButton href={app.appStore} store="apple" />}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

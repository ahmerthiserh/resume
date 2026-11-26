import { ArrowDown, FileDown, Mail, MapPin } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio";
import { Portrait3D } from "@/components/three/portrait-3d";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function HeroSection() {
  const [primary, secondary] = PROFILE_DATA.title.split(" | ");

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16">
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* 3D portrait: above the text on mobile, right column on desktop */}
        <div className="hero-in order-first px-8 sm:px-12 lg:order-last lg:px-6" style={{ animationDelay: "120ms" }}>
          <Portrait3D />
        </div>

        <div className="max-w-2xl">
          <span className="hero-in inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {PROFILE_DATA.availability}
          </span>

          <h1 className="hero-in mt-6 text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-7xl" style={{ animationDelay: "80ms" }}>
            {PROFILE_DATA.name.split(" ")[0]}
            <br />
            <span className="text-gradient-hero">{PROFILE_DATA.name.split(" ").slice(1).join(" ")}</span>
          </h1>

          <p className="hero-in mt-5 text-lg font-medium text-slate-200 sm:text-2xl" style={{ animationDelay: "160ms" }}>
            {primary}
            <span className="mx-2 text-slate-600">/</span>
            <span className="text-blue-300">{secondary}</span>
          </p>

          <p className="hero-in mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg" style={{ animationDelay: "240ms" }}>
            {PROFILE_DATA.bio}
          </p>

          <div className="hero-in mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "320ms" }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:shadow-blue-500/50 hover:brightness-110 active:scale-98"
            >
              View my work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={PROFILE_DATA.resumePath}
              download="Ahmad_Isah_CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 active:scale-98"
            >
              <FileDown className="h-4 w-4" />
              Download CV
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg p-2.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-white">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href={PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg p-2.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-white">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href={`mailto:${PROFILE_DATA.email}`} aria-label="Email" className="rounded-lg p-2.5 text-slate-400 transition-colors hover:bg-white/5 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <p className="hero-in mt-8 inline-flex items-center gap-1.5 text-sm text-slate-500" style={{ animationDelay: "400ms" }}>
            <MapPin className="h-4 w-4 text-blue-400/80" />
            {PROFILE_DATA.location}
          </p>
        </div>
      </div>

      <a href="#highlights" aria-label="Scroll down" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/20 pt-2">
          <span className="scroll-dot h-2 w-1 rounded-full bg-white/70" />
        </span>
      </a>
    </section>
  );
}

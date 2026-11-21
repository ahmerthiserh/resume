import Image from "next/image";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio";
import { Reveal } from "@/components/motion/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-blue-600/20 via-slate-900/60 to-violet-600/20 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl" />

          <div className="relative mx-auto mb-6 w-fit" style={{ perspective: "600px" }}>
            <div className="avatar-orbit relative rounded-full bg-linear-to-br from-blue-400 via-violet-500 to-cyan-400 p-0.75 shadow-2xl shadow-blue-600/40">
              <Image src="/ahmad-isah-avatar.webp" alt="Ahmad Isah" width={96} height={96} className="h-24 w-24 rounded-full object-cover" />
            </div>
            <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-slate-900 bg-emerald-400" />
          </div>
          <p className="relative font-mono text-xs uppercase tracking-[0.25em] text-blue-300">06 · Contact</p>
          <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Have a product to build? <span className="text-gradient-hero">Let&apos;s talk.</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-slate-300">
            I&apos;m open to contract and remote roles in mobile, backend and payments.
            Working hours overlap with Europe (GMT+1).
          </p>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition-transform hover:scale-103 active:scale-98"
            >
              <Mail className="h-4 w-4" />
              {PROFILE_DATA.email}
            </a>
            <a
              href={`tel:${PROFILE_DATA.phone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {PROFILE_DATA.phoneDisplay}
            </a>
          </div>

          <div className="relative mt-6 flex items-center justify-center gap-6 text-sm text-slate-300">
            <a href={PROFILE_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white">
              LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-white">
              GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

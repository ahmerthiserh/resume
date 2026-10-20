import Image from "next/image";
import Link from "next/link";
import { FileDown, ExternalLink, ArrowUpRight, Clock, Mail } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={PROFILE_DATA.avatar}
            alt={PROFILE_DATA.name}
            width={72}
            height={72}
            priority
            className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-neutral-800 object-cover shadow-md bg-neutral-900 shrink-0"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {PROFILE_DATA.name}
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 font-medium mt-0.5">
              {PROFILE_DATA.title}
            </p>
          </div>
        </div>

        <span className="self-start sm:self-center inline-flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {PROFILE_DATA.availability}
        </span>
      </div>

      <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
        Full-Stack Software Engineer specializing in cross-platform mobile
        systems (<span className="text-white font-medium">{PROFILE_DATA.bioHighlight1}</span>) and scalable backend/payment architectures (<span className="text-white font-medium">{PROFILE_DATA.bioHighlight2}</span>). Proven track record engineering offline-first POS engines, automated reconciliation pipelines, and commercial production platforms.
      </p>

      {/* Timezone and Contact Details */}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-neutral-400 pt-1">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-neutral-500" />
          {PROFILE_DATA.timezone}
        </span>
        <span className="hidden sm:inline text-neutral-700">•</span>
        <Link
          href={`mailto:${PROFILE_DATA.email}`}
          className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors underline-offset-4 hover:underline"
        >
          <Mail className="w-4 h-4 text-neutral-500" />
          {PROFILE_DATA.email}
        </Link>
      </div>

      {/* Primary CTA Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-3">
        <a
          href={PROFILE_DATA.resumePath}
          download="Ahmad_Isah_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-sm active:scale-[0.98]"
        >
          <FileDown className="w-4 h-4" />
          Download PDF Resume
        </a>

        <Link
          href={PROFILE_DATA.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-800 bg-[#121212] text-white font-medium text-sm hover:bg-neutral-900 hover:border-neutral-700 transition-all active:scale-[0.98]"
        >
          <ExternalLink className="w-4 h-4 text-neutral-400" />
          LinkedIn Profile
        </Link>

        <Link
          href={PROFILE_DATA.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-neutral-800 bg-[#121212] text-neutral-300 font-medium text-sm hover:text-white hover:bg-neutral-900 hover:border-neutral-700 transition-all"
        >
          <ArrowUpRight className="w-4 h-4 text-neutral-400" />
          GitHub
        </Link>
      </div>
    </section>
  );
}

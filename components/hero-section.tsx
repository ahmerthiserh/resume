import Image from "next/image";
import Link from "next/link";
import { FileDown, ExternalLink, ArrowUpRight, Clock, Mail, MapPin } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="space-y-6">
      {/* Top Status & Avatar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Image
              src="/avatar.png"
              alt="Ahmad Isah"
              width={84}
              height={84}
              priority
              className="w-[84px] h-[84px] rounded-full object-cover border-2 border-slate-900 ring-2 ring-blue-500/30 shadow-lg shadow-blue-950/50 bg-slate-900"
            />
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-950" />
          </div>

          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Ahmad Isah
              </h1>
            </div>
            <p className="text-base sm:text-lg text-slate-300 font-medium mt-0.5">
              Full-Stack Software Engineer <span className="text-blue-400">|</span> Mobile & Cloud Architecture
            </p>
          </div>
        </div>

        <span className="self-start sm:self-center inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 text-xs rounded-full shadow-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for Contract & Sprint Engagements
        </span>
      </div>

      {/* Bio with Gradient Tech Highlights */}
      <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
        Full-Stack Software Engineer specializing in cross-platform mobile systems (
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
          Flutter
        </span>
        ) and scalable backend/payment architectures (
        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
          Node.js, Laravel
        </span>
        ). Proven track record engineering offline-first POS engines, automated reconciliation pipelines, and commercial production platforms.
      </p>

      {/* Meta Row with Iconography */}
      <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-sm text-slate-400 pt-1">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-blue-400/80" />
          GMT+1 (Nigeria · Europe overlap)
        </span>
        <span className="hidden sm:inline text-slate-700">•</span>
        <Link
          href={`mailto:${PROFILE_DATA.email}`}
          className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors underline-offset-4 hover:underline"
        >
          <Mail className="w-4 h-4 text-blue-400/80" />
          {PROFILE_DATA.email}
        </Link>
      </div>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href="/CV.pdf"
          download="Ahmad_Isah_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-md shadow-blue-500/20 active:scale-[0.98]"
        >
          <FileDown className="w-4 h-4" />
          Download PDF Resume
        </a>

        <Link
          href="https://www.linkedin.com/in/ahmerthiserh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 text-slate-200 font-medium text-sm transition-all active:scale-[0.98]"
        >
          <svg className="w-4 h-4 fill-blue-400" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0c0 .92.74 1.66 1.66 1.66m1.4 9.74v-8.37H5.06v8.37h2.8z" />
          </svg>
          LinkedIn Profile
        </Link>

        <Link
          href="https://github.com/ahmerthiserh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-800 text-slate-200 font-medium text-sm transition-all active:scale-[0.98]"
        >
          <svg className="w-4 h-4 fill-slate-300" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          GitHub
        </Link>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { BadgeCheck, Code2, Rocket } from "lucide-react";
import { HeroCanvas } from "@/components/three/hero-canvas";

/**
 * Hero portrait in layered 3D: the three.js orb and rings orbit behind the photo,
 * the arch-framed photo sits in the middle, and info cards float in front.
 * The whole rig turns toward the pointer anywhere on the page.
 */
export function Portrait3D() {
  const rig = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rig.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      el.style.setProperty("--px", x.toFixed(3));
      el.style.setProperty("--py", y.toFixed(3));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[400px]" style={{ perspective: "1400px" }}>
      {/* 3D orb + orbit rings behind the portrait */}
      <div className="pointer-events-none absolute -inset-[30%] -z-0">
        <HeroCanvas />
      </div>

      <div ref={rig} className="portrait-rig relative" style={{ transformStyle: "preserve-3d" }}>
        {/* Back glow plate */}
        <div
          className="absolute -inset-4 rounded-t-[999px] rounded-b-[2.5rem] bg-gradient-to-b from-blue-600/50 via-violet-600/30 to-cyan-500/20 blur-2xl"
          style={{ transform: "translateZ(-80px)" }}
        />
        {/* Offset outline for depth */}
        <div
          className="absolute inset-0 rounded-t-[999px] rounded-b-[2rem] border border-blue-400/30"
          style={{ transform: "translateZ(-40px) translate(18px, 18px)" }}
        />

        {/* Photo in an arch frame with a gradient border */}
        <div
          className="relative rounded-t-[999px] rounded-b-[2rem] bg-gradient-to-b from-blue-400/70 via-violet-500/50 to-white/5 p-[2px] shadow-[0_40px_80px_-30px_rgba(37,99,235,0.6)]"
          style={{ transform: "translateZ(0px)" }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[calc(2rem-2px)] bg-slate-900">
            <Image
              src="/ahmad-isah-portrait.webp"
              alt="Ahmad Isah, full-stack software engineer"
              fill
              priority
              sizes="(max-width: 640px) 300px, 400px"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/85 to-transparent" />
            <div className="portrait-sheen pointer-events-none absolute inset-0" />
            <div className="absolute inset-x-0 bottom-4 text-center">
              <p className="text-sm font-semibold text-white">Ahmad Isah</p>
              <p className="font-mono text-[11px] text-blue-200/90">Full-Stack Software Engineer</p>
            </div>
          </div>
        </div>

        {/* Floating info cards in front */}
        <div className="absolute -left-[7%] top-[14%] sm:-left-[22%]" style={{ transform: "translateZ(60px)" }}>
          <div className="float-chip flex items-center gap-2 rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 shadow-xl shadow-black/40 backdrop-blur-md">
            <span className="rounded-lg bg-blue-500/20 p-1.5 text-blue-300"><Code2 className="h-4 w-4" /></span>
            <span className="text-xs leading-tight">
              <span className="block font-semibold text-white">Flutter · Node.js</span>
              <span className="text-slate-400">Laravel · Next.js</span>
            </span>
          </div>
        </div>

        <div className="absolute -right-[7%] top-[46%] sm:-right-[20%]" style={{ transform: "translateZ(80px)" }}>
          <div className="float-chip flex items-center gap-2 rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 shadow-xl shadow-black/40 backdrop-blur-md" style={{ animationDelay: "-2s" }}>
            <span className="rounded-lg bg-violet-500/20 p-1.5 text-violet-300"><Rocket className="h-4 w-4" /></span>
            <span className="text-xs leading-tight">
              <span className="block font-semibold text-white">15+ products</span>
              <span className="text-slate-400">web &amp; mobile</span>
            </span>
          </div>
        </div>

        <div className="absolute -left-[5%] bottom-[16%] sm:-left-[14%]" style={{ transform: "translateZ(45px)" }}>
          <div className="float-chip flex items-center gap-2 rounded-xl border border-white/15 bg-slate-950/80 px-3 py-2 shadow-xl shadow-black/40 backdrop-blur-md" style={{ animationDelay: "-4s" }}>
            <span className="rounded-lg bg-emerald-500/20 p-1.5 text-emerald-300"><BadgeCheck className="h-4 w-4" /></span>
            <span className="text-xs leading-tight">
              <span className="block font-semibold text-white">Co-founder</span>
              <span className="text-slate-400">Vetris Tech</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

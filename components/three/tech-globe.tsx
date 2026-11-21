"use client";

import { useEffect, useMemo, useRef } from "react";

/**
 * A sphere of skill tags rotating in 3D, built with CSS transforms.
 * Dragging or moving the mouse over it steers the spin.
 */
export function TechGlobe({ tags }: { tags: string[] }) {
  const container = useRef<HTMLDivElement>(null);
  const items = useRef<(HTMLSpanElement | null)[]>([]);
  const velocity = useRef({ x: 0.0022, y: 0.0035 });
  const target = useRef({ x: 0.0022, y: 0.0035 });

  // Evenly spread points on a unit sphere (Fibonacci sphere).
  const points = useMemo(() => {
    const n = tags.length;
    const golden = Math.PI * (3 - Math.sqrt(5));
    return tags.map((_, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = golden * i;
      return { x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius };
    });
  }, [tags]);

  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pts = points.map((p) => ({ ...p }));
    let raf = 0;
    let visible = true;

    const render = () => {
      const size = el.clientWidth;
      const R = size * 0.38;
      pts.forEach((p, i) => {
        const node = items.current[i];
        if (!node) return;
        const scale = (p.z + 2) / 3; // 0.33 .. 1
        node.style.transform = `translate3d(-50%, -50%, 0) translate3d(${(p.x * R).toFixed(1)}px, ${(p.y * R).toFixed(1)}px, ${(p.z * R).toFixed(1)}px) scale(${(0.7 + scale * 0.45).toFixed(3)})`;
        node.style.opacity = (0.25 + scale * 0.75).toFixed(3);
        node.style.zIndex = String(Math.round(scale * 100));
      });
    };

    const tick = () => {
      const v = velocity.current;
      v.x += (target.current.x - v.x) * 0.05;
      v.y += (target.current.y - v.y) * 0.05;
      const cx = Math.cos(v.x), sx = Math.sin(v.x);
      const cy = Math.cos(v.y), sy = Math.sin(v.y);
      for (const p of pts) {
        // rotate around X axis
        const y1 = p.y * cx - p.z * sx;
        const z1 = p.y * sx + p.z * cx;
        // rotate around Y axis
        const x2 = p.x * cy + z1 * sy;
        const z2 = -p.x * sy + z1 * cy;
        p.x = x2; p.y = y1; p.z = z2;
      }
      render();
      if (visible) raf = requestAnimationFrame(tick);
    };

    render();
    if (reduced) return;

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(tick);
    });
    io.observe(el);

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - r.left) / r.width - 0.5;
      const dy = (e.clientY - r.top) / r.height - 0.5;
      target.current = { x: -dy * 0.03, y: dx * 0.03 };
    };
    const onLeave = () => (target.current = { x: 0.0022, y: 0.0035 });
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [points]);

  return (
    <div
      ref={container}
      className="relative mx-auto aspect-square w-full max-w-115 select-none"
      style={{ perspective: "900px" }}
      aria-label="Technologies I work with"
    >
      <div className="absolute inset-[14%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(59,130,246,0.28),rgba(124,58,237,0.12)_45%,transparent_70%)] blur-xl" />
      <div className="absolute inset-[10%] rounded-full border border-blue-400/10" />
      <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
        {tags.map((tag, i) => (
          <span
            key={tag}
            ref={(el) => { items.current[i] = el; }}
            className="absolute left-1/2 top-1/2 whitespace-nowrap rounded-full border border-blue-400/25 bg-slate-950/70 px-3 py-1 font-mono text-xs text-blue-100 shadow-[0_0_18px_-6px_rgba(59,130,246,0.8)] backdrop-blur-sm will-change-transform"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";

/**
 * Counts from `from` to `to` once the number scrolls into view.
 * The server renders the final value, so it reads correctly without JavaScript.
 */
export function CountUp({
  to,
  from = 0,
  decimals = 0,
  duration = 1400,
}: {
  to: number;
  from?: number;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const show = (v: number) => (el.textContent = v.toFixed(decimals));
    show(from);
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        show(from + (to - from) * (1 - Math.pow(1 - t, 3)));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      show(to);
    };
  }, [to, from, decimals, duration]);

  return <span ref={ref}>{to.toFixed(decimals)}</span>;
}

import { PROFILE_DATA } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/10 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:px-8">
      <p>© 2026 {PROFILE_DATA.name} · Full-stack software engineer in Gombe, Nigeria</p>
      <p className="font-mono text-xs">Built with Next.js, Three.js &amp; Tailwind CSS</p>
    </footer>
  );
}

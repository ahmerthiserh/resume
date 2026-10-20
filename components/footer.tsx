import Link from "next/link";
import { PROFILE_DATA } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-mono">
      <p>© {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.</p>
      <div className="flex items-center gap-5 text-slate-400">
        <Link
          href={PROFILE_DATA.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          LinkedIn
        </Link>
        <Link
          href={PROFILE_DATA.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          GitHub
        </Link>
        <Link
          href={`mailto:${PROFILE_DATA.email}`}
          className="hover:text-blue-400 transition-colors"
        >
          Email
        </Link>
      </div>
    </footer>
  );
}

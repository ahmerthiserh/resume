import { SiteNav } from "@/components/site-nav";
import { Footer } from "@/components/footer";

/** Background, nav and footer shared by pages other than the home page. */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#030712] text-slate-200 selection:bg-blue-600/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-150 w-225 -translate-x-1/2 rounded-full bg-blue-700/20 blur-[140px]" />
      </div>
      <SiteNav />
      <div className="relative z-10 space-y-20 pt-32 sm:pt-40">
        {children}
        <Footer />
      </div>
    </main>
  );
}

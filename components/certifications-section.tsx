import { Award, GraduationCap } from "lucide-react";
import { CREDENTIALS } from "@/data/portfolio";

export function CertificationsSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-blue-400 font-mono">
            Certifications & Education
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Verified technical specializations, professional credentials, and formal qualifications
          </p>
        </div>
        <span className="text-xs font-mono text-slate-500 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md">
          {CREDENTIALS.length} Credentials
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CREDENTIALS.map((cred) => {
          const isEdu = cred.type === "education";
          const Icon = isEdu ? GraduationCap : Award;

          return (
            <div
              key={cred.title}
              className="relative rounded-xl border border-slate-800/90 bg-slate-900/60 backdrop-blur-md p-4.5 hover:border-blue-500/40 transition-all duration-300 group shadow-md shadow-slate-950/40"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800/40 text-blue-400 group-hover:text-blue-300 transition-colors shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white text-sm tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                    {cred.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-400 font-mono">
                    <span className="text-slate-300 font-medium">{cred.issuer}</span>
                    {cred.year && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-blue-400">{cred.year}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

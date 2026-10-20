import { Terminal, Layers, Cpu, Briefcase } from "lucide-react";
import { TECHNICAL_STACK } from "@/data/portfolio";

const CATEGORY_ICONS = [Terminal, Layers, Cpu, Briefcase];

export function SkillsSection() {
  return (
    <section className="mt-16 space-y-6">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
        Technical Stack & Core Architecture
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        {TECHNICAL_STACK.map((category, index) => {
          const Icon = CATEGORY_ICONS[index % CATEGORY_ICONS.length];
          return (
            <div
              key={category.title}
              className="p-5 rounded-xl border border-neutral-800/80 bg-[#121212] hover:border-neutral-700 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 text-neutral-400" />
                <span className="font-semibold text-white">
                  {category.title}
                </span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {category.skills.join(", ")}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

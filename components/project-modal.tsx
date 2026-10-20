"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Database, Server } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    // Prevent background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Close on Escape key press
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getCategoryIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes("client") || cat.includes("framework")) return <Layers className="w-3.5 h-3.5 text-blue-400" />;
    if (cat.includes("backend") || cat.includes("engine")) return <Cpu className="w-3.5 h-3.5 text-emerald-400" />;
    if (cat.includes("data") || cat.includes("storage")) return <Database className="w-3.5 h-3.5 text-purple-400" />;
    return <Server className="w-3.5 h-3.5 text-amber-400" />;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-all duration-200"
      onClick={onClose}
    >
      {/* Modal Dialog Container */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0b1222] border border-slate-800 shadow-2xl shadow-blue-950/40 p-6 sm:p-8 text-slate-200 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button (✕) */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h3 id="modal-title" className="text-2xl font-bold tracking-tight text-white">
              {project.title}
            </h3>
            <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
              ● {project.status}
            </span>
          </div>
          <p className="text-sm font-mono text-blue-400 font-medium">
            {project.role}
          </p>
        </div>

        {/* External Action Links */}
        <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-slate-800/80">
          {project.externalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                link.isPrimary
                  ? "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Project Header Preview Image */}
        {project.image && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950 mt-5 shadow-inner">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* Architecture Overview */}
        <div className="mt-6 space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
            Architecture Overview
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/70 p-4 rounded-xl border border-slate-800/80">
            {project.architectureOverview}
          </p>
        </div>

        {/* Architecture Flow Diagram */}
        <div className="mt-6">
          <ArchitectureDiagram projectId={project.id} />
        </div>

        {/* Key Engineering Highlights */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
            Key Engineering Highlights
          </h4>
          <ul className="space-y-2.5 text-sm">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Full Tech Stack Categorized */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
            Full Tech Stack & Infrastructure
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.detailedStack.map((group) => (
              <div
                key={group.category}
                className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-950/60"
              >
                <div className="flex items-center gap-1.5 mb-2">
                  {getCategoryIcon(group.category)}
                  <span className="text-xs font-semibold text-slate-300">
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Click outside or press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">ESC</kbd> to close</span>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

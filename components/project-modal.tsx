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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-200"
      onClick={onClose}
    >
      {/* Modal Dialog Container */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#121212] border border-[#262626] shadow-2xl p-6 sm:p-8 text-neutral-300 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button (✕) */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-700"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h3 id="modal-title" className="text-2xl font-bold tracking-tight text-white">
              {project.title}
            </h3>
            <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-0.5 rounded-full">
              {project.status}
            </span>
          </div>
          <p className="text-sm font-medium text-neutral-400">
            {project.role}
          </p>
        </div>

        {/* External Action Links */}
        <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-neutral-800">
          {project.externalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                link.isPrimary
                  ? "bg-white text-black hover:bg-neutral-200 shadow-sm"
                  : "bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700"
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Project Header Preview Image */}
        {project.image && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 mt-5 shadow-inner">
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
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Architecture Overview
          </h4>
          <p className="text-sm text-neutral-300 leading-relaxed bg-[#161616] p-4 rounded-xl border border-neutral-800/70">
            {project.architectureOverview}
          </p>
        </div>

        {/* Architecture Flow Diagram */}
        <div className="mt-6">
          <ArchitectureDiagram projectId={project.id} />
        </div>

        {/* Key Engineering Highlights */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Key Engineering Highlights
          </h4>
          <ul className="space-y-2.5 text-sm">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Full Tech Stack Categorized */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Full Tech Stack & Infrastructure
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.detailedStack.map((group) => (
              <div
                key={group.category}
                className="p-3.5 rounded-xl border border-neutral-800/80 bg-[#171717]"
              >
                <div className="flex items-center gap-1.5 mb-2">
                  {getCategoryIcon(group.category)}
                  <span className="text-xs font-semibold text-neutral-300">
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] bg-neutral-900 border border-neutral-800 text-neutral-400 px-2 py-0.5 rounded"
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
        <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-500">
          <span>Click outside or press <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 font-mono">ESC</kbd> to close</span>
          <button
            type="button"
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

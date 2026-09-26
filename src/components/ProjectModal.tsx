import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Cpu, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,102,255,0.2)] border border-blue-500/20 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pb-6 border-b border-slate-100">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.techBadge}</span>
          </div>

          <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-bold font-sans text-slate-900">
            {project.name}
          </h3>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6 text-left">
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Objective */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
              Primary Objective
            </h4>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm text-slate-700 font-sans">
              {project.objective}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
              Key Architecture &amp; Capabilities
            </h4>
            <div className="space-y-2">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Future Roadmap if applicable */}
          {project.futureRoadmap && (
            <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/60 text-xs text-blue-900 font-sans">
              <span className="font-bold text-blue-700 font-mono block mb-1">
                FUTURE AI EXPANSION ROADMAP:
              </span>
              {project.futureRoadmap}
            </div>
          )}

          {/* Technologies Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider">
              Technologies &amp; Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Close Details
          </button>

          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
          >
            <span>{project.demoButtonText || 'View Project Link'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
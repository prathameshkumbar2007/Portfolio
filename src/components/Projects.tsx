import React, { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  MapPin, 
  Wifi, 
  Radio, 
  Layers, 
  Eye, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50/40"
      aria-label="Featured Projects Showcase"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-blue-600 tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>// 04: PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
            Featured Projects
          </h2>
          <p className="font-mono text-sm text-slate-500 max-w-2xl">
            Real-world assistive hardware and cloud-deployed AI cybersecurity engineering. Click any project card to inspect architecture specifications.
          </p>
        </div>

        {/* 2 Featured Project Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => {
            const isSpecs = project.id === 'project-smart-spectacles';

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="glass-card glass-card-interactive rounded-3xl p-7 sm:p-9 flex flex-col justify-between space-y-8 cursor-pointer group relative overflow-hidden"
              >
                {/* Visual Backdrop Preview Box */}
                <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-6 text-white shadow-inner">
                  {/* Decorative Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,102,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,102,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none" />

                  {/* 3D Theme Visuals */}
                  {isSpecs ? (
                    // Smart Spectacles Visual
                    <div className="relative z-10 flex flex-col items-center space-y-4 text-center">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(0,102,255,0.35)] group-hover:scale-110 transition-transform duration-300">
                          <Eye className="w-10 h-10 text-cyan-400" />
                        </div>
                        {/* Ultrasonic Waves Simulation */}
                        <div className="absolute -inset-2 rounded-2xl border border-cyan-400/30 animate-ping opacity-40 pointer-events-none" />
                        <div className="absolute -inset-4 rounded-3xl border border-blue-400/20 pointer-events-none" />
                      </div>
                      <div className="space-y-1">
                        <span className="font-mono text-xs text-cyan-300 tracking-wider font-semibold flex items-center justify-center space-x-1">
                          <Radio className="w-3.5 h-3.5" />
                          <span>ULTRASONIC SENSOR TELEMETRY</span>
                        </span>
                        <p className="text-[11px] text-slate-300 font-mono">
                          Multimodal Alerts // Buzzer • Vibration • Voice
                        </p>
                      </div>
                    </div>
                  ) : (
                    // CyberTrace AI Visual
                    <div className="relative z-10 flex flex-col items-center space-y-4 text-center">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-blue-600/20 border border-blue-400/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(0,102,255,0.35)] group-hover:scale-110 transition-transform duration-300">
                          <ShieldCheck className="w-10 h-10 text-blue-400" />
                        </div>
                        <div className="absolute -inset-2 rounded-2xl border border-blue-400/30 animate-pulse pointer-events-none" />
                      </div>
                      <div className="space-y-1">
                        <span className="font-mono text-xs text-blue-300 tracking-wider font-semibold flex items-center justify-center space-x-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>AI GEO-FORENSICS &amp; THREAT MATRIX</span>
                        </span>
                        <p className="text-[11px] text-slate-300 font-mono">
                          Phishing • Spoofing • BEC • IP Intelligence
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Corner Status Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white/90">
                    CLICK FOR SPECS
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                      {project.techBadge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                      <span>PROJECT DETAILS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-blue-600 transition-colors" />
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-sans text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 text-slate-700 border border-slate-200/80 group-hover:border-blue-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2.5 py-1 text-xs font-mono rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 font-medium">
                    EXPLORE ARCHITECTURE
                  </span>

                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-sm hover:shadow-md transition-all"
                  >
                    <span>{project.demoButtonText || 'Open Project'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
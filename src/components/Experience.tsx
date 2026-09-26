import React from 'react';
import { Briefcase, Sparkles, Code2, Rocket, ArrowRight, Compass } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Experience: React.FC = () => {
  const { status, headline, description } = PORTFOLIO_DATA.experience;

  const currentFocusAreas = [
    {
      title: "Hands-on Model Building",
      desc: "Architecting machine learning pipelines, evaluating neural networks, and working with Python ecosystem libraries.",
      icon: Code2,
    },
    {
      title: "Real-World Cyber & IoT Applications",
      desc: "Engineering live deployed security tools (CyberTrace AI) and assistive IoT systems with hardware sensors.",
      icon: Rocket,
    },
    {
      title: "Collaborative Open Source & Research",
      desc: "Actively seeking internship roles, industry problem-solving, and hackathons with visionary engineering teams.",
      icon: Compass,
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Experience and Current Trajectory"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-blue-600 tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>// 05: PROFESSIONAL STANDING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
            Experience
          </h2>
          <p className="font-mono text-sm text-slate-500 max-w-2xl">
            Authentic career trajectory prioritizing verified skills, production projects, and relentless curiosity.
          </p>
        </div>

        {/* Feature Hero Card */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-blue-500/20 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>STATUS: {status.toUpperCase()} // READY FOR INTERNSHIPS</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-slate-900 leading-snug">
                &ldquo;{headline}&rdquo;
              </h3>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-3xl">
                {description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col space-y-4">
              <div className="p-6 rounded-2xl bg-gradient-to-tr from-blue-50 to-white border border-blue-200 text-left space-y-2">
                <div className="text-xs font-mono text-blue-600 font-semibold uppercase">
                  Academic Timeline
                </div>
                <div className="text-xl font-bold font-sans text-slate-900">
                  Class of 2026
                </div>
                <p className="text-xs text-slate-500 font-mono">
                  B.Tech CSE (AI &amp; ML) • Kishkinda University
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 text-left space-y-2 shadow-sm">
                <div className="text-xs font-mono text-slate-400 font-semibold uppercase">
                  Availability
                </div>
                <div className="text-xl font-bold font-sans text-emerald-600">
                  Open for Roles
                </div>
                <p className="text-xs text-slate-500 font-mono">
                  AI Engineering • Data Analytics • Software Development
                </p>
              </div>
            </div>

          </div>

          {/* Current Focus Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 mt-10 border-t border-slate-100">
            {currentFocusAreas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 text-left space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold font-sans text-slate-900 text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
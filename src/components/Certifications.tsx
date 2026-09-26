import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50/40"
      aria-label="Certifications and Credentials"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-blue-600 tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>// 08: CREDENTIALS &amp; RIGOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
            Certifications
          </h2>
          <p className="font-mono text-sm text-slate-500 max-w-2xl">
            Verified technical curriculum and industry simulations completed across full-stack engineering, generative AI analytics, and cloud AI infrastructure.
          </p>
        </div>

        {/* 3 Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="glass-card glass-card-interactive p-8 rounded-3xl flex flex-col justify-between space-y-6 text-left group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    CERT 0{index + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-blue-600 font-semibold uppercase tracking-wider block">
                    {cert.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-emerald-600">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>VERIFIED PROGRAM</span>
                </span>
                <span className="text-slate-400">AUTHENTIC</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
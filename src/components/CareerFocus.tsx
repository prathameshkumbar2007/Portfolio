import React from 'react';
import { Target, ArrowRight, Brain, BarChart3, Code2, Database, Sparkles, Layers } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const CareerFocus: React.FC = () => {
  const { title, subtitle, targetRoles, progression } = PORTFOLIO_DATA.careerFocus;

  return (
    <section
      id="career-focus"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Career Focus and Trajectory"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-blue-600 tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>// 03: CAREER DIRECTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
            {title}
          </h2>
          <p className="font-mono text-sm text-slate-500 max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Target Roles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {targetRoles.map((role, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-interactive p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between space-y-6"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
                    <Target className="w-3.5 h-3.5" />
                    <span>CAREER OBJECTIVE {idx + 1}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-sans text-slate-900 pt-1">
                    {role.title}
                  </h3>
                </div>
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-md">
                  {idx === 0 ? <Brain className="w-6 h-6" /> : <BarChart3 className="w-6 h-6" />}
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                {role.description}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>TARGET SPECIFICATION</span>
                <span className="text-blue-600 font-semibold">ACTIVE FOCUS</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Stage Progression Pipeline */}
        <div className="glass-card p-8 rounded-3xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-500/10 pb-6">
            <div>
              <h3 className="text-xl font-bold font-sans text-slate-900">
                Engineering Progression Pipeline
              </h3>
              <p className="text-xs font-mono text-slate-500 mt-0.5">
                From algorithmic principles to production-grade intelligence
              </p>
            </div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STRUCTURED ROADMAP</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {progression.map((item, idx) => (
              <div
                key={item.step}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm relative group hover:border-blue-400 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                      STAGE {item.step}
                    </span>
                    {idx < progression.length - 1 && (
                      <ArrowRight className="hidden lg:block w-4 h-4 text-slate-300 absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full" />
                    )}
                  </div>

                  <h4 className="text-lg font-bold font-sans text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.stage}
                  </h4>

                  <p className="text-xs text-slate-500 leading-relaxed font-sans">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center space-x-2 text-[11px] font-mono text-emerald-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>FOUNDATION ACTIVE</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
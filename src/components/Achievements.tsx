import React from 'react';
import { TrendingUp, Sparkles, Code2, ShieldAlert, Cpu, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Achievements: React.FC = () => {
  const { heading, subheading, items } = PORTFOLIO_DATA.achievements;

  return (
    <section
      id="achievements"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Technical Achievements and Growth"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-blue-600 tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>// 09: TECHNICAL TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
            {heading}
          </h2>
          <p className="font-mono text-sm text-slate-500 max-w-2xl">
            {subheading}
          </p>
        </div>

        {/* 4 Milestones Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-interactive p-6 rounded-2xl flex flex-col justify-between space-y-6 text-left"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-semibold border border-blue-200 inline-block">
                  {item.tag}
                </span>

                <h3 className="text-lg font-bold font-sans text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>MILESTONE 0{index + 1}</span>
                <span className="text-emerald-600 font-medium">COMPLETED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
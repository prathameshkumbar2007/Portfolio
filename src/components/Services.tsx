import React from 'react';
import { Layout, LineChart, Terminal, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-blue-600" />;
      case 'LineChart':
        return <LineChart className="w-6 h-6 text-cyan-600" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-indigo-600" />;
      default:
        return <Layout className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section
      id="services"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50/50 border-t border-b border-blue-500/10"
      aria-label="Capabilities and Services"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-blue-600 tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>// 06: CORE DELIVERABLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
            What I Can Build
          </h2>
          <p className="font-mono text-sm text-slate-500 max-w-2xl">
            Practical, high-impact capabilities tailored for modern software engineering, data analytics, and intelligent systems.
          </p>
        </div>

        {/* 3 Premium Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.services.map((service, index) => (
            <div
              key={service.id}
              className="glass-card glass-card-interactive p-8 rounded-3xl flex flex-col justify-between space-y-8 text-left group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
                    {getIcon(service.icon)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-sans text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-600 font-medium">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans pt-1">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold tracking-wider block">
                    Core Capabilities
                  </span>
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>PRACTICAL EXECUTION</span>
                <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const BrandStatement: React.FC = () => {
  return (
    <section
      id="brand-statement"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50/60 border-y border-blue-500/10"
      aria-label="Brand Philosophy Statement"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-mono font-medium">
          <Terminal className="w-3.5 h-3.5" />
          <span>ENGINEERING PHILOSOPHY</span>
        </div>

        <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-sans leading-tight">
          &ldquo;I don&apos;t just learn technology — <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            I build with it.
          </span>
          &rdquo;
        </blockquote>

        <p className="font-mono text-xs sm:text-sm text-slate-500 max-w-xl mx-auto tracking-wide">
          Turning algorithmic concepts, hardware sensors, and data pipelines into tangible, user-centric products.
        </p>
      </div>

      {/* Background Soft Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};
import React from 'react';
import { Sparkles, Brain, Award, MapPin, GraduationCap, Code } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { AboutNeuralSphere } from './three/AboutNeuralSphere';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="About Prathamesh Kumbar"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-blue-600 tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>// 01: IDENTITY &amp; PASSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
            About Me
          </h2>
          <p className="font-mono text-sm text-slate-500 max-w-2xl">
            A background in foundational computer science, machine intelligence, and purposeful engineering.
          </p>
        </div>

        {/* Two-Column Grid: Text & Interactive 3D Sphere */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="prose prose-slate max-w-none space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              {PORTFOLIO_DATA.about.paragraphs.map((para, idx) => (
                <p key={idx} className="first:font-medium first:text-slate-800">
                  {para}
                </p>
              ))}
            </div>

            {/* Visual Highlight Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50/50 border border-blue-200/80 shadow-sm relative overflow-hidden">
              <div className="flex items-start space-x-3.5">
                <div className="p-2 rounded-xl bg-blue-600 text-white shrink-0 mt-0.5 shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-blue-600 uppercase font-semibold tracking-wider">
                    Core Mindset
                  </span>
                  <p className="text-lg font-bold text-slate-900 font-sans">
                    &ldquo;{PORTFOLIO_DATA.about.highlight}&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* Dossier Statistics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {PORTFOLIO_DATA.about.keyMetrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm"
                >
                  <div className="text-[10px] font-mono text-slate-400 uppercase">
                    {metric.label}
                  </div>
                  <div className="text-sm font-bold text-slate-800 font-sans mt-0.5">
                    {metric.value}
                  </div>
                  <div className="text-[10px] font-mono text-blue-600 mt-1">
                    {metric.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Interactive AI Sphere */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full glass-card rounded-3xl p-6 relative overflow-hidden flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-between pb-3 border-b border-blue-500/10 font-mono text-xs text-slate-500">
                <span className="flex items-center space-x-1.5 text-blue-600 font-semibold">
                  <Brain className="w-4 h-4" />
                  <span>NEURAL TOPOLOGY</span>
                </span>
                <span>SPATIAL 3D</span>
              </div>

              {/* Interactive Three.js Sphere */}
              <AboutNeuralSphere />

              {/* Interactive Features List */}
              <div className="w-full pt-4 grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-600">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>AI/ML Architectures</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Data Pipelines</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Threat Intelligence</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>Modern Software</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
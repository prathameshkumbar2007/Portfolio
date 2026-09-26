import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  Sparkles, 
  Cpu, 
  GraduationCap, 
  ShieldCheck, 
  Layers,
  ChevronDown
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export const Hero: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Subtle 3D tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / rect.height) * 10,
      y: (x / rect.width) * 10,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Introduction and Hero"
    >
      {/* Background Soft Blue Tech Radial Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Identity, Main Headline & Actions */}
        <div className="lg:col-span-7 flex flex-col space-y-7 text-left">
          
          {/* Badge: AI × DATA × SOFTWARE */}
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-50/80 backdrop-blur-md max-w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="font-mono text-xs font-semibold text-blue-700 tracking-wider">
              {PORTFOLIO_DATA.personal.badge}
            </span>
          </div>

          {/* Identity & Main Headline */}
          <div className="space-y-3">
            <div className="space-y-1">
              <p className="font-mono text-xs sm:text-sm text-blue-600 tracking-widest uppercase font-semibold">
                PRATHAMESH // {PORTFOLIO_DATA.personal.role}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 font-sans leading-[1.1]">
                Building Intelligent Experiences with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 text-glow-blue">
                  AI.
                </span>
              </h1>
            </div>
            
            {/* Supporting Line */}
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl font-sans pt-2">
              {PORTFOLIO_DATA.personal.supportingLine}
            </p>
          </div>

          {/* Academic & Location Pill */}
          <div className="p-3.5 rounded-2xl border border-blue-500/15 bg-white/80 backdrop-blur-md flex items-center space-x-3.5 shadow-sm max-w-fit">
            <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0 border border-blue-100">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <div className="font-sans font-semibold text-slate-900">
                {PORTFOLIO_DATA.personal.university}
              </div>
              <div className="font-mono text-slate-500">
                {PORTFOLIO_DATA.personal.education.degree} • {PORTFOLIO_DATA.personal.location}
              </div>
            </div>
          </div>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all duration-200 shadow-[0_4px_20px_rgba(0,102,255,0.3)] hover:shadow-[0_6px_25px_rgba(0,102,255,0.45)] hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-medium text-sm transition-all duration-200 border border-slate-200 hover:border-blue-500/40 shadow-sm hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <Layers className="w-4 h-4 text-blue-600" />
              <span>View Projects</span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium text-sm transition-all duration-200 border border-blue-200 hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center space-x-3 pt-2 text-slate-500">
            <span className="text-xs font-mono text-slate-400">CONNECT:</span>
            {PORTFOLIO_DATA.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white border border-slate-200 hover:border-blue-500/50 hover:text-blue-600 text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                aria-label={`Open ${social.platform} profile`}
              >
                {social.platform === 'GitHub' && <Github className="w-4 h-4" />}
                {social.platform === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                {social.platform === 'Instagram' && <Instagram className="w-4 h-4" />}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Portrait Composition */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          
          {/* Subtle Outer Energy Rings */}
          <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full border border-blue-500/15 pointer-events-none animate-pulse" />
          <div className="absolute w-[440px] h-[440px] sm:w-[500px] sm:h-[500px] rounded-full border border-blue-400/10 pointer-events-none" />

          {/* 3D Glass Composition Card */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[340px] sm:max-w-[380px] rounded-3xl p-3.5 bg-white/70 backdrop-blur-2xl border border-blue-500/20 shadow-[0_20px_50px_rgba(0,102,255,0.12)] transition-transform duration-200 ease-out will-change-transform"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            {/* Holographic Header Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-blue-500/10 mb-3 font-mono text-[11px] text-slate-500">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-slate-800 font-semibold">PRATHAMESH // ID</span>
              </div>
              <span className="text-blue-600 font-medium">B.Tech 2026</span>
            </div>

            {/* Portrait Frame Container */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100 shadow-inner group">
              <img
                src={PORTFOLIO_DATA.personal.portraitImage}
                alt="Prathamesh Kumbar - Professional Technology Portrait"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
              
              {/* Subtle electric blue rim gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-blue-500/5 pointer-events-none" />

              {/* Inset Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900 font-sans">
                      {PORTFOLIO_DATA.personal.fullName}
                    </div>
                    <div className="text-[10px] font-mono text-blue-600 font-medium">
                      {PORTFOLIO_DATA.personal.role}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-slate-400">STATUS</div>
                    <div className="text-[11px] font-bold text-emerald-600">
                      {PORTFOLIO_DATA.personal.experienceStatus}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Decorative Tech Elements */}
            <div className="flex items-center justify-between pt-3 px-2 text-[10px] font-mono text-slate-400">
              <span>BALLARY, KARNATAKA</span>
              <span className="text-blue-600 font-semibold">8.5 CGPA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <button
        onClick={() => scrollTo('brand-statement')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full text-slate-400 hover:text-blue-600 transition-colors animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
};
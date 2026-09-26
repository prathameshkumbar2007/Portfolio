import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Education: React.FC = () => {
  const edu = PORTFOLIO_DATA.personal.education;

  return (
    <section
      id="education"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Academic Education and Timeline"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-blue-600 tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>// 07: ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
            Education
          </h2>
          <p className="font-mono text-sm text-slate-500 max-w-2xl">
            Formal undergraduate studies in Computer Science and Engineering specializing in Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* 3D Academic Card Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-10 border-l-2 border-blue-500/30 space-y-10">
            
            {/* Timeline Node Point */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-[0_0_15px_rgba(0,102,255,0.6)]" />

            {/* Main Education Card */}
            <div className="glass-card glass-card-interactive p-8 sm:p-10 rounded-3xl space-y-6 text-left relative overflow-hidden">
              {/* Decorative Corner Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium">
                    <GraduationCap className="w-4 h-4" />
                    <span>UNDERGRADUATE DEGREE</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-sans text-slate-900">
                    {edu.degree}
                  </h3>
                  <div className="text-base sm:text-lg font-semibold text-blue-600 font-sans">
                    {edu.institution}
                  </div>
                </div>

                {/* CGPA Badge */}
                <div className="p-4 rounded-2xl bg-blue-600 text-white text-center shadow-[0_4px_20px_rgba(0,102,255,0.3)] shrink-0 sm:self-start">
                  <div className="text-[10px] font-mono tracking-wider uppercase text-blue-100 font-semibold">
                    CURRENT SCORE
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-sans">
                    {edu.cgpa}
                  </div>
                </div>
              </div>

              {/* Timeline Info Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 border-y border-slate-100 text-xs font-mono text-slate-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>Graduation Year: {edu.graduationYear}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Location: {edu.location}</span>
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                  <span>Academic Focus Areas</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Artificial Intelligence &amp; Machine Learning</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Data Structures &amp; Algorithms in Python/Java/C</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Cybersecurity &amp; Threat Analysis</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Full-Stack Web Development &amp; Embedded Systems</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
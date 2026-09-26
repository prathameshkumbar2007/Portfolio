import React, { useState } from 'react';
import { 
  Code2, 
  Coffee, 
  Cpu, 
  Globe, 
  Palette, 
  Zap, 
  GitBranch, 
  Github, 
  Brain, 
  Sparkles, 
  BarChart3, 
  Shield, 
  Layers 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Programming', 'Web', 'Development Tools', 'Future Focus'];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-600" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-blue-500" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-yellow-500" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-orange-600" />;
      case 'Github':
        return <Github className="w-5 h-5 text-slate-800" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-blue-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-cyan-500" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-emerald-600" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-blue-700" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-600" />;
    }
  };

  const filteredGroups =
    activeTab === 'All'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((g) => g.category === activeTab);

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 border-t border-b border-blue-500/10"
      aria-label="Technical Skills"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header and Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center space-x-2 font-mono text-xs text-blue-600 tracking-widest uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>// 02: TECHNICAL COMPETENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
              Technical Skills
            </h2>
            <p className="font-mono text-sm text-slate-500 max-w-2xl">
              Authentic technology stacks and focused exploration areas. Cleanly categorized without fabricated percentage bars.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-200 focus:outline-none ${
                  activeTab === cat
                    ? 'bg-blue-600 text-white font-semibold shadow-[0_2px_10px_rgba(0,102,255,0.35)]'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="glass-card glass-card-interactive p-6 rounded-2xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono text-blue-600 font-semibold uppercase tracking-wider">
                    {group.category}
                  </div>
                  <p className="text-xs text-slate-500 leading-normal">
                    {group.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-white border border-slate-100 hover:border-blue-300 transition-colors flex items-center space-x-3 shadow-sm group"
                    >
                      <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-blue-50 transition-colors shrink-0">
                        {getSkillIcon(skill.icon)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-sans font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 truncate">
                          {skill.level}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inset footer badge */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>VERIFIED</span>
                <span className="text-blue-600 font-semibold">{group.skills.length} TECHNOLOGIES</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
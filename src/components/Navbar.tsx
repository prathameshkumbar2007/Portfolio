import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-blue-500/10 shadow-[0_4px_25px_rgba(10,17,40,0.04)] py-3'
          : 'bg-white/40 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#hero');
            }}
            className="flex items-center space-x-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 p-[1.5px] shadow-[0_0_15px_rgba(0,102,255,0.25)] group-hover:shadow-[0_0_20px_rgba(0,102,255,0.45)] transition-all">
              <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-blue-600">P</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-base tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors">
                PRATHAMESH
              </span>
              <span className="font-mono text-[10px] text-blue-600 tracking-tight font-medium">
                AI × DATA × SOFTWARE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 bg-slate-50/80 p-1.5 rounded-full border border-blue-500/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-blue-600 shadow-[0_2px_10px_rgba(0,102,255,0.35)]'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume Coming Soon & Mobile Hamburger */}
          <div className="flex items-center space-x-3">
            {/* Resume Placeholder Button (Non-clickable/coming soon as instructed) */}
            <div className="relative group hidden sm:block">
              <button
                disabled
                className="px-3.5 py-1.5 text-xs font-mono rounded-full bg-slate-100 text-slate-500 border border-slate-200 cursor-not-allowed flex items-center space-x-1.5 opacity-90 hover:opacity-100"
                title="Resume PDF will be uploaded soon"
              >
                <FileText className="w-3.5 h-3.5 text-blue-500" />
                <span>Resume — Coming Soon</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-blue-50/80 border border-slate-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-2xl border-b border-blue-500/15 shadow-xl px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-1 pt-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-slate-100 mt-2">
            <span className="block text-center text-xs font-mono text-slate-400 py-1">
              Resume — Coming Soon
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
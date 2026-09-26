import React from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-blue-500/10 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-left">
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-sm">
                P
              </div>
              <span className="font-sans font-bold text-xl tracking-wider text-slate-900">
                PRATHAMESH
              </span>
            </div>
            <p className="text-xs font-mono text-blue-600 font-medium">
              {PORTFOLIO_DATA.personal.role} • {PORTFOLIO_DATA.personal.university}
            </p>
            <p className="text-sm text-slate-500 font-sans max-w-md pt-1">
              &ldquo;Building intelligent ideas into real-world experiences.&rdquo;
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center space-x-3 text-slate-600">
              {PORTFOLIO_DATA.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-colors"
                  aria-label={social.platform}
                >
                  {social.platform === 'GitHub' && <Github className="w-4 h-4" />}
                  {social.platform === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                  {social.platform === 'Instagram' && <Instagram className="w-4 h-4" />}
                </a>
              ))}
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 transition-colors flex items-center space-x-1.5 text-xs font-mono"
              aria-label="Scroll to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            Location: {PORTFOLIO_DATA.contact.location}
          </div>
          <div>
            &copy; 2026 {PORTFOLIO_DATA.personal.fullName}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
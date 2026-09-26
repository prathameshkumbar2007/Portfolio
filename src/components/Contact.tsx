import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'transmitted' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('transmitting');

    setTimeout(() => {
      setStatus('transmitted');
      // Trigger native client-side mailto dispatch
      const subject = encodeURIComponent(
        formState.subject || `Portfolio Message from ${formState.name}`
      );
      const body = encodeURIComponent(
        `Hi Prathamesh,\n\n${formState.message}\n\nBest regards,\n${formState.name} (${formState.email})`
      );
      window.location.href = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50/50 border-t border-blue-500/10"
      aria-label="Contact Information and Inquiries"
    >
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="space-y-3 text-left">
          <div className="inline-flex items-center space-x-2 font-mono text-xs text-blue-600 tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>// 10: GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-sans">
            {PORTFOLIO_DATA.contact.title}
          </h2>
          <p className="font-mono text-sm text-slate-500 max-w-2xl">
            {PORTFOLIO_DATA.contact.subtitle}
          </p>
        </div>

        {/* Two-Column Grid: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards & Social Links */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start justify-between group hover:border-blue-400 transition-all">
              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  Direct Email
                </span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                  className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors block font-sans"
                >
                  {PORTFOLIO_DATA.contact.email}
                </a>
                <span className="text-[11px] font-mono text-slate-400">
                  Click to email or copy
                </span>
              </div>
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.contact.email, 'email')}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-blue-600 border border-slate-100 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start justify-between group hover:border-blue-400 transition-all">
              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  Phone Number
                </span>
                <a
                  href={`tel:${PORTFOLIO_DATA.contact.phone}`}
                  className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors block font-sans"
                >
                  +91 {PORTFOLIO_DATA.contact.phone}
                </a>
                <span className="text-[11px] font-mono text-slate-400">
                  Ballary, Karnataka, India
                </span>
              </div>
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.contact.phone, 'phone')}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-500 hover:text-blue-600 border border-slate-100 transition-colors"
                title="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-center space-x-4">
              <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  Location
                </span>
                <div className="text-sm font-bold text-slate-900 font-sans">
                  {PORTFOLIO_DATA.contact.location}
                </div>
                <div className="text-[11px] font-mono text-slate-500">
                  Open for Onsite &amp; Remote Engagements
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase font-semibold block">
                Professional Networks
              </span>
              <div className="flex flex-col space-y-2">
                {PORTFOLIO_DATA.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-100 flex items-center justify-between transition-colors text-xs font-mono"
                  >
                    <div className="flex items-center space-x-2.5">
                      {social.platform === 'GitHub' && <Github className="w-4 h-4 text-slate-900" />}
                      {social.platform === 'LinkedIn' && <Linkedin className="w-4 h-4 text-blue-700" />}
                      {social.platform === 'Instagram' && <Instagram className="w-4 h-4 text-pink-600" />}
                      <span className="font-sans font-semibold text-slate-900">{social.platform}</span>
                    </div>
                    <span className="text-slate-400 flex items-center space-x-1">
                      <span>{social.handle}</span>
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl text-left space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-sans text-slate-900">
                  Send a Message
                </h3>
                <p className="text-xs font-mono text-slate-500">
                  Form dispatches directly to your default mail client with pre-filled content.
                </p>
              </div>

              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs font-mono text-red-700 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'transmitted' && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 flex items-center space-x-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Opening your mail client... Thank you for reaching out!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-600 font-semibold block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 bg-white"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-600 font-semibold block">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-600 font-semibold block">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry / Internship Opportunity"
                    className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-600 font-semibold block">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Share your requirements, ideas, or questions..."
                    className="w-full text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 bg-white resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'transmitting'}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>{status === 'transmitting' ? 'Preparing Email...' : 'Send Message'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
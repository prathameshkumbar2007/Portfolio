import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, ChevronDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! I am Prathamesh AI, an intelligent assistant for Prathamesh Kumbar's portfolio. Ask me anything about his background, education, technical skills, projects, or contact details!",
      timestamp: 'Just now',
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Who is Prathamesh?",
    "What technologies does he know?",
    "Tell me about his projects.",
    "What is CyberTrace AI?",
    "What is his career goal?",
    "How can I contact him?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase().trim();

    if (q.includes("who is") || q.includes("introduce") || q.includes("about him") || q.includes("identity")) {
      return "Prathamesh Kumbar is a B.Tech Computer Science & Engineering (AI & ML) student at Kishkinda University (Class of 2026, 8.5 CGPA), based in Ballary, Karnataka, India. He is passionate about transforming ideas into practical, intelligent digital solutions across AI/ML, data analytics, software development, and cybersecurity.";
    }

    if (q.includes("tech") || q.includes("skill") || q.includes("language") || q.includes("know") || q.includes("stack")) {
      return "Prathamesh's verified technical skills include:\n• Programming: Python, Java, C\n• Web: HTML, CSS, JavaScript\n• Tools: Git, GitHub\n• Future Focus: Artificial Intelligence, Machine Learning, Data Analytics, Cybersecurity.\n(Note: He does not claim unverified percentages or fabricated ratings).";
    }

    if (q.includes("project") || q.includes("portfolio work") || q.includes("spectacle") || q.includes("cybertrace")) {
      if (q.includes("spectacle") || q.includes("blind") || q.includes("ultrasonic")) {
        return "Smart Spectacles for Blind Using Ultrasonic Sensor: An assistive wearable device engineered to help visually impaired individuals detect nearby obstacles using an ultrasonic sensor. When an obstacle is detected, the system provides buzzer, vibration, or voice alerts. AI can also be integrated for future object identification and intelligent voice guidance. Project link: https://lnkd.in/p/dCnwA6gp";
      }
      if (q.includes("cybertrace") || q.includes("threat") || q.includes("email") || q.includes("forensic")) {
        return "AI Email Threat Detection & Geo-Forensics (CyberTrace AI): An AI-powered cybersecurity platform that detects phishing, spoofing, BEC, and malicious emails while providing sender geolocation, domain intelligence, and forensic analysis for threat investigation. Live URL: https://cybertrace-ai-mocha.vercel.app/";
      }
      return "Prathamesh has built two prominent featured projects:\n1. Smart Spectacles for Blind: Assistive hardware using ultrasonic sensors for obstacle detection with buzzer/vibration/voice alerts.\n2. AI Email Threat Detection & Geo-Forensics (CyberTrace AI): Live cybersecurity platform detecting phishing, spoofing, and BEC emails with real-time sender geolocation and forensics.";
    }

    if (q.includes("career") || q.includes("goal") || q.includes("future") || q.includes("aim") || q.includes("role")) {
      return "Prathamesh's career goals are to work as an AI Engineer and Data Analyst. He follows a clear deliberate progression: Programming (Python/Java/C) → Data (Analytics & Pipelines) → AI (Machine Learning & Neural Networks) → Intelligent Applications.";
    }

    if (q.includes("education") || q.includes("university") || q.includes("college") || q.includes("cgpa") || q.includes("degree")) {
      return "Prathamesh is pursuing a B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning) at Kishkinda University, graduating in 2026 with a current 8.5 CGPA.";
    }

    if (q.includes("experience") || q.includes("job") || q.includes("internship") || q.includes("work history")) {
      return "Prathamesh's experience status is 'Fresher'. He is currently focused on building hands-on skills, production-grade projects, and real-world experience, and is actively open for internships and hackathons.";
    }

    if (q.includes("certification") || q.includes("certificate")) {
      return "Prathamesh holds 3 verified certifications:\n1. Full Stack Development\n2. GenAI Powered Data Analytics Job Simulation\n3. OCI AI Foundations Associate";
    }

    if (q.includes("service") || q.includes("what he can build") || q.includes("hire") || q.includes("build")) {
      return "What Prathamesh can build:\n1. Web Development (responsive, modern web interfaces with HTML/CSS/JavaScript)\n2. Data Analytics (exploratory data analysis, cleaning, and visual insights)\n3. Python Development (automation scripts, ML experimentation, algorithms).";
    }

    if (q.includes("resume") || q.includes("cv")) {
      return "Prathamesh currently does not have a public resume file linked yet. The website displays 'Resume — Coming Soon' which can be updated once his official PDF is published.";
    }

    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("location") || q.includes("reach") || q.includes("social")) {
      return "You can reach Prathamesh directly via:\n• Email: prathameshkumbar2007@gmail.com\n• Phone: 9036877407\n• Location: Ballary, Karnataka, India\n• GitHub: https://github.com/prathameshkumbar2007\n• LinkedIn: https://www.linkedin.com/in/prathamesh-kumbar-6a9005384\n• Instagram: https://www.instagram.com/prathamk_2007";
    }

    if (q.includes("achievement") || q.includes("award")) {
      return "Under 'Learning, Building & Growing', Prathamesh highlights practical achievements in building AI/ML solutions, launching the CyberTrace AI platform, engineering assistive smart hardware, and earning cloud AI certifications. No informal or fabricated awards are claimed.";
    }

    return "That information is not currently listed in Prathamesh's portfolio. He only shares authentic, verified information regarding his education (Kishkinda University 2026, 8.5 CGPA), projects (CyberTrace AI & Smart Spectacles), verified skills, certifications, and direct contact details.";
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: 'Just now',
    };

    const botResponseText = generateAnswer(query);
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      sender: 'bot',
      text: botResponseText,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-[990]">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center space-x-2.5 px-4 py-3 bg-white/90 hover:bg-white text-slate-800 rounded-full border border-blue-500/30 shadow-[0_8px_25px_rgba(0,102,255,0.22)] hover:shadow-[0_10px_35px_rgba(0,102,255,0.35)] transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Open Prathamesh AI Assistant"
        >
          <div className="relative">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 absolute -top-0.5 -right-0.5 animate-ping" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-sm">
              <Bot className="w-4 h-4" />
            </div>
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold text-slate-900 flex items-center space-x-1">
              <span>Prathamesh AI</span>
              <Sparkles className="w-3 h-3 text-blue-500" />
            </div>
            <div className="text-[10px] text-blue-600 font-mono">Ask Portfolio Bot</div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] max-h-[85vh] flex flex-col bg-white/95 backdrop-blur-xl border border-blue-500/25 rounded-2xl shadow-[0_20px_50px_rgba(10,17,40,0.18)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="px-4 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold flex items-center space-x-1">
                  <span>Prathamesh AI</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block ml-1" />
                </h3>
                <p className="text-[10px] text-blue-100 font-mono">Verified Knowledge Base</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/20 text-white/80 hover:text-white transition-colors"
              aria-label="Close Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex items-start space-x-2 ${
                  m.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] whitespace-pre-line leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none shadow-sm'
                      : 'bg-slate-50 text-slate-800 border border-slate-200/80 rounded-bl-none'
                  }`}
                >
                  {m.text}
                </div>
                {m.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Prompts Carousel */}
          <div className="px-3 py-2 bg-slate-50/90 border-t border-slate-100 flex items-center space-x-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap px-2.5 py-1 text-[11px] rounded-full bg-white border border-blue-500/20 text-blue-700 hover:bg-blue-50 transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, skills, education..."
              className="flex-1 text-xs px-3.5 py-2.5 rounded-full border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-800 placeholder-slate-400 bg-slate-50/50"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-40 disabled:hover:bg-blue-600 transition-colors shadow-sm"
              aria-label="Send query"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
import React, { useState } from 'react';
import { NeuralNetworkCanvas } from '@/components/three/NeuralNetworkCanvas';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { BrandStatement } from '@/components/BrandStatement';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { CareerFocus } from '@/components/CareerFocus';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Services } from '@/components/Services';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CustomCursor } from '@/components/CustomCursor';
import { LoadingScreen } from '@/components/LoadingScreen';
import { AIChatbot } from '@/components/AIChatbot';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 tech-grid overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

      {/* Initial Loading Experience */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* 3D Interactive Three.js Neural Network Canvas */}
      <NeuralNetworkCanvas className="h-screen fixed" />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <BrandStatement />
        <About />
        <Skills />
        <CareerFocus />
        <Projects />
        <Experience />
        <Services />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Floating Prathamesh AI Assistant */}
      <AIChatbot />
    </div>
  );
};

export default App;
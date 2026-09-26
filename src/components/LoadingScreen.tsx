import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFading(true);
          setTimeout(onComplete, 400);
          return 100;
        }
        const diff = Math.random() * 25 + 15;
        return Math.min(prev + diff, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center space-y-6 max-w-sm px-6 text-center">
        {/* Monogram emblem */}
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-400 p-[1.5px] shadow-[0_0_30px_rgba(0,102,255,0.3)]">
          <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
            <span className="font-mono text-2xl font-bold text-blue-600">P</span>
          </div>
        </div>

        {/* Identity headline */}
        <div className="space-y-1.5">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-widest font-sans text-slate-900">
            PRATHAMESH
          </h1>
          <p className="font-mono text-xs text-blue-600 tracking-wider font-semibold">
            AI × DATA × SOFTWARE
          </p>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden border border-blue-500/10">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
          <span>INITIALIZING 3D ENVIRONMENT {Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
};
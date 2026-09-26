/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#ffffff',
          offwhite: '#f8fafc',
          canvas: '#f1f5f9',
          border: 'rgba(0, 102, 255, 0.12)',
          borderHover: 'rgba(0, 102, 255, 0.35)',
          navy: '#0a1128',
          navyLight: '#0f172a',
          slate: '#1e293b',
          muted: '#64748b',
          dim: '#94a3b8',
        },
        electric: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#0066ff',
          700: '#0052cc',
          800: '#1e40af',
          900: '#1e3a8a',
          cyan: '#00f0ff',
          glow: '#0066ff',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'blue-sm': '0 2px 8px -2px rgba(0, 102, 255, 0.15)',
        'blue-md': '0 8px 24px -4px rgba(0, 102, 255, 0.18)',
        'blue-glow': '0 0 25px rgba(0, 102, 255, 0.25)',
        'blue-glow-lg': '0 0 50px rgba(0, 102, 255, 0.35)',
        'card': '0 10px 30px -5px rgba(10, 17, 40, 0.05), 0 0 1px 1px rgba(0, 102, 255, 0.08)',
        'card-hover': '0 20px 40px -10px rgba(0, 102, 255, 0.16), 0 0 1px 1px rgba(0, 102, 255, 0.3)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 8px rgba(0,102,255,0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 20px rgba(0,102,255,0.7))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}

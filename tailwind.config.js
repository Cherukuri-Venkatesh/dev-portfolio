/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        obsidian: {
          950: '#030712',
          900: '#070d1e',
          850: '#0c142b',
          800: '#111c3a',
          700: '#1a294f',
        },
        cyber: {
          cyan: '#00f2fe',
          blue: '#4facfe',
          emerald: '#10b981',
          violet: '#8b5cf6',
          purple: '#a855f7',
          crimson: '#ef4444',
          ruby: '#ff1447',
          amber: '#f59e0b',
          neon: '#39ff14',
        }
      },
      animation: {
        'glow-drift': 'glowDrift 18s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 22s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glowDrift: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(40px, -30px) scale(1.15)' },
          '100%': { transform: 'translate(-20px, 25px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

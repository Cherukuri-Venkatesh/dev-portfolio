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
        display: ['Outfit', '"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        handwriting: ['Caveat', 'cursive'],
      },
      colors: {
        obsidian: {
          950: '#060709',
          900: '#0c0d12',
          850: '#11131a',
          800: '#161922',
          700: '#1e2230',
        },
        ember: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#ff5722',
          600: '#f4511e',
          700: '#e64a19',
          800: '#d84315',
          900: '#bf360c',
        },
        sunset: {
          400: '#ff8500',
          500: '#ff6d00',
          600: '#e65100',
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

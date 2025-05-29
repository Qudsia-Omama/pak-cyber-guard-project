
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0a0a0f',
          darker: '#05050a',
          blue: '#1e40af',
          purple: '#7c3aed',
          pink: '#ec4899',
          cyan: '#06b6d4',
          glow: '#3b82f6'
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #ec4899 100%)',
        'cyber-gradient-dark': 'linear-gradient(135deg, #1e3a8a 0%, #581c87 50%, #be185d 100%)',
        'glow-gradient': 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)'
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.5)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
        'cyber': '0 4px 30px rgba(59, 130, 246, 0.3)'
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}

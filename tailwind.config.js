/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './src/routes/**/*.{html,js,svelte,ts}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Futuristic dark mode palette
        'space-black': '#050505',
        'deep-space': '#0f111a',
        'night': '#1a1b26',
        'cyber-blue': '#5eead4',
        'neon-purple': '#bd93f9',
        'neon-pink': '#ff79c6',
        'soft-glow': '#313244'
      },
      fontFamily: {
        'future': ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #5eead4, 0 0 10px #5eead4' },
          '100%': { boxShadow: '0 0 10px #5eead4, 0 0 20px #5eead4' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        }
      }
    }
  },
  plugins: []
}; 
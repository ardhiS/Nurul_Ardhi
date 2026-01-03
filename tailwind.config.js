/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* ========================================
         LUXURY WEDDING COLOR SYSTEM
         Primary: Soft Pink (70%) | Secondary: Elegant Blue (30%)
         ======================================== */
      colors: {
        // Primary - Soft Pink (70% usage)
        pink: {
          50: '#fef7f9',
          100: '#fdeef3',
          200: '#fbd5e3',
          300: '#f8b4cd',
          400: '#f28bb0',
          500: '#e86a93',
          600: '#d64d78',
          700: '#b73a60',
          800: '#983350',
          900: '#7f2e45',
        },
        // Secondary - Elegant Blue (30% usage)
        blue: {
          50: '#f5f8fc',
          100: '#e8eff8',
          200: '#d1dfef',
          300: '#a8c5e2',
          400: '#7aa7d1',
          500: '#5a8fc0',
          600: '#4576a8',
          700: '#3a6189',
          800: '#345170',
          900: '#2e455e',
        },
        // Neutral - Warm Cream tones
        cream: {
          50: '#fffefb',
          100: '#fefcf6',
          200: '#fdf8ec',
          300: '#f9f1dd',
          400: '#f3e5c8',
          500: '#e8d5ae',
        },
      },

      /* Typography */
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        script: ['Great Vibes', 'cursive'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },

      /* Spacing tokens */
      spacing: {
        section: 'clamp(4rem, 8vw, 6rem)',
        component: 'clamp(1.5rem, 3vw, 2.5rem)',
      },

      /* Border radius */
      borderRadius: {
        card: '1.5rem',
        button: '9999px',
      },

      /* Box shadows */
      boxShadow: {
        soft: '0 2px 8px -2px rgb(127 46 69 / 0.08)',
        card: '0 4px 20px -4px rgb(127 46 69 / 0.12)',
        elevated: '0 12px 40px -8px rgb(127 46 69 / 0.18)',
        'glow-pink': '0 8px 30px -4px rgb(232 106 147 / 0.25)',
        'glow-blue': '0 8px 30px -4px rgb(90 143 192 / 0.2)',
      },

      /* Animation - Global luxury easing */
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      transitionDuration: {
        fast: '200ms',
        normal: '400ms',
        slow: '700ms',
        reveal: '800ms',
      },

      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'hero-reveal': 'heroReveal 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'hero-float': 'heroFloat 6s ease-in-out infinite',
        'hero-glow': 'heroGlow 3s ease-in-out infinite',
        'ornament-drift': 'ornamentDrift 8s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        heroReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        heroGlow: {
          '0%, 100%': {
            boxShadow: '0 10px 25px -5px rgba(232, 106, 147, 0.3)',
          },
          '50%': { boxShadow: '0 15px 35px -5px rgba(232, 106, 147, 0.45)' },
        },
        ornamentDrift: {
          '0%, 100%': { opacity: '0.08', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '0.1', transform: 'translateY(-8px) scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};

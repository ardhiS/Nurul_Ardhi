/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* ========================================
         WEDDING COLOR SYSTEM - Using CSS Variables
         Change colors in index.css :root to update entire site!
         Primary: Maroon (70%) | Accent: Gold (30%)
         ======================================== */
      colors: {
        // Primary - Maroon (references CSS variables)
        primary: {
          50: 'var(--wedding-primary-50)',
          100: 'var(--wedding-primary-100)',
          200: 'var(--wedding-primary-200)',
          300: 'var(--wedding-primary-300)',
          400: 'var(--wedding-primary-400)',
          500: 'var(--wedding-primary-500)',
          600: 'var(--wedding-primary-600)',
          700: 'var(--wedding-primary-700)',
          800: 'var(--wedding-primary-800)',
          900: 'var(--wedding-primary-900)',
          950: 'var(--wedding-primary-950)',
          DEFAULT: 'var(--wedding-primary-700)',
        },
        // Accent - Gold (references CSS variables)
        accent: {
          50: 'var(--wedding-accent-50)',
          100: 'var(--wedding-accent-100)',
          200: 'var(--wedding-accent-200)',
          300: 'var(--wedding-accent-300)',
          400: 'var(--wedding-accent-400)',
          500: 'var(--wedding-accent-500)',
          600: 'var(--wedding-accent-600)',
          700: 'var(--wedding-accent-700)',
          800: 'var(--wedding-accent-800)',
          900: 'var(--wedding-accent-900)',
          DEFAULT: 'var(--wedding-accent-500)',
        },
        // Background - Cream/Ivory
        background: {
          light: 'var(--wedding-bg-light)',
          base: 'var(--wedding-bg-base)',
          warm: 'var(--wedding-bg-warm)',
          muted: 'var(--wedding-bg-muted)',
          DEFAULT: 'var(--wedding-bg-base)',
        },
        // Text colors
        text: {
          dark: 'var(--wedding-text-dark)',
          muted: 'var(--wedding-text-muted)',
          light: 'var(--wedding-text-light)',
          DEFAULT: 'var(--wedding-text-dark)',
        },
        // Legacy pink (mapped to primary for backward compatibility)
        pink: {
          50: 'var(--wedding-primary-50)',
          100: 'var(--wedding-primary-100)',
          200: 'var(--wedding-primary-200)',
          300: 'var(--wedding-primary-300)',
          400: 'var(--wedding-primary-400)',
          500: 'var(--wedding-primary-500)',
          600: 'var(--wedding-primary-600)',
          700: 'var(--wedding-primary-700)',
          800: 'var(--wedding-primary-800)',
          900: 'var(--wedding-primary-900)',
        },
        // Legacy blue (mapped to accent for backward compatibility)
        blue: {
          50: 'var(--wedding-accent-50)',
          100: 'var(--wedding-accent-100)',
          200: 'var(--wedding-accent-200)',
          300: 'var(--wedding-accent-300)',
          400: 'var(--wedding-accent-400)',
          500: 'var(--wedding-accent-500)',
          600: 'var(--wedding-accent-600)',
          700: 'var(--wedding-accent-700)',
          800: 'var(--wedding-accent-800)',
          900: 'var(--wedding-accent-900)',
        },
        // Neutral - Warm Cream tones
        cream: {
          50: 'var(--wedding-bg-light)',
          100: 'var(--wedding-bg-base)',
          200: 'var(--wedding-bg-warm)',
          300: 'var(--wedding-bg-muted)',
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
        soft: '0 2px 8px -2px rgb(120 28 56 / 0.08)',
        card: '0 4px 20px -4px rgb(120 28 56 / 0.12)',
        elevated: '0 12px 40px -8px rgb(120 28 56 / 0.18)',
        'glow-primary': '0 8px 30px -4px rgb(169 31 68 / 0.25)',
        'glow-accent': '0 8px 30px -4px rgb(24 144 255 / 0.25)',
        'glow-pink': '0 8px 30px -4px rgb(169 31 68 / 0.25)',
        'glow-blue': '0 8px 30px -4px rgb(24 144 255 / 0.25)',
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

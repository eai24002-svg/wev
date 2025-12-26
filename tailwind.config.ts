import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.25rem',
        lg: '1.5rem',
        xl: '2rem',
      },
    },
    extend: {
      colors: {
        ink: {
          950: '#07080b',
          900: '#0b0d12',
          850: '#0f1219',
          800: '#141927',
          700: '#1c2434',
        },
        bone: {
          50: '#f7f7f8',
          100: '#efeff1',
          200: '#d7d9df',
        },
        blood: {
          600: '#e11d2e',
          500: '#ef233c',
          400: '#ff3b5c',
        },
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', '"Cairo"', 'ui-sans-serif', 'system-ui'],
        english: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(239,35,60,.25), 0 12px 40px rgba(0,0,0,.45)',
        soft: '0 10px 30px rgba(0,0,0,.35)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0 1px rgba(239,35,60,.25), 0 12px 40px rgba(0,0,0,.45)' },
          '50%': { boxShadow: '0 0 0 1px rgba(239,35,60,.45), 0 16px 55px rgba(0,0,0,.55)' },
        },
        cinematicReveal: {
          '0%': { opacity: '0', transform: 'translateY(14px)', filter: 'blur(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        floatingGradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-infinite': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slowZoomBg: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        glowPulse: 'glowPulse 2.8s ease-in-out infinite',
        cinematicReveal: 'cinematicReveal 900ms cubic-bezier(.2,.9,.2,1) both',
        floatingGradient: 'floatingGradient 10s ease-in-out infinite',
        marquee: 'marquee 18s linear infinite',
        'marquee-infinite': 'marquee-infinite 30s linear infinite',
        shimmer: 'shimmer 2.2s ease-in-out infinite',
        slowZoomBg: 'slowZoomBg 16s ease-in-out infinite alternate',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(.2,.9,.2,1)',
      },
    },
  },
  plugins: [],
} satisfies Config



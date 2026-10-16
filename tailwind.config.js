export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        accent: '#0D9488',
        dark: '#1F2937',
        light: '#F9FAFB',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.3s ease-out',
        'lift-hover': 'liftHover 0.2s ease-out',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'counter-tick': 'counterTick 2s ease-out',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'slide-in-down': 'slideInDown 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        liftHover: {
          to: { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(59, 130, 246, 0)' },
        },
        counterTick: {
          from: { opacity: '0.6' },
          to: { opacity: '1' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideInDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-blue-purple': 'linear-gradient(90deg, #3B82F6, #A855F7)',
        'gradient-blue-teal': 'linear-gradient(90deg, #3B82F6, #0D9488)',
      },
    },
  },
  plugins: [],
}

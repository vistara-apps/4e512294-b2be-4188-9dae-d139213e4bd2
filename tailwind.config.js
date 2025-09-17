/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(225 3% 12%)',
        accent: 'hsl(170 70% 50%)',
        danger: 'hsl(0 70% 50%)',
        primary: 'hsl(220 90% 55%)',
        success: 'hsl(140 60% 50%)',
        surface: 'hsl(225 3% 15%)',
        warning: 'hsl(40 70% 50%)',
        'text-primary': 'hsl(0 0% 95%)',
        'text-secondary': 'hsl(0 0% 70%)',
      },
      borderRadius: {
        lg: '16px',
        md: '10px',
        sm: '6px',
        xl: '24px',
      },
      boxShadow: {
        card: '0px 4px 16px hsla(0, 0%, 0%, 0.2)',
        modal: '0px 16px 48px hsla(0, 0%, 0%, 0.4)',
      },
      spacing: {
        lg: '16px',
        md: '12px',
        sm: '8px',
        xl: '24px',
        xs: '4px',
        xxl: '32px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}


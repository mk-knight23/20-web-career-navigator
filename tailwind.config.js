/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tech: {
          bg: '#fafafa',
          dark: '#050505',
          primary: '#6366f1',
          secondary: '#10b981',
          accent: '#f59e0b',
          light: {
            bg: '#fafafa',
            primary: '#4f46e5',
            dark: '#1e293b',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
}

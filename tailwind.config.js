/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "primary-dark": "#1d4ed8",
        "primary-light": "#eff6ff",
        indigo: {
          600: "#4f46e5",
          700: "#4338ca",
          900: "#312e81",
        },
        navy: "#1e3a5f",
        muted: "#6b7280",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
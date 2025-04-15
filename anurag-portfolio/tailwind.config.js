/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // Add custom classes here
        colors: {
          'custom-blue': '#1e40af',
          'brand-primary': '#ff5733',
          "gsk-orange":"#f36633",
        },
        spacing: {
          '128': '32rem',
        },
        // Add custom animations, fonts, etc.
      },
    },
    plugins: [],
    }
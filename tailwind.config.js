/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      keyframes: {
        unfold: {
          '0%': {
            clipPath: 'inset(50% 50% 50% 50%)'
          },
          '100%': {
            clipPath: 'inset(0% 0% 0% 0%)'
          }
        }
      },
      animation: {
        unfold: 'unfold 1s ease-out forwards'
      }
    }
  },
  plugins: [],
};



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bcground-color": "#091b29",
        "primary-color": "#112e42",
        "primary-blue-color": "#05adee",
        "big-blue-color":"#1d4352",
        "primary-text-color":"#8f99a1",
        "normal-white-color":"#edf3f9",
        "main-list-color":"#8e949c",
      }
    },
  },
  plugins: [],
}


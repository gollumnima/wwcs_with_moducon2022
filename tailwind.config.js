/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    extend: {},
    plugins: [require("daisyui")],
    daisyui: {
      styled: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      themes: ['wireframe'],
    }, 
}

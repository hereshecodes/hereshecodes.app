/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  
    safelist: [
      'bg-blue-500',
      'text-center',
      'hover:opacity-100',
      // ...
      'lg:text-right',
    ]
  },
  // ...
}

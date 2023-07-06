/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "todo-background": "url('/images/todo_background.jpg')",
      },
      gradientColors: {
        "gradient-checkbox": ["hsl(192, 100%, 67%)", "hsl(280, 87%, 65%)"],
      },
    },
  },
  plugins: [],
};

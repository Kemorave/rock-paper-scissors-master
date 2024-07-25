/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "scissors-primary": "hsl(39, 89%, 49%)",
        "paper-primary": "hsl(230, 89%, 62%)",
        "rock-primary": "hsl(349, 71%, 52%)",
        "lizard-primary": "hsl(261, 73%, 60%)",
        "cyan-primary": "hsl(189, 59%, 53%)",
        "spock-primary": "hsl(189, 59%, 53%)",
        "bg-primary": " hsl(237, 49%, 15%)",

        "scissors-secondary": "hsl(40, 84%, 53%)",
        "paper-secondary": "hsl(230, 89%, 65%)",
        "rock-secondary": "hsl(349, 70%, 56%)",
        "lizard-secondary": "hsl(261, 72%, 63%)",
        "cyan-secondary": "hsl(189, 58%, 57%)",
        "spock-secondary": "hsl(189, 58%, 57%)",
      },
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
        display: ["Barlow Semi Condensed", "sans-serif"],
      },
      backgroundImage: {
        "background-gradient":
          " linear-gradient(180deg, hsl(214, 47%, 23%) 0%, hsl(237, 49%, 15%) 100%)",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "spin-1s": "spin 1s linear 100ms",
      },
    },
  },
  plugins: [],
};

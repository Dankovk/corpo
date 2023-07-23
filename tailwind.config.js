/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        whitesmoke: "#f5f5f5",
        "shades-white": "#fff",
        slategray: "#858193",
        "solid-7": "#ff1d97",
        "shades-3": "#615b6f",
        "solid-5": "#8e53ff",
        "shades-black": "#211b2e",
        "shades-2": "#3e3b46",
        "white-60": "rgba(255, 255, 255, 0.6)",
        "white-25": "rgba(255, 255, 255, 0.25)",
        "shades-4": "#858293",
      },
      fontFamily: {
        "desktop-h-4-semibold": "Roboto",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      xl: "20px",
      "29xl": "48px",
      xs: "12px",
      base: "16px",
      "53xl": "72px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

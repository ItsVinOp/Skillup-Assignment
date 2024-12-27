/** @type {import('tailwindcss').Config} */
export default  {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      Lato: ["lato"],
      Antonio:["Antonio", "sans-serif"]
    },
    colors: {
      "green-primary": "#0DBA4B",
      "green-secondary": "#20B957",
      "green-tertiary": "#17D059",
      "green-quaternary": "#255D52",
      "green-light": "#E7FFEA",
      "green-one": "#00BE45",
      "green-two": "#349A59",
      "green-three": "#106B32",
      "green-four": "#F0F6F0",
      "red-primary": "#E33629",
      "blue-primary": "#0274B3",
      "green-radial":"#24BB8C",
      black: {
        DEFAULT: "#000000",
        100: "#666C79",
        200: "#00000099",
      },
      white: {
        DEFAULT: "#FFFFFF",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },

};

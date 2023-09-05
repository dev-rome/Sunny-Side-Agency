/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      "5xl": "3.5rem", // 56
      "4xl": "2.5rem", // 40
      "3xl": "2rem", // 32
      "2xl": "1.75rem", // 28
      xl: "1.25rem", // 20
      lg: "1.125rem", // 18
      sm: "0.938rem", // 15
      xm: "0.875rem", // 14
    },
    fontFamily: {
      fraunces: ["Fraunces", "serif"],
      barlow: ["Barlow", "sans-serif"],
    },
    colors: {
      "soft-red": "hsl(7, 99%, 70%)",
      yellow: "hsl(51, 100%, 49%)",
      cyan: "hsl(167, 40%, 24%)",
      blue: "hsl(198, 62%, 26%)",
      "moderate-cyan": "hsl(168, 34%, 41%)",
      "desaturated-blue": "hsl(212, 27%, 19%)",
      "very-grayish-blue": "hsl(213, 9%, 39%)",
      "dark-grayish-blue": "hsl(232, 10%, 55%)",
      "grayish-blue": "hsl(210, 4%, 67%)",
      white: "hsl(0, 0%, 100%)",
      "footer-cyan": "hsl(168 44% 70%)",
    },
    extend: {
      backgroundImage: {
        "mobile-background": "url('./assets/images/mobile/image-header.jpg')",
        "desktop-background": "url('./assets/images/desktop/image-header.jpg')",
        "graphic-design-mobile-background":
          "url('./assets/images/mobile/image-graphic-design.jpg')",
        "graphic-design-desktop-background":
          "url('./assets/images/desktop/image-graphic-design.jpg')",
        "photography-mobile-background":
          "url('./assets/images/mobile/image-photography.jpg')",
        "photography-desktop-background":
          "url('./assets/images/desktop/image-photography.jpg')",
      },
    },
  },
  plugins: [],
};

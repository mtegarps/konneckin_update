/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#191919",

          secondary: "#3d3d3d",

          accent: "#4f4f4f",

          neutral: "#201e24",

          "base-100": "#f6f6f6",

          info: "#0091e5",

          success: "#00f9c6",

          warning: "#ff8100",

          error: "#ff1552",
        },
      },
      "business",
    ],
  },
};

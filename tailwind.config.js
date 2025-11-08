/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0069FF",
          hover: "#0052CC"
        },
        graydark: "#333333",
        graylight: "#F5F5F5"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"]
      }
    }
  },
  plugins: []
};

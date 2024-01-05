const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url(/Logo.png)",
        establish: "url(/img/e6ba5787-d4b4-4a2b-8fb6-d557099f76fb.jpeg)",
      },
      colors: {
        blackOpacity: "rgb(0,0,0,0.5)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
});

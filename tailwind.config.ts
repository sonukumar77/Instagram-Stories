import type { Config } from "tailwindcss";
import { PluginCreator } from "tailwindcss/types/config";

const hideScrollBarPlugin: PluginCreator = ({ addUtilities }) => {
  const newUtilities = {
    ".hide-scrollbar": {
      /* Hide scrollbar for IE, Edge, and Firefox */
      "-ms-overflow-style": "none" /* IE and Edge */,
      "scrollbar-width": "none" /* Firefox */,
      /* Hide scrollbar for Chrome, Safari, and Opera */
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  };
  addUtilities(newUtilities);
};

const gradientBorderPlugin: PluginCreator = ({ addUtilities }) => {
  const newUtilities = {
    ".border-gradient-instagram": {
      border: "4px solid transparent",
      borderImage: "linear-gradient(45deg, #833AB4, #FD1D1D, #FCB045) 1",
    },
  };
  addUtilities(newUtilities);
};

const instagramBgPlugin: PluginCreator = ({ addUtilities }) => {
  const newUtilities = {
    ".bg-gradient-instagram": {
      backgroundImage: "linear-gradient(45deg, #833AB4, #FD1D1D, #FCB045)",
    },
  };
  addUtilities(newUtilities);
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [hideScrollBarPlugin, gradientBorderPlugin, instagramBgPlugin],
};
export default config;

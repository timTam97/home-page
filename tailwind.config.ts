import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "media",
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: false,
    },
};
export default config;

import {Config} from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            sans: ["Inter var", ...defaultTheme.fontFamily.sans]
        }
    },
    plugins: [],
}

export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0a0f1f",
        nebula: "#1f2a44",
        plasma: "#7c3aed",
        aurora: "#22d3ee",
        starlight: "#d9e8ff"
      },
      backgroundImage: {
        "starfield":
          "radial-gradient(circle at 20% 20%, rgba(124, 58, 237, 0.15), transparent 25%), radial-gradient(circle at 80% 10%, rgba(34, 211, 238, 0.12), transparent 22%), radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.12), transparent 20%), radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.12), transparent 22%)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 58, 237, 0.35)",
        card: "0 15px 40px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: [],
};

export default config;

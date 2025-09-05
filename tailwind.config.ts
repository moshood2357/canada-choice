import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class", // enable dark mode via class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FACC15",
          black: "#111111",
          background: "var(--background)",
          foreground: "var(--foreground)",
          card: "var(--card)",
          cardForeground: "var(--card-foreground)",
          primary: "var(--primary)",
          primaryForeground: "var(--primary-foreground)",
          secondary: "var(--secondary)",
          secondaryForeground: "var(--secondary-foreground)",
          accent: "var(--accent)",
          accentForeground: "var(--accent-foreground)",
          destructive: "var(--destructive)",
          muted: "var(--muted)",
          mutedForeground: "var(--muted-foreground)",
          border: "var(--border)",
          input: "var(--input)",
          ring: "var(--ring)",
        },
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.brand.foreground"),
            a: {
              color: theme("colors.brand.yellow"),
              textDecoration: "none",
              fontWeight: "600",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            h1: { color: theme("colors.brand.foreground") },
            h2: { color: theme("colors.brand.foreground") },
            h3: { color: theme("colors.brand.foreground") },
            strong: { color: theme("colors.brand.foreground") },
            blockquote: {
              borderLeftColor: theme("colors.brand.yellow"),
              color: theme("colors.gray.700"),
            },
            code: {
              fontFamily: theme("fontFamily.mono"),
              color: theme("colors.brand.yellow"),
              backgroundColor: theme("colors.gray.100"),
              padding: "0.2em 0.4em",
              borderRadius: "4px",
            },
          },
        },
      }),
    },
  },
  plugins: [typography, animate],
};

export default config;

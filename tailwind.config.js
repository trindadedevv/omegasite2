/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Omega Theme Colors - Red, Black, Gray
        omega: {
          black: '#050505',
          dark: '#0a0a0a',
          gray: '#141414',
          'gray-light': '#1f1f1f',
          'gray-lighter': '#2a2a2a',
          red: '#dc2626',
          'red-light': '#ef4444',
          'red-dark': '#991b1b',
          white: '#f5f5f5',
          muted: '#737373',
          orange: '#f97316',
          yellow: '#eab308',
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px #dc2626, 0 0 10px #dc2626" },
          "50%": { boxShadow: "0 0 20px #dc2626, 0 0 30px #dc2626" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glitch": {
          "0%": { clipPath: "inset(40% 0 61% 0)", transform: "translate(-2px, 2px)" },
          "20%": { clipPath: "inset(92% 0 1% 0)", transform: "translate(2px, -2px)" },
          "40%": { clipPath: "inset(43% 0 1% 0)", transform: "translate(-2px, 2px)" },
          "60%": { clipPath: "inset(25% 0 58% 0)", transform: "translate(2px, -2px)" },
          "80%": { clipPath: "inset(54% 0 7% 0)", transform: "translate(-2px, 2px)" },
          "100%": { clipPath: "inset(58% 0 43% 0)", transform: "translate(2px, -2px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "scan": "scan 3s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "glitch": "glitch 0.3s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
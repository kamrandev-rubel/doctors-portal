module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          // "primary": "#0FCFEC",
          // "secondary": "#19D3AE",
          // "accent": "#ebecf0",
          primary: "#0FCFEC",
          "primary-content": "#ddd",
          secondary: "#19D3AE",
          "secondary-content": "#ddd",
          accent: "#ebecf0",
          "accent-content": "#ffffff",
          neutral: "#191D24",
          "neutral-focus": "#111318",
          "neutral-content": "#A6ADBB",
          "base-100": "#2A303C",
          "base-200": "#242933",
          "base-300": "#20252E",
          "base-content": "#A6ADBB",
        },
      },
      {
        light: {
          primary: "#0FCFEC",
          "primary-content": "#ddd",
          secondary: "#19D3AE",
          "secondary-content": "#ffffff",
          accent: "#3A4256",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#F2F2F2",
          "base-300": "#E5E6E6",
          "base-content": "#1f2937",
        }
      },
    ],
  },
  plugins: [require("daisyui")],


  theme: {
    screens: {
      'xs': '480px',
      // => @media (min-width: 480px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}

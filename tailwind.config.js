module.exports = {
  purge: {
    mode: "all",
    content: ["./**/**/*.html", "./**/**/*.svelte"],

    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
          ([_match, group, ..._rest]) => group
        ),
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    // in sync with https://www.carbondesignsystem.com/guidelines/2x-grid/overview/
    screens: {
      sm: "320px",

      md: "672px",

      lg: "1056px",

      xl: "1312px",

      "2xl": "1536px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

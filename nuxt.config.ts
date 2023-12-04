// https://nuxt.com/docs/api/configuration/nuxt-config

const defaultTheme = require("tailwindcss/defaultTheme");
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  css: [
    "remixicon/fonts/remixicon.css",
    "highlight.js/styles/night-owl.min.css",
     "assets/font.css",
  ],
  tailwindcss: {
    // config: {
    //   plugins: [require("@tailwindcss/forms")],
    // },
    config: {
      plugins: [require("@tailwindcss/forms")],
      theme: {
        extend: {
          fontFamily: {
            sans: ["Roboto Condensed", ...defaultTheme.fontFamily.sans],
            serif: ["Abel", ...defaultTheme.fontFamily.serif],
          },
        },
      },
    },
  },
});
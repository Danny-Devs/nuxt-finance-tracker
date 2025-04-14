import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint'
  ],
  // compatibility with nuxt 4
  future: {
    compatibilityVersion: 4
  },
  vite: {
    plugins: [tailwindcss()]
  },
  css: ['~/assets/css/main.css']
});

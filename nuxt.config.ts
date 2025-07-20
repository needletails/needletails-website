// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    // ['@nuxtjs/i18n', {
    //   locales: ['en'],
    //   defaultLocale: 'en'
    // }]
  ],
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  }
})

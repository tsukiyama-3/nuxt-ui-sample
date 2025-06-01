// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/ui-pro',
    '@nuxtjs/i18n',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-05-15',
  i18n: {
    langDir: 'locales',
    defaultLocale: 'ja',
    locales: [
      {
        code: 'ja',
        file: 'ja.json'
      },
      {
        code: 'en',
        file: 'en.json'
      }
    ]
  }
})

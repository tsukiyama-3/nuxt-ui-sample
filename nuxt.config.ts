// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/ui-pro',
    '@nuxtjs/i18n',
    '@nuxthub/core',
    "nuxt-microcms-module",
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-05-15',
  eslint: {
    config: {
      stylistic: true,
    }
  },
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  runtimeConfig: {
    googleApplicationCredentials: ''
  },
  i18n: {
    langDir: 'locales',
    defaultLocale: 'ja',
    locales: [
      {
        code: 'ja',
        file: 'ja.json',
        name: '日本語'
      },
      {
        code: 'en',
        file: 'en.json',
        name: 'English'
      }
    ],
    bundle: {
      optimizeTranslationDirective: false,
    }
  },
})

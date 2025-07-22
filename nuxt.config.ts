// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Static site generation for GitHub Pages
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    },
    compressPublicAssets: true,
    minify: true
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n'
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' },
      { code: 'de', name: 'Deutsch', file: 'de.json' },
      { code: 'zh-cn', name: '简体中文', file: 'zh-cn.json' },
      { code: 'zh-tw', name: '繁體中文', file: 'zh-tw.json' },
      { code: 'ja', name: '日本語', file: 'ja.json' },
      { code: 'pt', name: 'Português', file: 'pt.json' },
      { code: 'it', name: 'Italiano', file: 'it.json' },
      { code: 'nl', name: 'Nederlands', file: 'nl.json' },
      { code: 'ko', name: '한국어', file: 'ko.json' },
      { code: 'tr', name: 'Türkçe', file: 'tr.json' },
      { code: 'he', name: 'עברית', file: 'he.json' }
    ],
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false, // Changed to false to work better with our persistence
      fallbackLocale: 'en'
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'NeedleTails - Professional Software Development Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'description', content: 'Expert software development services specializing in web applications, mobile apps, and backend solutions. Custom development, consulting, and project management.' },
        { name: 'keywords', content: 'software development, web development, mobile apps, backend development, consulting, project management, custom software' },
        { name: 'author', content: 'NeedleTails' },
        { name: 'theme-color', content: '#000000' },
        { name: 'msapplication-TileColor', content: '#000000' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'apple-mobile-web-app-title', content: 'NeedleTails' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        // Open Graph
        { property: 'og:title', content: 'NeedleTails - Professional Software Development Services' },
        { property: 'og:description', content: 'Expert software development services specializing in web applications, mobile apps, and backend solutions. Custom development, consulting, and project management.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://needletails.com' },
        { property: 'og:image', content: '/images/needletails_logo.svg' },
        { property: 'og:site_name', content: 'NeedleTails' },
        { property: 'og:locale', content: 'en_US' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@needletails' },
        { name: 'twitter:creator', content: '@needletails' },
        { name: 'twitter:title', content: 'NeedleTails - Professional Software Development Services' },
        { name: 'twitter:description', content: 'Expert software development services specializing in web applications, mobile apps, and backend solutions. Custom development, consulting, and project management.' },
        { name: 'twitter:image', content: '/images/needletails_logo.svg' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/needletail_right.svg' },
        { rel: 'apple-touch-icon', href: '/images/needletail_right.svg' },
        { rel: 'canonical', href: 'https://needletails.com' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' }
      ]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  experimental: {
    payloadExtraction: false
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            utils: ['@vueuse/core']
          }
        }
      }
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', '@vueuse/core']
    }
  }
})

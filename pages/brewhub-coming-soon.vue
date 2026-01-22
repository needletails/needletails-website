<template>
  <div class="min-h-screen bg-black flex items-center justify-center px-4">
    <div class="max-w-2xl w-full text-center">
      <!-- Logo -->
      <div class="flex justify-center mb-8">
        <div class="inline-flex items-center justify-center rounded-full bg-black/70 ring-2 ring-yellow-400/60 shadow-[0_0_20px_rgba(250,204,21,0.45)] px-6 py-4">
          <img
            src="/images/brew-hub-logo.svg"
            alt="BrewHub Logo"
            class="h-24 w-auto max-w-[120px] drop-shadow-[0_4px_18px_rgba(0,0,0,0.8)]"
          />
        </div>
      </div>

      <!-- Coming Soon Title -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
        {{ t('brewhubComingSoonTitle') }}
      </h1>

      <!-- Description -->
      <p class="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto">
        {{ t('brewhubComingSoonDescription') }}
      </p>

      <!-- Features List -->
      <div class="grid sm:grid-cols-2 gap-4 mb-10 text-left">
        <div class="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-4">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            <div>
              <h3 class="text-white font-semibold mb-1">{{ t('brewhubFeature1Title') }}</h3>
              <p class="text-gray-400 text-sm">{{ t('brewhubFeature1Description') }}</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-4">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            <div>
              <h3 class="text-white font-semibold mb-1">{{ t('brewhubFeature2Title') }}</h3>
              <p class="text-gray-400 text-sm">{{ t('brewhubFeature2Description') }}</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-4">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <div>
              <h3 class="text-white font-semibold mb-1">{{ t('brewhubFeature3Title') }}</h3>
              <p class="text-gray-400 text-sm">{{ t('brewhubFeature3Description') }}</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-4">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <div>
              <h3 class="text-white font-semibold mb-1">{{ t('brewhubFeature4Title') }}</h3>
              <p class="text-gray-400 text-sm">{{ t('brewhubFeature4Description') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Back to Main Site Link -->
      <a
        href="https://brewhub.needletails.com"
        class="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border border-yellow-300/60"
      >
        {{ t('brewhubBackToMainSite') }}
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

// Use minimal layout without header/footer
definePageMeta({
  layout: 'brewhub-coming-soon'
})

// SEO Meta Tags
useHead({
  title: 'BrewHub - Available | NeedleTails',
  meta: [
    { name: 'description', content: 'BrewHub is now available. Visit BrewHub for professional software development courses and training.' },
    { name: 'robots', content: 'noindex, follow' },
    { property: 'og:title', content: 'BrewHub - Available | NeedleTails' },
    { property: 'og:description', content: 'BrewHub is now available. Visit BrewHub for professional software development courses and training.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'BrewHub - Available | NeedleTails' },
    { name: 'twitter:description', content: 'BrewHub is now available. Visit BrewHub for professional software development courses and training.' }
  ]
})
</script>

<style scoped>
/* Additional styling if needed */
</style>


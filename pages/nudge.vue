<template>
  <div class="min-h-screen bg-black flex items-center justify-center px-4 pt-40 sm:pt-48 md:pt-56 lg:pt-60">
    <div class="max-w-2xl w-full text-center">
      <!-- Logo -->
      <div class="flex justify-center mb-8">
        <div class="inline-flex items-center justify-center rounded-full bg-black/70 ring-2 ring-blue-400/60 shadow-[0_0_20px_rgba(59,130,246,0.45)] px-6 py-4">
          <img
            src="/images/nudge.svg"
            :alt="t('nudgeWidgetLogoAlt')"
            class="h-24 w-auto max-w-[120px] drop-shadow-[0_4px_18px_rgba(0,0,0,0.8)]"
          />
        </div>
      </div>

      <!-- Title -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
        {{ t('nudgeTitle') }}
      </h1>

      <!-- Description -->
      <p class="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto">
        {{ t('nudgeDescription') }}
      </p>

      <!-- Features List -->
      <div class="grid sm:grid-cols-2 gap-4 mb-10 text-left">
        <div class="bg-gray-900/50 border border-blue-500/20 rounded-lg p-4">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <div>
              <h3 class="text-white font-semibold mb-1">{{ t('nudgeFeature1Title') }}</h3>
              <p class="text-gray-400 text-sm">{{ t('nudgeFeature1Description') }}</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-900/50 border border-blue-500/20 rounded-lg p-4">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <div>
              <h3 class="text-white font-semibold mb-1">{{ t('nudgeFeature2Title') }}</h3>
              <p class="text-gray-400 text-sm">{{ t('nudgeFeature2Description') }}</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-900/50 border border-blue-500/20 rounded-lg p-4">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 class="text-white font-semibold mb-1">{{ t('nudgeFeature3Title') }}</h3>
              <p class="text-gray-400 text-sm">{{ t('nudgeFeature3Description') }}</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-900/50 border border-blue-500/20 rounded-lg p-4">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
            </svg>
            <div>
              <h3 class="text-white font-semibold mb-1">{{ t('nudgeFeature4Title') }}</h3>
              <p class="text-gray-400 text-sm">{{ t('nudgeFeature4Description') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Checkout Button -->
      <a
        href="https://staging-nudge.needletails.com"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border border-blue-300/60 mb-10"
      >
        {{ t('nudgeContactButton') }}
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const route = useRoute()

definePageMeta({
  layout: 'brewhub-coming-soon'
})

// Ensure locale is preserved from route
onMounted(() => {
  if (import.meta.client) {
    // Get locale from route path (for prefix_except_default strategy)
    const pathParts = route.path.split('/').filter(Boolean)
    const validLocales: Array<'es' | 'fr' | 'de' | 'zh-cn' | 'zh-tw' | 'ja' | 'pt' | 'it' | 'nl' | 'ko' | 'tr' | 'he'> = ['es', 'fr', 'de', 'zh-cn', 'zh-tw', 'ja', 'pt', 'it', 'nl', 'ko', 'tr', 'he']
    const pathLocale: 'en' | 'es' | 'fr' | 'de' | 'zh-cn' | 'zh-tw' | 'ja' | 'pt' | 'it' | 'nl' | 'ko' | 'tr' | 'he' = (pathParts[0] && validLocales.includes(pathParts[0] as any)) ? (pathParts[0] as any) : 'en'
    
    // Set locale if it doesn't match
    if (locale.value !== pathLocale) {
      setLocale(pathLocale)
    }
  }
})

useHead({
  title: t('nudgeMetaTitle'),
  meta: [
    {
      name: 'description',
      content: t('nudgeMetaDescription')
    },
    { name: 'keywords', content: t('nudgeMetaKeywords') },
    { property: 'og:title', content: t('nudgeMetaTitle') },
    {
      property: 'og:description',
      content: t('nudgeOgDescription')
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://needletails.com/nudge' },
    { property: 'og:image', content: 'https://needletails.com/images/nudge.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('nudgeMetaTitle') },
    { name: 'twitter:description', content: t('nudgeOgDescription') },
    { name: 'twitter:image', content: 'https://needletails.com/images/nudge.svg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://needletails.com/nudge' }
  ]
})
</script>
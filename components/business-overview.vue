<template>
  <section class="relative" data-section="services">
    <!-- Swift Software Specialists: original gradient background -->
    <div class="relative bg-gradient-to-b from-[rgb(2,2,19)] to-black py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div class="absolute inset-0 opacity-5 pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(51,188,229,0.1),transparent_50%)]"></div>
      </div>
      <div class="relative max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
        <div 
          v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
          class="space-y-6"
        >
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            {{ t('whyChooseSwift') }}
          </div>

          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {{ t('businessOverviewTitle') }}
            </span>
          </h2>

          <!-- Platform Badges -->
          <div class="flex flex-wrap justify-center gap-3 pt-2">
            <div class="inline-flex items-center px-3 py-1.5 rounded-full bg-green-600/10 border border-green-500/20 text-green-400 text-xs sm:text-sm font-medium">
              <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
              {{ t('badgeMobile') }}
            </div>
            <div class="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium">
              <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
              {{ t('badgeWeb') }}
            </div>
            <div class="inline-flex items-center px-3 py-1.5 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-medium">
              <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
              {{ t('badgeServer') }}
            </div>
          </div>

          <p class="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed pt-4">
            {{ t('businessOverviewDescription') }}
          </p>
        </div>
        </div>
      </div>

      <!-- Swift Benefits Grid -->
      <div class="max-w-7xl mx-auto">
        <div 
          v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
          class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20"
        >
        <div class="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-900/70">
          <div class="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-3">{{ t('typeSafety') }}</h3>
          <p class="text-gray-400 leading-relaxed">
            {{ t('typeSafetyDescription') }}
          </p>
        </div>

        <div class="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-900/70">
          <div class="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600/30 transition-colors duration-300">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-3">{{ t('performance') }}</h3>
          <p class="text-gray-400 leading-relaxed">
            {{ t('performanceDescription') }}
          </p>
        </div>

        <div class="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-900/70">
          <div class="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600/30 transition-colors duration-300">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-white mb-3">{{ t('threadSafety') }}</h3>
          <p class="text-gray-400 leading-relaxed">
            {{ t('threadSafetyDescription') }}
          </p>
        </div>
        </div>
      </div>
    </div>

    <!-- Cost savings + How we solve your challenges + Open Source: black background -->
    <div class="bg-black px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <cost-savings-section />

        <!-- Services Section (How we solve your problems) -->
        <div 
          v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
          class="space-y-16 mt-24 sm:mt-28 lg:mt-32"
        >
          <div class="text-center">
            <h3 class="text-3xl sm:text-4xl font-bold text-white mb-8">
              <span class="text-blue-400">{{ t('ourServices') }}</span>
            </h3>
            <p class="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {{ t('servicesDescription') }}
            </p>
          </div>

          <!-- Services Grid -->
          <GridView :items="gridItems" :columns="2" />

          <!-- CTA Section -->
          <div class="text-center pt-12">
            <button 
              @click="handleGetInTouch"
              class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span class="flex items-center justify-center">
                {{ t('startYourProject') }}
                <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        <!-- Open Source Section -->
        <div 
          v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
          class="mt-24 pb-24"
        >
          <div class="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 lg:p-12 border border-gray-700/50">
            <GridView :items="openSourceItems" :columns="1" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CostSavingsSection from './cost-savings-section.vue'

const { t } = useI18n()

interface BusinessGridItem {
  subtitle: string
  header: string
  image?: string
  text: string
  alt: string
  color: string
  fontColor: string
  imagePosition: 'aboveHeader' | 'belowDescription' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'betweenText'
  externalUrl: string
}

const createGridItem = (
  applicationTitle: string,
  headerKey: string,
  descriptionKey: string,
  imagePosition: string,
  imagePath: string,
  externalUrl: string
): BusinessGridItem => ({
  subtitle: applicationTitle,
  header: headerKey,
  image: imagePath ? `/images/${imagePath}` : undefined,
  text: descriptionKey,
  alt: `${applicationTitle} image`,
  color: '#000000',
  fontColor: '#FFFFFF',
  imagePosition: imagePosition as 'aboveHeader' | 'belowDescription' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'betweenText',
  externalUrl,
})

const handleGetInTouch = (): void => {
  const mailto_link = 'mailto:support@needletails.com?subject=Project Inquiry&body='
  window.location.href = mailto_link
}

const gridItems = computed((): BusinessGridItem[] => [
  createGridItem(
    '',
    t('serviceHeaderBackendDevelopment'),
    t('serviceDescriptionBackendDevelopment'),
    'betweenText',
    'server-solutions.svg',
    ''
  ),
  createGridItem(
    '',
    t('serviceHeaderMobileAppDevelopment'),
    t('serviceDescriptionMobileAppDevelopment'),
    'betweenText',
    'needletail_right.svg',
    ''
  ),
  createGridItem(
    '',
    t('serviceHeaderTraining'),
    t('serviceDescriptionTraining'),
    'betweenText',
    'brew-hub-logo.svg',
    '/brewhub'
  ),
  createGridItem(
    '',
    t('serviceHeaderWebDevelopment'),
    t('serviceDescriptionWebDevelopment'),
    'betweenText',
    'modern_web_development.svg',
    ''
  ),
])

const openSourceItems = computed((): BusinessGridItem[] => [
  createGridItem(
    '',
    t('openSourceHeader'),
    t('openSourceDescription'),
    'betweenText',
    'github-mark-white.svg',
    'https://github.com/sponsors/needletails'
  ),
])
</script>

<template>
  <footer class="relative bg-gradient-to-b from-[rgb(18,18,18)] to-black min-h-0 lg:min-h-screen">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(51,188,229,0.1),transparent_50%)]"></div>
    </div>

    <!-- Main Footer Content -->
    <div class="relative flex flex-col items-center justify-center min-h-0 py-16 sm:py-20 lg:min-h-screen lg:py-32 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto w-full">
        


        <!-- Sponsor Section -->
        <div class="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-24 mb-8 sm:mb-12 lg:mb-16">
          <!-- DigitalOcean -->
          <a 
            href="https://m.do.co/c/9186a24b57b1" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="group flex flex-col items-center text-center max-w-sm hover:scale-105 transition-all duration-300"
          >
            <div class="relative mb-6">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img src="/images/doLogo.svg" alt="DigitalOcean" class="relative w-28 h-28" />
            </div>
            <p class="text-gray-300 text-base leading-relaxed">
              {{ t('getStartedOnDigitalOcean') }}
            </p>
          </a>

          <!-- GitHub -->
          <a 
            href="https://github.com/sponsors/needletails" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="group flex flex-col items-center text-center max-w-sm hover:scale-105 transition-all duration-300"
          >
            <div class="relative mb-6">
              <div class="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-800/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img src="/images/github-mark-white.svg" alt="GitHub" class="relative w-24 h-24" />
            </div>
            <h3 class="text-white text-xl font-semibold mb-3">{{ t('becomeASponsor') }}</h3>
            <p class="text-gray-300 text-base leading-relaxed">
              {{ t('supportOpenSourceMessage') }}
            </p>
          </a>
        </div>

        <!-- Contact Section -->
        <div class="text-center mb-8 sm:mb-12 lg:mb-16">
          <div class="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 lg:p-12 border border-gray-700/50">
            <h3 class="text-3xl sm:text-4xl font-bold text-white mb-6">
              {{ t('readyToGetStarted') }}
            </h3>
            <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {{ t('letsDiscussProject') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                @click="contactClicked"
                class="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span class="flex items-center justify-center">
                  {{ t('contactUs') }}
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </span>
              </button>
              
              <button 
                @click="scrollToTop"
                class="group px-8 py-4 border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                <span class="flex items-center justify-center">
                  {{ t('backToTop') }}
                  <svg class="w-5 h-5 ml-2 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="absolute bottom-8 left-0 right-0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm">
          <div class="flex items-center space-x-4 mb-4 sm:mb-0">
            <NuxtLink 
              :to="localePath('/privacy')" 
              class="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
            >
              {{ t('privacy') }}
            </NuxtLink>
            <span class="hidden sm:inline">|</span>
            <NuxtLink 
              :to="localePath('/terms')" 
              class="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
            >
              {{ t('termsConditions') }}
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-2">
            <span>{{ t('needleTailsCopyright') }}{{ new Date().getFullYear() }}</span>
            <div class="w-1 h-1 bg-gray-600 rounded-full"></div>
            <span>{{ t('swiftSoftwareSpecialists') }}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const contactClicked = (): void => {
  const mailto_link = 'mailto:support@needletails.com?subject=Project Inquiry&body='
  window.location.href = mailto_link
}

const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
 
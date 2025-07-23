<template>
  <section class="padding-top relative bg-black min-h-screen flex items-center overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(51,188,229,0.1),transparent_50%)]"></div>
    </div>

    <!-- Floating Elements -->
    <div class="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
    <div class="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
    <div class="absolute bottom-40 left-20 w-3 h-3 bg-cyan-500 rounded-full animate-bounce"></div>

    <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Content -->
        <div 
          v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }" 
          class="text-white space-y-8"
        >
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            {{ t('swiftSoftwareSpecialists') }}
          </div>

          <!-- Main Heading -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span class="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {{ t('makingYour') }}
            </span>
            <br>
            <span class="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {{ t('ideasReality') }}
            </span>
          </h1>

          <!-- Description -->
          <p class="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light max-w-2xl">
            {{ t('introHeaderTwo') }}
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              @click="scrollToServices"
              class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span class="flex items-center justify-center">
                {{ t('solutionsTitle') }}
                <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </button>
            
            <button 
              @click="contactClicked"
              class="group px-8 py-4 border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span class="flex items-center justify-center">
                {{ t('getInTouch') }}
                <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </span>
            </button>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
            <div class="text-center">
              <div class="text-2xl sm:text-3xl font-bold text-blue-400">100%</div>
              <div class="text-sm text-gray-400">{{ t('swiftNative') }}</div>
            </div>
            <div class="text-center">
              <div class="text-2xl sm:text-3xl font-bold text-blue-400">24/7</div>
              <div class="text-sm text-gray-400">{{ t('support') }}</div>
            </div>
            <div class="text-center">
              <div class="text-2xl sm:text-3xl font-bold text-blue-400">∞</div>
              <div class="text-sm text-gray-400">{{ t('possibilities') }}</div>
            </div>
          </div>
        </div>

        <!-- Visual Element -->
        <div 
          v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }" 
          class="relative hidden lg:block"
        >
          <div class="relative">
            <!-- Main Card -->
            <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700/50">
              <div class="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
              
              <!-- Code Preview -->
              <div class="space-y-4">
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div class="space-y-2">
                  <div class="h-4 bg-gray-700 rounded w-3/4"></div>
                  <div class="h-4 bg-gray-700 rounded w-1/2"></div>
                  <div class="h-4 bg-blue-600/20 rounded w-2/3 border-l-4 border-blue-500"></div>
                  <div class="h-4 bg-gray-700 rounded w-3/5"></div>
                </div>
              </div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 shadow-xl">
                          <div class="text-white text-sm font-medium">{{ $t('swift') }}</div>
          </div>
          
          <div class="absolute -top-6 -right-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 shadow-xl">
            <div class="text-white text-sm font-medium">{{ $t('swiftServer') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const scrollToServices = (): void => {
  const servicesSection = document.querySelector('.business-overview') || document.querySelector('[data-section="services"]')
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const contactClicked = (): void => {
  const mailto_link = 'mailto:support@needletails.com?subject=Project Inquiry&body='
  window.location.href = mailto_link
}
</script>

<style scoped>
.padding-top {
  padding-top: 180px;
}
</style>
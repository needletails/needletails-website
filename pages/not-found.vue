<template>
  <main class="pt-20 lg:pt-24 pb-12">
    <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div 
          v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }" 
          class="space-y-8"
        >
          <!-- 404 Number -->
          <h1 class="text-6xl sm:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
            404
          </h1>
          
          <!-- Error Message -->
          <div class="space-y-4">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
              {{ t('pageNotFound') }}
            </h2>
            <p class="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {{ t('pageNotFoundDescription') }}
            </p>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-8">
            <button 
              @click="goHome"
              class="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span class="flex items-center justify-center">
                {{ t('goHome') }}
                <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </span>
            </button>
            
            <button 
              @click="goBack"
              class="group px-8 py-4 border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span class="flex items-center justify-center">
                {{ t('goBack') }}
                <svg class="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

const goHome = (): void => {
  router.push('/')
}

const goBack = (): void => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

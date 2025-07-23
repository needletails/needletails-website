<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/70 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      :aria-expanded="isOpen"
      aria-label="Select language"
    >
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span class="text-white text-sm font-medium">{{ currentLocaleName }}</span>
      <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl border border-gray-700/50 z-50 max-h-80 overflow-y-auto"
    >
      <div class="py-2">
        <button
          v-for="locale in locales"
          :key="locale.code"
          @click="switchLanguage(locale.code)"
          class="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors duration-200 flex items-center space-x-3"
          :class="{ 'bg-blue-600/20 text-blue-400': locale.code === currentLocale }"
        >
          <span class="text-xs font-mono bg-gray-700 px-2 py-1 rounded text-gray-300">{{ getLanguageCode(locale.code) }}</span>
          <span class="text-sm">{{ locale.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const { 
  switchToLanguage, 
  getCurrentLanguage, 
  getCurrentLanguageName, 
  getAvailableLanguages
} = useLanguagePersistence()

const currentLocale = computed(() => getCurrentLanguage())
const currentLocaleName = computed(() => getCurrentLanguageName())
const locales = computed(() => getAvailableLanguages())

const switchLanguage = (code: string) => {
  switchToLanguage(code)
  isOpen.value = false
}

const getLanguageCode = (code: string) => {
  const languageCodes: Record<string, string> = {
    en: 'EN',
    es: 'ES',
    fr: 'FR',
    de: 'DE',
    'zh-cn': 'ZH-CN',
    'zh-tw': 'ZH-TW',
    ja: 'JA',
    pt: 'PT',
    it: 'IT',
    nl: 'NL',
    ko: 'KO',
    tr: 'TR',
    he: 'HE'
  }
  return languageCodes[code] || code.toUpperCase()
}

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script> 
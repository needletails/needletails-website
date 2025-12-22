<template>
  <div class="relative">
    <!-- Burger Button -->
    <button 
      @click="toggleMenu" 
      class="relative z-[60] p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/70 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      :aria-expanded="isOpen"
      aria-label="Toggle navigation menu"
    >
      <div class="w-6 h-6 flex flex-col justify-center items-center">
        <span 
          class="block w-5 h-0.5 bg-white transition-all duration-300 ease-in-out"
          :class="{ 'rotate-45 translate-y-1.5': isOpen }"
        ></span>
        <span 
          class="block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ease-in-out"
          :class="{ 'opacity-0': isOpen }"
        ></span>
        <span 
          class="block w-5 h-0.5 bg-white mt-1 transition-all duration-300 ease-in-out"
          :class="{ '-rotate-45 -translate-y-1.5': isOpen }"
        ></span>
      </div>
    </button>

    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isOpen"
      class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55]"
      @click="closeMenu"
    ></div>

    <!-- Mobile Menu Content -->
    <div 
      class="mobile-menu fixed top-0 right-0 h-full w-80 border-l border-gray-700/50 z-[60] transform transition-transform duration-300 ease-in-out shadow-2xl"
      :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }"
    >
      <div class="flex flex-col h-full">
        <!-- Menu Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-700/50">
          <h2 class="text-xl font-semibold text-white">Menu</h2>
          <button 
            @click="closeMenu"
            class="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="flex-1 p-6">
          <!-- Language Switcher for Mobile -->
          <div class="mb-6 p-4 bg-gray-800/30 rounded-lg">
            <h3 class="text-sm font-medium text-gray-400 mb-3">Language</h3>
            <LanguageSwitcher />
          </div>
          
          <div class="space-y-4">
            <button 
              @click="navigateTo('/management')"
              class="w-full text-left px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all duration-300 flex items-center"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              Management
            </button>
            
            <button 
              @click="navigateTo('/consultation')"
              class="w-full text-left px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all duration-300 flex items-center"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Consultation
            </button>
            
            <button 
              @click="navigateTo('/brewhub-coming-soon')"
              class="w-full text-left px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-all duration-300 flex items-center"
            >
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
              Courses
            </button>
          </div>

          <!-- Contact Button -->
          <div class="mt-8 pt-6 border-t border-gray-700/50">
            <button 
              @click="contactClicked"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl text-lg shadow-lg hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all duration-300 flex items-center justify-center"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              {{ t('contactUs') }}
            </button>
          </div>
        </nav>

        <!-- Footer -->
        <div class="p-6 border-t border-gray-700/50">
          <div class="text-center text-gray-400 text-sm">
            <p>{{ t('needleTailsCopyright') }}{{ new Date().getFullYear() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import LanguageSwitcher from './language-switcher.vue'

const { t } = useI18n()
const router = useRouter()
const isOpen = ref(false)

const toggleMenu = (): void => {
  isOpen.value = !isOpen.value
  // Prevent body scroll when menu is open
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }
}

const closeMenu = (): void => {
  isOpen.value = false
  document.body.style.overflow = 'unset'
}

const navigateTo = (path: string): void => {
  router.push(path)
  closeMenu()
}

const navigateToExternal = (url: string): void => {
  window.location.href = url
  closeMenu()
}

const contactClicked = (): void => {
  const mailto_link = 'mailto:support@needletails.com?subject=Project Inquiry&body='
  window.location.href = mailto_link
  closeMenu()
}

// Close menu on escape key
const handleEscape = (event: KeyboardEvent): void => {
  if (event.key === 'Escape' && isOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = 'unset'
})
</script>

<style scoped>
.mobile-menu {
  background-color: #000000 !important;
}

.mobile-menu > div {
  background-color: #000000 !important;
}

.mobile-menu nav {
  background-color: #000000 !important;
}

.mobile-menu .flex {
  background-color: #000000 !important;
}
</style>

<template>
  <header class="fixed w-full bg-[rgb(18,18,18)]/95 backdrop-blur-md text-white z-50 border-b border-gray-700/30 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main header row with logo and navigation -->
      <div class="flex justify-between items-center h-20 lg:h-24">
        <!-- Logo - left side, hanging down -->
        <div class="flex items-center -mb-16 lg:-mb-20">
          <div 
            class="cursor-pointer transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1" 
            @click="routeHome()"
            role="button"
            tabindex="0"
            @keydown.enter="routeHome()"
            @keydown.space="routeHome()"
          >
            <img 
              src="/images/needletails_logo.svg" 
              alt="NeedleTails Logo" 
              width="200" 
              height="80" 
              style="mix-blend-mode: difference;"
            />
          </div>
        </div>
        
        <!-- Navigation and Contact - Right side -->
        <div class="hidden lg:flex items-center space-x-6 mt-4 lg:mt-6">
          <!-- Language Switcher - Positioned first for better UX -->
          <LanguageSwitcher />
          
          <button 
            @click="routeManagement()" 
            class="text-base font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-800/50"
          >
            {{ t('menuItemThree') }}
          </button>
          <button 
            @click="routeConsultation()" 
            class="text-base font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-800/50"
          >
            {{ t('menuItemTwo') }}
          </button>
          <button 
            @click="routeTraining()" 
            class="text-base font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-800/50"
          >
            {{ t('menuItemOne') }}
          </button>
          
          <!-- Contact Button -->
          <button 
            @click="contactClicked()" 
            class="text-base font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 hover:scale-105 px-6 py-2 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[rgb(18,18,18)]"
          >
            {{ t('contact') }}
          </button>
        </div>
        
        <!-- Mobile menu -->
        <div class="lg:hidden flex items-center space-x-4">
          <LanguageSwitcher />
          <burger-menu />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import BurgerMenu from '../controls/burger-menu.vue'
import LanguageSwitcher from '../controls/language-switcher.vue'

const { t } = useI18n()
const router = useRouter()
const localePath = useLocalePath()

const routeHome = (): void => {
  router.push(localePath('/'))
}

const routeConsultation = (): void => {
  router.push(localePath('/consultation'))
}

const routeManagement = (): void => {
  router.push(localePath('/management'))
}

const routeTraining = (): void => {
  router.push(localePath('/training'))
}

const contactClicked = (): void => {
  const mailto_link = 'mailto:support@needletails.com?subject=Project Inquiry&body='
  window.location.href = mailto_link
}
</script>

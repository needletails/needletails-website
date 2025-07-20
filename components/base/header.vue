<template>
  <header class="fixed w-full bg-[rgb(18,18,18)] text-white z-50 border-b border-gray-700/50">
    <div class="max-w-7xl mx-auto px-8">
      <!-- Main header row with logo and navigation -->
      <div class="flex justify-between items-end h-32">
        <!-- Logo - left side with improved spacing -->
        <div class="flex items-end -mb-8">
          <div 
            class="cursor-pointer transition-transform duration-300 hover:scale-110" 
            @click="routeHome()"
          >
            <svg-icon :width="width" :height="height" name="devLogo" />
          </div>
        </div>
        
        <!-- Navigation - center with improved spacing and styling -->
        <nav class="hidden md:flex items-center space-x-12 mb-2.5">
          <button 
            @click="routeManagement()" 
            class="text-base font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-gray-800/30"
          >
            Management
          </button>
          <button 
            @click="routeConsultation()" 
            class="text-base font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-gray-800/30"
          >
            Consultation
          </button>
          <button 
            @click="routeTraining()" 
            class="text-base font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-gray-800/30"
          >
            Training
          </button>
          <button 
            @click="contactClicked()" 
            class="text-base font-medium bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 px-6 py-2 rounded-lg shadow-lg hover:shadow-xl"
          >
            Contact
          </button>
        </nav>
        
        <!-- Mobile menu with improved positioning -->
        <div class="md:hidden flex items-center">
          <burger-menu />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import SvgIcon from '../controls/svg-icon.vue'
import BurgerMenu from '../controls/burger-menu.vue'

const router = useRouter()
const width = ref<number>(220)
const height = ref<number>(90)

onMounted(() => {
  // Set dimensions based on screen width
  if (window.innerWidth <= 3839) {
    width.value = 220
    height.value = 90
  } else if (window.innerWidth === 3840) {
    width.value = 220
    height.value = 90
  } else if (window.innerWidth === 5120) {
    width.value = 220
    height.value = 90
  } else if (window.innerWidth === 6016) {
    width.value = 500
    height.value = 150
  }
})

const routeHome = (): void => {
  router.push('/')
}

const routeConsultation = (): void => {
  router.push('/consultation')
}

const routeManagement = (): void => {
  router.push('/management')
}

const routeTraining = (): void => {
  router.push('/training')
}

const contactClicked = (): void => {
  const mailto_link = 'mailto:support@needletails.com?subject=Project Inquiry&body='
  window.location.href = mailto_link
}
</script>

<template>
  <div class="fixed inset-0 bg-black z-50 flex items-center justify-center">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"></div>
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(51,188,229,0.1),transparent_50%)]"></div>
    </div>

    <div class="relative text-center">
      <!-- Logo -->
      <div class="mb-8">
        <logo-icon :width="120" :height="60" class="sm:w-[75px] sm:h-[75px]" />
      </div>

      <!-- Loading Animation -->
      <div class="flex items-center justify-center space-x-2 mb-8">
        <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 0ms;"></div>
        <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 150ms;"></div>
        <div class="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style="animation-delay: 300ms;"></div>
      </div>

      <!-- Loading Text -->
      <div class="text-white text-lg font-medium mb-4">
        Loading NeedleTails
      </div>

      <!-- Progress Bar -->
      <div class="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500 ease-out"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>

      <!-- Status Text -->
      <div class="text-gray-400 text-sm mt-4">
        {{ statusText }}
      </div>

      <!-- Floating Elements -->
      <div class="absolute -top-20 -left-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      <div class="absolute -top-10 -right-10 w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
      <div class="absolute -bottom-20 left-10 w-3 h-3 bg-cyan-500 rounded-full animate-bounce"></div>
      <div class="absolute -bottom-10 right-20 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LogoIcon from './icons/logo-icon.vue'


const progress = ref(0)
const statusText = ref('Initializing...')

const statusMessages = [
  'Initializing...',
  'Loading components...',
  'Preparing Swift environment...',
  'Setting up development tools...',
  'Almost ready...'
]

onMounted(() => {
  let currentStep = 0
  
  const interval = setInterval(() => {
    progress.value += 20
    
    if (currentStep < statusMessages.length - 1) {
      currentStep++
      statusText.value = statusMessages[currentStep] || 'Loading...'
    }
    
    if (progress.value >= 100) {
      clearInterval(interval)
      statusText.value = 'Ready!'
      
      // Emit completion event after a short delay
      setTimeout(() => {
        // You can emit an event here if needed
      }, 500)
    }
  }, 300)
})
</script>

<style lang="css" scoped>
.loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  animation: animateHeart 3s infinite;
}

@keyframes animateHeart {
  from {
    -moz-transform: rotate(0deg);
  }
  0% {
    transform: rotate(0deg) scale(0.8);
  }
  5% {
    transform: rotate(45deg) scale(0.9);
  }
  10% {
    transform: rotate(45deg) scale(0.8);
  }
  15% {
    transform: rotate(45deg) scale(1);
  }
  50% {
    transform: rotate(45deg) scale(0.8);
  }
  100% {
    transform: rotate(45deg) scale(0.8);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes animateHeart {
  from {
    -moz-transform: rotate(0deg);
  }
  0% {
    transform: rotate(0deg) scale(0.8);
  }
  5% {
    transform: rotate(45deg) scale(0.9);
  }
  10% {
    transform: rotate(45deg) scale(0.8);
  }
  15% {
    transform: rotate(45deg) scale(1);
  }
  50% {
    transform: rotate(45deg) scale(0.8);
  }
  100% {
    transform: rotate(45deg) scale(0.8);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}

@-moz-keyframes animateHeart {
  from {
    -moz-transform: rotate(0deg);
  }
  0% {
    transform: rotate(0deg) scale(0.8);
  }
  5% {
    transform: rotate(45deg) scale(0.9);
  }
  10% {
    transform: rotate(45deg) scale(0.8);
  }
  15% {
    transform: rotate(45deg) scale(1);
  }
  50% {
    transform: rotate(45deg) scale(0.8);
  }
  100% {
    transform: rotate(45deg) scale(0.8);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
</style>

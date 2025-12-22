<template>
  <Transition name="slide-fade">
    <div
      v-if="isVisible && !isDismissed"
      class="fixed right-4 bottom-4 z-50 max-w-xs w-full"
    >
      <div class="bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 border border-yellow-500/40 rounded-2xl shadow-[0_0_25px_rgba(250,204,21,0.25)] overflow-hidden backdrop-blur-md min-h-[260px]">
        <!-- Close Button -->
        <button
          @click="dismiss"
          class="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-800/80 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-200 z-10"
          aria-label="Close widget"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Widget Content -->
        <div class="p-5 space-y-4">
          <!-- Logo -->
          <div class="flex justify-center mb-2">
            <div class="inline-flex items-center justify-center rounded-full bg-black/70 ring-2 ring-yellow-400/60 shadow-[0_0_20px_rgba(250,204,21,0.45)] px-4 py-3">
              <img
                src="/images/brew-hub-logo.svg"
                alt="BrewHub Logo"
                class="h-20 w-auto max-w-[96px] drop-shadow-[0_4px_18px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>

          <!-- Title -->
          <h3 class="font-semibold text-lg mb-1 text-center bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
            {{ t('brewhubWidgetTitle') }}
          </h3>

          <!-- Description -->
          <p class="text-gray-300/90 text-sm mb-2 text-center leading-relaxed">
            {{ t('brewhubWidgetDescription') }}
          </p>

          <!-- CTA Button -->
          <NuxtLink
            to="/brewhub-coming-soon"
            class="block w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2.5 px-4 rounded-lg text-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border border-yellow-300/60"
          >
            {{ t('brewhubWidgetCTA') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const isVisible = ref<boolean>(false)
const isDismissed = ref<boolean>(false)

// Scroll threshold - show widget after scrolling 300px
const SCROLL_THRESHOLD = 300

const handleScroll = (): void => {
  if (import.meta.client) {
    const scrollY = window.scrollY || window.pageYOffset
    isVisible.value = scrollY > SCROLL_THRESHOLD
  }
}

const dismiss = (): void => {
  isDismissed.value = true
  // Store dismissal in localStorage to persist across page reloads
  if (import.meta.client) {
    localStorage.setItem('brewhub-widget-dismissed', 'true')
  }
}

onMounted(() => {
  if (import.meta.client) {
    // Check if widget was previously dismissed
    const dismissed = localStorage.getItem('brewhub-widget-dismissed')
    if (dismissed === 'true') {
      isDismissed.value = true
    } else {
      // Add scroll listener
      window.addEventListener('scroll', handleScroll, { passive: true })
      // Check initial scroll position
      handleScroll()
    }
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
/* Slide and fade animation */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}

/* Responsive: Hide on mobile */
@media (max-width: 640px) {
  .fixed {
    display: none;
  }
}
</style>
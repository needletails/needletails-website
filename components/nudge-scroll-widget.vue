<template>
  <Transition name="slide-fade-left">
    <div
      v-if="isVisible && !isDismissed"
      class="fixed left-4 bottom-4 z-50 max-w-xs w-full"
    >
      <div class="bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 border border-blue-500/40 rounded-2xl shadow-[0_0_25px_rgba(59,130,246,0.25)] overflow-hidden backdrop-blur-md min-h-[260px]">
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
            <div class="inline-flex items-center justify-center rounded-full bg-black/70 ring-2 ring-blue-400/60 shadow-[0_0_20px_rgba(59,130,246,0.45)] px-4 py-3">
              <img
                src="/images/nudge.svg"
                :alt="t('nudgeWidgetLogoAlt')"
                class="h-20 w-auto max-w-[96px] drop-shadow-[0_4px_18px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>

          <!-- Title -->
          <h3 class="font-semibold text-lg mb-1 text-center bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
            {{ t('nudgeWidgetTitle') }}
          </h3>

          <!-- Description -->
          <p class="text-gray-300/90 text-sm mb-2 text-center leading-relaxed">
            {{ t('nudgeWidgetDescription') }}
          </p>

          <!-- CTA Button -->
          <NuxtLink
            :to="localePath('/nudge')"
            class="block w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2.5 px-4 rounded-lg text-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border border-blue-300/60"
          >
            {{ t('nudgeWidgetCTA') }}
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
const localePath = useLocalePath()

const isVisible = ref<boolean>(false)
const isDismissed = ref<boolean>(false)

// Scroll threshold - show widget after scrolling 500px (different from BrewHub to stagger them)
const SCROLL_THRESHOLD = 500

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
    localStorage.setItem('nudge-widget-dismissed', 'true')
  }
}

onMounted(() => {
  if (import.meta.client) {
    // Check if widget was previously dismissed
    const dismissed = localStorage.getItem('nudge-widget-dismissed')
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
/* Slide and fade animation from left */
.slide-fade-left-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-left-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-left-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-fade-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-fade-left-enter-to,
.slide-fade-left-leave-from {
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
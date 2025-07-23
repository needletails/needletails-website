<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-full opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-full opacity-0"
  >
    <div
      v-if="showBanner"
      class="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 shadow-2xl"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-message"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <!-- Content -->
          <div class="flex-1 max-w-4xl">
            <h2 id="cookie-consent-title" class="text-lg font-semibold text-white mb-2">
              {{ t('cookieConsentTitle') }}
            </h2>
            <p id="cookie-consent-message" class="text-sm text-gray-300 leading-relaxed">
              {{ t('cookieConsentMessage') }}
            </p>
          </div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <!-- Accept All Button -->
            <button
              @click="handleAcceptAll"
              class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              :aria-label="t('cookieConsentAcceptAll')"
            >
              {{ t('cookieConsentAcceptAll') }}
            </button>

            <!-- Accept Necessary Only Button -->
            <button
              @click="handleAcceptNecessary"
              class="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              :aria-label="t('cookieConsentAcceptNecessary')"
            >
              {{ t('cookieConsentAcceptNecessary') }}
            </button>

            <!-- Reject All Button -->
            <button
              @click="handleRejectAll"
              class="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              :aria-label="t('cookieConsentReject')"
            >
              {{ t('cookieConsentReject') }}
            </button>

            <!-- Learn More Button -->
            <button
              @click="showDetails = !showDetails"
              class="px-6 py-2 bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              :aria-label="t('cookieConsentLearnMore')"
              :aria-expanded="showDetails"
            >
              {{ t('cookieConsentLearnMore') }}
              <svg
                class="inline-block w-4 h-4 ml-1 transition-transform duration-200"
                :class="{ 'rotate-180': showDetails }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Detailed Information -->
        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 max-h-0"
          enter-to-class="opacity-100 max-h-96"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 max-h-96"
          leave-to-class="opacity-0 max-h-0"
        >
          <div v-if="showDetails" class="mt-6 pt-6 border-t border-gray-700">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Necessary Cookies -->
              <div class="bg-gray-800/50 rounded-lg p-4">
                <h3 class="text-sm font-semibold text-white mb-2">Necessary</h3>
                <p class="text-xs text-gray-300 leading-relaxed">
                  {{ t('cookieConsentNecessary') }}
                </p>
                <div class="mt-2">
                  <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Always Active
                  </span>
                </div>
              </div>

              <!-- Analytics Cookies -->
              <div class="bg-gray-800/50 rounded-lg p-4">
                <h3 class="text-sm font-semibold text-white mb-2">Analytics</h3>
                <p class="text-xs text-gray-300 leading-relaxed">
                  {{ t('cookieConsentAnalytics') }}
                </p>
                <div class="mt-2">
                  <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Optional
                  </span>
                </div>
              </div>

              <!-- Preferences Cookies -->
              <div class="bg-gray-800/50 rounded-lg p-4">
                <h3 class="text-sm font-semibold text-white mb-2">Preferences</h3>
                <p class="text-xs text-gray-300 leading-relaxed">
                  {{ t('cookieConsentPreferences') }}
                </p>
                <div class="mt-2">
                  <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Optional
                  </span>
                </div>
              </div>

              <!-- Marketing Cookies -->
              <div class="bg-gray-800/50 rounded-lg p-4">
                <h3 class="text-sm font-semibold text-white mb-2">Marketing</h3>
                <p class="text-xs text-gray-300 leading-relaxed">
                  {{ t('cookieConsentMarketing') }}
                </p>
                <div class="mt-2">
                  <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Optional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const { t } = useI18n()
const { hasConsent, acceptAll, acceptNecessary, rejectAll, applyCookiePreferences, applyLocalStoragePreferences } = useCookieConsent()

const showDetails = ref(false)
const showBanner = ref(false)

// Computed property to determine if banner should be shown
const shouldShowBanner = computed(() => {
  return !hasConsent()
})

// Handle Accept All button click
const handleAcceptAll = () => {
  acceptAll()
  showBanner.value = false
}

// Handle Accept Necessary button click
const handleAcceptNecessary = () => {
  acceptNecessary()
  showBanner.value = false
}

// Handle Reject All button click
const handleRejectAll = () => {
  rejectAll()
  showBanner.value = false
}

// Lifecycle hooks
onMounted(() => {
  // Add a delay to ensure secure storage is fully initialized
  setTimeout(() => {
    if (shouldShowBanner.value) {
      showBanner.value = true
    }
  }, 2000)
})
</script>

<style scoped>
/* Ensure the banner stays at the bottom */
.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
}

/* Smooth transitions for the details section */
.max-h-0 {
  max-height: 0;
  overflow: hidden;
}

.max-h-96 {
  max-height: 24rem;
}
</style> 
<template>
  <div class="min-h-screen bg-black">
    <!-- Header - Fixed and persistent across page transitions -->
    <Header />
    
    <!-- Page Content - Nuxt handles transitions automatically -->
    <NuxtPage />
    
    <!-- Footer - Fixed and persistent across page transitions -->
    <Footer />
    
    <!-- Cookie Consent Banner -->
    <CookieConsentBanner />
  </div>
</template>

<script setup lang="ts">
// This component will persist across route changes
import Header from '~/components/base/header.vue'
import Footer from '~/components/base/footer.vue'
import CookieConsentBanner from '~/components/controls/cookie-consent-banner.vue'

// Auto-scroll to top on route changes
const router = useRouter()

// Watch for route changes and scroll to top
watch(() => router.currentRoute.value.path, () => {
  // Use nextTick to ensure the DOM has updated
  nextTick(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })
})
</script> 
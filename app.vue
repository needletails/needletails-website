<template>
  <div class="min-h-screen bg-black">
    <!-- Header - Fixed and persistent across page transitions -->
    <Header />
    
    <!-- Page Content - Nuxt handles transitions automatically -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    
    <!-- Footer - Fixed and persistent across page transitions -->
    <Footer />
    
    <!-- Cookie Consent Banner -->
    <CookieConsentBanner />
    
    <!-- We want to disable BrewHub right now. -->
    <!--
    <BrewhubScrollWidget />
    -->
    
    <!-- Nudge Scroll Widget -->
    <NudgeScrollWidget />

    <!-- NeedleBot, framed from NeedleTails Chat -->
    <ChatBotWidget />
  </div>
</template>

<script setup lang="ts">
// This component will persist across route changes
import Header from '~/components/base/header.vue'
import Footer from '~/components/base/footer.vue'
import CookieConsentBanner from '~/components/controls/cookie-consent-banner.vue'
// We want to disable BrewHub right now.
// import BrewhubScrollWidget from '~/components/brewhub-scroll-widget.vue'
import NudgeScrollWidget from '~/components/nudge-scroll-widget.vue'
import ChatBotWidget from '~/components/chat-bot-widget.vue'

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

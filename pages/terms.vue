<template>
  <div>
    <TermsComponent />
  </div>
</template>

<script setup lang="ts">
// Nuxt auto-imports components, no need for manual imports

// SEO Meta Tags
useHead({
  title: 'Terms of Service - NeedleTails',
  meta: [
    { name: 'description', content: 'Terms of service for NeedleTails software development services. Read our terms and conditions for using our development and consulting services.' },
    { name: 'keywords', content: 'terms of service, terms and conditions, service agreement, legal terms' },
    { property: 'og:title', content: 'Terms of Service - NeedleTails' },
    { property: 'og:description', content: 'Terms of service for NeedleTails software development services. Read our terms and conditions for using our development and consulting services.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://needletails.com/terms' },
    { property: 'og:image', content: '/images/needletails_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Terms of Service - NeedleTails' },
    { name: 'twitter:description', content: 'Terms of service for NeedleTails software development services. Read our terms and conditions for using our development and consulting services.' },
    { name: 'twitter:image', content: '/images/needletails_logo.svg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://needletails.com/terms' }
  ]
});
</script>

<style></style>

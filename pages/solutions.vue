<template>
  <main class="pt-20 lg:pt-24 pb-12">
    <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ProjectsComponent />
    </div>
  </main>
</template>

<script setup lang="ts">
// SEO Meta Tags
useHead({
  title: 'Software Solutions | Server, Native & Web | NeedleTails',
  meta: [
    { name: 'description', content: 'Server-side, native app, and web development. Production-grade backends, iOS/Android apps, and web applications—built for scale, security, and your business.' },
    { name: 'keywords', content: 'software solutions, server-side development, native app development, web development, backend APIs, mobile apps, custom software' },
    { property: 'og:title', content: 'Software Solutions | NeedleTails' },
    { property: 'og:description', content: 'Server-side, native app, and web development. Production-grade backends, iOS/Android apps, and web applications—built for scale and security.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://needletails.com/solutions' },
    { property: 'og:image', content: '/images/needletails_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Software Solutions | NeedleTails' },
    { name: 'twitter:description', content: 'Server-side, native app, and web development. Production-grade backends, apps, and web—built for scale and security.' },
    { name: 'twitter:image', content: '/images/needletails_logo.svg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://needletails.com/solutions' }
  ]
});
</script>

<style></style>

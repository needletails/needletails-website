<template>
  <div class="min-h-screen bg-black">
    <Header />
    <main class="pt-20 lg:pt-24 pb-12">
      <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <consultation-component />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/base/header.vue';
import Footer from '../components/base/footer.vue';
import ConsultationComponent from '../components/consultation/consultation-component.vue';

// SEO Meta Tags
useHead({
  title: 'Software Development Consultation - NeedleTails',
  meta: [
    { name: 'description', content: 'Get expert software development consultation from NeedleTails. Professional advice on web development, mobile apps, and backend solutions for your business needs.' },
    { name: 'keywords', content: 'software consultation, development advice, technical consulting, web development consultation, mobile app consultation' },
    { property: 'og:title', content: 'Software Development Consultation - NeedleTails' },
    { property: 'og:description', content: 'Get expert software development consultation from NeedleTails. Professional advice on web development, mobile apps, and backend solutions for your business needs.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://needletails.com/consultation' },
    { property: 'og:image', content: '/images/needletails_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Software Development Consultation - NeedleTails' },
    { name: 'twitter:description', content: 'Get expert software development consultation from NeedleTails. Professional advice on web development, mobile apps, and backend solutions for your business needs.' },
    { name: 'twitter:image', content: '/images/needletails_logo.svg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://needletails.com/consultation' }
  ]
});
</script> 
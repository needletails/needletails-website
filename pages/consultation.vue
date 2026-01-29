<template>
  <main class="pt-40 lg:pt-48 pb-12">
    <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <consultation-component />
    </div>
  </main>
</template>

<script setup lang="ts">
import ConsultationComponent from '../components/consultation/consultation-component.vue';

// SEO Meta Tags
useHead({
  title: 'Software Consulting | Architecture, Security & Delivery | NeedleTails',
  meta: [
    { name: 'description', content: 'Software consulting: architecture, technology selection, security and compliance, and delivery practices. Structured guidance so your decisions are informed and aligned with business goals.' },
    { name: 'keywords', content: 'software consulting, architecture consulting, technology selection, security review, software delivery, technical advisory' },
    { property: 'og:title', content: 'Software Consulting | NeedleTails' },
    { property: 'og:description', content: 'Software consulting: architecture, security, and delivery. Structured guidance so your decisions are informed and aligned with business goals.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://needletails.com/consultation' },
    { property: 'og:image', content: '/images/needletails_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Software Consulting | NeedleTails' },
    { name: 'twitter:description', content: 'Software consulting: architecture, security, and delivery—informed by experience, aligned with your goals.' },
    { name: 'twitter:image', content: '/images/needletails_logo.svg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://needletails.com/consultation' }
  ]
});
</script> 
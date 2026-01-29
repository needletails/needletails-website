<template>
  <main class="pt-40 lg:pt-48 pb-12">
    <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <project-management />
    </div>
  </main>
</template>

<script setup lang="ts">
import ProjectManagement from '../components/project-management/project-management.vue';

// SEO Meta Tags
useHead({
  title: 'Product & Project Management | NeedleTails',
  meta: [
    { name: 'description', content: 'Product and project management for software delivery. Roadmap, requirements, risk and resource management—so your projects stay on scope, schedule, and quality.' },
    { name: 'keywords', content: 'project management, product management, software delivery, roadmap, risk management, resource management, agile delivery' },
    { property: 'og:title', content: 'Product & Project Management | NeedleTails' },
    { property: 'og:description', content: 'Product and project management for software delivery. Roadmap, requirements, and delivery discipline—on scope, schedule, and quality.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://needletails.com/management' },
    { property: 'og:image', content: '/images/needletails_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Product & Project Management | NeedleTails' },
    { name: 'twitter:description', content: 'Product and project management for software delivery—on scope, schedule, and quality.' },
    { name: 'twitter:image', content: '/images/needletails_logo.svg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://needletails.com/management' }
  ]
});
</script> 
<template>
  <div class="min-h-screen bg-black">
    <Header />
    <main class="pt-40 lg:pt-48 pb-12">
      <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <training-component />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/base/header.vue';
import Footer from '../components/base/footer.vue';
import TrainingComponent from '../components/training/training-component.vue';

// SEO Meta Tags
useHead({
  title: 'Software Development Training - NeedleTails',
  meta: [
    { name: 'description', content: 'Professional software development training programs. Learn web development, mobile app development, and backend technologies with expert instructors from NeedleTails.' },
    { name: 'keywords', content: 'software training, development courses, programming education, web development training, mobile app training, coding bootcamp' },
    { property: 'og:title', content: 'Software Development Training - NeedleTails' },
    { property: 'og:description', content: 'Professional software development training programs. Learn web development, mobile app development, and backend technologies with expert instructors from NeedleTails.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://needletails.com/training' },
    { property: 'og:image', content: '/images/needletails_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Software Development Training - NeedleTails' },
    { name: 'twitter:description', content: 'Professional software development training programs. Learn web development, mobile app development, and backend technologies with expert instructors from NeedleTails.' },
    { name: 'twitter:image', content: '/images/needletails_logo.svg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://needletails.com/training' }
  ]
});
</script> 
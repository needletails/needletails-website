<template>
  <div class="min-h-screen bg-black">
    <Header />
    <main class="pt-20 lg:pt-24 pb-12">
      <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ProjectsComponent />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/base/header.vue';
import Footer from '../components/base/footer.vue';

// SEO Meta Tags
useHead({
  title: 'Software Development Solutions - NeedleTails',
  meta: [
    { name: 'description', content: 'Comprehensive software development solutions including web applications, mobile apps, and backend services. Expert development team delivering custom solutions.' },
    { name: 'keywords', content: 'software solutions, web development, mobile apps, backend services, custom software, development services' },
    { property: 'og:title', content: 'Software Development Solutions - NeedleTails' },
    { property: 'og:description', content: 'Comprehensive software development solutions including web applications, mobile apps, and backend services. Expert development team delivering custom solutions.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://needletails.com/solutions' },
    { property: 'og:image', content: '/images/needletails_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Software Development Solutions - NeedleTails' },
    { name: 'twitter:description', content: 'Comprehensive software development solutions including web applications, mobile apps, and backend services. Expert development team delivering custom solutions.' },
    { name: 'twitter:image', content: '/images/needletails_logo.svg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://needletails.com/solutions' }
  ]
});
</script>

<style></style>

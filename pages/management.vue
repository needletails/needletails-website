<template>
  <div class="min-h-screen bg-black">
    <Header />
    <main class="pt-20 lg:pt-24 pb-12">
      <div class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <project-management />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/base/header.vue';
import Footer from '../components/base/footer.vue';
import ProjectManagement from '../components/project-management/project-management.vue';

// SEO Meta Tags
useHead({
  title: 'Project Management Services - NeedleTails',
  meta: [
    { name: 'description', content: 'Professional project management services for software development projects. Expert project planning, execution, and delivery from NeedleTails development team.' },
    { name: 'keywords', content: 'project management, software project management, development project planning, agile project management, technical project management' },
    { property: 'og:title', content: 'Project Management Services - NeedleTails' },
    { property: 'og:description', content: 'Professional project management services for software development projects. Expert project planning, execution, and delivery from NeedleTails development team.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://needletails.com/management' },
    { property: 'og:image', content: '/images/needletails_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Project Management Services - NeedleTails' },
    { name: 'twitter:description', content: 'Professional project management services for software development projects. Expert project planning, execution, and delivery from NeedleTails development team.' },
    { name: 'twitter:image', content: '/images/needletails_logo.svg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://needletails.com/management' }
  ]
});
</script> 
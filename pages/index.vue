<template>
  <main>
    <intro />
    <business-overview />
    <featured-app />
    <projects-component />
    <solutions-component />
    <faq-section />
  </main>
</template>

<script setup lang="ts">
import Intro from '../components/introductory-component.vue';
import BusinessOverview from '../components/business-overview.vue';
import FeaturedApp from '../components/featured-app/featured-app.vue';
import ProjectsComponent from '../components/projects-component.vue';
import SolutionsComponent from '../components/solutions-content/solutions-component.vue';
import CostSavingsSection from '../components/cost-savings-section.vue';
import FaqSection from '../components/faq-section.vue';

// SEO Meta Tags
useHead({
  title: 'NeedleTails - Professional Software Development Services',
  meta: [
    { name: 'description', content: 'We solve your software challenges—apps, websites, and integrated solutions. NeedleTails builds and integrates mobile, web, and backend systems so you can focus on your business.' },
    { name: 'keywords', content: 'software development, web development, mobile apps, backend development, consulting, project management, custom software, build my app, build my website, software solutions' },
    { property: 'og:title', content: 'NeedleTails - We Build Your Apps, Websites & Software Solutions' },
    { property: 'og:description', content: 'We solve your software challenges—apps, websites, and integrated solutions. NeedleTails builds and integrates mobile, web, and backend systems so you can focus on your business.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://needletails.com' },
    { property: 'og:image', content: '/images/needletails_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'NeedleTails - We Build Your Apps, Websites & Software Solutions' },
    { name: 'twitter:description', content: 'We solve your software challenges—apps, websites, and integrated solutions. NeedleTails builds and integrates mobile, web, and backend systems so you can focus on your business.' },
    { name: 'twitter:image', content: '/images/needletails_logo.svg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://needletails.com' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'NeedleTails',
        url: 'https://needletails.com',
        logo: 'https://needletails.com/images/needletails_logo.svg',
        email: 'support@needletails.com',
        description: 'Swift Software Specialists. We solve your challenges—apps, websites, and integrated software solutions.',
        sameAs: [
          'https://github.com/needletails',
          'https://twitter.com/needletails'
        ]
      })
    }
  ]
});
</script>
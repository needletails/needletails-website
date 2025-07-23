<template>
  <main>
    <intro />
    <business-overview />
    <featured-app />
    <projects-component />
    <solutions-component />
    <faq-section />
    <local-business-schema />
  </main>
</template>

<script setup lang="ts">
import Intro from '../components/introductory-component.vue';
import BusinessOverview from '../components/business-overview.vue';
import FeaturedApp from '../components/featured-app/featured-app.vue';
import ProjectsComponent from '../components/projects-component.vue';
import SolutionsComponent from '../components/solutions-content/solutions-component.vue';
import FaqSection from '../components/faq-section.vue';
import LocalBusinessSchema from '../components/local-business-schema.vue';

// SEO Meta Tags
useHead({
  title: 'NeedleTails - Professional Software Development Services',
  meta: [
    { name: 'description', content: 'Expert software development services specializing in web applications, mobile apps, and backend solutions. Custom development, consulting, and project management.' },
    { name: 'keywords', content: 'software development, web development, mobile apps, backend development, consulting, project management, custom software' },
    { property: 'og:title', content: 'NeedleTails - Professional Software Development Services' },
    { property: 'og:description', content: 'Expert software development services specializing in web applications, mobile apps, and backend solutions. Custom development, consulting, and project management.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://needletails.com' },
    { property: 'og:image', content: '/images/needletails_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'NeedleTails - Professional Software Development Services' },
    { name: 'twitter:description', content: 'Expert software development services specializing in web applications, mobile apps, and backend solutions. Custom development, consulting, and project management.' },
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
        description: 'Expert software development services specializing in web applications, mobile apps, and backend solutions.',
        sameAs: [
          'https://twitter.com/needletails',
          'https://github.com/needletails'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: 'English',
          email: 'support@needletails.com'
        },
        serviceType: [
          'Software Development',
          'Web Development',
          'Mobile App Development',
          'Backend Development',
          'Consulting',
          'Project Management'
        ],
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software Development Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web Development',
                description: 'Custom web applications and websites'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mobile App Development',
                description: 'iOS and Android mobile applications'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Backend Development',
                description: 'Server-side solutions and APIs'
              }
            }
          ]
        }
      })
    }
  ]
});
</script>
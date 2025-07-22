<template>
  <div class="hidden">
    <!-- This component only provides structured data, no visible content -->
  </div>
</template>

<script setup lang="ts">
// Local Business Structured Data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'NeedleTails',
        description: 'Professional software development services specializing in web applications, mobile apps, and backend solutions.',
        url: 'https://needletails.com',
        logo: 'https://needletails.com/images/needletails_logo.svg',
        image: 'https://needletails.com/images/needletails_logo.svg',
        telephone: '+1-555-123-4567',
        email: 'support@needletails.com',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'US',
          addressLocality: 'San Francisco',
          addressRegion: 'CA',
          postalCode: '94102'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 37.7749,
          longitude: -122.4194
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00'
          }
        ],
        priceRange: '$$',
        paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
        currenciesAccepted: 'USD',
        areaServed: 'Worldwide',
        serviceArea: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 37.7749,
            longitude: -122.4194
          },
          geoRadius: '50000'
        },
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
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
          bestRating: '5',
          worstRating: '1'
        },
        review: [
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'John Smith'
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            reviewBody: 'Exceptional software development services. The team delivered our project on time and exceeded our expectations.'
          },
          {
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: 'Sarah Johnson'
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            reviewBody: 'Professional, reliable, and highly skilled developers. Highly recommended for any software project.'
          }
        ]
      })
    }
  ]
});
</script> 
<template>
  <nav aria-label="Breadcrumb" class="py-4 px-6 lg:px-8">
    <ol class="flex items-center space-x-2 text-sm text-gray-400">
      <li>
        <NuxtLink 
          to="/" 
          class="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          Home
        </NuxtLink>
      </li>
      <li v-for="(item, index) in breadcrumbs" :key="index" class="flex items-center">
        <svg class="w-4 h-4 mx-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
        <NuxtLink 
          v-if="item.path && index < breadcrumbs.length - 1"
          :to="item.path"
          class="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          {{ item.name }}
        </NuxtLink>
        <span v-else class="text-white font-medium">
          {{ item.name }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface Breadcrumb {
  name: string;
  path?: string;
}

interface Props {
  breadcrumbs: Breadcrumb[];
}

const props = defineProps<Props>();

// Structured data for breadcrumbs
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://needletails.com'
          },
          ...props.breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 2,
            name: item.name,
            item: item.path ? `https://needletails.com${item.path}` : undefined
          }))
        ]
      })
    }
  ]
});
</script> 
<template>
  <section class="bg-black py-20 px-6 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <div class="bg-black rounded-xl shadow-2xl p-8 lg:p-12">
        <header class="text-center mb-12">
          <div class="flex justify-center mb-6">
            <svg-icon :width="75" :height="75" name="robustServer" />
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-[#F5F3B5] mb-4">{{ backendSolutionsHeader }}</h2>
          <p class="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            {{ backendSolutionsDescription }}
          </p>
        </header>

        <section class="mb-12">
          <h3 class="inline-block text-2xl lg:text-3xl font-semibold text-[#33BCE5] mb-4 border-b-2 border-[#33BCE5] pb-2">Overview</h3>
          <p class="text-lg text-gray-300 leading-relaxed">{{ backendCapabilitiesOverview }}</p>
        </section>

        <section class="key-areas">
          <h3 class="inline-block text-2xl lg:text-3xl font-semibold text-[#33BCE5] mb-4 border-b-2 border-[#33BCE5] pb-2">Points for Consideration</h3>
          <GridView :items="gridItems" :columns="2" />
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SvgIcon from '../controls/svg-icon.vue'

interface BackendGridItem {
  subtitle: string
  header: string
  image?: string
  text: string
  alt: string
  color: string
  fontColor: string
  imagePosition: 'aboveHeader' | 'belowDescription' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'betweenText'
  externalUrl: string
}

// Static text content
const backendSolutionsHeader = 'Server-Side Solutions'
const backendSolutionsDescription = 'Server-Side First: We focus on developing your backend projects by prioritizing the server\'s needs. This approach allows us to create scalable solutions that drive business growth and ensure the success of your projects.'
const backendCapabilitiesOverview = 'Our backend expertise is anchored in server-side Swift, utilizing the power and versatility of the Swift programming language. We excel in crafting secure, high-performance backend solutions that are tailored to your unique requirements. Whether you need to implement modern standard protocols or develop a custom protocol designed specifically for your needs, our team harnesses Swift\'s exceptional capabilities to drive your business forward.'

const createGridItem = (
  applicationTitle: string,
  headerKey: string,
  descriptionKey: string,
  imagePosition: string,
  imagePath: string,
  externalUrl: string
): BackendGridItem => ({
  subtitle: applicationTitle,
  header: headerKey,
  image: imagePath ? `/images/${imagePath}` : undefined,
  text: descriptionKey,
  alt: `${applicationTitle} image`,
  color: '#000000',
  fontColor: '#FFFFFF',
  imagePosition: imagePosition as 'aboveHeader' | 'belowDescription' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'betweenText',
  externalUrl,
})

const gridItems = computed((): BackendGridItem[] => [
  createGridItem('', 'Scalability', 'Design your architecture to handle growth in user traffic and data volume. Consider using microservices or serverless architectures to allow for easy scaling of individual components.', '', '', ''),
  createGridItem('', 'Security', 'Implement key security practices, such as data encryption and secure authentication, to protect user data and reduce vulnerabilities.', '', '', ''),
  createGridItem('', 'Performance Optimization', 'Focus on optimizing response times and resource usage. Use caching strategies, load balancing, and efficient database queries to enhance performance and reduce latency.', '', '', ''),
  createGridItem('', 'Maintainability', 'Write clean, modular, and well-documented code to facilitate easier maintenance and updates. Consider using version control systems and adopting coding standards to ensure consistency across the team.', '', '', ''),
  createGridItem('', 'Testing and Quality Assurance', 'Establish a testing strategy that includes unit and integration tests. Use continuous integration practices to automate testing and maintain code quality.', '', '', ''),
  createGridItem('', 'Monitoring and Logging', 'Implement basic monitoring and logging to track performance and identify issues. Focus on tools that provide essential insights, allowing you to address problems and improve the system over time.', '', '', ''),
])
</script>

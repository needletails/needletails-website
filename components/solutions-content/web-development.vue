<template>
  <section class="bg-black py-20 px-6 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <div class="bg-black rounded-xl shadow-2xl p-8 lg:p-12">
        <header class="text-center mb-12">
          <div class="flex justify-center mb-6">
            <svg-icon :width="75" :height="75" name="webApp" />
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-[#F5F3B5] mb-4">{{ webDevelopmentExpertiseHeader }}</h2>
          <p class="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            {{ webDevelopmentExpertiseDescription }}
          </p>
        </header>

        <section class="mb-12">
          <h3 class="inline-block text-2xl lg:text-3xl font-semibold text-[#33BCE5] mb-4 border-b-2 border-[#33BCE5] pb-2">Overview</h3>
          <p class="text-lg text-gray-300 leading-relaxed">{{ webDevelopmentOverview }}</p>
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

interface WebGridItem {
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
const webDevelopmentExpertiseHeader = 'Web Application Development'
const webDevelopmentExpertiseDescription = 'We leverage our in-depth expertise to build and sustain a strong online presence for your business.'
const webDevelopmentOverview = 'In the field of web development, we provide a diverse array of services that enable customers to leverage various types of websites, including portfolio sites to showcase creative work, blogs for sharing content, corporate websites to represent businesses, interactive web applications for specific functionalities, and targeted landing pages for marketing campaigns. Our technology stack features Vue.js with TypeScript, along with Swift solutions like Vapor, Hummingbird 2, and Toucan. Utilizing these technologies, we create responsive and user-friendly web experiences, delivering solutions that are both visually engaging and functionally robust.'

const createGridItem = (
  applicationTitle: string,
  headerKey: string,
  descriptionKey: string,
  imagePosition: string,
  imagePath: string,
  externalUrl: string
): WebGridItem => ({
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

const gridItems = computed((): WebGridItem[] => [
  createGridItem('', 'Responsive Design', 'Ensure your website is responsive and works well on various devices and screen sizes for an optimal user experience.', '', '', ''),
  createGridItem('', 'Cross-Browser Compatibility', 'Test your web application across different browsers to ensure consistent functionality and appearance.', '', '', ''),
  createGridItem('', 'Performance Optimization', 'Focus on optimizing load times and overall performance by minimizing file sizes, using efficient coding practices, and leveraging caching.', '', '', ''),
  createGridItem('', 'User Experience (UX)', 'Prioritize intuitive navigation, clear calls to action, and accessibility features to enhance user engagement.', '', '', ''),
  createGridItem('', 'Security Practices', 'Implement essential security measures, such as HTTPS, data validation, and protection against common vulnerabilities like SQL injection and cross-site scripting (XSS).', '', '', ''),
  createGridItem('', 'SEO Best Practices', 'Optimize your website for search engines by using proper HTML structure, meta tags, and relevant keywords to improve visibility and ranking.', '', '', ''),
])
</script>

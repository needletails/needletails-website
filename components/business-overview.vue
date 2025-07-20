<template>
  <section class="bg-[rgb(2,2,19)] py-20 px-6 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <div class="space-y-12">
        <div>
          <h1 v-scrollanimation class="text-4xl lg:text-5xl font-bold text-white mb-8">
            Swift Software Specialists
          </h1>
          <div v-scrollanimation class="transition-all duration-2000 ease-out delay-300 space-y-6">
            <p class="text-lg text-gray-300 leading-relaxed">
              Swift is a type-safe programming language, which means it helps prevent errors by ensuring that values are used correctly. It has a low memory footprint, allowing applications to run efficiently, especially on mobile devices. Additionally, Swift offers strong support for thread safety, ensuring that applications can handle multiple tasks at once without issues. By choosing NeedleTails, you can be confident that your projects will benefit from the reliability and performance that Swift provides, leading to high-quality software solutions tailored to your needs. Swift's advanatage is interoperability, which means we can incrementally move less efficient projects in different languages into Swift and or call Swift APIs from your native language.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed">
              We develop scalable, server-side solutions that provide your business with a solid and secure foundation, ensuring smooth operations and optimal performance.
            </p>
            <div class="py-12">
              <p class="text-lg text-gray-300 leading-relaxed mb-8">
                We believe that meticulous planning is essential for success. Our comprehensive blueprints, insightful inquiries, and guidance will support you throughout your journey.
              </p>
              <GridView :items="gridItems" :columns="2" />
            </div>
          </div>
          <div class="text-center mt-12">
            <button 
              class="bg-[#33BCE5] hover:bg-[#0051a8] text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all duration-300 cursor-pointer"
              @click="handleGetInTouch"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div class="pt-16">
          <div v-scrollanimation class="p-8 lg:p-12">
            <GridView :items="openSourceItems" :columns="1" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface BusinessGridItem {
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

const createGridItem = (
  applicationTitle: string,
  headerKey: string,
  descriptionKey: string,
  imagePosition: string,
  imagePath: string,
  externalUrl: string
): BusinessGridItem => ({
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

const handleGetInTouch = (): void => {
  const mailto_link = 'mailto:support@needletails.com?subject=Project Inquiry&body='
  window.location.href = mailto_link
}

const gridItems = computed((): BusinessGridItem[] => [
  createGridItem(
    'Application',
    'Server-Side Development',
    'We specialize in server-side Swift, frameworks, and open-source solutions, ensuring robust and scalable backend development.',
    'betweenText',
    'backend.png',
    ''
  ),
  createGridItem(
    'Application',
    'Application Development',
    'We create visually appealing and user-friendly mobile applications for both Apple platforms and Android, ensuring optimal performance and user satisfaction.',
    'betweenText',
    'NeedleTailLeftColor.png',
    ''
  ),
  createGridItem(
    'Application',
    'Training Courses',
    'We can enhance your team\'s efficiency and skill set across various areas, including management, development, design, and testing.',
    'betweenText',
    'StreamStack.png',
    ''
  ),
  createGridItem(
    'Application',
    'Web Development',
    'We offer comprehensive web development using Vue.js with TypeScript, as well as Vapor or Toucan with Swift, depending on your needs, ensuring that your online presence accurately represents your business.',
    'betweenText',
    'VaporLogo.png',
    ''
  ),
])

const openSourceItems = computed((): BusinessGridItem[] => [
  createGridItem(
    'Open Source Initiatives',
    'Wherever possible, we support the open source community. Let\'s connect with your audience across all devices through our native applications and backend services, powered by our exceptional open-source frameworks and libraries.',
    'Support the GitHub NeedleTails project to give your projects the edge.',
    'betweenText',
    'github-mark-white.svg',
    'https://github.com/sponsors/needletails'
  ),
])
</script>

<template>
  <section class="bg-black py-20 px-6 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <div class="bg-black rounded-xl shadow-2xl p-8 lg:p-12">
        <header class="text-center mb-12">
          <div class="flex justify-center mb-6">
            <svg-icon :width="75" :height="75" name="nativeApps" />
          </div>
          <h2 class="text-4xl lg:text-5xl font-bold text-[#F5F3B5] mb-4">{{ nativeAppDevelopmentHeader }}</h2>
          <p class="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            {{ nativeAppDevelopmentDescription }}
          </p>
        </header>

        <section class="mb-12">
          <h3 class="inline-block text-2xl lg:text-3xl font-semibold text-[#33BCE5] mb-4 border-b-2 border-[#33BCE5] pb-2">Overview</h3>
          <p class="text-lg text-gray-300 leading-relaxed">{{ nativeAppDevelopmentOverview }}</p>
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

interface NativeGridItem {
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
const nativeAppDevelopmentHeader = 'Native Application Development'
const nativeAppDevelopmentDescription = 'We elevate your projects into sophisticated native experiences, meticulously crafted for that native look and feel.'
const nativeAppDevelopmentOverview = 'Our team specializes in creating applications for a wide array of Apple platforms and Android devices. With extensive experience in developing seamless, intuitive, and high-performance applications, we cater to iOS, iPadOS, macOS, tvOS, watchOS, and visionOS. For Android, we ensure a native look and feel that enhances user engagement. We are committed to security, implementing best practices to protect user data and ensure a safe experience. Our expertise allows us to design and build applications that are visually appealing, user-friendly, and deliver exceptional performance. Whether you need a polished mobile app, a powerful desktop application, or an engaging TV interface, we provide solutions that guarantee an outstanding user experience across all devices.'

const createGridItem = (
  applicationTitle: string,
  headerKey: string,
  descriptionKey: string,
  imagePosition: string,
  imagePath: string,
  externalUrl: string
): NativeGridItem => ({
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

const gridItems = computed((): NativeGridItem[] => [
  createGridItem('', 'Design Consistency', 'Maintain a consistent design and user experience across Swift client applications and Android platforms to enhance usability.', '', '', ''),
  createGridItem('', 'Device Fragmentation', 'Test on various devices and screen sizes, especially for Android.', '', '', ''),
  createGridItem('', 'Performance Optimization', 'Optimize load times and responsiveness using profiling tools.', '', '', ''),
  createGridItem('', 'User Experience (UX)', 'Ensure intuitive navigation and accessibility for all users.', '', '', ''),
  createGridItem('', 'Security Practices', 'Implement data encryption and secure authentication to protect user data.', '', '', ''),
  createGridItem('', 'Distribution Compliance', 'Ensure your app meets the requirements for various distribution channels, including app stores and alternative platforms.', '', '', ''),
])
</script>

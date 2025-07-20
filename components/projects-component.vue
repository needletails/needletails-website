<template>
  <section class="bg-black py-20 px-6 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <div class="bg-[rgb(8,8,8)] rounded-xl shadow-2xl p-8 lg:p-12">
        <header class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-[#F5F3B5] mb-4">{{ projectsHeader }}</h2>
          <p class="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            {{ projectsDescription }}
          </p>
        </header>

        <section class="mb-12">
          <h3 class="text-2xl lg:text-3xl font-semibold text-[#33BCE5] mb-4">Overview</h3>
          <p class="text-lg text-gray-300 leading-relaxed">{{ projectsOverview }}</p>
        </section>

        <section class="project-items">
          <GridView :items="gridItems" :columns="3" />
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ProjectGridItem {
  subtitle: string
  header: string
  image?: string
  text: string
  alt: string
  color: string
  fontColor: string
  imagePosition: 'aboveHeader' | 'belowDescription' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'betweenText'
  externalUrl: string
  size?: string
}

// Static text content
const projectsHeader = 'Our Software'
const projectsDescription = 'We are dedicated to providing you with a wide range of open-source software. To support this mission, we also offer some closed-source software. We invite you to explore our projects, which include both open-source and closed-source options. If you\'re interested in contributing or obtaining a license for our closed-source software, please don\'t hesitate to get in touch with us.'
const projectsOverview = 'Here is a list of what we do and what we\'ve done'

const createGridItem = (
  applicationTitle: string,
  headerKey: string,
  descriptionKey: string,
  imagePosition: string,
  imagePath: string,
  externalUrl: string,
  size?: string
): ProjectGridItem => ({
  subtitle: applicationTitle,
  header: headerKey,
  image: imagePath ? `/images/${imagePath}` : undefined,
  text: descriptionKey,
  alt: `${applicationTitle} image`,
  color: '#000000',
  fontColor: '#FFFFFF',
  imagePosition: imagePosition as 'aboveHeader' | 'belowDescription' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'betweenText',
  externalUrl,
  size
})

const gridItems = computed((): ProjectGridItem[] => [
  createGridItem(
    '',
    'SpineTailedKit',
    'SpineTailedKit aims to deliver a streamlined RTC protocol in Swift. Unlike other RTC libraries that are bloated with unnecessary C and C++ code, we focus on providing a modern, safe, and high-performance solution for voice and video applications.',
    'betweenText',
    'SpineTailedKit.png',
    'https://github.com/needletails',
    ''
  ),
  createGridItem(
    'Projects',
    'NeedleTailKit',
    'What is NeedleTailKit? NTK is the core SDK for NeedleTail Client and Server Applications, enabling the creation of beautiful end-to-end encrypted applications. It can be used for various applications beyond messaging. Interested? Contact us to learn more!',
    'betweenText',
    'NeedleTailKit.png',
    'https://github.com/needletails',
    ''
  ),
  createGridItem(
    'Projects',
    'White Tipped Sockets',
    'WhiteTippedSockets is a native WebSocket library for iOS and macOS, built on the Network.framework API using Swift Concurrency. Our goal is to provide a modern, efficient solution for WebSocket communication, and we also plan to develop a fully functional, scalable server in the future.',
    'betweenText',
    'WhiteTipped.png',
    'https://github.com/needletails/white-tipped-sockets',
    ''
  ),
  createGridItem(
    'Projects',
    'Swift HLS',
    'HTTP Live Streaming (HLS) is a key technology for efficient media streaming, and SwiftHLS is designed to facilitate this. Utilizing the same protocol that powers the web, HLS allows content delivery via REST APIs and CDNs. Its purpose is to provide reliability and dynamically adapts to network conditions.',
    'betweenText',
    'HLSLogo.png',
    'https://github.com/needletails/swift-hls',
    '80%'
  ),
  createGridItem(
    'Projects',
    'Swift Stomp',
    'SwiftSTOMP (Simple Text Oriented Messaging) is a transport protocol designed for networking technologies, built with Swift Concurrency. Unlike typical transport protocols that require customization, our goal is to provide a flexible and easy-to-use STOMP protocol that leverages the power of Swift Concurrency.',
    'betweenText',
    'Stomp.png',
    'https://github.com/needletails/swift-stomp',
    '80%'
  ),
  createGridItem(
    'Projects',
    'IAP Entitlement Engine',
    'Everyone deserves to get paid for their hard work. With a top-tier app, IAP Entitlement Engine helps you to achieve that. Designed for deployment on a Vapor server or any SwiftNIO based server, it addresses needed aspects of the in-app purchase flow.',
    'betweenText',
    'IAPLogo.png',
    'https://github.com/needletails/iap-entitlement-engine',
    '80%'
  ),
])
</script>

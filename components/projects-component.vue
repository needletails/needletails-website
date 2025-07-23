<template>
  <section class="bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="bg-[rgb(8,8,8)] rounded-xl shadow-2xl p-6 sm:p-8 lg:p-12">
        <header class="text-center mb-8 sm:mb-12">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F3B5] mb-4">{{ projectsHeader }}</h2>
          <p class="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            {{ projectsDescription }}
          </p>
        </header>

        <section class="mb-8 sm:mb-12">
          <h3 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#33BCE5] mb-4">{{ t('overview') }}</h3>
          <p class="text-base sm:text-lg text-gray-300 leading-relaxed">{{ projectsOverview }}</p>
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

const { t } = useI18n()

// Use i18n translations
const projectsHeader = t('projectsHeader')
const projectsDescription = t('projectsDescription')
const projectsOverview = t('projectsOverview')

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
    t('spineTailedKitTitle'),
    t('spineTailedKitDescription'),
    'betweenText',
    'spinetailed_kit.svg',
    'https://github.com/needletails',
    ''
  ),
  createGridItem(
    t('projectTitle_1'),
    t('needleTailKitTitle'),
    t('needleTailKitDescription'),
    'betweenText',
    'needletail_kit.svg',
    'https://github.com/needletails',
    ''
  ),
  createGridItem(
    '',
    t('needleTailIRCTitle'),
    t('needleTailIRCDescription'),
    'betweenText',
    'needletail_irc.svg',
    'https://github.com/needletails/needletail-irc',
    ''
  ),
  createGridItem(
    '',
    t('connectionManagerKitTitle'),
    t('connectionManagerKitDescription'),
    'betweenText',
    'connection_manager_kit.svg',
    'https://github.com/needletails/connection-manager-kit',
    ''
  ),
  createGridItem(
    '',
    t('postQuantumSolaceTitle'),
    t('postQuantumSolaceDescription'),
    'betweenText',
    'post_quantum_solace.svg',
    'https://github.com/needletails/post-quantum-solace',
    ''
  ),
  createGridItem(
    t('projectTitle_3'),
    t('whiteTippedSocketsTitle'),
    t('whiteTippedSocketsDescription'),
    'betweenText',
    'whitetipped_sockets.svg',
    'https://github.com/needletails/white-tipped-sockets',
    ''
  ),
  createGridItem(
    t('projectTitle_5'),
    t('swiftHlsTitle'),
    t('swiftHlsDescription'),
    'betweenText',
    'swift_hls.svg',
    'https://github.com/needletails/swift-hls',
    ''
  ),
  createGridItem(
    t('projectTitle_2'),
    t('swiftIapTitle'),
    t('swiftIapDescription'),
    'betweenText',
    'iap_engine.svg',
    'https://github.com/needletails/iap-entitlement-engine',
    ''
  ),
  createGridItem(
    t('projectTitle_4'),
    t('stompTitle'),
    t('stompDescription'),
    'betweenText',
    'swift_stomp.svg',
    'https://github.com/needletails/swift-stomp',
    ''
  )
])
</script>

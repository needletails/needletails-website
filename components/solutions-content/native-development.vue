<template>
  <section class="bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="bg-black rounded-xl shadow-2xl p-6 sm:p-8 lg:p-12">
        <header class="text-center mb-8 sm:mb-12">
          <div class="flex justify-center mb-4 sm:mb-6">
            <svg-icon :width="60" :height="60" class="sm:w-[75px] sm:h-[75px]" name="nativeApps" />
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F3B5] mb-4">{{ t('nativeAppDevelopmentHeader') }}</h2>
          <p class="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            {{ t('nativeAppDevelopmentDescription') }}
          </p>
        </header>

        <section class="mb-8 sm:mb-12">
          <h3 class="inline-block text-xl sm:text-2xl lg:text-3xl font-semibold text-[#33BCE5] mb-4 border-b-2 border-[#33BCE5] pb-2">{{ t('overview') }}</h3>
          <p class="text-base sm:text-lg text-gray-300 leading-relaxed">{{ t('nativeAppDevelopmentOverview') }}</p>
        </section>

        <section class="key-areas">
          <h3 class="inline-block text-xl sm:text-2xl lg:text-3xl font-semibold text-[#33BCE5] mb-4 border-b-2 border-[#33BCE5] pb-2">{{ t('pointsForConsideration') }}</h3>
          <GridView :items="gridItems" :columns="2" />
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SvgIcon from '../controls/svg-icon.vue'

const { t } = useI18n()

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
  createGridItem('', t('designConsistency'), t('designConsistencyDescription'), '', '', ''),
  createGridItem('', t('deviceFragmentation'), t('deviceFragmentationDescription'), '', '', ''),
  createGridItem('', t('performanceOptimization'), t('performanceOptimizationDescription'), '', '', ''),
  createGridItem('', t('userExperienceUX'), t('userExperienceUXDescription'), '', '', ''),
  createGridItem('', t('securityPractices'), t('securityPracticesDescription'), '', '', ''),
  createGridItem('', t('distributionCompliance'), t('distributionComplianceDescription'), '', '', ''),
])
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
      <header class="text-center py-12 px-6 sm:px-8 border-b border-gray-700/50">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          {{ consultingTitle }}
        </h1>
        <p class="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {{ consultingOverview }}
        </p>
      </header>

      <div class="p-6 sm:p-8 space-y-8">
        <section class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-blue-500">
          <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">{{ t('consultWithUs') }}</h2>
          <p class="text-gray-300 leading-relaxed">
            {{ consultingWithUsMessage }}
          </p>
        </section>

        <section class="space-y-6">
          <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-6">{{ t('whatToConsultAbout') }}</h2>
          <GridView :items="consultingData" :columns="2" />
        </section>
      </div>
    </div>

    <!-- Contact Button -->
    <div class="text-center pt-8">
      <button 
        @click="handleGetInTouch"
        class="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
      >
        <span class="flex items-center justify-center">
          {{ getInTouch }}
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import GridView from '../grid-view.vue';

const { t } = useI18n()

// Use i18n translations
const consultingTitle = t('consultingTitle');
const consultingOverview = t('consultingOverview');
const consultingWithUsMessage = t('consultingWithUsMessage');
const getInTouch = t('getInTouch');

const createGridItem = (
  applicationTitle: string,
  headerKey: string,
  descriptionKey: string,
  imagePosition: 'aboveHeader' | 'belowDescription' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'betweenText',
  imagePath: string,
  externalUrl: string
) => ({
  subtitle: applicationTitle,
  header: headerKey,
  image: imagePath ? `/images/${imagePath}` : undefined,
  text: descriptionKey,
  alt: `${applicationTitle} image`,
  color: '#000000',
  fontColor: '#FFFFFF',
  imagePosition,
  externalUrl,
});

const consultingData = computed(() => [
  createGridItem(
    '',
    t('architectureDesign'),
    t('architectureDesignDescription'),
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    t('technologySelection'),
    t('technologySelectionDescription'),
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    t('performanceOptimization'),
    t('performanceOptimizationDescription'),
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    t('securityReview'),
    t('securityReviewDescription'),
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    t('codeReview'),
    t('codeReviewDescription'),
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    t('bestPractices'),
    t('bestPracticesDescription'),
    'center',
    '',
    ''
  ),
]);

const handleGetInTouch = () => {
  const mailto_link =
    'mailto:' +
    'support@needletails.com' +
    '?subject=' +
    'Project Inquiry' +
    '&body=' +
    '';
  window.location.href = mailto_link;
};
</script>

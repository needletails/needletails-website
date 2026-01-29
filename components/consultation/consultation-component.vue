<template>
  <div class="max-w-5xl mx-auto">
    <!-- Page intro -->
    <header class="text-center mb-16 sm:mb-20">
      <p class="text-sm font-medium tracking-wider text-blue-400/90 uppercase mb-3">{{ t('consultationPageLabel') }}</p>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 max-w-3xl mx-auto">
        {{ consultingTitle }}
      </h1>
      <p class="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
        {{ consultingOverview }}
      </p>
    </header>

    <article class="rounded-2xl border border-gray-700/60 bg-gray-900/50 overflow-hidden shadow-xl">
      <!-- Discuss your initiative -->
      <section class="px-6 sm:px-10 py-8 sm:py-10 rounded-t-2xl bg-gray-800/30 border-b border-gray-700/50">
        <h2 class="text-sm font-semibold text-blue-400/90 uppercase tracking-wider mb-4">{{ t('consultWithUs') }}</h2>
        <p class="text-gray-300 leading-relaxed text-lg max-w-3xl">
          {{ consultingWithUsMessage }}
        </p>
      </section>

      <!-- Disciplines grid -->
      <div class="px-6 sm:px-10 py-10 sm:py-12">
        <h2 class="text-sm font-semibold text-blue-400/90 uppercase tracking-wider mb-8">{{ t('whatToConsultAbout') }}</h2>
        <GridView :items="consultingData" :columns="2" />
      </div>
    </article>

    <!-- CTA strip -->
    <div class="mt-16 sm:mt-20 pt-12 border-t border-gray-700/50">
      <div class="text-center">
        <p class="text-gray-400 mb-6">{{ t('consultationCtaLead') }}</p>
        <button
          @click="handleGetInTouch"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
        >
          {{ getInTouch }}
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
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

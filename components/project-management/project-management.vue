<template>
  <div class="max-w-5xl mx-auto">
    <!-- Page intro -->
    <header class="text-center mb-16 sm:mb-20">
      <p class="text-sm font-medium tracking-wider text-blue-400/90 uppercase mb-3">{{ t('managementPageLabel') }}</p>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5 max-w-3xl mx-auto">
        {{ t('managementPageTitle') }}
      </h1>
      <p class="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
        {{ t('managementPageLead') }}
      </p>
    </header>

    <div class="space-y-16 sm:space-y-20">
      <!-- Product Management Section -->
      <article class="rounded-2xl border border-gray-700/60 bg-gray-900/50 overflow-hidden shadow-xl">
        <div class="px-6 sm:px-10 pt-10 sm:pt-12 pb-6">
          <span class="inline-block text-xs font-semibold tracking-wider text-blue-400/80 uppercase mb-4">Product</span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {{ productManagementExpertiseHeader }}
          </h2>
          <p class="text-lg text-gray-400 leading-relaxed max-w-2xl">
            {{ productManagementExpertiseDescription }}
          </p>
        </div>
        <div class="px-6 sm:px-10 pb-10 sm:pb-12 space-y-10">
          <section class="rounded-xl bg-gray-800/40 border border-gray-700/40 p-6 sm:p-8">
            <h3 class="text-sm font-semibold text-blue-400/90 uppercase tracking-wider mb-3">{{ t('overview') }}</h3>
            <p class="text-gray-300 leading-relaxed">{{ productManagementOverview }}</p>
          </section>
          <section>
            <h3 class="text-sm font-semibold text-blue-400/90 uppercase tracking-wider mb-6">{{ t('productManagementPoints') }}</h3>
            <GridView :items="productGridItems" :columns="2" />
          </section>
        </div>
      </article>

      <!-- Project Management Section -->
      <article class="rounded-2xl border border-gray-700/60 bg-gray-900/50 overflow-hidden shadow-xl">
        <div class="px-6 sm:px-10 pt-10 sm:pt-12 pb-6">
          <span class="inline-block text-xs font-semibold tracking-wider text-blue-400/80 uppercase mb-4">Project</span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {{ projectManagementExpertiseHeader }}
          </h2>
          <p class="text-lg text-gray-400 leading-relaxed max-w-2xl">
            {{ projectManagementExpertiseDescription }}
          </p>
        </div>
        <div class="px-6 sm:px-10 pb-10 sm:pb-12 space-y-10">
          <section class="rounded-xl bg-gray-800/40 border border-gray-700/40 p-6 sm:p-8">
            <h3 class="text-sm font-semibold text-blue-400/90 uppercase tracking-wider mb-3">{{ t('overview') }}</h3>
            <p class="text-gray-300 leading-relaxed">{{ projectManagementOverview }}</p>
          </section>
          <section>
            <h3 class="text-sm font-semibold text-blue-400/90 uppercase tracking-wider mb-6">{{ t('projectManagementPoints') }}</h3>
            <GridView :items="projectGridItems" :columns="2" />
          </section>
        </div>
      </article>
    </div>

    <!-- CTA strip -->
    <div class="mt-16 sm:mt-20 pt-12 border-t border-gray-700/50">
      <div class="text-center">
        <p class="text-gray-400 mb-6">{{ t('managementCtaLead') }}</p>
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
const productManagementExpertiseHeader = t('productManagementExpertiseHeader');
const productManagementExpertiseDescription = t('productManagementExpertiseDescription');
const productManagementOverview = t('productManagementOverview');

const projectManagementExpertiseHeader = t('projectManagementExpertiseHeader');
const projectManagementExpertiseDescription = t('projectManagementExpertiseDescription');
const projectManagementOverview = t('projectManagementOverview');
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

const productGridItems = computed(() => [
  createGridItem('', t('requirementsGathering'), t('requirementsGatheringDescription'), 'center', '', ''),
  createGridItem('', t('marketResearch'), t('marketResearchDescription'), 'center', '', ''),
  createGridItem('', t('userExperienceDesign'), t('userExperienceDesignDescription'), 'center', '', ''),
  createGridItem('', t('productStrategy'), t('productStrategyDescription'), 'center', '', ''),
  createGridItem('', t('featurePrioritization'), t('featurePrioritizationDescription'), 'center', '', ''),
  createGridItem('', t('stakeholderManagement'), t('stakeholderManagementDescription'), 'center', '', ''),
]);

const projectGridItems = computed(() => [
  createGridItem('', t('projectPlanning'), t('projectPlanningDescription'), 'center', '', ''),
  createGridItem('', t('resourceManagement'), t('resourceManagementDescription'), 'center', '', ''),
  createGridItem('', t('riskManagement'), t('riskManagementDescription'), 'center', '', ''),
  createGridItem('', t('qualityAssurance'), t('qualityAssuranceDescription'), 'center', '', ''),
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

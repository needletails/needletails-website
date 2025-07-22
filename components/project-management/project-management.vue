<template>
  <div class="max-w-4xl mx-auto space-y-12">
    <!-- Product Management Section -->
    <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
      <header class="text-center py-12 px-6 sm:px-8 border-b border-gray-700/50">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          {{ productManagementExpertiseHeader }}
        </h1>
        <p class="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {{ productManagementExpertiseDescription }}
        </p>
      </header>

      <div class="p-6 sm:p-8 space-y-8">
        <section class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-blue-500">
          <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">{{ t('overview') }}</h2>
          <p class="text-gray-300 leading-relaxed">{{ productManagementOverview }}</p>
        </section>

        <section class="space-y-6">
          <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-6">{{ t('productManagementPoints') }}</h2>
          <GridView :items="productGridItems" :columns="2" />
        </section>
      </div>
    </div>

    <!-- Project Management Section -->
    <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
      <header class="text-center py-12 px-6 sm:px-8 border-b border-gray-700/50">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
          {{ projectManagementExpertiseHeader }}
        </h1>
        <p class="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          {{ projectManagementExpertiseDescription }}
        </p>
      </header>

      <div class="p-6 sm:p-8 space-y-8">
        <section class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-blue-500">
          <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">{{ t('overview') }}</h2>
          <p class="text-gray-300 leading-relaxed">{{ projectManagementOverview }}</p>
        </section>

        <section class="space-y-6">
          <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-6">{{ t('projectManagementPoints') }}</h2>
          <GridView :items="projectGridItems" :columns="2" />
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

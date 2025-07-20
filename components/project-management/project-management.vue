<template>
  <div class="consulting-solutions">
    <header class="header">
      <h1>{{ productManagementExpertiseHeader }}</h1>
      <p class="description">
        {{ productManagementExpertiseDescription }}
      </p>
    </header>

    <section class="overview">
      <h2>Overview</h2>
      <p>{{ productManagementOverview }}</p>
    </section>

    <section class="key-competencies">
      <h2>Product Management Points of Consideration</h2>
      <GridView :items="productGridItems" :columns="2" />
    </section>

    <header class="header">
      <h1>{{ projectManagementExpertiseHeader }}</h1>
      <p class="description">
        {{ projectManagementExpertiseDescription }}
      </p>
    </header>

    <section class="overview">
      <h2>Overview</h2>
      <p>{{ projectManagementOverview }}</p>
    </section>

    <section class="key-competencies">
      <h2>Project Management Points of Consideration</h2>
      <GridView :items="projectGridItems" :columns="2" />
    </section>
    <button class="contact-button" @click="handleGetInTouch">
      {{ getInTouch }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import GridView from '../grid-view.vue';

// Static text instead of i18n
const productManagementExpertiseHeader = 'Product Management Expertise';
const productManagementExpertiseDescription = 'Comprehensive product management solutions';
const productManagementOverview = 'Expert product management services to help you succeed';

const projectManagementExpertiseHeader = 'Project Management Expertise';
const projectManagementExpertiseDescription = 'Professional project management solutions';
const projectManagementOverview = 'Comprehensive project management services';
const getInTouch = 'Get In Touch';

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
  createGridItem('', 'Requirements Gathering', 'Define and document project requirements', 'center', '', ''),
  createGridItem('', 'Market Research', 'Conduct thorough market analysis', 'center', '', ''),
  createGridItem('', 'User Experience Design', 'Design intuitive user experiences', 'center', '', ''),
  createGridItem('', 'Product Strategy', 'Develop comprehensive product strategies', 'center', '', ''),
  createGridItem('', 'Feature Prioritization', 'Prioritize features based on value', 'center', '', ''),
  createGridItem('', 'Stakeholder Management', 'Manage stakeholder relationships', 'center', '', ''),
]);

const projectGridItems = computed(() => [
  createGridItem('', 'Project Planning', 'Create detailed project plans', 'center', '', ''),
  createGridItem('', 'Resource Management', 'Manage project resources effectively', 'center', '', ''),
  createGridItem('', 'Risk Management', 'Identify and mitigate project risks', 'center', '', ''),
  createGridItem('', 'Quality Assurance', 'Ensure project quality standards', 'center', '', ''),
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

<style scoped>
.consulting-solutions {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 200px;
  color: #e0e0e0;
  background-color: #000000;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 2.5em;
  margin: 0;
  color: #F5F3B5;
}

.header .description {
  font-size: 1.2em;
}

.overview {
  margin-bottom: 20px;
}

.overview h2,
.key-competencies h2 {
  display: inline-block;
  font-size: 1.8em;
  color: #33BCE5;
  margin-bottom: 10px;
  border-bottom: 2px solid #33BCE5;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.contact-button {
  display: block;
  margin: 20px auto;
  background-color: #33BCE5;
  color: white;
  font-weight: 600;
  /* Slightly lighter font weight */
  padding: 12px 24px;
  /* Increased padding for a more substantial feel */
  border: none;
  border-radius: 12px;
  /* More rounded corners */
  font-size: 16px;
  /* Increased font size for better readability */
  text-align: center;
  /* Center text */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  /* Subtle shadow for depth */
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;
  /* Added transform transition */
}

.contact-button:hover {
  background-color: #0051a8;
  /* Darker blue on hover */
  transform: translateY(-2px);
  /* Slight lift effect on hover */
}

.contact-button:active {
  transform: translateY(0);
  /* Reset lift effect on click */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  /* Reduce shadow on click */
}

@media screen and (max-width: 767px) {
  .consulting-solutions {
    padding-top: 200px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>

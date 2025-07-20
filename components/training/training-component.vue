<template>
  <div class="training-programs">
    <header class="header">
      <h1>{{ trainingProgramsHeader }}</h1>
      <p class="description">
        {{ trainingProgramsDescription }}
      </p>
    </header>

    <section class="overview">
      <h2>Overview</h2>
      <p>{{ trainingOverview }}</p>
    </section>

    <section class="key-competencies">
      <h2>Training Courses</h2>
      <GridView :items="trainingData" :columns="2" />
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
const trainingProgramsHeader = 'Training Programs';
const trainingProgramsDescription = 'Professional development and training solutions';
const trainingOverview = 'Comprehensive training programs to enhance your team\'s skills';
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

const trainingData = computed(() => [
  createGridItem('', 'Vue.js Development', 'Learn modern Vue.js development practices', 'center', '', ''),
  createGridItem('', 'React Development', 'Master React development fundamentals', 'center', '', ''),
  createGridItem('', 'Node.js Backend', 'Build robust backend applications', 'center', '', ''),
  createGridItem('', 'DevOps Practices', 'Implement modern DevOps workflows', 'center', '', ''),
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
.training-programs {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 200px;
  color: #e0e0e0;
  /* Light text color for dark mode */
  background-color: #000000;
  /* Dark background color */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.header {
  text-align: center;
  margin-bottom: 20px;
  /* Reduced margin to avoid overlap */
}

.header h1 {
  font-size: 2.5em;
  margin: 0;
  color: #F5F3B5;
}

.header .description {
  font-size: 1.2em;
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
  /* Apple blue */
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
    transform 0.2;
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
  .training-programs {
    padding-top: 200px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>

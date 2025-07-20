<template>
  <div class="consulting-solutions">
    <header class="header">
      <h1>{{ consultingTitle }}</h1>
      <p class="description">
        {{ consultingOverview }}
      </p>
    </header>
    <section class="overview">
      <h2>Consult with Us</h2>
      <p>
        {{ consultingWithUsMessage }}
      </p>
    </section>

    <section class="key-competencies">
      <h2>What to Consult About</h2>
      <GridView :items="consultingData" :columns="2" />
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
const consultingTitle = 'Consulting Solutions';
const consultingOverview = 'Expert guidance for your software development projects';
const consultingWithUsMessage = 'Get professional advice on your development needs';
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

const consultingData = computed(() => [
  createGridItem(
    '',
    'Architecture Design',
    'Design scalable and maintainable software architectures',
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    'Technology Selection',
    'Choose the right technologies for your project needs',
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    'Performance Optimization',
    'Optimize your applications for better performance',
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    'Security Review',
    'Ensure your applications are secure and compliant',
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    'Code Review',
    'Get expert feedback on your code quality',
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    'Best Practices',
    'Implement industry best practices in your development',
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    'Team Training',
    'Train your team on modern development practices',
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    'Project Planning',
    'Plan and structure your development projects',
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    'Database Design',
    'Design efficient and scalable database structures',
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    'API Design',
    'Design robust and user-friendly APIs',
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    'Testing Strategy',
    'Implement comprehensive testing strategies',
    'center',
    '',
    ''
  ),
  createGridItem(
    '',
    'Deployment Strategy',
    'Plan and execute deployment strategies',
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

<style scoped>
.consulting-solutions {
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

.overview {
  margin-bottom: 20px;
  /* Space below the overview section */
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

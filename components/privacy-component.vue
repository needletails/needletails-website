<template>
  <div class="privacy-policy">
    <header class="header">
      <h1>{{ privacyPolicyTitle }}</h1>
    </header>

    <section class="overview">
      <h2>Effective Date</h2>
      <p>{{ effectiveDate }}</p>
    </section>

    <section class="introduction">
      <h2>Introduction</h2>
      <p>{{ welcomeMessage }}</p>
      <p>{{ purpose }}</p>
    </section>

    <section class="information-we-do-not-collect">
      <h2>Information We Do Not Collect</h2>
      <p>{{ personalInformation }}</p>
    </section>

    <section class="information-collected">
      <h2>Information Collected by Servers and Technologies</h2>
      <p>{{ informationOverview }}</p>
      <div v-for="(info, index) in informationTypes" :key="index">
        <h3>{{ info.title }}</h3>
        <p>{{ info.description }}</p>
        <ul>
          <li v-for="(detail, idx) in info.details" :key="idx">
            {{ detail }}
          </li>
        </ul>
      </div>
    </section>

    <section class="legal-use">
      <h2>Legal Use</h2>
      <p>{{ legalUseOverview }}</p>
      <p>{{ userResponsibility }}</p>
    </section>

    <section class="limitation-of-liability">
      <h2>Limitation of Liability</h2>
      <p>{{ limitationOverview }}</p>
      <p>{{ userAcknowledgment }}</p>
    </section>

    <section class="changes-to-policy">
      <h2>Changes to This Privacy Policy</h2>
      <p>{{ changesToPolicy }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface InformationType {
  title: string
  description: string
  details: string[]
}

// Static text content
const privacyPolicyTitle = 'Privacy Policy'
const effectiveDate = '10/05/2024'
const welcomeMessage = 'Welcome to NeedleTails.com. Your privacy is important to us.'
const purpose = 'This Privacy Policy outlines our practices regarding the collection of information when you visit our Site.'
const personalInformation = 'We do not collect any personal information from our users.'
const informationOverview = 'While we do not collect personal information, please be aware that servers and other technologies may collect certain information automatically.'
const legalUseOverview = 'By using our Site, you agree to comply with all applicable local laws and regulations.'
const userResponsibility = 'It is your responsibility to ensure that your use of the Site is lawful in your jurisdiction.'
const limitationOverview = 'The author of this website shall not be held liable for any damages or losses arising from your use of the Site.'
const userAcknowledgment = 'By using the Site, you acknowledge that you do so at your own risk and that the author is not responsible for any consequences resulting from your use.'
const changesToPolicy = 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.'

// Information Types
const informationTypes = computed((): InformationType[] => {
  return [
    {
      title: 'Cookies',
      description: 'Cookies may be used to enhance user experience. These may include:',
      details: [
        'Session Cookies: Temporary cookies that expire when you close your browser.',
        'Persistent Cookies: Cookies that remain on your device for a set period or until deleted.',
      ],
    },
    {
      title: 'Analytics',
      description: 'We may use third-party analytics services that collect information about website usage, such as:',
      details: [
        'Page Views',
        'User Interactions',
        'Traffic Sources'
      ],
    },
    {
      title: 'Server Logs',
      description: 'Web servers may log information about your visit, including:',
      details: [
        'IP Address',
        'Browser Type',
        'Operating System',
        'Referring URL',
        'Pages Visited',
        'Time and Date of Access',
      ],
    },
  ]
})
</script>

<style scoped>
.privacy-policy {
  max-width: 800px;
  margin: 0 auto;
  padding-top: 200px;
  color: #e0e0e0; /* Light text color for dark mode */
  background-color: #000000; /* Dark background color */
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
  color: #F5F3B5; /* Adjusted color */
}

.overview,
.introduction,
.information-we-do-not-collect,
.information-collected,
.legal-use,
.limitation-of-liability,
.changes-to-policy {
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8em;
  color: #33BCE5;
  margin-bottom: 10px;
}

h3 {
  color: #34495e;
}

ul {
  margin: 10px 0 20px 20px;
}

.contact-button {
  display: block;
  margin: 20px auto;
  background-color: #33BCE5;
  color: white;
  font-weight: 600; /* Slightly lighter font weight */
  padding: 12px 24px; /* Increased padding for a more substantial feel */
  border: none;
  border-radius: 12px; /* More rounded corners */
  font-size: 16px; /* Increased font size for better readability */
  text-align: center; /* Center text */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s; /* Added transform transition */
}

.contact-button:hover {
  background-color: #0051a8; /* Darker blue on hover */
  transform: translateY(-2px); /* Slight lift effect on hover */
}

.contact-button:active {
  transform: translateY(0); /* Reset lift effect on click */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Reduce shadow on click */
}
</style>

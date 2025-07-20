<template>
  <div class="terms-conditions">
    <header class="header">
      <h1>{{ termsTitle }}</h1>
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

    <section class="user-agreement">
      <h2>User Agreement</h2>
      <p>{{ userAgreement }}</p>
    </section>

    <section class="prohibited-activities">
      <h2>Prohibited Activities</h2>
      <p>{{ prohibitedActivitiesOverview }}</p>
      <ul>
        <li v-for="(activity, index) in prohibitedActivities" :key="index">
          {{ activity }}
        </li>
      </ul>
    </section>

    <section class="limitation-of-liability">
      <h2>Limitation of Liability</h2>
      <p>{{ limitationOverview }}</p>
      <p>{{ userAcknowledgment }}</p>
    </section>

    <section class="changes-to-terms">
      <h2>Changes to These Terms</h2>
      <p>{{ changesToTerms }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Static text content
const termsTitle = 'Terms and Conditions'
const effectiveDate = 'Effective Date: 10/05/2024'
const welcomeMessage = 'Welcome to our Terms and Conditions.'
const purpose = 'These terms govern your use of our services.'
const userAgreement = 'By using our services, you agree to these terms.'
const prohibitedActivitiesOverview = 'The following activities are prohibited:'
const limitationOverview = 'We are not liable for any indirect, incidental, or consequential damages.'
const userAcknowledgment = 'You acknowledge that you use our services at your own risk.'
const changesToTerms = 'We may update these terms from time to time. Please review them regularly.'

// Prohibited Activities
const prohibitedActivities = computed((): string[] => {
  return [
    'Using the service for illegal purposes.',
    'Engaging in any form of harassment or abuse.',
    'Attempting to gain unauthorized access to our systems.',
    'Distributing malicious software or viruses.'
  ]
})
</script>

<style scoped>
.terms-conditions {
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
.user-agreement,
.prohibited-activities,
.limitation-of-liability,
.changes-to-terms {
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8em;
  color: #33BCE5;
  margin-bottom: 10px;
}

ul {
  margin: 10px 0 20px 20px;
}
</style>

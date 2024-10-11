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

<script>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  setup() {
    const { t } = useI18n();

    // Translations
    const privacyPolicyTitle = t('privacyPolicy.title');
    const effectiveDate = t('privacyPolicy.effectiveDate');
    const welcomeMessage = t('privacyPolicy.introduction.welcomeMessage');
    const purpose = t('privacyPolicy.introduction.purpose');
    const personalInformation = t(
      'privacyPolicy.informationWeDoNotCollect.personalInformation'
    );
    const informationOverview = t(
      'privacyPolicy.informationCollectedByServersAndTechnologies.overview'
    );
    const legalUseOverview = t('privacyPolicy.legalUse.overview');
    const userResponsibility = t('privacyPolicy.legalUse.userResponsibility');
    const limitationOverview = t(
      'privacyPolicy.limitationOfLiability.overview'
    );
    const userAcknowledgment = t(
      'privacyPolicy.limitationOfLiability.userAcknowledgment'
    );
    const changesToPolicy = t('privacyPolicy.changesToThisPrivacyPolicy');

    // Information Types
    const informationTypes = computed(() => {
      return [
        {
          title: t(
            'privacyPolicy.informationCollectedByServersAndTechnologies.cookiesTitle'
          ),
          description: t(
            'privacyPolicy.informationCollectedByServersAndTechnologies.cookiesDescription'
          ),
          details: [
            t(
              'privacyPolicy.informationCollectedByServersAndTechnologies.cookiesDetails1'
            ),
            t(
              'privacyPolicy.informationCollectedByServersAndTechnologies.cookiesDetails2'
            ),
          ],
        },
        {
          title: t(
            'privacyPolicy.informationCollectedByServersAndTechnologies.analyticsTitle'
          ),
          description: t(
            'privacyPolicy.informationCollectedByServersAndTechnologies.analyticsDescription'
          ),
          details: [
            t(
              'privacyPolicy.informationCollectedByServersAndTechnologies.analyticsDetails1'
            ),
            t(
              'privacyPolicy.informationCollectedByServersAndTechnologies.analyticsDetails2'
            ),
            t(
              'privacyPolicy.informationCollectedByServersAndTechnologies.analyticsDetails3'
            ),
          ],
        },
        {
          title: t(
            'privacyPolicy.informationCollectedByServersAndTechnologies.serverLogsTitle'
          ),
          description: t(
            'privacyPolicy.informationCollectedByServersAndTechnologies.serverLogsDescription'
          ),
          details: [
            t(
              'privacyPolicy.informationCollectedByServersAndTechnologies.serverDetail1'
            ),
            t(
              'privacyPolicy.informationCollectedByServersAndTechnologies.serverDetail2'
            ),
            t(
              'privacyPolicy.informationCollectedByServersAndTechnologies.serverDetail3'
            ),
            t(
              'privacyPolicy.informationCollectedByServersAndTechnologies.serverDetail4'
            ),
            t(
              'privacyPolicy.informationCollectedByServersAndTechnologies.serverDetail5'
            ),
            t(
              'privacyPolicy.informationCollectedByServersAndTechnologies.serverDetail6'
            ),
          ],
        },
      ];
    });

    return {
      privacyPolicyTitle,
      effectiveDate,
      welcomeMessage,
      purpose,
      personalInformation,
      informationOverview,
      informationTypes,
      legalUseOverview,
      userResponsibility,
      limitationOverview,
      userAcknowledgment,
      changesToPolicy,
    };
  },
};
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

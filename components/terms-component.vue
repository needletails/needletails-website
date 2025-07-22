<template>
  <div class="min-h-screen bg-black">
    <Header />
    
    <main class="pt-20 lg:pt-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
          <!-- Header -->
          <header class="text-center py-12 px-6 sm:px-8 border-b border-gray-700/50">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {{ termsTitle }}
            </h1>
          </header>

          <!-- Content -->
          <div class="p-6 sm:p-8 space-y-8">
            <!-- Effective Date -->
            <section class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-blue-500">
              <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">{{ t('effectiveDate') }}</h2>
              <p class="text-gray-300 leading-relaxed">{{ effectiveDate }}</p>
            </section>

            <!-- Introduction -->
            <section class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-blue-500">
              <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">{{ t('introduction') }}</h2>
              <p class="text-gray-300 leading-relaxed mb-4">{{ welcomeMessage }}</p>
              <p class="text-gray-300 leading-relaxed">{{ purpose }}</p>
            </section>

            <!-- User Agreement -->
            <section class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-blue-500">
              <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">{{ t('userAgreement') }}</h2>
              <p class="text-gray-300 leading-relaxed">{{ userAgreement }}</p>
            </section>

            <!-- Prohibited Activities -->
            <section class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-blue-500">
              <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">{{ t('prohibitedActivities') }}</h2>
              <p class="text-gray-300 leading-relaxed mb-4">{{ prohibitedActivitiesOverview }}</p>
              <ul class="space-y-3 ml-4">
                <li v-for="(activity, index) in prohibitedActivities" :key="index" 
                    class="text-gray-300 leading-relaxed flex items-start">
                  <span class="text-red-400 font-bold mr-2 mt-1">•</span>
                  <span>{{ activity }}</span>
                </li>
              </ul>
            </section>

            <!-- Limitation of Liability -->
            <section class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-blue-500">
              <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">{{ t('limitationOfLiability') }}</h2>
              <p class="text-gray-300 leading-relaxed mb-4">{{ limitationOverview }}</p>
              <p class="text-gray-300 leading-relaxed">{{ userAcknowledgment }}</p>
            </section>

            <!-- Changes to Terms -->
            <section class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-blue-500">
              <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">{{ t('changesToTerms') }}</h2>
              <p class="text-gray-300 leading-relaxed">{{ changesToTerms }}</p>
            </section>
          </div>
        </div>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Header from './base/header.vue'
import Footer from './base/footer.vue'

const { t } = useI18n()

// Use i18n translations
const termsTitle = t('termsTitle')
const effectiveDate = t('termsEffectiveDate')
const welcomeMessage = t('termsWelcomeMessage')
const purpose = t('termsPurpose')
const userAgreement = t('userAgreementText')
const prohibitedActivitiesOverview = t('prohibitedActivitiesOverview')
const limitationOverview = t('termsLimitationOverview')
const userAcknowledgment = t('termsUserAcknowledgment')
const changesToTerms = t('termsChangesToTerms')

// Prohibited Activities
const prohibitedActivities = computed((): string[] => {
  return [
    t('usingServiceForIllegalPurposes'),
    t('engagingInHarassment'),
    t('unauthorizedAccess'),
    t('distributingMalware')
  ]
})
</script>

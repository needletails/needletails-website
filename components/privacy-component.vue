<template>
  <div class="min-h-screen bg-black">
    <Header />
    
    <main class="pt-20 lg:pt-24">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700/50 overflow-hidden">
          <!-- Header -->
          <header class="text-center py-12 px-6 sm:px-8 border-b border-gray-700/50">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {{ privacyPolicyTitle }}
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

            <!-- Information We Do Not Collect -->
            <section class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-blue-500">
              <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">{{ t('informationWeDoNotCollect') }}</h2>
              <p class="text-gray-300 leading-relaxed">{{ personalInformation }}</p>
            </section>

            <!-- Information Collected -->
            <section class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-blue-500">
              <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">{{ t('informationCollectedByServers') }}</h2>
              <p class="text-gray-300 leading-relaxed mb-6">{{ informationOverview }}</p>
              
              <div class="space-y-6">
                <div v-for="(info, index) in informationTypes" :key="index" 
                     class="bg-gray-700/20 rounded-lg p-4 sm:p-6 border-l-3 border-blue-400/70">
                  <h3 class="text-lg sm:text-xl font-semibold text-blue-400 mb-3">{{ info.title }}</h3>
                  <p class="text-gray-300 leading-relaxed mb-4">{{ info.description }}</p>
                  <ul class="space-y-2 ml-4">
                    <li v-for="(detail, idx) in info.details" :key="idx" 
                        class="text-gray-300 leading-relaxed flex items-start">
                      <span class="text-blue-400 font-bold mr-2 mt-1">•</span>
                      <span>{{ detail }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <!-- Legal Use -->
            <section class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-blue-500">
              <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">{{ t('legalUse') }}</h2>
              <p class="text-gray-300 leading-relaxed mb-4">{{ legalUseOverview }}</p>
              <p class="text-gray-300 leading-relaxed">{{ userResponsibility }}</p>
            </section>

            <!-- Limitation of Liability -->
            <section class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-blue-500">
              <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">{{ t('limitationOfLiability') }}</h2>
              <p class="text-gray-300 leading-relaxed mb-4">{{ limitationOverview }}</p>
              <p class="text-gray-300 leading-relaxed">{{ userAcknowledgment }}</p>
            </section>

            <!-- Changes to Policy -->
            <section class="bg-gray-800/30 rounded-xl p-6 border-l-4 border-blue-500">
              <h2 class="text-xl sm:text-2xl font-semibold text-blue-400 mb-4">{{ t('changesToPolicy') }}</h2>
              <p class="text-gray-300 leading-relaxed">{{ changesToPolicy }}</p>
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

interface InformationType {
  title: string
  description: string
  details: string[]
}

const { t } = useI18n()

// Use i18n translations
const privacyPolicyTitle = t('privacyPolicyTitle')
const effectiveDate = t('effectiveDateValue')
const welcomeMessage = t('privacyWelcomeMessage')
const purpose = t('privacyPurpose')
const personalInformation = t('personalInformation')
const informationOverview = t('informationOverview')
const legalUseOverview = t('legalUseOverview')
const userResponsibility = t('userResponsibility')
const limitationOverview = t('privacyLimitationOverview')
const userAcknowledgment = t('privacyUserAcknowledgment')
const changesToPolicy = t('privacyChangesToPolicy')

// Information Types
const informationTypes = computed((): InformationType[] => {
  return [
    {
      title: t('cookies'),
      description: t('cookiesDescription'),
      details: [
        t('sessionCookies'),
        t('persistentCookies'),
      ],
    },
    {
      title: t('analytics'),
      description: t('analyticsDescription'),
      details: [
        t('pageViews'),
        t('userInteractions'),
        t('trafficSources')
      ],
    },
    {
      title: t('serverLogs'),
      description: t('serverLogsDescription'),
      details: [
        t('ipAddress'),
        t('browserType'),
        t('operatingSystem'),
        t('referringUrl'),
        t('pagesVisited'),
        t('timeAndDateOfAccess'),
      ],
    },
  ]
})
</script>

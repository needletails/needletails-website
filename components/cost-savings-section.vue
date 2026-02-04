<template>
  <section class="relative bg-black py-12 sm:py-16" data-section="cost-savings">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-10 sm:mb-12">
        <div
          v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
          class="space-y-4"
        >
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-green-600/10 border border-green-500/20 text-green-400 text-sm font-medium">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {{ t('costSavingsBadge') }}
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
            {{ t('costSavingsHeadline') }}
          </h2>
          <p class="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {{ t('costSavingsIntro') }}
          </p>
          <p class="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {{ t('costSavingsWhyItMatters') }}
          </p>
        </div>
      </div>

      <!-- Comparison -->
      <div
        v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
        class="space-y-6"
      >
        <p class="text-sm font-medium text-blue-400/90 text-center">{{ t('costSavingsSubhead') }}</p>
        <p class="text-sm text-gray-400 text-center max-w-2xl mx-auto">
          {{ t('costSavingsTableHowToRead') }}
        </p>

        <!-- Desktop: table -->
        <div class="hidden md:block overflow-x-auto overflow-y-hidden rounded-xl border border-gray-700/60 bg-gray-900/50 min-w-0">
          <table class="cost-savings-table w-full text-left min-w-[640px] border-collapse">
            <thead>
              <tr class="border-b border-gray-700/60">
                <th class="px-4 py-4 sm:px-6 sm:py-4 text-sm font-semibold text-blue-400/90 uppercase tracking-wider">{{ t('costSavingsColRuntime') }}</th>
                <th class="px-4 py-4 sm:px-6 sm:py-4 text-sm font-semibold text-blue-400/90 uppercase tracking-wider">
                  <span class="block">{{ t('costSavingsColMemory') }}</span>
                  <span class="block font-normal normal-case text-gray-400 text-xs mt-0.5">{{ t('costSavingsColMemoryHelp') }}</span>
                </th>
                <th class="px-4 py-4 sm:px-6 sm:py-4 text-sm font-semibold text-blue-400/90 uppercase tracking-wider">
                  <span class="block">{{ t('costSavingsColThroughput') }}</span>
                  <span class="block font-normal normal-case text-gray-400 text-xs mt-0.5">{{ t('costSavingsColThroughputHelp') }}</span>
                </th>
                <th class="px-4 py-4 sm:px-6 sm:py-4 text-sm font-semibold text-blue-400/90 uppercase tracking-wider">{{ t('costSavingsColMonthlyCost') }}</th>
              </tr>
            </thead>
            <tbody class="text-gray-300">
              <tr class="border-b border-gray-700/40 bg-green-900/10">
                <td class="px-4 py-4 sm:px-6 sm:py-4 font-medium text-white">{{ t('costSavingsSwift') }}</td>
                <td class="px-4 py-4 sm:px-6 sm:py-4">{{ t('costSavingsSwiftMemory') }}</td>
                <td class="px-4 py-4 sm:px-6 sm:py-4">{{ t('costSavingsSwiftThroughput') }}</td>
                <td class="px-4 py-4 sm:px-6 sm:py-4 text-green-400 font-medium">{{ t('costSavingsSwiftCost') }}</td>
              </tr>
              <tr class="border-b border-gray-700/40">
                <td class="px-4 py-4 sm:px-6 sm:py-4 font-medium text-white">{{ t('costSavingsNode') }}</td>
                <td class="px-4 py-4 sm:px-6 sm:py-4">{{ t('costSavingsNodeMemory') }}</td>
                <td class="px-4 py-4 sm:px-6 sm:py-4">{{ t('costSavingsNodeThroughput') }}</td>
                <td class="px-4 py-4 sm:px-6 sm:py-4">{{ t('costSavingsNodeCost') }}</td>
              </tr>
              <tr class="border-b border-gray-700/40">
                <td class="px-4 py-4 sm:px-6 sm:py-4 font-medium text-white">{{ t('costSavingsPython') }}</td>
                <td class="px-4 py-4 sm:px-6 sm:py-4">{{ t('costSavingsPythonMemory') }}</td>
                <td class="px-4 py-4 sm:px-6 sm:py-4">{{ t('costSavingsPythonThroughput') }}</td>
                <td class="px-4 py-4 sm:px-6 sm:py-4">{{ t('costSavingsPythonCost') }}</td>
              </tr>
              <tr class="border-b-0">
                <td class="px-4 py-4 sm:px-6 sm:py-4 font-medium text-white rounded-b-xl">{{ t('costSavingsJava') }}</td>
                <td class="px-4 py-4 sm:px-6 sm:py-4 rounded-b-xl">{{ t('costSavingsJavaMemory') }}</td>
                <td class="px-4 py-4 sm:px-6 sm:py-4 rounded-b-xl">{{ t('costSavingsJavaThroughput') }}</td>
                <td class="px-4 py-4 sm:px-6 sm:py-4 rounded-b-xl">{{ t('costSavingsJavaCost') }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile: cards -->
        <div class="md:hidden space-y-4">
          <div class="cost-savings-tile rounded-xl border border-green-500/30 bg-green-900/10 p-4">
            <div class="font-semibold text-white mb-2">{{ t('costSavingsSwift') }}</div>
            <div class="text-sm text-gray-300 space-y-1">
              <div>{{ t('costSavingsColMemory') }}: {{ t('costSavingsSwiftMemory') }}</div>
              <div>{{ t('costSavingsColThroughput') }}: {{ t('costSavingsSwiftThroughput') }}</div>
              <div class="text-green-400 font-medium">{{ t('costSavingsColMonthlyCost') }}: {{ t('costSavingsSwiftCost') }}</div>
            </div>
          </div>
          <div class="cost-savings-tile rounded-xl border border-gray-700/60 bg-gray-900/50 p-4">
            <div class="font-semibold text-white mb-2">{{ t('costSavingsNode') }}</div>
            <div class="text-sm text-gray-300 space-y-1">
              <div>{{ t('costSavingsColMemory') }}: {{ t('costSavingsNodeMemory') }}</div>
              <div>{{ t('costSavingsColThroughput') }}: {{ t('costSavingsNodeThroughput') }}</div>
              <div>{{ t('costSavingsColMonthlyCost') }}: {{ t('costSavingsNodeCost') }}</div>
            </div>
          </div>
          <div class="cost-savings-tile rounded-xl border border-gray-700/60 bg-gray-900/50 p-4">
            <div class="font-semibold text-white mb-2">{{ t('costSavingsPython') }}</div>
            <div class="text-sm text-gray-300 space-y-1">
              <div>{{ t('costSavingsColMemory') }}: {{ t('costSavingsPythonMemory') }}</div>
              <div>{{ t('costSavingsColThroughput') }}: {{ t('costSavingsPythonThroughput') }}</div>
              <div>{{ t('costSavingsColMonthlyCost') }}: {{ t('costSavingsPythonCost') }}</div>
            </div>
          </div>
          <div class="cost-savings-tile rounded-xl border border-gray-700/60 bg-gray-900/50 p-4">
            <div class="font-semibold text-white mb-2">{{ t('costSavingsJava') }}</div>
            <div class="text-sm text-gray-300 space-y-1">
              <div>{{ t('costSavingsColMemory') }}: {{ t('costSavingsJavaMemory') }}</div>
              <div>{{ t('costSavingsColThroughput') }}: {{ t('costSavingsJavaThroughput') }}</div>
              <div>{{ t('costSavingsColMonthlyCost') }}: {{ t('costSavingsJavaCost') }}</div>
            </div>
          </div>
        </div>

        <!-- Production workloads -->
        <div class="pt-10 sm:pt-14 border-t border-gray-700/50 mt-10 sm:mt-14">
          <h3 class="text-xl sm:text-2xl font-bold text-white text-center mb-2">
            {{ t('costSavingsProductionHeadline') }}
          </h3>
          <p class="text-sm sm:text-base text-gray-400 text-center max-w-3xl mx-auto mb-8">
            {{ t('costSavingsProductionIntro') }}
          </p>

          <!-- Desktop: production table -->
          <div class="hidden md:block overflow-x-auto overflow-y-hidden rounded-xl border border-gray-700/60 bg-gray-900/50 min-w-0">
            <table class="cost-savings-table w-full text-left min-w-[640px] border-collapse">
              <thead>
                <tr class="border-b border-gray-700/60">
                  <th class="px-4 py-4 sm:px-6 sm:py-4 text-sm font-semibold text-blue-400/90 uppercase tracking-wider w-1/4">{{ t('costSavingsProductionColWorkload') }}</th>
                  <th class="px-4 py-4 sm:px-6 sm:py-4 text-sm font-semibold text-blue-400/90 uppercase tracking-wider">{{ t('costSavingsProductionColNeeds') }}</th>
                  <th class="px-4 py-4 sm:px-6 sm:py-4 text-sm font-semibold text-blue-400/90 uppercase tracking-wider w-1/3">{{ t('costSavingsProductionColWhy') }}</th>
                </tr>
              </thead>
              <tbody class="text-gray-300">
                <tr class="border-b border-gray-700/40">
                  <td class="px-4 py-4 sm:px-6 sm:py-4 font-medium text-white">{{ t('costSavingsProductionEnterprise') }}</td>
                  <td class="px-4 py-4 sm:px-6 sm:py-4">{{ t('costSavingsProductionEnterpriseNeeds') }}</td>
                  <td class="px-4 py-4 sm:px-6 sm:py-4">{{ t('costSavingsProductionEnterpriseWhy') }}</td>
                </tr>
                <tr class="border-b border-gray-700/40">
                  <td class="px-4 py-4 sm:px-6 sm:py-4 font-medium text-white">{{ t('costSavingsProductionMessaging') }}</td>
                  <td class="px-4 py-4 sm:px-6 sm:py-4">{{ t('costSavingsProductionMessagingNeeds') }}</td>
                  <td class="px-4 py-4 sm:px-6 sm:py-4">{{ t('costSavingsProductionMessagingWhy') }}</td>
                </tr>
                <tr class="border-b border-gray-700/40">
                  <td class="px-4 py-4 sm:px-6 sm:py-4 font-medium text-white">{{ t('costSavingsProductionVideo') }}</td>
                  <td class="px-4 py-4 sm:px-6 sm:py-4">{{ t('costSavingsProductionVideoNeeds') }}</td>
                  <td class="px-4 py-4 sm:px-6 sm:py-4">{{ t('costSavingsProductionVideoWhy') }}</td>
                </tr>
                <tr class="border-b-0">
                  <td class="px-4 py-4 sm:px-6 sm:py-4 font-medium text-white rounded-b-xl">{{ t('costSavingsProductionSocial') }}</td>
                  <td class="px-4 py-4 sm:px-6 sm:py-4 rounded-b-xl">{{ t('costSavingsProductionSocialNeeds') }}</td>
                  <td class="px-4 py-4 sm:px-6 sm:py-4 rounded-b-xl">{{ t('costSavingsProductionSocialWhy') }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Mobile: production cards -->
          <div class="md:hidden space-y-4">
            <div class="cost-savings-tile rounded-xl border border-gray-700/60 bg-gray-900/50 p-4">
              <div class="font-semibold text-white mb-2">{{ t('costSavingsProductionEnterprise') }}</div>
              <div class="text-sm text-gray-300 space-y-2">
                <div><span class="text-gray-400">{{ t('costSavingsProductionColNeeds') }}:</span> {{ t('costSavingsProductionEnterpriseNeeds') }}</div>
                <div><span class="text-gray-400">{{ t('costSavingsProductionColWhy') }}:</span> {{ t('costSavingsProductionEnterpriseWhy') }}</div>
              </div>
            </div>
            <div class="cost-savings-tile rounded-xl border border-gray-700/60 bg-gray-900/50 p-4">
              <div class="font-semibold text-white mb-2">{{ t('costSavingsProductionMessaging') }}</div>
              <div class="text-sm text-gray-300 space-y-2">
                <div><span class="text-gray-400">{{ t('costSavingsProductionColNeeds') }}:</span> {{ t('costSavingsProductionMessagingNeeds') }}</div>
                <div><span class="text-gray-400">{{ t('costSavingsProductionColWhy') }}:</span> {{ t('costSavingsProductionMessagingWhy') }}</div>
              </div>
            </div>
            <div class="cost-savings-tile rounded-xl border border-gray-700/60 bg-gray-900/50 p-4">
              <div class="font-semibold text-white mb-2">{{ t('costSavingsProductionVideo') }}</div>
              <div class="text-sm text-gray-300 space-y-2">
                <div><span class="text-gray-400">{{ t('costSavingsProductionColNeeds') }}:</span> {{ t('costSavingsProductionVideoNeeds') }}</div>
                <div><span class="text-gray-400">{{ t('costSavingsProductionColWhy') }}:</span> {{ t('costSavingsProductionVideoWhy') }}</div>
              </div>
            </div>
            <div class="cost-savings-tile rounded-xl border border-gray-700/60 bg-gray-900/50 p-4">
              <div class="font-semibold text-white mb-2">{{ t('costSavingsProductionSocial') }}</div>
              <div class="text-sm text-gray-300 space-y-2">
                <div><span class="text-gray-400">{{ t('costSavingsProductionColNeeds') }}:</span> {{ t('costSavingsProductionSocialNeeds') }}</div>
                <div><span class="text-gray-400">{{ t('costSavingsProductionColWhy') }}:</span> {{ t('costSavingsProductionSocialWhy') }}</div>
              </div>
            </div>
          </div>
        </div>

        <p class="text-sm text-gray-400 text-center max-w-2xl mx-auto pt-10">
          {{ t('costSavingsDisclaimer') }}
        </p>
        <p class="text-base sm:text-lg text-center text-gray-300 font-medium pb-2">
          {{ t('costSavingsCta') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
/* Hover focus-ring effect per row only (desktop table): one ring around the whole row, not per cell */
.cost-savings-table :deep(tr th),
.cost-savings-table :deep(tr td) {
  transition: all 0.3s ease;
}
.cost-savings-table :deep(tr:hover) {
  outline: 2px solid rgb(59 130 246 / 0.5);
  outline-offset: -2px;
}
.cost-savings-table :deep(tr:hover th),
.cost-savings-table :deep(tr:hover td) {
  background-color: rgb(17 24 39 / 0.7);
}

/* Same hover effect on mobile tiles */
.cost-savings-tile {
  transition: all 0.3s ease;
}
.cost-savings-tile:hover {
  border-color: rgb(59 130 246 / 0.5);
  background-color: rgb(17 24 39 / 0.7);
  box-shadow: inset 0 0 0 2px rgb(59 130 246 / 0.5);
}
</style>

<template>
  <main class="pt-20 lg:pt-24 pb-12 min-h-screen">
    <!-- Hero Section -->
    <section class="relative px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.15),transparent_70%)]"></div>
      </div>

      <div class="relative max-w-7xl mx-auto text-center">
        <!-- Logo -->
        <div class="flex justify-center mb-8">
          <div class="inline-flex items-center justify-center rounded-2xl bg-black/70 ring-2 ring-yellow-400/60 shadow-[0_0_30px_rgba(250,204,21,0.4)] px-10 py-8">
            <img
              src="/images/needletail_kit.svg"
              :alt="t('needletailKitLogoAlt')"
              class="h-48 sm:h-56 lg:h-64 w-auto max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        <!-- Title -->
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span class="bg-gradient-to-r from-white via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
            {{ t('needletailKitTitle') }}
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          {{ t('needletailKitSubtitle') }}
        </p>

        <!-- Badge -->
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-yellow-600/10 border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-12">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
          {{ t('needletailKitPrivateBadge') }}
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            class="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border border-yellow-300/60"
          >
            {{ t('needletailKitRequestLicense') }}
          </a>
          <a
            href="#features"
            class="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/50 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 border border-gray-600/50"
          >
            {{ t('needletailKitExploreFeatures') }}
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="relative px-4 sm:px-6 lg:px-8 py-20">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {{ t('needletailKitFeaturesTitle') }}
          </h2>
          <p class="text-lg text-gray-400 max-w-2xl mx-auto">
            {{ t('needletailKitFeaturesDescription') }}
          </p>
        </div>

        <!-- Feature Categories -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <!-- Security Features -->
          <div 
            v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
            class="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10"
          >
            <div class="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-600/30 transition-colors">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ t('needletailKitSecurityTitle') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitSecurityPQ') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitSecurityDoubleRatchet') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitSecurityE2E') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitSecurityDeviceVerification') }}
              </li>
            </ul>
          </div>

          <!-- Platform Support -->
          <div 
            v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
            class="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10"
          >
            <div class="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-600/30 transition-colors">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ t('needletailKitPlatformTitle') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitPlatformIOS') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitPlatformMacOS') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitPlatformAndroid') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitPlatformSwift6') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitPlatformAsync') }}
              </li>
            </ul>
          </div>

          <!-- Transport -->
          <div 
            v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
            class="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10"
          >
            <div class="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-600/30 transition-colors">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ t('needletailKitTransportTitle') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitTransportMulti') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitTransportP2P') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitTransportDCC') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitTransportFailover') }}
              </li>
            </ul>
          </div>

          <!-- Messaging -->
          <div 
            v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
            class="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10"
          >
            <div class="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-600/30 transition-colors">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ t('needletailKitMessagingTitle') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitMessagingText') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitMessagingMedia') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitMessagingSelfDestruct') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitMessagingEdit') }}
              </li>
            </ul>
          </div>

          <!-- Voice & Video -->
          <div 
            v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
            class="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10"
          >
            <div class="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-600/30 transition-colors">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ t('needletailKitVoiceVideoTitle') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitVoiceVideoWebRTC') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitVoiceVideoSTUN') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitVoiceVideoCallManagement') }}
              </li>
            </ul>
          </div>

          <!-- Enterprise -->
          <div 
            v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
            class="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/10"
          >
            <div class="w-12 h-12 bg-yellow-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-600/30 transition-colors">
              <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">{{ t('needletailKitEnterpriseTitle') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitEnterpriseProduction') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitEnterpriseSupport') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitEnterpriseCompliance') }}
              </li>
              <li class="flex items-start">
                <svg class="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                {{ t('needletailKitEnterpriseScalability') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="relative px-4 sm:px-6 lg:px-8 py-20">
      <div class="max-w-4xl mx-auto">
        <div 
          v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
          class="bg-gradient-to-br from-gray-900/80 to-black/80 border border-yellow-500/30 rounded-2xl p-8 lg:p-12 shadow-2xl text-center"
        >
          <div class="w-16 h-16 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          
          <h2 class="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {{ t('needletailKitContactTitle') }}
          </h2>
          <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {{ t('needletailKitContactDescription') }}
          </p>

          <a
            href="mailto:support@needletails.com?subject=NeedleTailKit License Inquiry"
            class="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border border-yellow-300/60"
          >
            {{ t('needletailKitContactButton') }}
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()

// SEO Meta Tags
useHead({
  title: t('needletailKitMetaTitle'),
  meta: [
    { name: 'description', content: t('needletailKitMetaDescription') },
    { name: 'keywords', content: t('needletailKitMetaKeywords') },
    { property: 'og:title', content: t('needletailKitMetaTitle') },
    { property: 'og:description', content: t('needletailKitOgDescription') },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://needletails.com/needletail-kit' },
    { property: 'og:image', content: '/images/needletail_kit.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('needletailKitMetaTitle') },
    { name: 'twitter:description', content: t('needletailKitOgDescription') },
    { name: 'twitter:image', content: '/images/needletail_kit.svg' }
  ],
  link: [
    { rel: 'canonical', href: 'https://needletails.com/needletail-kit' }
  ]
})
</script>

<style scoped>
/* Additional styling if needed */
</style>
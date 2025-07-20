<template>
  <footer class="relative bg-[rgb(18,18,18)] min-h-screen">
    <!-- Apple Music Widget - Top Left -->
    <div class="absolute top-8 left-8 z-10">
      <div class="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          frameborder="0"
          height="300"
          class="w-full max-w-[320px] rounded-2xl"
          style="overflow: hidden; border-radius: 16px;"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/playlist/chillhop-radio/pl.0b8321c00f68421f8081e5913de51118"
        ></iframe>
      </div>
    </div>

    <!-- Sponsor Section - Centered -->
    <div class="flex flex-col items-center justify-center min-h-screen px-6">
      <div class="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-24 max-w-4xl">
        <!-- DigitalOcean -->
        <a href="https://m.do.co/c/9186a24b57b1" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center text-center max-w-sm hover:scale-105 transition-transform duration-200">
          <div class="mb-6">
            <img src="/images/doLogo.svg" alt="DigitalOcean" class="w-28 h-28" />
          </div>
          <p class="text-white text-base leading-relaxed">
            Get Started on Digital Ocean with a $100, 60-day credit for new users.
          </p>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/sponsors/needletails" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center text-center max-w-sm hover:scale-105 transition-transform duration-200">
          <div class="mb-6">
            <img src="/images/github-mark-white.svg" alt="GitHub" class="w-24 h-24" />
          </div>
          <h3 class="text-white text-2xl font-semibold mb-4">Become a Sponsor</h3>
        </a>
      </div>
    </div>

    <!-- Footer Text - Bottom -->
    <div class="absolute bottom-8 left-0 right-0 text-center">
      <div class="text-white text-base">
        <NuxtLink to="/privacy" class="hover:text-gray-300 transition-colors duration-200">Privacy Policy</NuxtLink>
        <span class="mx-4">|</span>
        <span>NeedleTails©{{ new Date().getFullYear() }}</span>
        <span class="mx-4">|</span>
        <NuxtLink to="/terms" class="hover:text-gray-300 transition-colors duration-200">Terms and Conditions</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>
 
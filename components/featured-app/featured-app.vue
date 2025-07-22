<template>
  <section class="relative bg-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(51,188,229,0.1),transparent_50%)]"></div>
    </div>

    <div class="relative max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div 
          v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
          class="space-y-6"
        >
          <!-- Badge -->
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-yellow-600/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            {{ t('featuredApplications') }}
          </div>

          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span class="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {{ t('our') }}
            </span>
            <br>
            <span class="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              {{ t('featuredApps') }}
            </span>
          </h2>

          <p class="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {{ t('featuredAppsDescription') }}
          </p>
        </div>
      </div>

      <!-- Carousel Container -->
      <div 
        v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }"
        class="relative"
      >
        <!-- Navigation Dots -->
        <div class="flex justify-center space-x-3 mb-8">
          <button
            v-for="(item, index) in featuredAppData"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            :class="currentIndex === index ? 'bg-blue-500 scale-125' : 'bg-gray-600 hover:bg-gray-500'"
            :aria-label="`Go to slide ${index + 1}`"
          ></button>
        </div>

        <!-- Carousel Content with Fixed Height Container -->
        <div class="relative min-h-[600px] lg:min-h-[700px] flex items-center">
          <!-- Previous Button - Fixed Position -->
          <button
            class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-gray-900/90 hover:bg-gray-800/95 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            :disabled="isFirstItem"
            @click="prevItem"
            aria-label="Previous slide"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>

          <!-- Featured App Content Container -->
          <div class="w-full mx-16 lg:mx-20 relative">
            <!-- Content Wrapper with Smooth Transitions -->
            <div class="relative overflow-hidden rounded-2xl">
              <div class="relative">
                <div
                  class="w-full transition-all duration-400 ease-out"
                  :style="{ 
                    transform: `translateX(-${currentIndex * 100}%)`,
                    opacity: 1
                  }"
                  @click="itemClicked(currentIndex)"
                >
                  <div class="flex">
                    <div 
                      v-for="(item, index) in featuredAppData" 
                      :key="index"
                      class="w-full flex-shrink-0"
                    >
                      <GridView
                        :items="[item]"
                        :subtitle-color="'#F5F3B5'"
                        :columns="1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Next Button - Fixed Position -->
          <button
            class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-gray-900/90 hover:bg-gray-800/95 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            :disabled="isLastItem"
            @click="nextItem"
            aria-label="Next slide"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface FeaturedAppItem {
  subtitle: string
  header: string
  image?: string
  text: string
  alt: string
  color: string
  fontColor: string
  imagePosition: 'aboveHeader' | 'belowDescription' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'betweenText'
  externalUrl: string
}

const currentIndex = ref<number>(0)

const createGridItem = (
  applicationTitle: string,
  headerKey: string,
  descriptionKey: string,
  imagePosition: string,
  imagePath: string,
  externalUrl: string
): FeaturedAppItem => ({
  subtitle: applicationTitle,
  header: headerKey,
  image: imagePath ? `/images/${imagePath}` : undefined,
  text: descriptionKey,
  alt: `${applicationTitle} image`,
  color: '#000000',
  fontColor: '#FFFFFF',
  imagePosition: imagePosition as 'aboveHeader' | 'belowDescription' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'betweenText',
  externalUrl,
})

const featuredAppData = computed((): FeaturedAppItem[] => [
  createGridItem(
    'Nudge',
    'Your Self Monitored Data End-to-End Encrypted Messaging Application',
    'Are you worried about security in today\'s digital landscape? Do you want a secure communication channel but feel uncertain about who has access to your data? Even with end-to-end encryption, concerns about data storage can linger. Nudge is here to provide the solution you need. With Nudge, you have complete control over your data, allowing you to manage it securely or expand your reach globally without the risk of data persistence. Contact us today to learn more about how you can set up your own instance and enjoy peace of mind with secure communication!',
    'aboveHeader',
    'nudge.svg',
    ''
  ),
  createGridItem(
    'Island Hoppers',
    'Island Hoppers: Your Ultimate Tour App for Seamless Adventures!',
    'Island Hoppers is the all-in-one app designed to enhance your travel experience, whether you\'re a company organizing unforgettable tours or a customer seeking the perfect getaway. For companies, our app streamlines the entire tour management process. Organize and customize your tours effortlessly, communicate directly with tour guides, and keep your customers informed with real-time updates. With Island Hoppers, you can manage bookings, track customer preferences, and ensure every detail is taken care of, allowing you to focus on delivering exceptional experiences. For customers, Island Hoppers offers a diverse range of tour packages tailored to suit various group types, including families, backpackers, and party enthusiasts. Browse through our curated selection of adventures, choose the perfect package that fits your style, and connect with like-minded travelers. Enjoy seamless communication with your tour guides, access essential information, and receive personalized recommendations to make the most of your journey. With Island Hoppers, embark on unforgettable adventures with ease and confidence, knowing that every aspect of your tour is just a tap away!',
    'betweenText',
    'island_hoppers.svg',
    ''
  ),
  createGridItem(
    'StreamStack',
    'An Educational Platform for your Software Solutions',
    'Stream, Read, Discuss. Whether you are new to programming or want to read up on some different software solutions, we make it easy for you to do so with our native Mac app. Stay tuned for the latest coding trends.',
    'aboveHeader',
    'stream_stack.svg',
    ''
  ),
])

const nextItem = (): void => {
  if (currentIndex.value < featuredAppData.value.length - 1) {
    currentIndex.value++
  }
}

const prevItem = (): void => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const goToSlide = (index: number): void => {
  currentIndex.value = index
}

const itemClicked = (index: number): void => {
  const item = featuredAppData.value[index]
  if (item) {
    console.log(`Item clicked: ${item.header}`)
  }
}

const isFirstItem = computed((): boolean => currentIndex.value === 0)
const isLastItem = computed((): boolean => currentIndex.value === featuredAppData.value.length - 1)

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'ArrowLeft' && !isFirstItem.value) {
    prevItem()
  } else if (event.key === 'ArrowRight' && !isLastItem.value) {
    nextItem()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* Smooth transform-based transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.duration-400 {
  transition-duration: 400ms;
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

/* Ensure smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Custom scrollbar for the content area */
.overflow-hidden::-webkit-scrollbar {
  width: 6px;
}

.overflow-hidden::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

.overflow-hidden::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 3px;
}

.overflow-hidden::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.7);
}
</style>
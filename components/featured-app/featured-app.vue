<template>
  <section class="bg-black py-20 px-6 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <header class="text-center mb-12">
        <h2 class="text-4xl lg:text-5xl font-bold text-[#F5F3B5]">Featured Apps</h2>
      </header>
      
      <div class="flex items-center justify-center space-x-4 lg:space-x-8">
        <!-- Previous button -->
        <button
          class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="isFirstItem"
          @click="prevItem"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <!-- Featured app content -->
        <div class="flex-1 max-w-4xl" @click="itemClicked(currentIndex)">
          <GridView
            :items="featuredAppData[currentIndex] ? [featuredAppData[currentIndex]!] : []"
            :subtitle-color="'#33BCE5'"
            :columns="1"
          />
        </div>
        
        <!-- Next button -->
        <button
          class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="isLastItem"
          @click="nextItem"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

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
    'Nudge.png',
    ''
  ),
  createGridItem(
    'Island Hoppers',
    'Island Hoppers: Your Ultimate Tour App for Seamless Adventures!',
    'Island Hoppers is the all-in-one app designed to enhance your travel experience, whether you\'re a company organizing unforgettable tours or a customer seeking the perfect getaway. For companies, our app streamlines the entire tour management process. Organize and customize your tours effortlessly, communicate directly with tour guides, and keep your customers informed with real-time updates. With Island Hoppers, you can manage bookings, track customer preferences, and ensure every detail is taken care of, allowing you to focus on delivering exceptional experiences. For customers, Island Hoppers offers a diverse range of tour packages tailored to suit various group types, including families, backpackers, and party enthusiasts. Browse through our curated selection of adventures, choose the perfect package that fits your style, and connect with like-minded travelers. Enjoy seamless communication with your tour guides, access essential information, and receive personalized recommendations to make the most of your journey. With Island Hoppers, embark on unforgettable adventures with ease and confidence, knowing that every aspect of your tour is just a tap away!',
    'betweenText',
    'IslandHoppersLogo.png',
    ''
  ),
  createGridItem(
    'StreamStack',
    'An Educational Platform for your Software Solutions',
    'Stream, Read, Discuss. Whether you are new to programming or want to read up on some different software solutions, we make it easy for you to do so with our native Mac app. Stay tuned in for the latest coding edges.',
    'aboveHeader',
    'StreamStack.png',
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

const itemClicked = (index: number): void => {
  const item = featuredAppData.value[index]
  if (item) {
    console.log(`Item clicked: ${item.header}`)
  }
}

const isFirstItem = computed((): boolean => currentIndex.value === 0)
const isLastItem = computed((): boolean => currentIndex.value === featuredAppData.value.length - 1)
</script>

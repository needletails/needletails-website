<template>
  <div class="w-full">
    <!-- Section Title -->
    <div v-if="items[0]?.subtitle" class="mb-8">
      <h2 
        class="text-2xl sm:text-3xl font-bold mb-4" 
        :style="{ color: subtitleColor, backgroundColor: subtitleBgColor }"
      >
        {{ items[0]?.subtitle || '' }}
      </h2>
    </div>

    <!-- Grid Container -->
    <div 
      class="grid gap-6 sm:gap-8" 
      :style="{ gridTemplateColumns: `repeat(${newColumns}, 1fr)` }"
    >
      <div
        v-for="(item, index) in items"
        :key="`${item.header}-${index}`"
        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10"
        :class="{ 'cursor-pointer': item.externalUrl, 'cursor-default': !item.externalUrl }"
        :style="{ backgroundColor: item.color }"
        @click="handleTap(item)"
      >
        <!-- Hover Overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500"></div>

        <!-- Card Content -->
        <div class="relative p-6 sm:p-8 flex flex-col h-full">
          <!-- Image Above Header -->
          <div
            v-if="item.image && item.imagePosition === 'aboveHeader'"
            class="flex justify-center mb-6"
          >
            <div class="relative group-hover:scale-110 transition-transform duration-500">
              <img
                :src="item.image"
                :alt="item.alt || 'Image description'"
                class="max-w-full h-auto rounded-lg object-contain"
                :style="{ maxWidth: item.size || '100%', maxHeight: '200px' }"
                loading="lazy"
                @load="handleImageLoad"
                @error="handleImageError"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <!-- Header -->
          <h3 
            class="text-xl sm:text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2" 
            :style="{ color: item.fontColor, backgroundColor: 'transparent' }"
          >
            {{ item.header }}
          </h3>

          <!-- Image Between Text -->
          <div
            v-if="item.image && item.imagePosition === 'betweenText'"
            class="flex flex-col items-center my-6"
          >
            <div class="relative group-hover:scale-110 transition-transform duration-500">
              <img
                :src="item.image"
                :alt="item.alt || 'Image description'"
                class="max-w-full h-auto rounded-lg object-contain"
                :style="{ maxWidth: item.size || '100%', maxHeight: '200px' }"
                loading="lazy"
                @load="handleImageLoad"
                @error="handleImageError"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <!-- Description -->
          <p class="text-gray-300 leading-relaxed flex-1 line-clamp-6 sm:line-clamp-8" :style="{ color: item.fontColor }">
            {{ item.text }}
          </p>

          <!-- Image Below Description -->
          <div
            v-if="item.image && item.imagePosition === 'belowDescription'"
            class="flex flex-col items-center mt-6"
          >
            <div class="relative group-hover:scale-110 transition-transform duration-500">
              <img
                :src="item.image"
                :alt="item.alt || 'Image description'"
                class="max-w-full h-auto rounded-lg object-contain"
                :style="{ maxWidth: item.size || '100%', maxHeight: '200px' }"
                loading="lazy"
                @load="handleImageLoad"
                @error="handleImageError"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <!-- Action Indicator -->
          <div v-if="item.externalUrl" class="mt-6 flex items-center justify-between">
            <div class="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
              Learn More
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </div>

          <!-- Corner Accent -->
          <div class="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <!-- Click Indicator -->
        <div class="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300 pointer-events-none"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface GridItem {
  subtitle: string
  header: string
  text: string
  color: string
  fontColor: string
  imagePosition: 'aboveHeader' | 'belowDescription' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'betweenText'
  image?: string
  headerBgColor?: string
  alt?: string
  externalUrl?: string
  size?: string
}

// Props
interface Props {
  items: GridItem[]
  columns: number
  subtitleColor?: string
  subtitleBgColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  columns: 2,
  subtitleColor: '#FFFFFF',
  subtitleBgColor: 'transparent'
})

const handleTap = (item: GridItem): void => {
  if (item.externalUrl && item.externalUrl !== '') {
    window.location.replace(item.externalUrl)
  }
}

const newColumns = ref<number>(props.columns)

const updateColumns = (): void => {
  const width = window.innerWidth
  if (width < 640) {
    newColumns.value = 1
  } else if (width < 1024) {
    newColumns.value = Math.min(2, props.columns)
  } else {
    newColumns.value = props.columns
  }
}

const handleImageLoad = (event: Event): void => {
  const img = event.target as HTMLImageElement
  img.style.opacity = '1'
}

const handleImageError = (event: Event): void => {
  const img = event.target as HTMLImageElement
  img.style.opacity = '0.5'
  console.warn(`Failed to load image: ${img.src}`)
}

onMounted(() => {
  updateColumns()
  window.addEventListener('resize', updateColumns)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateColumns)
})
</script>

<style scoped>
/* Line clamping utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-6 {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-8 {
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Image loading states */
img {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

img[src] {
  opacity: 1;
}

/* Smooth transitions for all interactive elements */
.group:hover img {
  transform: scale(1.05);
}

/* Ensure consistent card heights */
.grid > div {
  display: flex;
  flex-direction: column;
}

.grid > div > div {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Responsive text sizing */
@media (max-width: 640px) {
  .line-clamp-6 {
    -webkit-line-clamp: 4;
  }
  
  .line-clamp-8 {
    -webkit-line-clamp: 6;
  }
}
</style>

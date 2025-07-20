<template>
  <div class="p-5">
    <div class="mb-4">
      <h2 
        class="mb-4 text-3xl font-bold z-10" 
        :style="{ color: subtitleColor, backgroundColor: subtitleBgColor }"
      >
        {{ items[0]?.subtitle || '' }}
      </h2>
      <div 
        class="grid gap-4" 
        :style="{ gridTemplateColumns: `repeat(${newColumns}, 1fr)` }"
      >
        <div
          v-for="item in items"
          :key="item.header"
          class="flex flex-col items-center text-center p-8 lg:p-12 rounded-xl shadow-lg transition-all duration-200 cursor-pointer border-2 border-gray-700/20 hover:scale-105 hover:shadow-2xl hover:border-gray-600/50"
          :style="{ backgroundColor: item.color }"
          @click="handleTap(item)"
        >
          <div
            v-if="item.image && item.imagePosition === 'aboveHeader'"
            class="flex justify-center my-2"
          >
            <img
              :src="item.image"
              :alt="item.alt || 'Image description'"
              class="max-w-full"
              :style="{ maxWidth: item.size || '100%' }"
            />
          </div>

          <h3 
            class="text-xl font-semibold mb-2" 
            :style="{ color: item.fontColor, backgroundColor: 'transparent' }"
          >
            {{ item.header }}
          </h3>

          <div
            v-if="item.image && item.imagePosition === 'betweenText'"
            class="flex flex-col items-center my-2"
          >
            <img
              :src="item.image"
              :alt="item.alt || 'Image description'"
              class="max-w-full"
              :style="{ maxWidth: item.size || '100%' }"
            />
          </div>

          <p class="text-sm leading-relaxed" :style="{ color: item.fontColor }">
            {{ item.text }}
          </p>

          <div
            v-if="item.image && item.imagePosition === 'belowDescription'"
            class="flex flex-col items-center my-2"
          >
            <img
              :src="item.image"
              :alt="item.alt || 'Image description'"
              class="max-w-full"
              :style="{ maxWidth: item.size || '100%' }"
            />
          </div>
        </div>
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
  subtitleColor: '#000000',
  subtitleBgColor: '#00000000'
})

const handleTap = (item: GridItem): void => {
  if (item.externalUrl != null && item.externalUrl !== '') {
    window.location.replace(item.externalUrl)
  }
}

const newColumns = ref<number>(props.columns)

const updateColumns = (): void => {
  const width = window.innerWidth
  if (width < 768) {
    newColumns.value = 1
  } else if (width < 1024) {
    newColumns.value = 2
  } else {
    newColumns.value = props.columns
  }
}

onMounted(() => {
  updateColumns()
  window.addEventListener('resize', updateColumns)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateColumns)
})
</script>

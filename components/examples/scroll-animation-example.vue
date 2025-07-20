<template>
  <div class="space-y-8 p-8">
    <!-- Using the directive with default options -->
    <div v-scrollanimation class="p-6 bg-blue-100 rounded-lg">
      <h2 class="text-xl font-bold">Default Animation</h2>
      <p>This element uses the v-scrollanimation directive with default settings.</p>
    </div>

    <!-- Using the directive with custom options -->
    <div v-scrollanimation="{ threshold: 0.5, rootMargin: '100px', once: false }" class="p-6 bg-green-100 rounded-lg">
      <h2 class="text-xl font-bold">Custom Animation</h2>
      <p>This element uses custom threshold and rootMargin, and repeats the animation.</p>
    </div>

    <!-- Using the composable with template ref -->
    <div ref="composableElement" class="p-6 bg-purple-100 rounded-lg">
      <h2 class="text-xl font-bold">Composable Animation</h2>
      <p>This element uses the useScrollAnimation composable with a template ref.</p>
    </div>

    <!-- Multiple elements with different animations -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-scrollanimation="{ threshold: 0.3 }" class="p-4 bg-red-100 rounded-lg">
        <h3 class="font-semibold">Card 1</h3>
        <p>Different threshold value</p>
      </div>
      <div v-scrollanimation="{ threshold: 0.7 }" class="p-4 bg-yellow-100 rounded-lg">
        <h3 class="font-semibold">Card 2</h3>
        <p>Higher threshold value</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

// Template ref for composable example
const composableElement = ref<HTMLElement>()

// Initialize scroll animation composable
const { observeElement } = useScrollAnimation({
  threshold: 0.2,
  rootMargin: '50px',
  onEnter: () => {
    console.log('Composable element entered viewport')
  }
})

onMounted(() => {
  if (composableElement.value) {
    observeElement(composableElement.value)
  }
})
</script>

<style scoped>
/* Animation classes for scroll animation */
.before-enter {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.enter {
  opacity: 1;
  transform: translateY(0);
}

/* Different animation for cards */
.before-enter:nth-child(odd) {
  transform: translateX(-50px);
}

.enter:nth-child(odd) {
  transform: translateX(0);
}
</style> 
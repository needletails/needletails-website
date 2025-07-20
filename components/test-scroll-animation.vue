<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Test element with scroll animation -->
      <div 
        v-scrollanimation="{ threshold: 0.3, rootMargin: '50px' }" 
        class="bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-bold mb-4">Scroll Animation Test</h2>
        <p class="text-gray-600">
          This element should animate when it comes into view. Scroll down to see the animation in action.
        </p>
      </div>

      <!-- Spacer to ensure scrolling is needed -->
      <div class="h-96 bg-blue-100 flex items-center justify-center">
        <p class="text-blue-600 font-semibold">Scroll down to see the animation</p>
      </div>

      <!-- Another test element -->
      <div 
        v-scrollanimation="{ threshold: 0.5, rootMargin: '100px' }" 
        class="bg-green-100 p-8 rounded-lg shadow-lg"
      >
        <h3 class="text-xl font-bold mb-3">Second Animation</h3>
        <p class="text-gray-700">
          This element has different animation settings (higher threshold and rootMargin).
        </p>
      </div>

      <!-- More spacer -->
      <div class="h-96 bg-purple-100 flex items-center justify-center">
        <p class="text-purple-600 font-semibold">Keep scrolling...</p>
      </div>

      <!-- Third test element -->
      <div 
        v-scrollanimation="{ once: false }" 
        class="bg-yellow-100 p-8 rounded-lg shadow-lg"
      >
        <h3 class="text-xl font-bold mb-3">Repeating Animation</h3>
        <p class="text-gray-700">
          This animation will repeat every time you scroll past it (once: false).
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Test component for scroll animation directive
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
</style> 
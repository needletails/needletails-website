<template>
  <section class="bg-black min-h-screen flex items-center">
    <div class="flex justify-end w-full">
      <div 
        v-scrollanimation="{ threshold: 0.2, rootMargin: '50px' }" 
        class="text-white bg-[rgb(8,8,8)] p-12 lg:p-20 w-[90%]"
      >
        <h1 class="text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white tracking-tight">
          NeedleTails specializes in making your application ideas a reality.
        </h1>
        <p class="text-xl lg:text-2xl text-gray-300 leading-relaxed font-light max-w-4xl">
          With Enterprise Application experience, we have what it takes to handle complicated tasks and projects from start to finish. As we specialize in Swift software development, you will feel confident in the safety that the language brings to the table. We strive for quality products.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>

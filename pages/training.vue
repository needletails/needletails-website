<template>
  <div class="min-h-screen bg-black">
    <Header />
    <main class="pt-36 pb-24">
      <div class="px-24 w-4/5 mx-auto bg-black">
        <training-component />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/base/header.vue';
import Footer from '../components/base/footer.vue';
import TrainingComponent from '../components/training/training-component.vue';
</script> 
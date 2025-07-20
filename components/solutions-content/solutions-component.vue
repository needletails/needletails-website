<template>
  <div>
    <BackendDevelopment />
    <NativeDevelopment />
    <WebDevelopment />
  </div>
</template>

<script setup lang="ts">
// Explicit imports for subdirectory components
import BackendDevelopment from './backend-development.vue'
import NativeDevelopment from './native-development.vue'
import WebDevelopment from './web-development.vue'
</script>

<style scoped></style>

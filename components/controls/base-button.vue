<template>
  <h3 class="relative bg-black border border-white rounded p-1.5 top-1.5 text-center text-white">{{ title }}</h3>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: ''
})
</script>

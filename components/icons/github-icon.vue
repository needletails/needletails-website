<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 100 100"
    :class="$attrs.class"
  >
    <defs>
      <linearGradient id="github-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#333" />
        <stop offset="100%" stop-color="#666" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="40" fill="url(#github-gradient)" />
    <path d="M35 35c-2 2-3 5-3 8 0 3 1 6 3 8 2 2 5 3 8 3s6-1 8-3c2-2 3-5 3-8 0-3-1-6-3-8-2-2-5-3-8-3s-6 1-8 3z" fill="#fff" />
    <path d="M43 43l-8 8m8-8l8 8" stroke="#fff" stroke-width="2" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  width?: number | string
  height?: number | string
}

withDefaults(defineProps<Props>(), {
  width: 24,
  height: 24
})
</script> 
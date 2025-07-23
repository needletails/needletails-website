<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 100 100"
    :class="$attrs.class"
  >
    <defs>
      <linearGradient id="do-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0069ff" />
        <stop offset="100%" stop-color="#00d4ff" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="40" fill="url(#do-gradient)" />
    <text x="50" y="60" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">DO</text>
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
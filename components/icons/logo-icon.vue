<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 360 360"
    :class="$attrs.class"
  >
    <defs>
      <linearGradient
        id="logo-gradient"
        x1="180"
        y1="0"
        x2="180"
        y2="360"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#85288f" />
        <stop offset="0.07" stop-color="#802f92" />
        <stop offset="0.17" stop-color="#74459d" />
        <stop offset="0.3" stop-color="#6068ae" />
        <stop offset="0.45" stop-color="#4598c5" />
        <stop offset="0.62" stop-color="#2bc8d8" />
        <stop offset="0.8" stop-color="#1de8e8" />
        <stop offset="1" stop-color="#00ffff" />
      </linearGradient>
    </defs>
    <circle cx="180" cy="180" r="150" fill="url(#logo-gradient)" />
    <circle cx="180" cy="180" r="120" fill="none" stroke="#fff" stroke-width="4" />
    <circle cx="180" cy="180" r="90" fill="none" stroke="#fff" stroke-width="2" />
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
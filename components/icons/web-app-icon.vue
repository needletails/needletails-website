<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 283 256"
    fill="none"
    :class="$attrs.class"
  >
    <path d="M63.3457 86.582C26.7216 96.0262 2.83333 112.206 2.83333 130.678C2.83333 159.941 64.0123 183.802 139.635 183.802C149.913 183.802 157.135 183.26 166.718 182.455" stroke="#8D3E93" stroke-width="4.59" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M111.678 182.413C105.942 174.135 100.484 166.677 95.2893 157.414C57.0819 89.3597 46.8461 21.7225 72.651 6.40347C88.6228 -3.27684 114.969 9.91727 141.733 37.7082" stroke="#8D3E93" stroke-width="4.59" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M64.3457 175.288C54.5959 212.62 56.5681 240.786 72.1232 250.217C96.8865 265.216 146.941 223.023 183.829 155.719C188.829 146.414 193.315 137.261 197.273 128.248" stroke="#8D3E93" stroke-width="4.59" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M141.719 218.801C168.496 246.578 194.731 259.772 210.856 250.092C236.55 234.787 226.425 167.149 188.176 99.0817C182.843 89.6791 177.384 82.3599 171.787 74.0823" stroke="#8D3E93" stroke-width="4.59" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M220.328 169.913C256.605 160.372 280.604 144.219 280.604 125.803C280.604 96.4984 219.383 72.6935 143.871 72.6935C133.497 72.6935 126.289 73.0962 116.719 73.9018" stroke="#8D3E93" stroke-width="4.59" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M86.1646 128.248C90.1228 119.081 94.5949 110.081 99.6087 100.776C136.372 33.5 186.454 -8.80448 211.356 6.32014C226.772 15.7505 228.883 43.9025 219.133 81.221" stroke="#8D3E93" stroke-width="4.59" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M145.33 128.456H145.191C145.052 130.261 143.524 131.789 141.58 131.789C140.65 131.743 139.773 131.344 139.127 130.673C138.482 130.001 138.117 129.109 138.108 128.178C138.108 126.234 139.635 124.706 141.441 124.706H141.302C143.108 124.567 144.774 126.234 144.774 128.039" stroke="#8D3E93" stroke-width="4.59" stroke-linecap="round" stroke-linejoin="round"/>
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
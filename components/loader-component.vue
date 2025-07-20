<template>
  <div class="loader">
    <svg-icon :height="logo.height" :width="logo.width" :name="logo.name" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SvgIcon from './controls/svg-icon.vue'

interface LogoConfig {
  name: string
  height: number
  width: number
}

const logo = ref<LogoConfig>({
  name: 'logo',
  height: 100,
  width: 100,
})
</script>

<style lang="css" scoped>
.loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  animation: animateHeart 3s infinite;
}

@keyframes animateHeart {
  from {
    -moz-transform: rotate(0deg);
  }
  0% {
    transform: rotate(0deg) scale(0.8);
  }
  5% {
    transform: rotate(45deg) scale(0.9);
  }
  10% {
    transform: rotate(45deg) scale(0.8);
  }
  15% {
    transform: rotate(45deg) scale(1);
  }
  50% {
    transform: rotate(45deg) scale(0.8);
  }
  100% {
    transform: rotate(45deg) scale(0.8);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes animateHeart {
  from {
    -moz-transform: rotate(0deg);
  }
  0% {
    transform: rotate(0deg) scale(0.8);
  }
  5% {
    transform: rotate(45deg) scale(0.9);
  }
  10% {
    transform: rotate(45deg) scale(0.8);
  }
  15% {
    transform: rotate(45deg) scale(1);
  }
  50% {
    transform: rotate(45deg) scale(0.8);
  }
  100% {
    transform: rotate(45deg) scale(0.8);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}

@-moz-keyframes animateHeart {
  from {
    -moz-transform: rotate(0deg);
  }
  0% {
    transform: rotate(0deg) scale(0.8);
  }
  5% {
    transform: rotate(45deg) scale(0.9);
  }
  10% {
    transform: rotate(45deg) scale(0.8);
  }
  15% {
    transform: rotate(45deg) scale(1);
  }
  50% {
    transform: rotate(45deg) scale(0.8);
  }
  100% {
    transform: rotate(45deg) scale(0.8);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
</style>

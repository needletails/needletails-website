<template>
  <component
    :is="iconComponent"
    v-if="iconComponent"
    :width="width"
    :height="height"
    :class="$attrs.class"
  />
  <div v-else class="icon-placeholder" :style="{ width: width + 'px', height: height + 'px' }">
    {{ name }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import LogoIcon from './logo-icon.vue'
import WebAppIcon from './web-app-icon.vue'
import RobustServerIcon from './robust-server-icon.vue'
import NativeAppsIcon from './native-apps-icon.vue'
import DoLogoIcon from './do-logo-icon.vue'
import GithubIcon from './github-icon.vue'

interface Props {
  name: string
  width?: number | string
  height?: number | string
}

const props = withDefaults(defineProps<Props>(), {
  width: 24,
  height: 24
})

// Icon registry for dynamic icon loading
const iconMap = {
  logo: LogoIcon,
  needletails_logo: LogoIcon,
  webApp: WebAppIcon,
  robustServer: RobustServerIcon,
  nativeApps: NativeAppsIcon,
  nativeApp: NativeAppsIcon, // Alias for backward compatibility
  doLogo: DoLogoIcon,
  github: GithubIcon,
}

const iconComponent = computed(() => {
  return iconMap[props.name as keyof typeof iconMap] || null
})
</script>

<style scoped>
.icon-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 10px;
  color: #666;
}
</style> 
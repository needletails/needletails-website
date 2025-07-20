<template>
  <div v-if="isClickable">
    <ul
      class="icon-label overflow-hidden flex items-center pl-4"
      :class="getStyleClasses()"
      @click="clicked"
    >
      <div
        class="flash ripple"
        :class="{ active: clickedStatus }"
      />
      <div v-if="isCustomSVG">
        <svg-icon
          :width="width"
          :height="height"
          :name="icon"
        />
      </div>
      <div v-else>
        <!-- Fallback for non-SVG icons -->
        <div class="icon-placeholder w-5 h-5 flex items-center justify-center text-white text-xl">{{ icon || '•' }}</div>
      </div>
      <div class="logoTitle">
        <h2
          class="font"
          :class="getTextStyleClasses()"
        >
          {{ title }}
        </h2>
      </div>
    </ul>
  </div>
  <div v-else>
    <ul
      class="icon-label overflow-hidden flex items-center pl-4"
      :class="getStyleClasses()"
    >
      <div
        class="flash ripple"
        :class="{ active: clickedStatus }"
      />
      <div v-if="isCustomSVG">
        <svg-icon
          :width="width"
          :height="height"
          :name="icon"
        />
      </div>
      <div v-else>
        <!-- Fallback for non-SVG icons -->
        <div class="icon-placeholder w-5 h-5 flex items-center justify-center text-white text-xl">{{ icon || '•' }}</div>
      </div>
      <div class="logoTitle">
        <h2
          class="font"
          :class="getTextStyleClasses()"
        >
          {{ title }}
        </h2>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import SvgIcon from './svg-icon.vue'

interface Props {
  title?: string
  icon?: string
  to?: string
  size?: string
  hover?: string
  isCustomSVG?: boolean
  externalPath?: boolean
  textColor?: string
  width?: number
  height?: number
  isClickable: boolean
  hasEmailClickHandler?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  icon: '',
  to: '',
  size: '',
  hover: '',
  isCustomSVG: false,
  externalPath: false,
  textColor: '',
  width: 0,
  height: 0,
  hasEmailClickHandler: false
})

const router = useRouter()
const isClicked = ref(false)

const clickedStatus = computed(() => {
  return isClicked.value
})

const route = computed(() => {
  return props.to
})

const toggle = () => {
  if (isClicked.value === false) {
    isClicked.value = true
  } else {
    isClicked.value = false
  }
}

const clicked = () => {
  if (props.externalPath === false) {
    toggle()
    router.push({ path: route.value })
    setTimeout(() => {
      toggle()
    }, 1000)
  } else if (props.externalPath === true) {
    window.location.replace(props.to)
  } else if (props.hasEmailClickHandler === true) {
    const mailto_link =
      'mailto:' +
      'support@needletails.com' +
      '?subject=' +
      'Project Inquiry' +
      '&body=' +
      ''
    window.location.href = mailto_link
  } else {
    console.log('No Handler')
  }
}

const getStyleClasses = () => {
  const classes = []
  if (props.size) classes.push(`is-${props.size}`)
  if (props.hover) classes.push(`is-${props.hover}`)
  if (props.hover === 'hover') classes.push('hover:bg-gray-700')
  return classes
}

const getTextStyleClasses = () => {
  const classes = []
  if (props.size) classes.push(`is-${props.size}`)
  if (props.hover) classes.push(`is-${props.hover}`)
  if (props.textColor) classes.push(`is-${props.textColor}`)
  return classes
}
</script>

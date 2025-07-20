<template>
  <div id="hamWrap" class="relative flex justify-between pt-2 hidden md:block">
    <div id="burger" :class="{ active: openMenu }" @click="setMenuOpenState()" class="transition-all duration-800 ease-in-out p-2.5 hover:bg-white/10">
      <slot>
        <button type="button" class="burger-button relative h-7 w-8 block z-99 border-0 rounded-none bg-transparent pointer-events-all transition-transform duration-600 ease-out focus:outline-0" title="Menu">
          <span class="burger-bar burger-bar--1 absolute top-1/2 right-1.5 left-1.5 h-0.5 w-auto -mt-0.5 bg-white transition-all duration-600 ease-out -translate-y-1.5" />
          <span class="burger-bar burger-bar--2 absolute top-1/2 right-1.5 left-1.5 h-0.5 w-auto -mt-0.5 bg-white transition-all duration-600 ease-out origin-right scale-x-80 hover:scale-x-100" />
          <span class="burger-bar burger-bar--3 absolute top-1/2 right-1.5 left-1.5 h-0.5 w-auto -mt-0.5 bg-white transition-all duration-600 ease-out translate-y-1.5" />
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openMenu = ref(false)

const setMenuOpenState = () => {
  openMenu.value = !openMenu.value
}
</script>

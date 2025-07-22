<template>
  <div>
    <div v-if="openMenu" class="sidebar-backdrop" @click="setMenuOpenState()" />
    <transition name="slide">
      <div v-if="openMenu" class="side-bar">
        <div class="side-bar-header">
          <ul>
            <li v-for="(item, i) in logoItem" :key="i">
              <icon-button
                :is-custom-s-v-g="item.isCustomSVG"
                :icon="item.icon"
                :title="item.title"
                :to="item.to"
                :height="item.height"
                :width="item.width"
                :is-clickable="item.isClickable"
              />
            </li>
          </ul>
        </div>

        <div class="list-items">
          <ul>
            <li v-for="(item, i) in items" :key="i">
              <icon-button
                :is-custom-s-v-g="item.isCustomSVG"
                :icon="item.icon"
                :title="item.title"
                :to="item.to"
                :external-path="item.externalPath"
                :is-clickable="item.isClickable"
                size="small"
                class="menu-item"
              />
            </li>
            <li v-for="(item, i) in externalItems" :key="i">
              <icon-button
                :is-custom-s-v-g="item.isCustomSVG"
                :icon="item.icon"
                :title="item.title"
                :external-path="item.externalPath"
                :is-clickable="item.isClickable"
                :has-email-click-handler="item.hasEmailClickHandler"
                :to="item.to"
                size="small"
                class="menu-item"
              />
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconButton from '../controls/icon-button.vue'

const { t } = useI18n()

const openMenu = ref(false)

const logoItem = ref([
  {
    title: 'NeedleTails',
    icon: 'needleTailLeft',
    to: '/',
    isCustomSVG: true,
    height: 75,
    width: 75,
    isClickable: true,
  },
])

const items = ref([
  {
    icon: '',
    title: 'Training',
    to: '/training',
    isCustomSVG: false,
    externalPath: false,
    isClickable: true,
  },
  {
    icon: '',
    title: 'Consultation',
    to: '/consultation',
    isCustomSVG: false,
    externalPath: false,
    isClickable: true,
  },
])

const externalItems = ref([
  {
    icon: '',
    title: 'Management',
    to: '/management',
    isCustomSVG: false,
    externalPath: false,
    isClickable: true,
  },
  {
    icon: "",
    title: t('contact'),
    isCustomSVG: false,
    isClickable: true,
    hasEmailClickHandler: true,
  },
])

const setMenuOpenState = () => {
  openMenu.value = !openMenu.value
}
</script>

<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in ease-in-out 0.8s;
}

.slide-leave-active {
  animation: slide-out ease-out 0.8s;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 999998; /* Adjusted z-index for backdrop */
}

.side-bar {
  position: fixed;
  width: 250px;
  height: 100%;
  top: 0;
  background-color: #2c2c2c; /* Darker background for better contrast */
  color: #ffffff; /* White text for better readability */
  z-index: 999999; /* Adjusted z-index for sidebar */
  padding: 20px; /* Added padding for better spacing */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5); /* Added shadow for depth */
}

.side-bar-header {
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
  margin-bottom: 20px; /* Added margin for spacing */
  text-align: center; /* Centered logo */
}

.list-items {
  margin-top: 20px; /* Added margin for spacing */
}

.menu-item {
  display: flex; /* Flexbox for alignment */
  align-items: center; /* Center items vertically */
  padding: 10px; /* Added padding for clickable area */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s; /* Smooth background transition */
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Light hover effect */
}

li {
  list-style: none;
  cursor: pointer;
}

@media screen and (max-width: 820px) {
  .side-bar {
    overflow-y: auto; /* Enable vertical scrolling on smaller screens */
  }
}
</style>

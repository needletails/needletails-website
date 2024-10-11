<template>
  <div id="hamWrap">
    <div id="burger" :class="{ active: openMenu }" @click="setMenuOpenState()">
      <slot>
        <button type="button" class="burger-button" title="Menu">
          <span class="burger-bar burger-bar--1" />
          <span class="burger-bar burger-bar--2" />
          <span class="burger-bar burger-bar--3" />
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref, computed } from 'vue';
export default {
  setup() {
    const store = useStore();
    const isActive = ref(false);
    const openMenu = computed(() => {
      return store.getters.openMenu;
    });

    function setMenuOpenState() {
      store.dispatch('setMenuOpenState');
    }
    return {
      isActive,
      openMenu,
      setMenuOpenState,
    };
  },
};
</script>

<style lang="css" scoped>
#hamWrap {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
}

#hamWrap > h3 {
  position: relative;
  bottom: 10px;
}
.hidden {
  visibility: hidden;
}

button {
  cursor: pointer;
}

/* remove blue outline */
button:focus {
  outline: 0;
}
.burger-button {
  position: relative;
  height: 30px;
  width: 32px;
  display: block;
  z-index: 99;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: white;
  position: absolute;
  top: 50%;
  right: 6px;
  left: 6px;
  height: 2px;
  width: auto;
  margin-top: -1px;
  transition:
    transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
    opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
    background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar--1 {
  -webkit-transform: translateY(-6px);
  transform: translateY(-6px);
}

.burger-bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(0.8);
}

.burger-button:hover .burger-bar--2 {
  transform: scaleX(1);
}

.no-touchevents .burger-bar--2:hover {
  transform: scaleX(1);
}

#burger {
  transition: all 0.8s ease;
  -webkit-transition: all 0.8s ease;
  padding: 10px;
}

.burger-bar--3 {
  transform: translateY(6px);
}

#burger.active .burger-button {
  transform: rotate(-180deg);
}

#burger.active .burger-bar {
  background-color: #fff;
}

#burger.active .burger-bar--1 {
  transform: rotate(45deg);
}

#burger.active .burger-bar--2 {
  opacity: 0;
}

#burger.active .burger-bar--3 {
  transform: rotate(-45deg);
}

#burger.active {
  position: relative;
  margin-left: -25px;
  bottom: 10px;
  clip-path: circle(40%);
}
#burger:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
#hamWrap {
  display: none;
}
@media screen and (max-width: 767px) {
  #hamWrap {
    display: block;
  }
}
</style>

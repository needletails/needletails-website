<template>
  <div>
    <div
      class="sidebar-backdrop"
      @click="setMenuOpenState()"
      v-if="openMenu"
    ></div>
    <transition name="slide">
      <div v-if="openMenu" class="side-bar">
        <div class="side-bar-header">
          <li v-for="(item, i) in logoItem" :key="i">
            <icon-button
              :isCustomSVG="item.isCustomSVG"
              :icon="item.icon"
              :title="item.title"
              :to="item.to"
              :height="item.height"
              :width="item.width"
               :isClickable="item.isClickable"
            />
          </li>
        </div>

        <div class="list-items">
          <div>
            <li v-for="(item, i) in items" :key="i">
              <icon-button
                :isCustomSVG="item.isCustomSVG"
                :icon="item.icon"
                :title="item.title"
                :to="item.to"
                :externalPath="item.externalPath"
                 :isClickable="item.isClickable"
                size="small"
                style="height: 64px"
                hover="hover"
              />
            </li>
            <li v-for="(item, i) in externalItems" :key="i">
              <icon-button
                :isCustomSVG="item.isCustomSVG"
                :icon="item.icon"
                :title="item.title"
                :externalPath="item.externalPath"
                 :isClickable="item.isClickable"
                  :hasEmailClickHandler="item.hasEmailClickHandler"
                :to="item.to"
                size="small"
                style="height: 64px"
                hover="hover"
              />
            </li>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const store = useStore();
    const { t } = useI18n({ useScope: "global" });
    const isOpen = ref(false);
    const menuItemOne = computed(() => t("menuItemOne"));
    const menuItemTwo = computed(() => t("menuItemTwo"));
    const menuItemThree = computed(() => t("menuItemThree"));
    const menuItemFour = computed(() => t("menuItemFour"));

    const logoItem = ref([
      {
        title: "Cartisim",
        icon: "logo",
        to: "/",
        isCustomSVG: true,
        height: 25,
        width: 25,
        isClickable: true,
      },
    ]);
    const items = ref([
      {
        icon: "mdiProgressQuestion",
        title: menuItemOne.value,
        to: "/why-cartisim",
        isCustomSVG: false,
        externalPath: false,
        isClickable: true,
      },
      {
        icon: "mdiAccountCashOutline",
        title: menuItemTwo.value,
        to: "/solutions",
        isCustomSVG: false,
        externalPath: false,
        isClickable: true,
      },
    ]);

    const externalItems = ref([
      {
        icon: "mdiRoomServiceOutline",
        title: menuItemThree.value,
        isCustomSVG: false,
        isClickable: true,
        hasEmailClickHandler: true
      },
      {
        icon: "mdiDownload",
        title: menuItemFour.value,
        isCustomSVG: false,
        externalPath: true,
        isClickable: true,
        to: "https://cartisimapp.io",
      },
    ]);

    const openMenu = computed(() => {
      return store.getters.openMenu;
    });

    function setMenuOpenState() {
      store.dispatch("setMenuOpenState");
    }

    return {
      isOpen,
      logoItem,
      items,
      externalItems,
      openMenu,
      setMenuOpenState
    };
  },
};
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
  top: 64px;
  left: 0;
  cursor: pointer;
  z-index: 999999998;
}

.side-bar {
  position: fixed;
  width: 250px;
  height: 100%;
  top: 0;
  background-color: #363636;
  z-index: 999999999;
}

.logoTitle > h2 {
  color: white;
}
.side-bar-header {
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.3);
}

.side-bar-header > li > ul {
  margin-top: 20px;
  margin-bottom: 5px;
}

.side-bar > div > li > div > ul > li.highlight {
  color: lightsteelblue;
}

.list-items {
  position: relative;
  top: 30px;
}

li {
  list-style: none;
  cursor: pointer;
}

@media screen and (max-width: 820px) {
  .side-bar {
    overflow: scroll;
  }
}
</style>
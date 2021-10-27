<template>
  <ul class="wrapper icon-label" :class="getStyleClasses()">
    <li :class="{ active: openCourse }">
      <div class="flash ripple" :class="{ active: openCourse }"></div>
      <div class="content-wrapper">
        <div>
          <div class="logo">
            <vue-icon color="white" size="large" :name="icon"></vue-icon>
          </div>
          <div :class="{ active: openCourse }" class="logoTitle">
            <h2 class="font" :class="getStyleClasses()">{{ title }}</h2>
          </div>
        </div>
        <div>
          <vue-icon
            :name="chevron"
            class="chevron"
            :class="{ active: openCourse }"
          ></vue-icon>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    chevron: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
    hover: {
      type: String,
      required: false,
    },
  },
  style(props) {
    const store = useStore();
    const openCourse = computed(() => {
      return store.getters.openCourse;
    });

    function getStyleClasses() {
      return [props.size, props.hover].map((val) => val && `is-${val}`);
    }
    return {
      openCourse,
      getStyleClasses,
    };
  },
};
</script>

<style lang="css" scoped>
.font.is-large {
  font-size: 1.8rem;
}
.font.is-medium {
  font-size: 1.7rem;
}
.font.is-normal {
  font-size: 1.5rem;
}
.font.is-small {
  font-size: 1rem;
}
.font.is-tiny {
  font-size: 1.1rem;
}
.wrapper {
  list-style: none;
  overflow: hidden;
}

.icon-label.is-hover:hover {
  background-color: rgba(65, 65, 65, 1);
}
.wrapper li > div:last-child {
  padding: 0 0 0 15px;
}

.wrapper li {
  position: relative;
  color: #555;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.wrapper li:hover {
  background-color: rgba(65, 65, 65, 1);
}

img {
  display: block;
  width: 40px;
  height: 40px;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
}

.content-wrapper > div:first-child {
  display: flex;
  justify-content: space-around;
}

.content-wrapper > div:last-child {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logoTitle {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
}

.chevron {
  position: relative;
  height: 20px;
  width: 20px;
  max-width: 20px;
  right: 15px;
}

.wrapper li .title {
  padding: 10px 0;
  text-indent: 20px;
}

.chevron.active {
  transform: rotateZ(180deg);
}
.wrapper li.active,
.wrapper li img.active,
h2.active {
  color: rgba(0, 152, 250, 1);
}
/*ripple Effect */

.flash {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 70px;
}
.flash.active {
  animation: ripple 0.4s linear;
}
.wrapper li.active:hover {
  background-color: rgba(0, 152, 250, 0.3) !important;
}

@-webkit-keyframes ripple {
  0% {
    background-color: rgba(0, 152, 250, 0.5);
    width: 0;
    height: 0;
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes ripple {
  0% {
    background-color: rgba(0, 152, 250, 0.5);
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.ripple:before {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: currentColor;
  visibility: hidden;
  z-index: 2;
}
.ripple:not(:active):before {
  -webkit-animation: ripple 0.4s cubic-bezier(0, 0, 0.2, 1);
  animation: ripple 0.4s cubic-bezier(0, 0, 0.2, 1);
  -webkit-transition: visibility 0.4s step-end;
  transition: visibility 0.4s step-end;
}
.ripple:active:before {
  visibility: visible;
}
</style>
<template>
  <div class="business-details">
    <div class="top-wrapper">
      <div>
        <h1 v-scrollanimation>{{ $t("businessOverviewTitle") }}</h1>

        <div v-scrollanimation>
          <h3>{{ $t("businessOverviewOne") }}</h3>
          <h3>{{ $t("businessOverviewTwo") }}</h3>
          <div class="overview-three-wrapper">
            <h3>{{ $t("businessOverviewThree") }}</h3>
            <div v-for="(icon, i) in iconData()" :key="i">
              <icon-button
                size="tiny"
                :icon="icon.icon"
                :title="icon.title"
                :isCustomSVG="icon.isCustomSVG"
                :width="icon.width"
                :height="icon.height"
                textColor="black"
                :isClickable="icon.isClickable"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="trailing-wrapper">
        <video-player :videoURL="buildProjectURL" :videoWebmURL="buildProjectWebmURL" :videoOggURL="buildProjectOggURL" />
      </div>
    </div>

    <div class="reasons">
      <h2 v-scrollanimation>
        {{ $t("businessReasonsTitle") }}
      </h2>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import IconButton from "./controls/IconButton.vue";
import { useI18n } from "vue-i18n";
import VideoPlayer from "./controls/VideoPlayer.vue";
export default {
  components: {
    IconButton,
    VideoPlayer,
  },
  setup() {
    const store = useStore();
    const { t } = useI18n({ useScope: "global" });

    const buildProjectURL = computed(
      () => store.getters["S3/buildProjectURL"]
    );
    const buildProjectWebmURL = computed(
      () => store.getters["S3/buildProjectWebmURL"]
    );
    const buildProjectOggURL = computed(
      () => store.getters["S3/buildProjectOggURL"]
    );

    const itemOne = computed(() => t("businessItemOne"));
    const itemTwo = computed(() => t("businessItemTwo"));
    const itemThree = computed(() => t("businessItemThree"));
    const itemFour = computed(() => t("businessItemFour"));
    function iconData() {
      return [
        {
          icon: "logo",
          title: itemOne.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false
        },
        {
          icon: "logo",
          title: itemTwo.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false
        },
        {
          icon: "logo",
          title: itemThree.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false
        },
        {
          icon: "logo",
          title: itemFour.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false
        },
      ];
    }

    return {
      buildProjectURL,
      buildProjectWebmURL,
      buildProjectOggURL,
      iconData,
    };
  },
};
</script>

<style lang="css" scoped>
.business-details {
  position: relative;
  background-color: white;
  margin-top: 320px;
  padding: 100px;
}

h1 {
  text-align: left;
  font-size: 2.5rem;
}

h2,
h3 {
  color: darkslategray;
}

.top-wrapper {
  display: flex;
  justify-content: space-between;
}

.top-wrapper > div:first-child > div {
  transition-delay: 0.3s;
}

.trailing-wrapper {
  margin-bottom: auto;
}

.overview-three-wrapper {
  padding: 50px;
}
.reasons {
  position: relative;
  font-weight: bold;
  margin: 0 auto;
  text-align: center;
  width: 70%;
  padding-top: 100px;
}

.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
@media screen and (max-width: 768px) {
.business-details {
padding: 10px;
}
}
@media screen and (max-width: 1024px) {
  .business-details {
    margin-top: 320px;
    /* padding: 50px 0 0 0; */
  }
  .top-wrapper {
    flex-direction: column;
  }
  .top-wrapper > div > h1 {
    text-align: center;
  }
  .reasons {
    width: auto;
    padding-bottom: 100px;
  }
}
@media screen and (min-width: 3840px) and (min-height: 2160px) {
  .business-details {
margin-top: 650px;
  }
  h1 {
    font-size: 6rem;
    
  }
  p, article {
font-size: 2rem;
  }
}
</style>
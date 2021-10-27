<template>
  <div class="page-layout-2">
    <div class="page-layout-2-top">
      <h1 v-scrollanimation>{{ $t("solutionsTitle") }}</h1>
    </div>
    <!-- <div v-if="showVideo">
      <div class="video-wrapper">
        <video
          id="video1"
          :poster="solutionsPosterURL"
          controlsList="nodownload"
          controls
          playsinline
          oncontextmenu="return false;"
        >
          <source :src="solutionsURL" />
          <source :src="solutionsWebmURL" />
          <source :src="solutionsOggURL" />
        </video>
      </div>
    </div> -->
    <div class="page-layout-2-flex-box">
      <div v-scrollanimation>
        <h2>{{ $t("solutionSubheadingOne") }}</h2>
        <h3>{{ $t("solutionsTextOne") }}</h3>
        <div v-for="(icon, i) in getAbsorbtionList()" :key="i">
          <icon-button
            size="small"
            :icon="icon.icon"
            :title="icon.title"
            :isCustomSVG="icon.isCustomSVG"
            :width="icon.width"
            :height="icon.height"
            :isClickable="icon.isClickable"
          />
        </div>
      </div>
      <div v-scrollanimation>
        <h2>{{ $t("solutionSubheadingTwo") }}</h2>
        <h3>{{ $t("solutionsTextTwo") }}</h3>
        <div v-for="(icon, i) in getCustomList()" :key="i">
          <icon-button
            size="small"
            :icon="icon.icon"
            :title="icon.title"
            :isCustomSVG="icon.isCustomSVG"
            :width="icon.width"
            :height="icon.height"
            :isClickable="icon.isClickable"
          />
        </div>
      </div>
      <div v-scrollanimation>
        <h2>{{ $t("solutionSubheadingThree") }}</h2>
        <h3>{{ $t("solutionsTextThree") }}</h3>
        <div v-for="(icon, i) in getCustomMaintenanceList()" :key="i">
          <icon-button
            size="small"
            :icon="icon.icon"
            :title="icon.title"
            :isCustomSVG="icon.isCustomSVG"
            :width="icon.width"
            :height="icon.height"
            :isClickable="icon.isClickable"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
export default {
  components: {},

  props: {
    includeVideo: Boolean,
  },

  setup(props) {
    const store = useStore();
    const video = ref(props.includeVideo);
    const showVideo = video.value;
    const { t } = useI18n({ useScope: "global" });
    const solutionsListOneA = computed(() => t("solutionsListOneA"));
    const solutionsListOneB = computed(() => t("solutionsListOneB"));
    const solutionsListOneC = computed(() => t("solutionsListOneC"));
    const solutionsListOneD = computed(() => t("solutionsListOneD"));
    const solutionsListTwoA = computed(() => t("solutionsListTwoA"));
    const solutionsListTwoB = computed(() => t("solutionsListTwoB"));
    const solutionsListTwoC = computed(() => t("solutionsListTwoC"));
    const solutionsListTwoD = computed(() => t("solutionsListTwoD"));
    const solutionsListTwoE = computed(() => t("solutionsListTwoE"));
    const solutionsListTwoF = computed(() => t("solutionsListTwoF"));
    const solutionsListTwoG = computed(() => t("solutionsListTwoG"));
    const solutionsListTwoH = computed(() => t("solutionsListTwoH"));
    const solutionsListTwoI = computed(() => t("solutionsListTwoI"));
    const solutionsListThreeA = computed(() => t("solutionsListThreeA"));
    const solutionsListThreeB = computed(() => t("solutionsListThreeB"));
    const solutionsListThreeC = computed(() => t("solutionsListThreeC"));
    const solutionsListThreeD = computed(() => t("solutionsListThreeD"));
    const solutionsListThreeE = computed(() => t("solutionsListThreeE"));
    const solutionsListThreeF = computed(() => t("solutionsListThreeF"));
    const solutionsListThreeG = computed(() => t("solutionsListThreeG"));
    const solutionsListThreeH = computed(() => t("solutionsListThreeH"));
    const solutionsURL = computed(() => store.getters["S3/solutionsURL"]);
    const solutionsWebmURL = computed(
      () => store.getters["S3/solutionsWebmURL"]
    );
    const solutionsOggURL = computed(() => store.getters["S3/solutionsOggURL"]);

    const solutionsPosterURL = computed(
      () => store.getters["S3/solutionsPosterURL"]
    );

    function getAbsorbtionList() {
      return [
        {
          icon: "logo",
          title: solutionsListOneA.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListOneB.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListOneC.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListOneD.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
      ];
    }
    function getCustomList() {
      return [
        {
          icon: "logo",
          title: solutionsListTwoA.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListTwoB.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListTwoC.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListTwoD.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListTwoE.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListTwoF.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListTwoG.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListTwoH.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListTwoI.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
      ];
    }
    function getCustomMaintenanceList() {
      return [
        {
          icon: "logo",
          title: solutionsListThreeA.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListThreeB.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListThreeC.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListThreeD.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListThreeE.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListThreeF.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListThreeG.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
        {
          icon: "logo",
          title: solutionsListThreeH.value,
          isCustomSVG: true,
          width: 25,
          height: 25,
          isClickable: false,
        },
      ];
    }

    function goPro() {
      window.location.replace("");
    }
    return {
      showVideo,
      goPro,
      getAbsorbtionList,
      getCustomList,
      getCustomMaintenanceList,
      solutionsURL,
      solutionsWebmURL,
      solutionsOggURL,
      solutionsPosterURL,
    };
  },
};
</script>

<style lang="css" scoped>
.page-layout-2 {
  padding: 100px 100px 250px 100px;
  top: 0;
}
.page-layout-2,
.page-layout-2-flex-box,
.page-layout-2-info,
.page-layout-2-top,
p {
  background-color: rgb(26, 26, 26);
  color: white;
}

.page-layout-2-flex-box > div > h3 {
  margin-bottom: 60px;
}

.page-layout-2-flex-box > div {
  margin: 40px;
  width: 33.33%;
  background-color: rgb(18, 18, 18);
  padding: 30px;
  box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25);
}

.page-layout-2-flex-box > div:nth-child(1) {
  transition-delay: 0.1s;
}

.page-layout-2-flex-box > div:nth-child(2) {
  transition-delay: 0.2s;
}

.page-layout-2-flex-box > div:nth-child(3) {
  transition-delay: 0.3s;
}

.pro {
  margin: 0 auto;
  padding-left: 100px;
  transition-delay: 0.3s;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, red, red 50%, rgb(26, 26, 26) 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  text-decoration: none;
  text-align: right;
  cursor: pointer;
}

.pro:hover {
  transition: 1s;
  animation: linear infinite;
  background-position: 0 100%;
  cursor: pointer;
}

.before-enter {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 1s cubic-bezier(0.41, 0.01, 0.57, 1.61);
}

.enter {
  opacity: 1;
  transform: translateX(0px);
}

.video-wrapper {
  position: relative;
  margin: 0 auto;
  width: 80%;
  max-width: 100%;
  outline: none;
}

#video1 {
  position: relative;
  width: 100%;
  margin: 0 auto;
  outline: none;
}
.video-wrapper:focus {
  outline: none;
}

@media screen and (max-width: 855px) {
  .page-layout-2 {
    padding: 0 0 20px 0;
  }
  .page-layout-2-flex-box > div {
    margin: 0 auto;
    padding: 0 0 20px 0;
    width: 100%;
  }
  .page-layout-2-info {
    padding: 0;
    width: 90%;
    margin: 40px auto;
  }
  .page-layout-2-flex-box {
    flex-direction: column;
  }
  h3 {
    margin: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .page-layout-2 {
    padding: 0 0 0 0;
  }
  .page-layout-2-flex-box > div {
    margin: 0x;
  }
}

@media screen and (max-width: 1250px) {
    .page-layout-2-top {
       padding-top: 250px;
  }

  .video-wrapper {
    padding-bottom: 50px;
  }
  .page-layout-2 {
    padding: 0 0 0 0;
  }
  .page-layout-2-flex-box > div {
    margin: 0x;
  }
}



@media screen and (min-width: 3840px) and (min-height: 2160px) {
  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 5rem;
  }

  h3 {
    font-size: 4rem;
    line-height: 5.7rem;
  }

  .page-layout-2-flex-box > div {
    padding: 100px;
  }
}
</style>
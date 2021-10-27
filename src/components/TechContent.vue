<template>
  <div class="nf">
    <div class="nf-top">
      <div class="content">
        <router-view></router-view> 
        <div class="">
          <ul class="error-list" color="transparent" v-if="errors.length > 0">
            <li
              class="errors fadeIn truncate"
              v-for="error in errors"
              :key="errors.indexOf(error)"
            >
              {{ error }}
            </li>
          </ul>
          <img
          :src="techArticle.signedPosterURLString"
            alt="Content Image"
            id="devImg"
            @load="posterLoadedState()"
            oncontextmenu="return false;"
          />
          <article>{{ techArticle.intro }}</article>
          <div v-for="content in techArticle.content" :key="content.id">
            <article>
              <h2 class="all_subheading">{{ content.subTitle }}</h2>
              <article class="all_paragraph">{{ content.intro }}</article>
              <img
                v-if="content.signedPosterURLString"
                :src="content.signedPosterURLString"
                alt=""
                id="contentImage"
                oncontextmenu="return false;"
              />
            </article> 
           </div>
           <base-button class="button" @click="routeHome()" :title="goBack" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import errorHandler from "../config/error-handler.js";
import BaseButton from "../components/controls/BaseButton.vue";
import { useI18n } from "vue-i18n";
export default {
  components: { BaseButton },

  setup() {
    const store = useStore();
    const router = useRouter();
     const route = useRoute();
         const { t } = useI18n({ useScope: "global" });
    let posterLoaded = ref(false);
    let errors = ref([]);
   const goBack = computed(() => t("goBack"));
   const techArticle = computed(() => { 
     return store.getters["TechArticles/techArticle"] 
     });

    function posterLoadedState() {
      if (Object.keys(techArticle.value).length === 0) {
        fetchByName(route.query.article.split(/(?=[A-Z\d+])/).join(" "));
      } else if (techArticle.value === undefined) {
        router.push("/");
      }
    }

    function loadedState() {
      if (techArticle.value.signedPosterURLString !== null) {
        posterLoaded = true;
      }
    }

    function fetchByName(title) {
      try {
        const payload = {
          title: title,
        };
        return store.dispatch("TechArticles/fetchEagerArticleByName", payload)
      } catch (error) {
        // loading = false;
        errors = [];
        setTimeout(() => {
          errors = [];
        }, 3000);
        return errorHandler.handleError(error, errors);
      }
    }

    function routeHome() {
      router.push({ name: "Home" })
    }

    return {
      posterLoaded,
      posterLoadedState,
      loadedState,
      errors,
      techArticle,
      goBack,
      routeHome
    };
  },
};
</script>

<style lang="css" scoped>
.nf {
  position: relative;
  /* top: 200px; */
  background-color: white;
  padding-bottom: 100px;
  overflow: clip;
  min-height: calc(100vh - 0px);
}
.nf-top {
  position: inherit;
  width: 85%;
  margin: 0 auto;
}

.button {
  width: 150px;
  margin-left: 30px;
}

.button:hover {
color: rgb(32, 152, 243);
border: solid 1px rgb(32, 152, 243);
cursor: pointer;
}

.content {
  position: relative;
  margin: 100px;
  background-color: rgb(26,26, 26);
    box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25) !important;
  -moz-box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25) !important;
  -webkit-box-shadow: 0px 9px 9px 0 rgba(0, 0, 0, 0.25) !important;
padding: 0 0 20px 0;
}

a {
  text-decoration: none;
}

h1 {
  font-weight: bolder;
  transition-delay: 0.1s;
  color: white;
  font-size: 2.9rem;
  padding-bottom: 40px;
  margin-left: 40px;
}

article {
  color: white;
  line-height: 1.8rem;
  font-weight: 300;
  padding: 30px;
  font-size: 1.3rem;
}

#contentImage {
  max-width: 100%;
  margin: 60px auto;
}
#devImg {
  position: relative;
  padding: 0;
  margin: 0 auto;
  align-items: center;
  top: 0;
  width: 100%;
  display: block;
}

.article-block > h1 {
  padding: 40px;
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

@media screen and (max-width: 768px) {

  .nf-top {
  position: inherit;
  width: 100%;
  margin: 0 auto;
}

.content {
  margin: 0;
}

article {
  padding: 10px;
}

  #contentImage {
    max-width: 100%;
    margin: 0;
    margin-top: 40px;
  }
}
</style>
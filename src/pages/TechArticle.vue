<template>
  <div class="nf">
<div class="nf-top">
      <h1 v-scrollanimation>{{ article }}</h1>
  </div>
    <tech-content />
  </div>
</template>

<script>
import { defineComponent, computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import TechContent from '../components/TechContent.vue';
export default defineComponent({
  components: { TechContent },
  setup() {
    const route = useRoute()
    const article = route.query.article.replace(/([A-Z])/g, ' $1').trim()
    const siteData = reactive({
      title: `Cartisim Development | ` + article.value,
      description: ``,
      keywords: `Articles, Swift, Application Development, Web Development, Javascript, Cocoa, iOS, macOS, tvOS, vueJS, Vapor, SwiftNIO`,
    });
      

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
        {
          name: `keywords`,
          content: computed(() => siteData.keywords),
        },
      ],
    });

    return {
      article
    }
  },
});
</script>

<style lang="css" scoped>
.nf {
  position: relative;
  top: 150px;
  background-color: white;
  overflow: clip;
  min-height: calc(100vh - 0px);
}
.nf-top {
    padding-top: 100px;
  background-color: rgb(26, 26, 26)
}
h1 {
  font-weight: bolder;
  transition-delay: 0.1s;
  color: white;
  font-size: 2.9rem;
  padding-bottom: 40px;
  margin-left: 40px;
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
  .nf {
    top: 0;
  }
  .nf-top {
    padding-top: 150px;
  }
}
</style>
<template>
  <div>
    <intro />
    <business-overview />
    <featured-app />
    <projects-component />
    <solutions-component />
  </div>
</template>

<script>
import BusinessOverview from '../components/BusinessOverview.vue';
import FeaturedApp from '../components/featured-app/FeaturedApp.vue';
import SolutionsComponent from '../components/solutions-content/SolutionsComponent.vue';
import Intro from '../components/IntroductoryComponent.vue';
import { defineComponent, computed, reactive } from 'vue';
import { useHead } from '@vueuse/head';
import ProjectsComponent from '../components/ProjectsComponent.vue';
export default defineComponent({
  components: {
    Intro,
    BusinessOverview,
    ProjectsComponent,
    SolutionsComponent,
    FeaturedApp,
  },
  setup() {
    const siteData = reactive({
      title: `NeedleTails Swift Software | Home`,
      description: `NeedleTails - Swift Software Solutions`,
      keywords: `Tutorials, Swift, Application Development, Web Development, Javascript, Cocoa, iOS, macOS, tvOS, vueJS, Vapor, SwiftNIO`,
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
  },
});
</script>

<style></style>

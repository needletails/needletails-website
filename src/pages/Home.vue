<template>
  <div>
    <intro />
    <business-overview />
    <!-- <reasons-component /> -->
    <!-- <solutions-component :include-video="false" /> -->
    <projects-component />
    <application-details />
    <testimonials />
  </div>
</template>

<script>
import BusinessOverview from "../components/BusinessOverview.vue";
import ApplicationDetails from "../components/ApplicationDetails.vue";
import Intro from "../components/IntroductoryComponent.vue";
// import ReasonsComponent from "../components/ReasonsComponent.vue";
import Testimonials from "../components/Testimonials.vue";
import { defineComponent, computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'
// import SolutionsComponent from "../components/SolutionsComponent.vue";
import ProjectsComponent from "../components/ProjectsComponent.vue";
  export default defineComponent({
  setup() {
    const siteData = reactive({
      title: `Cartisim Development | Home`,
      description: `Cartisim- Your Quality Application for learning how to become an Application and Web Developer`,
      keywords: `Tutorials, Swift, Application Development, Web Development, Javascript, Cocoa, iOS, macOS, tvOS, vueJS, Vapor, SwiftNIO`
    })

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
    })
  },
  components: {
    Intro,
    BusinessOverview,
    ApplicationDetails,
    // ReasonsComponent,
    Testimonials,
    // SolutionsComponent,
    ProjectsComponent,
  }
  })
</script>

<style>
</style>
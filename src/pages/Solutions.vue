<template>
  <div>
    <projects-component />
  </div>
</template>

<script>
import { defineComponent, computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import ProjectsComponent from "../components/ProjectsComponent.vue";
export default defineComponent({
  components: { ProjectsComponent },
  setup() {
    const siteData = reactive({
      title: `Cartisim Development | Projects`,
      description: `Our Projects`,
      keywords: `Swift, Application Development, Web Development, Javascript, Cocoa, iOS, macOS, tvOS, vueJS, Vapor, SwiftNIO`,
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

<style>
</style>
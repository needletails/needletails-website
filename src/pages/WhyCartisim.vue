<template>
  <div>
    <what-is-cartisim-component />
  </div>
</template>

<script>
import WhatIsCartisimComponent from "../components/WhatIsCartisimComponent.vue";
import { defineComponent, computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
export default defineComponent({
  components: { WhatIsCartisimComponent },
  setup() {
    const siteData = reactive({
      title: `Cartisim Development | What Is Cartisim?`,
      description: `What is Cartisim For Cartisim App on the Mac App Store`,
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

<style>
</style>
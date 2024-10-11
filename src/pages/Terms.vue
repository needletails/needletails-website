<template>
  <div>
    <terms-component />
  </div>
</template>

<script>
import TermsComponent from '../components/TermsComponent.vue';
import { defineComponent, computed, reactive } from 'vue';
import { useHead } from '@vueuse/head';
export default defineComponent({
  components: { TermsComponent },
  setup() {
    const siteData = reactive({
      title: `NeedleTails | Terms`,
      description: `Terms of Service for NeedleTails`,
      keywords: `Terms of Service Tutorials, Swift, Application Development, Web Development, Javascript, Cocoa, iOS, macOS, tvOS, vueJS, Vapor, SwiftNIO`,
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

<style lang="css" scoped></style>

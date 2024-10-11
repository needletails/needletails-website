<template>
  <div>
    <privacy-component />
  </div>
</template>

<script>
import PrivacyComponent from '../components/PrivacyComponent.vue';
import { defineComponent, computed, reactive } from 'vue';
import { useHead } from '@vueuse/head';
export default defineComponent({
  components: { PrivacyComponent },
  setup() {
    const siteData = reactive({
      title: `NeedleTails| Privacy`,
      description: `Privacy Policy for NeedleTails`,
      keywords: `Privacy Policy, Tutorials, Swift, Application Development, Web Development, Javascript, Cocoa, iOS, macOS, tvOS, vueJS, Vapor, SwiftNIO`,
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

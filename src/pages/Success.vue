<template>
  <div>
    <success-component />
  </div>
</template>

<script>
import { defineComponent, computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import SuccessComponent from "../components/SuccessComponent.vue";
export default defineComponent({
  components: { SuccessComponent },
  setup() {

    const siteData = reactive({
      title: `Cartisim Development | Password Reset Success`,
      description: `Reset Password`,
      keywords: `Password Reset Success, Tutorials, Swift, Application Development, Web Development, Javascript, Cocoa, iOS, macOS, tvOS, vueJS, Vapor, SwiftNIO`,
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

<template>
    <div>
<password-resetter-component />
  </div>
</template>

<script>
import PasswordResetterComponent from '../components/PasswordResetterComponent.vue'
import { defineComponent, computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
export default defineComponent({
  components: { PasswordResetterComponent },
  setup() {
    const siteData = reactive({
      title: `Cartisim Development| Password Resetter`,
      description: `Password Resetter for Cartisim`,
      keywords: `Password Resetter, Tutorials, Swift, Application Development, Web Development, Javascript, Cocoa, iOS, macOS, tvOS, vueJS, Vapor, SwiftNIO`,
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
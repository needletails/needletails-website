<template>
  <div>
<verify-email-component />
  </div>
</template>

<script>
import VerifyEmailComponent from '../components/VerifyEmailComponent.vue'
import { defineComponent, computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
export default defineComponent({
  components: { VerifyEmailComponent },
  setup() {
    const siteData = reactive({
      title: `Cartisim Development | Verify Email`,
      description: `Verify your email to continue with your account setup`,
      keywords: `Verify Email, Tutorials, Swift, Application Development, Web Development, Javascript, Cocoa, iOS, macOS, tvOS, vueJS, Vapor, SwiftNIO`,
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
})
</script>

<style>

</style>
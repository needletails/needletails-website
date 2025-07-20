export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scrollanimation', {
    // SSR support - return empty props during server-side rendering
    getSSRProps() {
      return {}
    },
    
    // Server-side mounted hook (does nothing on server)
    mounted() {
      // No-op on server side
    },
    
    // Server-side unmounted hook (does nothing on server)
    unmounted() {
      // No-op on server side
    }
  })
}) 
export default defineNuxtPlugin((nuxtApp) => {
  const vScrollAnimation = {
    mounted(el: HTMLElement, binding: any) {
      // Only run on client side
      if (import.meta.client) {
        const options = {
          threshold: binding.value?.threshold || 0.1,
          rootMargin: binding.value?.rootMargin || '0px'
        }

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
              observer.unobserve(el)
            }
          })
        }, options)

        // Set initial styles
        el.style.opacity = '0'
        el.style.transform = 'translateY(20px)'
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'

        observer.observe(el)
      }
    },
    unmounted(el: HTMLElement) {
      // Cleanup if needed
    },
    // Add SSR support
    getSSRProps(binding: any) {
      return {
        style: {
          opacity: '0',
          transform: 'translateY(20px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
        }
      }
    }
  }

  // Register the directive globally
  nuxtApp.vueApp.directive('scrollanimation', vScrollAnimation)
}) 
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scrollanimation', {
    // SSR support - return empty props during server-side rendering
    getSSRProps() {
      return {}
    },
    
    mounted(el: HTMLElement, binding) {
      // Only run on client-side
      if (process.server) return
      
      // Add initial state class
      el.classList.add('before-enter')
      
      // Get options from binding value or use defaults
      const options = {
        threshold: binding.value?.threshold || 0.1,
        rootMargin: binding.value?.rootMargin || '0px',
        once: binding.value?.once !== false // Default to true
      }
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add the enter class to trigger animation
            el.classList.add('enter')
            
            // Unobserve if we only want the animation to happen once
            if (options.once) {
              observer.unobserve(el)
            }
          } else if (!options.once) {
            // Remove enter class when element is out of view (for repeat animations)
            el.classList.remove('enter')
          }
        })
      }, {
        threshold: options.threshold,
        rootMargin: options.rootMargin
      })
      
      observer.observe(el)
      
      // Store observer reference for cleanup
      el._scrollAnimationObserver = observer
    },
    
    unmounted(el: HTMLElement) {
      // Clean up observer when element is unmounted
      if (el._scrollAnimationObserver) {
        el._scrollAnimationObserver.disconnect()
        delete el._scrollAnimationObserver
      }
    }
  })
})

// Extend HTMLElement interface for TypeScript support
declare global {
  interface HTMLElement {
    _scrollAnimationObserver?: IntersectionObserver
  }
} 
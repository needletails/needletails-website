export interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
  onEnter?: () => void
  onLeave?: () => void
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const defaultOptions: ScrollAnimationOptions = {
    threshold: 0.1,
    rootMargin: '0px',
    once: true
  }
  
  const config = { ...defaultOptions, ...options }
  
  const observeElement = (el: HTMLElement) => {
    // Add initial state
    el.classList.add('before-enter')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('enter')
          config.onEnter?.()
          
          if (config.once) {
            observer.unobserve(el)
          }
        } else if (!config.once) {
          el.classList.remove('enter')
          config.onLeave?.()
        }
      })
    }, {
      threshold: config.threshold,
      rootMargin: config.rootMargin
    })
    
    observer.observe(el)
    
    // Return cleanup function
    return () => {
      observer.disconnect()
    }
  }
  
  return {
    observeElement
  }
} 
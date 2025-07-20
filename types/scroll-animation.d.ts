declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    // Add any global component types here if needed
  }
  
  export interface ComponentCustomProperties {
    vScrollanimation: {
      threshold?: number
      rootMargin?: string
      once?: boolean
    }
  }
}

export {} 
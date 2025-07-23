export default defineNuxtPlugin(() => {
  // Only run on client side
  if (import.meta.client) {
    // Use nextTick to ensure the app is ready
    nextTick(() => {
      const { getLanguagePreference } = useStorage()
      
      try {
        const storedLanguage = getLanguagePreference()
        
        if (storedLanguage) {
          // Store the language preference in the app context
          // The composable will handle the actual restoration when used
          const nuxtApp = useNuxtApp()
          nuxtApp.$languagePreference = storedLanguage
        }
      } catch (error) {
        console.warn('Failed to restore language preference:', error)
      }
    })
  }
}) 
export default defineNuxtPlugin(() => {
  // Only run on client side
  if (process.client) {
    // Simple initialization without navigation
    onMounted(() => {
      const { getStoredLanguage } = useLanguagePersistence()
      const { locale, locales } = useI18n()
      
      // Check if there's a stored language preference
      const storedLanguage = getStoredLanguage()
      
      if (storedLanguage) {
        // Validate the stored language
        const isValidLanguage = locales.value.some((l: any) => l.code === storedLanguage)
        
        // Only update locale if valid and different
        if (isValidLanguage && storedLanguage !== locale.value) {
          locale.value = storedLanguage as any
        }
      }
    })
  }
}) 
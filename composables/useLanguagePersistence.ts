export const useLanguagePersistence = () => {
  const { locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const route = useRoute()

  // Storage key for language preference
  const LANGUAGE_STORAGE_KEY = 'needletails_language_preference'

  // Get stored language preference
  const getStoredLanguage = (): string | null => {
    if (process.client) {
      try {
        return localStorage.getItem(LANGUAGE_STORAGE_KEY)
      } catch (error) {
        console.warn('Failed to get language from localStorage:', error)
        return null
      }
    }
    return null
  }

  // Store language preference
  const storeLanguage = (languageCode: string): void => {
    if (process.client) {
      try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, languageCode)
      } catch (error) {
        console.warn('Failed to store language in localStorage:', error)
      }
    }
  }

  // Switch to a specific language
  const switchToLanguage = (languageCode: string): void => {
    // Store the preference first
    storeLanguage(languageCode)
    
    // Get the path for the new locale
    const path = switchLocalePath(languageCode as any)
    
    if (path) {
      // Navigate to the new locale path
      navigateTo(path)
    }
  }

  // Get current language code
  const getCurrentLanguage = (): string => {
    return locale.value || 'en'
  }

  // Get current language name
  const getCurrentLanguageName = (): string => {
    const current = locales.value.find((l: any) => l.code === locale.value)
    return current?.name || 'English'
  }

  // Get all available languages
  const getAvailableLanguages = () => {
    return locales.value
  }

  return {
    getStoredLanguage,
    storeLanguage,
    switchToLanguage,
    getCurrentLanguage,
    getCurrentLanguageName,
    getAvailableLanguages
  }
} 
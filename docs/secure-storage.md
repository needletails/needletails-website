# Secure Storage Implementation

This document explains how secure storage is implemented in the NeedleTails website using `secure-ls` for encrypted localStorage.

## Overview

The secure storage implementation provides encrypted localStorage functionality using the `secure-ls` library. All sensitive data stored in the browser is now encrypted using AES encryption.

## Features

- **AES Encryption**: All data is encrypted using AES encryption
- **Compression**: Data is compressed for better performance
- **Fallback Support**: Falls back to regular localStorage if secure-ls fails
- **TypeScript Support**: Full TypeScript support with proper type definitions
- **SSR Safe**: Only runs on the client side to prevent SSR issues

## Components

### 1. useSecureStorage Composable

The core composable that provides encrypted storage functionality:

```typescript
import { useSecureStorage } from '~/composables/useSecureStorage'

const { setItem, getItem, removeItem, clear, getAllKeys, hasKey } = useSecureStorage()

// Store encrypted data
setItem('user_preferences', { theme: 'dark', language: 'en' })

// Retrieve decrypted data
const preferences = getItem<{ theme: string, language: string }>('user_preferences')

// Remove data
removeItem('user_preferences')

// Clear all storage
clear()

// Get all keys
const keys = getAllKeys()

// Check if key exists
const exists = hasKey('user_preferences')
```

### 2. useStorage Composable

A higher-level composable that provides common storage operations:

```typescript
import { useStorage } from '~/composables/useStorage'

const {
  // Language preferences
  getLanguagePreference,
  setLanguagePreference,
  
  // Privacy policies
  getPoliciesAccepted,
  setPoliciesAccepted,
  
  // User preferences
  getUserPreferences,
  setUserPreferences,
  updateUserPreference,
  
  // Theme settings
  getThemeSetting,
  setThemeSetting,
  
  // Session data
  getSessionData,
  setSessionData,
  updateSessionData
} = useStorage()

// Examples
setLanguagePreference('es')
const language = getLanguagePreference()

setPoliciesAccepted(true)
const accepted = getPoliciesAccepted()

updateUserPreference('notifications', true)
const preferences = getUserPreferences()
```

### 3. Secure Storage Plugin

A Nuxt plugin that provides secure storage globally:

```typescript
// Access via $secureStorage in components
const { $secureStorage } = useNuxtApp()

$secureStorage.set('key', 'value')
const value = $secureStorage.get('key')
$secureStorage.remove('key')
$secureStorage.clear()
const keys = $secureStorage.getAllKeys()
```

## Configuration

### Environment Variables

For production, set these environment variables for enhanced security:

```bash
# .env
NUXT_SECURE_STORAGE_KEY=your-super-secure-encryption-key-here
```

### Default Configuration

The secure storage is configured with:

- **Encryption Type**: AES
- **Compression**: Enabled
- **Fallback**: Regular localStorage if secure-ls fails

## Usage Examples

### Storing User Preferences

```typescript
const { updateUserPreference, getUserPreferences } = useStorage()

// Store individual preference
updateUserPreference('theme', 'dark')
updateUserPreference('notifications', true)

// Get all preferences
const preferences = getUserPreferences()
```

### Language Persistence

```typescript
const { setLanguagePreference, getLanguagePreference } = useStorage()

// Store language choice
setLanguagePreference('es')

// Retrieve stored language
const language = getLanguagePreference() || 'en'
```

### Privacy Policy Acceptance

```typescript
const { setPoliciesAccepted, getPoliciesAccepted } = useStorage()

// Mark policies as accepted
setPoliciesAccepted(true)

// Check if policies are accepted
const accepted = getPoliciesAccepted()
```

### Session Data

```typescript
const { updateSessionData, getSessionData } = useStorage()

// Store session information
updateSessionData('lastVisit', new Date().toISOString())
updateSessionData('visitCount', 5)

// Retrieve session data
const sessionData = getSessionData()
```

## Security Considerations

1. **Encryption Key**: Use a strong, unique encryption key in production
2. **Key Rotation**: Consider implementing key rotation for long-term security
3. **Data Minimization**: Only store necessary data in localStorage
4. **Regular Cleanup**: Clear sensitive data when no longer needed

## Migration from Regular localStorage

The implementation includes automatic fallback to regular localStorage if secure-ls fails, ensuring backward compatibility. Existing localStorage data will continue to work while new data is encrypted.

## Browser Support

Secure storage works in all modern browsers that support:
- localStorage
- Web Crypto API (for AES encryption)
- JSON.stringify/parse

## Troubleshooting

### Common Issues

1. **SSR Errors**: Ensure storage operations only run on the client side
2. **Encryption Failures**: Check browser console for encryption errors
3. **Storage Quota**: Monitor localStorage usage to avoid quota exceeded errors

### Debug Mode

Enable debug logging by checking the browser console for storage-related messages.

## Future Enhancements

- [ ] Key rotation mechanism
- [ ] Data expiration
- [ ] Storage quota management
- [ ] Migration utilities for existing data 
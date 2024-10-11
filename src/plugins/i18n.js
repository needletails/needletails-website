import en from '../assets/i18n/en.json';

import { createI18n } from 'vue-i18n';

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: {
    en: en,
  },
});

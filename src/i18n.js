// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/ar/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if a translation is missing
  interpolation: {
    escapeValue: false, // React already escapes HTML, so set this to false
  },
});

export default i18n;

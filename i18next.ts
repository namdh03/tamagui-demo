import { getLocales } from 'expo-localization';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LOCAL_STORAGE from './constants/localStorage';
import deTranslation from './locales/de/translation.json';
import enTranslation from './locales/en/translation.json';
import localStorage from './utils/localStorage';

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  lng: localStorage.getString(LOCAL_STORAGE.LANGUAGE) || getLocales()[0].languageCode || 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'de'],
  interpolation: {
    escapeValue: false,
  },
  resources: {
    de: {
      translation: deTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
});

export default i18n;

import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}.json'
    },
    fallbackLng: 'en',
    debug: true,
    react: {
      useSuspense: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    supportedLngs: ['en', 'ar'],
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    }
  })

export default i18n

export type Locale = 'ar' | 'en'

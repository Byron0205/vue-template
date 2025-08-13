import { createI18n } from 'vue-i18n'
type MessageSchema = typeof import('./es.json')
const DEFAULT_LOCALE = localStorage.getItem('lang') || navigator.language.slice(0, 2) || 'es'

const FALLBACK = 'en'

export const i18n = createI18n<[MessageSchema], 'es' | 'en'>({
  legacy: false, // Composition API
  locale: (['es', 'en'].includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : 'es') as 'es' | 'en',
  fallbackLocale: FALLBACK, messages: {
    es: (await import('./es.json')).default,
    en: (await import('./en.json')).default
  },
  missingWarn: false,
  fallbackWarn: false
})

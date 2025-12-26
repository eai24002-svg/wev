import { computed, ref, watchEffect } from 'vue'
import { messages, type Locale } from './messages'

const STORAGE_KEY = 'asps_locale'

function safeLocale(v: unknown): Locale {
  return v === 'en' ? 'en' : 'ar'
}

export const locale = ref<Locale>(safeLocale(localStorage.getItem(STORAGE_KEY)))

export function setLocale(next: Locale) {
  locale.value = next
  localStorage.setItem(STORAGE_KEY, next)
}

export const dir = computed(() => (locale.value === 'ar' ? 'rtl' : 'ltr'))
export const lang = computed(() => (locale.value === 'ar' ? 'ar' : 'en'))

export function t(key: string) {
  return messages[locale.value][key] ?? messages.ar[key] ?? key
}

// Keep <html> attributes in sync (SEO + RTL/LTR)
watchEffect(() => {
  document.documentElement.setAttribute('lang', lang.value)
  document.documentElement.setAttribute('dir', dir.value)
})



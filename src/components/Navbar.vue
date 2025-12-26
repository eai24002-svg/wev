<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div
      class="border-b border-white/0 transition duration-300 ease-premium"
      :class="scrolled ? 'bg-ink-900/85 backdrop-blur border-white/10' : 'bg-transparent'"
    >
      <div class="container-pro">
        <div class="flex h-16 items-center justify-between gap-4">
          <RouterLink
            to="/"
            class="group inline-flex items-center gap-3 rounded-full px-2 py-1 transition-opacity duration-300 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blood-500/60"
            :aria-label="t('nav.backHome')"
          >
            <img src="/logo.svg" alt="AHMED SAADOON" class="h-10 w-auto sm:h-12 brightness-110 contrast-110" />
          </RouterLink>

          <nav class="hidden items-center gap-6 md:flex" aria-label="التنقل الرئيسي">
            <RouterLink v-for="item in nav" :key="item.to" :to="item.to" class="nav-link">
              <span>{{ t(item.labelKey) }}</span>
              <span class="nav-underline" aria-hidden="true" />
            </RouterLink>
          </nav>

          <div class="hidden items-center gap-2 md:flex">
            <div class="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1">
              <button
                type="button"
                class="px-3 py-2 text-xs font-bold rounded-full transition duration-300 ease-premium"
                :class="locale === 'ar' ? 'bg-white/10 text-bone-50' : 'text-bone-100/70 hover:text-bone-50'"
                @click="setLocale('ar')"
              >
                AR
              </button>
              <button
                type="button"
                class="px-3 py-2 text-xs font-bold rounded-full transition duration-300 ease-premium"
                :class="locale === 'en' ? 'bg-white/10 text-bone-50' : 'text-bone-100/70 hover:text-bone-50'"
                @click="setLocale('en')"
              >
                EN
              </button>
            </div>

            <a class="btn-ghost" :href="quick.whatsapp" target="_blank" rel="noreferrer">
              <span class="text-bone-50">{{ t('global.whatsapp') }}</span>
            </a>
            <RouterLink to="/contact" class="btn-primary">
              {{ t('global.requestQuote') }}
            </RouterLink>
          </div>

          <button
            class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-bone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blood-500/60"
            type="button"
            :aria-expanded="mobileOpen ? 'true' : 'false'"
            aria-controls="mobile-menu"
            @click="toggleMobile"
          >
            <span class="sr-only">{{ t('nav.openMenu') }}</span>
            <svg v-if="!mobileOpen" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <path d="M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <Transition name="mobile">
      <div v-if="mobileOpen" class="md:hidden">
        <div class="container-pro">
          <div
            id="mobile-menu"
            class="mt-2 panel overflow-hidden"
            role="dialog"
            :aria-label="t('nav.mobileMenu')"
          >
            <div class="p-4 space-y-2">
              <RouterLink
                v-for="item in nav"
                :key="item.to"
                :to="item.to"
                class="flex items-center justify-between rounded-xl border border-white/10 bg-white/0 px-4 py-3 text-bone-50 transition hover:bg-white/5"
                @click="closeMobile"
              >
                <span class="font-semibold">{{ t(item.labelKey) }}</span>
                <span class="text-bone-100/70">←</span>
              </RouterLink>

              <div class="hairline my-3" />

              <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <a class="btn-ghost w-full" :href="quick.call">
                  {{ t('global.call') }} (1)
                </a>
                <a class="btn-ghost w-full" :href="quick.call2">
                  {{ t('global.call') }} (2)
                </a>
                <a class="btn-ghost w-full" :href="quick.email">
                  {{ t('global.email') }}
                </a>
                <a class="btn-primary w-full sm:col-span-2" :href="quick.whatsapp" target="_blank" rel="noreferrer">
                  {{ t('global.quickWhatsapp') }} (1)
                </a>
                <a class="btn-ghost w-full sm:col-span-2" :href="quick.whatsapp2" target="_blank" rel="noreferrer">
                  {{ t('global.whatsapp') }} (2)
                </a>
                <div class="sm:col-span-2 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-2">
                  <span class="text-xs text-bone-100/70">Language</span>
                  <div class="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1">
                    <button
                      type="button"
                      class="px-3 py-2 text-xs font-bold rounded-full transition duration-300 ease-premium"
                      :class="locale === 'ar' ? 'bg-white/10 text-bone-50' : 'text-bone-100/70 hover:text-bone-50'"
                      @click="setLocale('ar')"
                    >
                      AR
                    </button>
                    <button
                      type="button"
                      class="px-3 py-2 text-xs font-bold rounded-full transition duration-300 ease-premium"
                      :class="locale === 'en' ? 'bg-white/10 text-bone-50' : 'text-bone-100/70 hover:text-bone-50'"
                      @click="setLocale('en')"
                    >
                      EN
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useEventListener, useWindowScroll } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { locale, setLocale, t } from '@/i18n'

const nav = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.about', to: '/about' },
  { labelKey: 'nav.services', to: '/services' },
  { labelKey: 'nav.portfolio', to: '/portfolio' },
  { labelKey: 'nav.team', to: '/team' },
  { labelKey: 'nav.contact', to: '/contact' },
]

const phones = {
  primary: '+9647726238387',
  secondary: '+96477734441',
}

const quick = {
  call: `tel:${phones.primary}`,
  call2: `tel:${phones.secondary}`,
  whatsapp: `https://wa.me/${phones.primary.replace('+', '')}`,
  whatsapp2: `https://wa.me/${phones.secondary.replace('+', '')}`,
  email: 'mailto:hello@ahmedsaadoon.studio',
}

const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 12)

const mobileOpen = ref(false)
const route = useRoute()

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}
function closeMobile() {
  mobileOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
  },
)

useEventListener(window, 'keydown', (e) => {
  if (e.key === 'Escape') mobileOpen.value = false
})
</script>

<style scoped>
.nav-link {
  position: relative;
  display: inline-flex;
  padding: 0.5rem 0.25rem;
  color: rgba(247, 247, 248, 0.75);
  font-weight: 600;
  transition: color 220ms cubic-bezier(.2,.9,.2,1);
}
.nav-link:hover {
  color: rgba(247, 247, 248, 0.95);
}
.nav-link.router-link-active {
  color: rgba(247, 247, 248, 0.98);
}
.nav-underline {
  position: absolute;
  inset-inline: 0.25rem;
  bottom: 0.25rem;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(270deg, rgba(239,35,60,1), rgba(255,255,255,.9));
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 260ms cubic-bezier(.2,.9,.2,1);
  opacity: 0.95;
}
.nav-link:hover .nav-underline {
  transform: scaleX(1);
}
.nav-link.router-link-active .nav-underline {
  transform: scaleX(1);
}

.mobile-enter-active,
.mobile-leave-active {
  transition: opacity 220ms cubic-bezier(.2,.9,.2,1), transform 220ms cubic-bezier(.2,.9,.2,1);
}
.mobile-enter-from,
.mobile-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>



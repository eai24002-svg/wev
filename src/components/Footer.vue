<template>
  <footer class="mt-24 border-t border-white/10 bg-ink-950">
    <div class="container-pro py-12">
      <div class="grid gap-10 lg:grid-cols-12">
        <div class="space-y-4 lg:col-span-5">
          <div class="flex flex-wrap items-center gap-3">
            <img src="/logo.svg" alt="AHMED SAADOON" class="h-12 w-auto brightness-110 contrast-110" />
          </div>
          <p class="text-bone-100/75 leading-relaxed max-w-xl">
            {{ t('footer.blurb') }}
          </p>

          <div class="flex flex-wrap gap-2">
            <a class="btn-ghost" :href="quick.call">{{ t('global.call') }} (1)</a>
            <a class="btn-ghost" :href="quick.call2">{{ t('global.call') }} (2)</a>
            <a class="btn-ghost" :href="quick.whatsapp" target="_blank" rel="noreferrer">{{ t('global.whatsapp') }} (1)</a>
            <a class="btn-ghost" :href="quick.whatsapp2" target="_blank" rel="noreferrer">{{ t('global.whatsapp') }} (2)</a>
            <a class="btn-ghost" :href="quick.email">{{ t('global.email') }}</a>
          </div>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
          <div class="space-y-3">
            <h3 class="text-sm font-bold text-bone-50">{{ t('footer.nav') }}</h3>
            <ul class="space-y-2 text-sm text-bone-100/75">
              <li><RouterLink class="link-subtle" to="/about">{{ t('nav.about') }}</RouterLink></li>
              <li><RouterLink class="link-subtle" to="/services">{{ t('nav.services') }}</RouterLink></li>
              <li><RouterLink class="link-subtle" to="/portfolio">{{ t('nav.portfolio') }}</RouterLink></li>
              <li><RouterLink class="link-subtle" to="/team">{{ t('nav.team') }}</RouterLink></li>
              <li><RouterLink class="link-subtle" to="/contact">{{ t('nav.contact') }}</RouterLink></li>
            </ul>
          </div>

          <div class="space-y-3">
            <h3 class="text-sm font-bold text-bone-50">{{ t('footer.coreServices') }}</h3>
            <ul class="space-y-2 text-sm text-bone-100/75">
              <li>{{ t('footer.core1') }}</li>
              <li>{{ t('footer.core2') }}</li>
              <li>{{ t('footer.core3') }}</li>
              <li>{{ t('footer.core4') }}</li>
              <li>{{ t('footer.core5') }}</li>
            </ul>
          </div>

          <div class="space-y-3">
            <h3 class="text-sm font-bold text-bone-50">{{ t('footer.workInfo') }}</h3>
            <div class="space-y-2 text-sm text-bone-100/75">
              <p><span class="text-bone-50 font-semibold">{{ t('global.location') }}:</span> {{ t('global.addressValue') }}</p>
              <p><span class="text-bone-50 font-semibold">{{ t('global.director') }}:</span> {{ t('global.directorValue') }}</p>
              <p class="leading-relaxed">
                <span class="text-bone-50 font-semibold">{{ t('global.hours') }}:</span>
                {{ t('global.hoursValue') }}
              </p>
              <a href="https://ul.waze.com/ul?ll=33.25863343%2C44.36088324&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 mt-3 text-bone-100/70 hover:text-blood-400 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                {{ locale === 'ar' ? 'الوصول عبر Waze' : 'Get Directions (Waze)' }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="hairline my-10" />

      <div class="flex flex-col gap-4 text-sm text-bone-100/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ new Date().getFullYear() }} AHMED SAADOON PRODUCTION STUDIO — {{ t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { locale, t } from '@/i18n'

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
</script>



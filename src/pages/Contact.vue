<template>
  <div class="container-pro py-10">
    <div class="space-y-10">
      <SectionTitle
        :kicker="t('contact.kicker')"
        :subtitle="t('contact.subtitle')"
      >
        {{ t('contact.title') }}
      </SectionTitle>

      <section>
        <div class="card p-7">
          <h2 class="text-base font-extrabold text-bone-50">{{ locale === 'ar' ? 'بيانات الاستوديو' : 'Studio details' }}</h2>
          <div class="mt-4 grid gap-3 sm:grid-cols-2">
            <div class="card p-5">
              <p class="text-xs text-bone-100/70">{{ t('global.location') }}</p>
              <p class="mt-1 text-sm font-bold text-bone-50">{{ t('global.addressValue') }}</p>
            </div>
            <div class="card p-5">
              <p class="text-xs text-bone-100/70">{{ t('global.director') }}</p>
              <p class="mt-1 text-sm font-bold text-bone-50">{{ t('global.directorValue') }}</p>
            </div>
            <div class="card p-5 sm:col-span-2">
              <p class="text-xs text-bone-100/70">{{ t('global.hours') }}</p>
              <p class="mt-1 text-sm font-bold text-bone-50 leading-relaxed">
                {{ t('global.hoursValue') }}
              </p>
            </div>
          </div>

          <div class="mt-6 grid gap-2 sm:grid-cols-2">
            <a class="btn-ghost w-full justify-center" :href="quick.call">{{ t('global.call') }} (1)</a>
            <a class="btn-ghost w-full justify-center" :href="quick.call2">{{ t('global.call') }} (2)</a>
            <a class="btn-primary w-full justify-center sm:col-span-2" :href="quick.whatsapp" target="_blank" rel="noreferrer">
              {{ t('global.quickWhatsapp') }} (1)
            </a>
            <a class="btn-ghost w-full justify-center sm:col-span-2" :href="quick.whatsapp2" target="_blank" rel="noreferrer">
              {{ t('global.whatsapp') }} (2)
            </a>
            <a class="btn-ghost w-full justify-center sm:col-span-2" :href="quick.email">{{ t('global.email') }}</a>
            <a class="btn-ghost w-full justify-center sm:col-span-2" :href="quick.waze" target="_blank" rel="noreferrer">
              <svg class="w-5 h-5 inline-block mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {{ locale === 'ar' ? 'الوصول عبر Waze' : 'Get Directions (Waze)' }}
            </a>
          </div>

          <div class="mt-5 card p-5">
            <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'أرقام التواصل' : 'Contact numbers' }}</p>
            <div class="mt-2 flex flex-wrap gap-2 text-sm">
              <span class="badge" dir="ltr">{{ phones.primary }}</span>
              <span class="badge" dir="ltr">{{ phones.secondary }}</span>
            </div>
          </div>

          <div class="hairline my-7" />

          <div class="space-y-3">
            <h3 class="text-sm font-extrabold text-bone-50">{{ locale === 'ar' ? 'الموقع على الخريطة' : 'Location on Map' }}</h3>
            <a :href="quick.waze" target="_blank" rel="noreferrer" class="block relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-blood-500/50 transition-colors group">
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,35,60,.18),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,.08),transparent_55%)]" />
              <div class="relative grid place-items-center p-10 text-center">
                <svg class="w-12 h-12 text-blood-400 mb-3 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p class="text-sm font-bold text-bone-50">{{ locale === 'ar' ? 'افتح في Waze' : 'Open in Waze' }}</p>
                <p class="mt-2 text-xs text-bone-100/70 leading-relaxed max-w-md">
                  {{ locale === 'ar' ? 'انقر للوصول إلى موقعنا عبر تطبيق Waze' : 'Click to get directions via Waze app' }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
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
  waze: 'https://ul.waze.com/ul?ll=33.25863343%2C44.36088324&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
}

</script>



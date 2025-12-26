<template>
  <section class="py-16">
    <div class="container-pro">
      <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-850/70 shadow-soft">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(239,35,60,.25),transparent_55%),radial-gradient(circle_at_75%_20%,rgba(255,255,255,.08),transparent_55%)]" />
        <div class="absolute inset-0 grain" aria-hidden="true" />

        <div class="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div class="space-y-4 lg:col-span-7">
            <p class="badge">
              <span class="h-1.5 w-1.5 rounded-full bg-blood-500" aria-hidden="true" />
              {{ t('section.cta.kicker') }}
            </p>
            <h2 class="text-2xl font-extrabold tracking-tight text-bone-50 sm:text-3xl">
              {{ t('section.cta.title') }}
            </h2>
            <p class="text-bone-100/75 leading-relaxed max-w-2xl">
              {{ t('section.cta.desc') }}
            </p>

            <div class="flex flex-col gap-3 sm:flex-row">
              <RouterLink to="/contact#form" class="btn-primary">{{ t('global.requestQuote') }}</RouterLink>
              <RouterLink to="/services" class="btn-ghost">{{ locale === 'ar' ? 'استعرض الخدمات' : 'Explore services' }}</RouterLink>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div class="card p-5">
                <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'باقات “سوشيال”' : 'Social packages' }}</p>
                <p class="mt-1 text-sm font-bold text-bone-50">{{ locale === 'ar' ? 'محتوى شهري متكرر' : 'Recurring monthly content' }}</p>
                <p class="mt-2 text-xs text-bone-100/70 leading-relaxed">
                  {{ locale === 'ar'
                    ? 'جلسات تصوير + مونتاج سريع + نسخ Reel/Story + تسليم مخصص للمنصات.'
                    : 'Shoot sessions + fast edits + Reel/Story versions + platform-ready exports.' }}
                </p>
              </div>
              <div class="card p-5">
                <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'باقات “شركات”' : 'Corporate packages' }}</p>
                <p class="mt-1 text-sm font-bold text-bone-50">{{ locale === 'ar' ? 'هوية مرئية للعلامة' : 'Brand visual identity' }}</p>
                <p class="mt-2 text-xs text-bone-100/70 leading-relaxed">
                  {{ locale === 'ar'
                    ? 'فيديو تعريفي + لقطات B-roll + مقابلات + ألوان ثابتة + أرشفة.'
                    : 'Brand film + B-roll + interviews + consistent look + organized archive.' }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { locale, t } from '@/i18n'
</script>



<template>
  <div class="container-pro py-16">
    <div class="card p-10 text-center">
      <p class="badge mx-auto w-fit">
        <span class="h-1.5 w-1.5 rounded-full bg-blood-500" aria-hidden="true" />
        404
      </p>
      <h1 class="mt-6 text-2xl font-extrabold text-bone-50 sm:text-3xl">
        {{ locale === 'ar' ? 'الصفحة غير موجودة' : 'Page not found' }}
      </h1>
      <p class="mt-3 text-sm text-bone-100/75 leading-relaxed max-w-xl mx-auto">
        {{ locale === 'ar'
          ? 'يبدو أن الرابط غير صحيح أو تم نقل الصفحة. يمكنك العودة للرئيسية أو استعراض الأعمال والخدمات.'
          : 'The link may be incorrect or the page has moved. You can go back home or explore our work and services.' }}
      </p>
      <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <RouterLink to="/" class="btn-primary">{{ locale === 'ar' ? 'العودة للرئيسية' : 'Back to home' }}</RouterLink>
        <RouterLink to="/portfolio" class="btn-ghost">{{ locale === 'ar' ? 'استعرض الأعمال' : 'View works' }}</RouterLink>
        <RouterLink to="/contact" class="btn-ghost">{{ locale === 'ar' ? 'تواصل' : 'Contact' }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { locale } from '@/i18n'
</script>



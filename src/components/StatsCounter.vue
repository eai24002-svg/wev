<template>
  <section class="py-14">
    <div class="container-pro">
      <div class="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div class="lg:col-span-5 space-y-3">
          <SectionTitle :kicker="t('section.stats.kicker')" :subtitle="t('section.stats.subtitle')">
            {{ t('section.stats.title') }}
          </SectionTitle>
        </div>
        <div ref="sentinel" class="lg:col-span-7">
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="s in stats" :key="s.label" class="card p-5">
              <p class="text-3xl font-extrabold tracking-tight text-bone-50">
                <span dir="ltr">{{ display[s.key] }}</span><span class="text-blood-400">+</span>
              </p>
              <p class="mt-1 text-sm text-bone-100/70">{{ s.label }}</p>
              <p class="mt-3 text-xs text-bone-100/60 leading-relaxed">{{ s.note }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import SectionTitle from '@/components/SectionTitle.vue'
import { ref } from 'vue'
import { locale, t } from '@/i18n'

type StatKey = 'projects' | 'clients' | 'years' | 'specialists'

const stats = computed(() => {
  const isEn = locale.value === 'en'
  const years = 14
  return [
    {
      key: 'projects' as const,
      label: isEn ? 'Videos produced' : 'الفيديوهات المنتجة',
      value: 12000,
      note: isEn ? 'Social-first output across multiple formats and platforms.' : 'إنتاج مستمر لمنصات التواصل بصيغ متعددة وبجودة عالية.',
    },
    {
      key: 'clients' as const,
      label: isEn ? 'Clients served' : 'عملاء تم خدمتهم',
      value: 200,
      note: isEn ? 'High quality content + innovative ideas.' : 'جودة عالية في المحتوى + أفكار مبتكرة.',
    },
    {
      key: 'years' as const,
      label: isEn ? 'Years of experience' : 'سنوات الخبرة',
      value: years,
      note: isEn ? 'Founded in 2012 — proven consistency.' : 'تأسسنا عام 2012 — خبرة متراكمة وانضباط.',
    },
    {
      key: 'specialists' as const,
      label: isEn ? 'Specialists' : 'متخصصون',
      value: 13,
      note: isEn ? 'A passionate team focused on client goals.' : 'فريق يعمل بشغف لتحقيق أهداف عملائنا.',
    },
  ]
})

const display = reactive<Record<StatKey, number>>({
  projects: 0,
  clients: 0,
  years: 0,
  specialists: 0,
})

const sentinel = ref<HTMLElement | null>(null)
let started = false

function animateTo(key: StatKey, to: number, durationMs = 900) {
  const from = display[key]
  const start = performance.now()
  const tick = (t: number) => {
    const p = Math.min(1, (t - start) / durationMs)
    display[key] = Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3)))
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

useIntersectionObserver(
  sentinel,
  ([entry]) => {
    if (!entry?.isIntersecting || started) return
    started = true
    for (const s of stats.value) animateTo(s.key, s.value)
  },
  { threshold: 0.25 },
)
</script>



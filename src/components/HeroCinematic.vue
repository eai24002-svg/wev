<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,35,60,.22),transparent_55%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,.08),transparent_55%),linear-gradient(180deg,rgba(7,8,11,1),rgba(11,13,18,1))]" />
      <div class="absolute inset-0 opacity-70 animate-floatingGradient bg-[length:200%_200%] bg-[linear-gradient(120deg,rgba(239,35,60,.18),rgba(255,255,255,.06),rgba(239,35,60,.08))]" />
      <div class="absolute inset-0 grain" aria-hidden="true" />
      <div class="absolute -inset-10 opacity-35 blur-3xl animate-slowZoomBg bg-[radial-gradient(circle_at_50%_60%,rgba(239,35,60,.25),transparent_55%)]" aria-hidden="true" />
    </div>

    <div class="container-pro relative pt-14 sm:pt-16">
      <div class="grid gap-10 py-16 lg:grid-cols-12 lg:items-center lg:py-20">
        <div class="space-y-6 lg:col-span-7">
          <p class="badge">
            <span class="h-1.5 w-1.5 rounded-full bg-blood-500 shadow-[0_0_18px_rgba(239,35,60,.65)]" aria-hidden="true" />
            {{ t('hero.kicker') }}
          </p>

          <div v-motion :initial="initial" :enter="enter" class="space-y-3">
            <h1 class="h1-cinematic">
              <span class="block text-bone-50">{{ t('hero.line1') }}</span>
              <span class="block">
                <span class="logo-blend font-extrabold">{{ t('brand.nameBold') }}</span>
                <span class="block text-bone-100/80 text-lg sm:text-xl mt-2 tracking-[0.22em]">
                  {{ t('brand.nameRefined') }}
                </span>
              </span>
            </h1>
            <p class="p-muted max-w-2xl">
              {{ t('hero.desc') }}
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
            <RouterLink
              to="/contact#form"
              class="btn-primary"
              @mousemove="magneticMove"
              @mouseleave="magneticLeave"
              :style="magneticStyle"
            >
              {{ t('global.requestQuote') }}
              <span aria-hidden="true">←</span>
            </RouterLink>
            <RouterLink to="/portfolio" class="btn-ghost">
              {{ t('global.viewWorks') }}
            </RouterLink>
            <a class="btn-ghost" :href="quick.whatsapp" target="_blank" rel="noreferrer">
              {{ t('global.quickWhatsapp') }}
            </a>
          </div>

          <div class="grid gap-3 pt-6 sm:grid-cols-3">
            <div class="card p-4">
              <p class="text-xs text-bone-100/70">{{ t('hero.card1.k') }}</p>
              <p class="text-sm font-semibold text-bone-50">{{ t('hero.card1.v') }}</p>
            </div>
            <div class="card p-4">
              <p class="text-xs text-bone-100/70">{{ t('hero.card2.k') }}</p>
              <p class="text-sm font-semibold text-bone-50">{{ t('hero.card2.v') }}</p>
            </div>
            <div class="card p-4">
              <p class="text-xs text-bone-100/70">{{ t('hero.card3.k') }}</p>
              <p class="text-sm font-semibold text-bone-50">{{ t('hero.card3.v') }}</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(239,35,60,.28),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,.10),transparent_55%)]" />
            <img
              class="relative aspect-[4/3] w-full object-cover opacity-90"
              :src="placeholder"
              alt="واجهة بصرية للأعمال"
              loading="eager"
              decoding="async"
            />
            <div class="absolute inset-0">
              <div class="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex items-center justify-between gap-3">
                  <div class="space-y-1">
                    <p class="text-xs text-bone-100/70">{{ t('hero.poster.k') }}</p>
                    <p class="text-sm font-semibold text-bone-50">{{ t('hero.poster.v') }}</p>
                  </div>
                  <div class="h-11 w-11 rounded-full border border-white/15 bg-white/10 backdrop-blur flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M10 8L16 12L10 16V8Z" fill="white" fill-opacity="0.9" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'
import { t } from '@/i18n'

const placeholder = '/placeholder.png'

const quick = {
  whatsapp: 'https://wa.me/9647XXXXXXXXX',
}

const initial = { opacity: 0, y: 12, filter: 'blur(10px)' }
const enter = { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.2, 0.9, 0.2, 1] } }

// Micro-interaction: magnetic CTA (disabled for reduced motion)
const reduced = usePreferredReducedMotion()
const mx = ref(0)
const my = ref(0)

const magneticStyle = computed(() => {
  if (reduced.value === 'reduce') return {}
  return { transform: `translate3d(${mx.value}px, ${my.value}px, 0)` }
})

function magneticMove(e: MouseEvent) {
  if (reduced.value === 'reduce') return
  const target = e.currentTarget as HTMLElement | null
  if (!target) return
  const r = target.getBoundingClientRect()
  const dx = (e.clientX - (r.left + r.width / 2)) / r.width
  const dy = (e.clientY - (r.top + r.height / 2)) / r.height
  mx.value = dx * 10
  my.value = dy * 10
}
function magneticLeave() {
  mx.value = 0
  my.value = 0
}
</script>



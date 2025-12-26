<template>
  <section class="py-14">
    <div class="container-pro">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          :kicker="t('section.testimonials.kicker')"
          :subtitle="t('section.testimonials.subtitle')"
        >
          {{ t('section.testimonials.title') }}
        </SectionTitle>

        <div class="flex items-center gap-2">
          <button type="button" class="btn-ghost" @click="prev" :disabled="busy" :aria-label="locale === 'ar' ? 'السابق' : 'Previous'">
            →
          </button>
          <button type="button" class="btn-ghost" @click="next" :disabled="busy" :aria-label="locale === 'ar' ? 'التالي' : 'Next'">
            ←
          </button>
        </div>
      </div>

      <div class="mt-8 grid gap-4 lg:grid-cols-12 lg:items-stretch">
        <div class="lg:col-span-8">
          <Transition name="slide" mode="out-in">
            <article :key="active.id" class="card p-7 sm:p-8">
              <div class="flex items-start justify-between gap-4">
                <div class="space-y-1">
                  <p class="text-sm font-bold text-bone-50">{{ active.name }}</p>
                  <p class="text-xs text-bone-100/70">{{ active.role }}</p>
                </div>
                <div class="flex gap-1" aria-label="تقييم">
                  <span v-for="n in 5" :key="n" class="text-blood-400" aria-hidden="true">★</span>
                </div>
              </div>
              <p class="mt-5 text-base text-bone-100/80 leading-relaxed">
                “{{ active.quote }}”
              </p>
              <div class="mt-6 flex flex-wrap gap-2">
                <span v-for="t in active.tags" :key="t" class="badge">{{ t }}</span>
              </div>
            </article>
          </Transition>
        </div>

        <aside class="lg:col-span-4">
          <div class="grid gap-3">
            <button
              v-for="t in items"
              :key="t.id"
              type="button"
              class="card p-4 text-right transition duration-300 ease-premium hover:bg-white/5"
              :class="t.id === active.id ? 'border-blood-500/40 shadow-glow' : ''"
              @click="go(t.id)"
            >
              <p class="text-sm font-bold text-bone-50">{{ t.name }}</p>
              <p class="mt-1 text-xs text-bone-100/70 line-clamp-1">{{ t.role }}</p>
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'
import SectionTitle from '@/components/SectionTitle.vue'
import { locale, t } from '@/i18n'

type T = {
  id: string
  name: string
  role: string
  quote: string
  tags: string[]
}

const items = computed<T[]>(() => {
  const isEn = locale.value === 'en'
  return [
    {
      id: 't1',
      name: isEn ? 'Marketing Lead — Local company' : 'مدير تسويق — شركة محلية',
      role: isEn ? 'Commercial campaign + social content' : 'حملة إعلانات + محتوى سوشيال',
      quote: isEn
        ? 'The result truly felt cinematic. More importantly: the project was managed with clarity, and revisions were fast and clean.'
        : 'النتيجة كانت سينمائية فعلاً. الأهم: إدارة المشروع كانت منظمة جداً، والتعديلات تمت بسرعة وبوضوح.',
      tags: isEn ? ['Commercials', 'Social', 'Fast delivery'] : ['إعلانات', 'سوشيال', 'تسليم سريع'],
    },
    {
      id: 't2',
      name: isEn ? 'Events coordinator' : 'منسق فعاليات',
      role: isEn ? 'Event coverage + highlights film' : 'تغطية مناسبة + فيديو Highlights',
      quote: isEn
        ? 'Coverage was precise without chaos. The shots felt alive, and the edit preserved pacing and key moments.'
        : 'التغطية كانت دقيقة بدون إرباك. اللقطات جاءت “حية” والمونتاج حافظ على الإيقاع واللحظات المهمة.',
      tags: isEn ? ['Events', 'Highlights', 'Sound/Lighting'] : ['مناسبات', 'Highlights', 'صوت/إضاءة'],
    },
    {
      id: 't3',
      name: isEn ? 'Startup owner' : 'مالك مشروع ناشئ',
      role: isEn ? 'Brand film + product shoot' : 'فيديو تعريفي + جلسة تصوير منتج',
      quote: isEn
        ? 'They helped turn a simple idea into a brand-respecting video. Color and on-screen typography were excellent.'
        : 'ساعدونا في تحويل فكرة بسيطة إلى فيديو يحترم العلامة. الهوية اللونية والكتابة على الشاشة كانت ممتازة.',
      tags: isEn ? ['Corporate', 'Branding', 'Color grading'] : ['شركات', 'Branding', 'Color Grading'],
    },
  ]
})

const idx = ref(0)
const busy = ref(false)

const active = computed(() => items.value[idx.value]!)

function next() {
  if (busy.value) return
  busy.value = true
  idx.value = (idx.value + 1) % items.value.length
  setTimeout(() => (busy.value = false), 250)
}
function prev() {
  if (busy.value) return
  busy.value = true
  idx.value = (idx.value - 1 + items.value.length) % items.value.length
  setTimeout(() => (busy.value = false), 250)
}
function go(id: string) {
  const i = items.value.findIndex((x) => x.id === id)
  if (i >= 0) idx.value = i
}

const reduced = usePreferredReducedMotion()
let timer: number | undefined

onMounted(() => {
  if (reduced.value === 'reduce') return
  timer = window.setInterval(next, 6500)
})
onUnmounted(() => {
  if (timer) window.clearInterval(timer)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 320ms cubic-bezier(.2,.9,.2,1), transform 420ms cubic-bezier(.2,.9,.2,1), filter 420ms cubic-bezier(.2,.9,.2,1);
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
  filter: blur(10px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
  filter: blur(10px);
}
</style>



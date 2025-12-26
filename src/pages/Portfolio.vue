<template>
  <div class="container-pro py-10">
    <div class="space-y-8">
      <SectionTitle
        :kicker="locale === 'ar' ? 'الأعمال' : 'Portfolio'"
        :subtitle="locale === 'ar'
          ? 'فلترة حسب النوع + نافذة Case Study'
          : 'Filter by category + case study modal'"
      >
        {{ locale === 'ar' ? 'معرض الأعمال — أعمال مختارة' : 'Selected works' }}
      </SectionTitle>

      <PortfolioGrid :items="items" v-model:category="category" @open="openCase" />

      <dialog ref="dialogRef" class="backdrop:bg-ink-950/85 backdrop:backdrop-blur-sm rounded-2xl border border-white/10 bg-ink-900 text-bone-50 w-[min(980px,calc(100%-2rem))]">
        <div class="p-6 sm:p-8">
          <div class="flex items-start justify-between gap-4">
            <div class="space-y-1">
              <p class="text-xs text-bone-100/70">{{ active?.category }} • {{ active?.year }}</p>
              <h3 class="text-xl font-extrabold">{{ active?.title }}</h3>
              <p class="text-sm text-bone-100/75">{{ active?.summary }}</p>
            </div>
            <button class="btn-ghost" type="button" @click="closeCase">{{ locale === 'ar' ? 'إغلاق' : 'Close' }}</button>
          </div>

          <div class="hairline my-6" />

          <div class="grid gap-4 lg:grid-cols-12 lg:items-start">
            <div class="lg:col-span-7">
              <div class="card overflow-hidden">
                <img
                  class="aspect-[16/9] w-full object-cover opacity-90"
                  :src="active?.poster ?? placeholder"
                  :alt="active ? `صورة للعمل: ${active.title}` : 'صورة'"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="mt-4 grid gap-3 sm:grid-cols-3">
                <div class="card p-4">
                  <p class="text-xs text-bone-100/70">العميل</p>
                  <p class="mt-1 text-sm font-bold text-bone-50">{{ active?.client }}</p>
                </div>
                <div class="card p-4">
                  <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'المدة' : 'Duration' }}</p>
                  <p class="mt-1 text-sm font-bold text-bone-50">{{ active?.duration }}</p>
                </div>
                <div class="card p-4">
                  <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'المنصة' : 'Platform' }}</p>
                  <p class="mt-1 text-sm font-bold text-bone-50">{{ active?.platform }}</p>
                </div>
              </div>
            </div>

            <div class="lg:col-span-5 space-y-3">
              <div class="card p-6">
                <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'الهدف' : 'Goal' }}</p>
                <p class="mt-2 text-sm text-bone-100/80 leading-relaxed">{{ active?.goal }}</p>
              </div>
              <div class="card p-6">
                <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'ما الذي نفذناه؟' : 'Deliverables' }}</p>
                <ul class="mt-3 space-y-2 text-sm text-bone-100/80">
                  <li v-for="b in active?.deliverables ?? []" :key="b">- {{ b }}</li>
                </ul>
              </div>
              <div class="card p-6">
                <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'النتيجة' : 'Result' }}</p>
                <p class="mt-2 text-sm text-bone-100/80 leading-relaxed">{{ active?.result }}</p>
              </div>
              <div class="flex flex-wrap gap-2">
                <span v-for="t in active?.tags ?? []" :key="t" class="badge">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import PortfolioGrid, { type PortfolioItem } from '@/components/PortfolioGrid.vue'

const placeholder = '/placeholder.png'
import { locale } from '@/i18n'

type CaseStudy = PortfolioItem & {
  duration: string
  platform: string
  goal: string
  deliverables: string[]
  result: string
}

const items: CaseStudy[] = [
  {
    id: 'p1',
    title: 'إعلان — إطلاق منتج',
    category: 'إعلانات',
    year: '2025',
    client: 'علامة تجارية',
    summary: 'فيديو إعلان قصير بستايل سينمائي وتركيز على تفاصيل المنتج.',
    tags: ['4K', 'Color', 'Sound'],
    duration: '15–30 ثانية',
    platform: 'Instagram / TikTok',
    goal: 'رفع الوعي بالمنتج وتحويله إلى لقطة “تعلق بالذاكرة”.',
    deliverables: ['Main Cut', '3 نسخ قصيرة', 'تسليم بصيغ للمنصات'],
    result: 'نتيجة بصرية نظيفة وتناسق لوني يثبت هوية العلامة عبر الحملة.',
  },
  {
    id: 'p2',
    title: 'تغطية فعالية — Highlights',
    category: 'مناسبات',
    year: '2024',
    client: 'جهة تنظيم',
    summary: 'تغطية متعددة الكاميرات مع Highlights سريع للتسويق اللاحق.',
    tags: ['Multi-Cam', 'Fast'],
    duration: '60–90 ثانية',
    platform: 'YouTube / Social',
    goal: 'توثيق الحدث وصناعة مادة تسويقية لنسخ لاحقة.',
    deliverables: ['Highlights', 'لقطات قصيرة', 'صور ثابتة (اختياري)'],
    result: 'فيديو يعكس نبض الحدث بإيقاع متوازن ولقطات مميزة.',
  },
  {
    id: 'p3',
    title: 'فيديو شركة — تعريف وخدمات',
    category: 'شركات',
    year: '2025',
    client: 'شركة',
    summary: 'فيديو تعريفي بمقابلات + لقطات B-roll وتايتل بسيط.',
    tags: ['Interviews', 'B-roll'],
    duration: '60–120 ثانية',
    platform: 'Website / YouTube',
    goal: 'شرح الخدمات بشكل واضح مع إحساس احترافي.',
    deliverables: ['Main Video', 'Cutdowns', 'تدرج لوني'],
    result: 'سرد مرتب يوصل الرسالة بدون مبالغة مع صورة مؤسساتية قوية.',
  },
  {
    id: 'p4',
    title: 'حزمة سوشيال — شهر كامل',
    category: 'سوشيال',
    year: '2025',
    client: 'عميل',
    summary: 'حزمة فيديوهات قصيرة بقالب ثابت ومحتوى متكرر.',
    tags: ['Reels', 'Templates'],
    duration: '10–20 فيديو',
    platform: 'Instagram / TikTok',
    goal: 'زيادة النشر المنتظم مع الحفاظ على هوية ثابتة.',
    deliverables: ['قالب بصري', 'فيديوهات قصيرة', 'Cover Frames'],
    result: 'مظهر ثابت وسهل الاستهلاك يساعد في نمو الحساب وتكرار التفاعل.',
  },
  {
    id: 'p5',
    title: 'استوديو — تصوير منتج',
    category: 'استوديو',
    year: '2024',
    client: 'منتج',
    summary: 'إضاءة دقيقة لإبراز الخامة واللون والتفاصيل.',
    tags: ['Studio', 'Lighting'],
    duration: '15–45 ثانية',
    platform: 'Ads / Website',
    goal: 'تقديم المنتج بأفضل شكل بصري ممكن.',
    deliverables: ['لقطات رئيسية', 'نسخ قصيرة', 'صور Poster'],
    result: 'لقطات نظيفة قابلة للاستخدام في الإعلان والمتجر والبوستات.',
  },
]

const category = ref('الكل')
const dialogRef = ref<HTMLDialogElement | null>(null)
const activeId = ref<string | null>(null)

const active = computed(() => items.find((x) => x.id === activeId.value) ?? null)

function openCase(id: string) {
  activeId.value = id
  dialogRef.value?.showModal()
}
function closeCase() {
  dialogRef.value?.close()
}
</script>



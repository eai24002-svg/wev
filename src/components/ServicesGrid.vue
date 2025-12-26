<template>
  <section class="py-14">
    <div class="container-pro">
      <div class="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div class="lg:col-span-5 space-y-4 pt-2">
          <SectionTitle
            :kicker="t('section.services.kicker')"
            :subtitle="t('section.services.subtitle')"
          >
            {{ t('section.services.title') }}
          </SectionTitle>
          <div class="flex flex-wrap gap-2">
            <span class="badge">{{ locale === 'ar' ? 'تسويق' : 'Marketing' }}</span>
            <span class="badge">{{ locale === 'ar' ? 'تصوير' : 'Filming' }}</span>
            <span class="badge">{{ locale === 'ar' ? 'إنتاج' : 'Production' }}</span>
            <span class="badge">{{ locale === 'ar' ? 'تصميم' : 'Design' }}</span>
            <span class="badge">{{ locale === 'ar' ? 'إدارة صفحات' : 'Page management' }}</span>
            <span class="badge">{{ locale === 'ar' ? 'ترويج' : 'Promotion' }}</span>
            <span class="badge">{{ locale === 'ar' ? 'إعلانات خارجية' : 'Outdoor ads' }}</span>
          </div>
        </div>

        <div ref="sentinel" class="lg:col-span-7">
          <div class="grid gap-3 sm:grid-cols-2">
            <article
              v-for="svc in services"
              :key="svc.title"
              class="card p-6 group transition duration-300 ease-premium hover:-translate-y-1 hover:shadow-glow flex flex-col h-full"
              v-motion
              :initial="{ opacity: 0, y: 10, filter: 'blur(8px)' }"
              :enter="{ opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7 } }"
            >
              <div class="flex items-start justify-between gap-4 mb-4">
                <div class="space-y-2 flex-1 min-w-0">
                  <h3 class="text-base font-bold text-bone-50 leading-tight">{{ svc.title }}</h3>
                  <p class="text-sm text-bone-100/70 leading-relaxed line-clamp-3">{{ svc.desc }}</p>
                </div>
                <div
                  class="h-12 w-12 flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-blood-400"
                  aria-hidden="true"
                >
                  <component :is="svc.icon" />
                </div>
              </div>
              <div class="mt-auto flex flex-wrap gap-2">
                <span v-for="tag in svc.tags" :key="tag" class="badge">{{ tag }}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, h, ref } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { locale, t } from '@/i18n'

const sentinel = ref<HTMLElement | null>(null)

const IconCamera = () =>
  h(
    'svg',
    { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' },
    [
      h('path', { d: 'M8 7l2-2h4l2 2', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
      h('path', { d: 'M5 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z', stroke: 'currentColor', 'stroke-width': 2 }),
      h('path', { d: 'M12 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', stroke: 'currentColor', 'stroke-width': 2 }),
    ],
  )

const IconCut = () =>
  h(
    'svg',
    { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' },
    [
      h('path', { d: 'M4 4l16 16', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
      h('path', { d: 'M4 20L20 4', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
    ],
  )

const IconGrade = () =>
  h(
    'svg',
    { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' },
    [
      h('path', { d: 'M4 18h16', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
      h('path', { d: 'M7 18V8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v10', stroke: 'currentColor', 'stroke-width': 2 }),
      h('path', { d: 'M9 10h6', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
    ],
  )

const IconStudio = () =>
  h(
    'svg',
    { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' },
    [
      h('path', { d: 'M4 20V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12', stroke: 'currentColor', 'stroke-width': 2 }),
      h('path', { d: 'M8 20v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6', stroke: 'currentColor', 'stroke-width': 2 }),
    ],
  )

const IconMarketing = () =>
  h(
    'svg',
    { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' },
    [
      h('path', { d: 'M4 12v-2a2 2 0 0 1 2-2h2l7-3v14l-7-3H6a2 2 0 0 1-2-2Z', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linejoin': 'round' }),
      h('path', { d: 'M16 10c1.5.8 1.5 3.2 0 4', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
    ],
  )

const IconDesign = () =>
  h(
    'svg',
    { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' },
    [
      h('path', { d: 'M12 20h9', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
      h('path', { d: 'M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linejoin': 'round' }),
    ],
  )

const IconChat = () =>
  h(
    'svg',
    { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' },
    [
      h('path', { d: 'M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linejoin': 'round' }),
      h('path', { d: 'M8 9h8', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
      h('path', { d: 'M8 13h6', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
    ],
  )

const IconTarget = () =>
  h(
    'svg',
    { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' },
    [
      h('circle', { cx: 12, cy: 12, r: 8, stroke: 'currentColor', 'stroke-width': 2 }),
      h('circle', { cx: 12, cy: 12, r: 3, stroke: 'currentColor', 'stroke-width': 2 }),
      h('path', { d: 'M12 4V2', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
    ],
  )

const IconBillboard = () =>
  h(
    'svg',
    { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' },
    [
      h('path', { d: 'M4 5h16v10H4V5Z', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linejoin': 'round' }),
      h('path', { d: 'M8 15v6', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
      h('path', { d: 'M16 15v6', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
      h('path', { d: 'M7 9h10', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
    ],
  )

const IconClap = () =>
  h(
    'svg',
    { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' },
    [
      h('path', { d: 'M4 7h16l-2 4H2l2-4Z', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linejoin': 'round' }),
      h('path', { d: 'M3 11h18v9H3v-9Z', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linejoin': 'round' }),
      h('path', { d: 'M8 7l1-3', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
      h('path', { d: 'M12 7l1-3', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
      h('path', { d: 'M16 7l1-3', stroke: 'currentColor', 'stroke-width': 2, 'stroke-linecap': 'round' }),
    ],
  )

const services = computed(() => {
  const isEn = locale.value === 'en'
  return [
    {
      title: isEn ? 'Marketing department' : 'قسم التسويق',
      desc: isEn
        ? 'Marketing strategies, ad campaigns, and persuasive ad copywriting for social platforms.'
        : 'إعداد استراتيجيات تسويقية، إنشاء حملات إعلانية، وكتابة المحتوى الإعلاني لمنصات التواصل.',
      tags: isEn ? ['Strategy', 'Campaigns', 'Copywriting'] : ['استراتيجية', 'حملات', 'كتابة محتوى'],
      icon: IconMarketing,
    },
    {
      title: isEn ? 'Filming department' : 'قسم التصوير',
      desc: isEn
        ? 'Product, conferences, and commercials shooting — with all sub-types and on-location setups.'
        : 'تصوير المنتجات والمؤتمرات والإعلانات بجميع تفرعاتها — داخل وخارج الاستوديو.',
      tags: isEn ? ['Products', 'Conferences', 'Commercials'] : ['منتجات', 'مؤتمرات', 'إعلانات'],
      icon: IconCamera,
    },
    {
      title: isEn ? 'Production department' : 'قسم الإنتاج',
      desc: isEn
        ? 'High-end videos and high-quality photos for all advertising types — ready for publishing.'
        : 'إنتاج فيديوهات احترافية وصور بجودة عالية لجميع تفرعات الإعلانات — جاهزة للنشر.',
      tags: isEn ? ['Video', 'Photo', 'Delivery'] : ['فيديو', 'صور', 'تسليم'],
      icon: IconClap,
    },
    {
      title: isEn ? 'Design department' : 'قسم التصميم',
      desc: isEn
        ? 'Logo design, full visual identity, and social media posts aligned with your brand.'
        : 'تصميم شعارات وهوية بصرية ومنشورات للسوشيال ميديا بما يتوافق مع علامتك.',
      tags: isEn ? ['Logo', 'Identity', 'Social posts'] : ['شعار', 'هوية', 'منشورات'],
      icon: IconDesign,
    },
    {
      title: isEn ? 'Page management' : 'قسم إدارة الصفحات',
      desc: isEn
        ? 'Posting (posts + stories), monitoring, and replying to messages and comments.'
        : 'النشر (بوست وستوري)، المتابعة، والرد على الرسائل والتعليقات.',
      tags: isEn ? ['Posting', 'Community', 'Support'] : ['نشر', 'متابعة', 'ردود'],
      icon: IconChat,
    },
    {
      title: isEn ? 'Promotion management' : 'قسم إدارة الترويج',
      desc: isEn
        ? 'Promoting content and ad campaigns across all platforms with performance tracking.'
        : 'ترويج المحتوى والحملات الإعلانية على جميع المنصات مع متابعة الأداء.',
      tags: isEn ? ['Boosting', 'Ads', 'Optimization'] : ['ترويج', 'إعلانات', 'تحسين'],
      icon: IconTarget,
    },
    {
      title: isEn ? 'Outdoor advertising' : 'قسم الإعلانات الخارجية',
      desc: isEn
        ? 'Providing outdoor ad spaces across multiple areas and key locations.'
        : 'توفير مساحات للإعلانات الخارجية بمختلف المناطق والمواقع.',
      tags: isEn ? ['Billboards', 'Locations', 'Reach'] : ['مساحات', 'مناطق', 'انتشار'],
      icon: IconBillboard,
    },
  ]
})
</script>



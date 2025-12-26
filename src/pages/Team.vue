<template>
  <div class="container-pro py-10">
    <div class="space-y-10">
      <SectionTitle
        :kicker="locale === 'ar' ? 'الفريق' : 'Team'"
        :subtitle="locale === 'ar'
          ? 'فريق إنتاج متكامل — كل دور مكمل للآخر'
          : 'A complete production team — each role supports the other'"
      >
        {{ locale === 'ar' ? 'فريق AHMED SAADOON PRODUCTION STUDIO' : 'AHMED SAADOON PRODUCTION STUDIO team' }}
      </SectionTitle>

      <section class="grid gap-4 lg:grid-cols-12 lg:items-stretch">
        <div class="lg:col-span-5 card p-7 relative overflow-hidden">
          <div class="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-blood-500/18 blur-3xl" aria-hidden="true" />
          <p class="badge">
            <span class="h-1.5 w-1.5 rounded-full bg-blood-500" aria-hidden="true" />
            Director Highlight
          </p>
          <h2 class="mt-4 text-xl font-extrabold text-bone-50">احمد سعدون</h2>
          <p class="mt-1 text-sm text-bone-100/70">
            {{ locale === 'ar' ? 'مدير الاستوديو • إدارة إنتاج • رؤية إخراجية' : 'Studio director • Production management • Creative direction' }}
          </p>
          <p class="mt-4 text-sm text-bone-100/80 leading-relaxed">
            {{ locale === 'ar'
              ? 'يركز على بناء هوية بصرية متسقة لكل مشروع، وضبط الإيقاع بين التصوير والمونتاج والتدرج اللوني لضمان تسليم “سينمائي” يناسب العلامة والجمهور والمنصة.'
              : 'Focused on building a consistent visual identity per project and aligning shooting, editing, and grading to ensure a cinematic delivery that fits the brand, audience, and platform.' }}
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span class="badge">إدارة مشروع</span>
            <span class="badge">Creative Direction</span>
            <span class="badge">Quality Control</span>
          </div>
          <RouterLink to="/contact" class="mt-6 inline-flex btn-primary w-full justify-center">
            {{ locale === 'ar' ? 'تواصل مع الاستوديو' : 'Contact the studio' }}
          </RouterLink>
        </div>

        <div class="lg:col-span-7 grid gap-3 sm:grid-cols-2">
          <div v-for="m in members" :key="m.name" class="card p-6">
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-sm font-extrabold text-bone-50">{{ m.name }}</p>
                <p class="mt-1 text-xs text-bone-100/70">{{ m.role }}</p>
              </div>
              <div class="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 grid place-items-center text-blood-400" aria-hidden="true">
                <span class="text-sm font-bold">{{ m.badge }}</span>
              </div>
            </div>
            <p class="mt-4 text-sm text-bone-100/75 leading-relaxed">{{ m.desc }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="t in m.tags" :key="t" class="badge">{{ t }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="card p-7">
        <h3 class="text-base font-extrabold text-bone-50">{{ locale === 'ar' ? 'كيف نعمل كفريق؟' : 'How we work as one team' }}</h3>
        <p class="mt-3 text-sm text-bone-100/75 leading-relaxed">
          {{ locale === 'ar'
            ? 'نؤمن أن الجودة هي “سلسلة” لا تنكسر: تصوير مضبوط → مونتاج بإيقاع صحيح → تدرج لوني ثابت → تسليم نظيف. لذلك نستخدم Workflow واحد، وقوالب تسليم، ونظام مراجعات يقلل الأخطاء ويزيد السرعة.'
            : 'We treat quality as an unbroken chain: controlled shooting → paced editing → consistent grading → clean delivery. That’s why we use one workflow, export templates, and a review system that reduces errors and increases speed.' }}
        </p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
import { computed } from 'vue'
import { locale } from '@/i18n'

const members = computed(() => {
  const isEn = locale.value === 'en'
  return [
    {
      name: isEn ? 'Filming lead' : 'قائد فريق التصوير',
      role: isEn ? 'Filming crews • Cameras • Lighting' : 'Filming Crews • كاميرات • إضاءة',
      badge: 'FC',
      desc: isEn
        ? 'Organizes sets, controls lighting, and manages coverage to ensure clean footage that edits fast.'
        : 'تنظيم مواقع التصوير، ضبط الإضاءة، وإدارة اللقطات لضمان مادة خام نظيفة وسهلة المونتاج.',
      tags: ['Lighting', 'Multi-Cam', 'Set'],
    },
    {
      name: isEn ? 'Editor' : 'مونتير',
      role: 'Editing / Montage',
      badge: 'ED',
      desc: isEn
        ? 'Builds narrative and pacing, delivering multiple platform versions while keeping a consistent identity.'
        : 'يبني الإيقاع والسرد، ويقدم نسخ متعددة للمنصات مع الحفاظ على هوية ثابتة.',
      tags: ['Pacing', 'Cutdowns', 'Titles'],
    },
    {
      name: 'Colorist',
      role: 'Color Grading',
      badge: 'CG',
      desc: isEn ? 'Designs the look and keeps color consistent across scenes for a cinematic result.' : 'تصميم Look وتوحيد الألوان عبر المشاهد لضمان نتيجة سينمائية وواقعية.',
      tags: ['Look Design', 'Skin', 'Consistency'],
    },
    {
      name: isEn ? 'Studio shooter' : 'مصور استوديو',
      role: 'Studio Shooting',
      badge: 'ST',
      desc: isEn
        ? 'Clean studio sessions for products, interviews, and podcasts with stable, flexible setups.'
        : 'جلسات تصوير نظيفة للمنتجات والمقابلات والبودكاست ضمن إعدادات ثابتة ومرنة.',
      tags: ['Studio', 'Product', 'Portrait'],
    },
  ]
})
</script>



<template>
  <section class="py-14">
    <div class="container-pro">
      <div class="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div class="lg:col-span-5">
          <SectionTitle
            :kicker="t('section.faq.kicker')"
            :subtitle="t('section.faq.subtitle')"
          >
            {{ t('section.faq.title') }}
          </SectionTitle>
          <div class="mt-6 card p-5">
            <p class="text-sm text-bone-100/75 leading-relaxed">
              {{ locale === 'ar'
                ? 'نفضّل دائماً مكالمة قصيرة لتحديد الهدف، الجمهور، والمنصات، ثم نبني “خطة إنتاج” واضحة: جدول — لقطات — نسخة مونتاج — تدرّج لوني — تسليم.'
                : 'We prefer a quick call to align on goal, audience, and platforms — then we build a clear production plan: schedule → shots → edit → grade → delivery.' }}
            </p>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="space-y-3">
            <div v-for="(q, i) in items" :key="q.q" class="card overflow-hidden">
              <h3>
                <button
                  type="button"
                  class="flex w-full items-center justify-between gap-4 p-5 text-right"
                  :aria-expanded="open === i ? 'true' : 'false'"
                  :aria-controls="`faq-${i}`"
                  @click="toggle(i)"
                >
                  <span class="text-sm font-bold text-bone-50">{{ q.q }}</span>
                  <span
                    class="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-bone-50 transition duration-300 ease-premium"
                    :class="open === i ? 'rotate-180' : ''"
                    aria-hidden="true"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </button>
              </h3>

              <div
                :id="`faq-${i}`"
                class="grid transition-[grid-template-rows] duration-300 ease-premium"
                :style="{ gridTemplateRows: open === i ? '1fr' : '0fr' }"
              >
                <div class="overflow-hidden px-5 pb-5">
                  <p class="text-sm text-bone-100/75 leading-relaxed">
                    {{ q.a }}
                  </p>
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
import SectionTitle from '@/components/SectionTitle.vue'
import { locale, t } from '@/i18n'

const open = ref<number>(0)

const items = computed(() => {
  const isEn = locale.value === 'en'
  return [
    {
      q: isEn ? 'Do you offer corporate & monthly social packages?' : 'هل تقدمون باقات للشركات والمحتوى الشهري؟',
      a: isEn
        ? 'Yes. We offer flexible monthly retainers: shoot sessions, number of videos, multi-format exports, and structured revisions within a clear timeline.'
        : 'نعم. لدينا باقات شهرية مرنة لمحتوى السوشيال وتصوير الشركات: عدد جلسات تصوير، عدد فيديوهات، صيغ تسليم متعددة، ومراجعات محددة ضمن الجدول.',
    },
    {
      q: isEn ? 'How long does a single video take?' : 'كم تستغرق مدة تنفيذ مشروع فيديو واحد؟',
      a: isEn
        ? 'It depends. Social videos can be delivered in a few days, while commercials/documentaries need more planning, shooting, and reviews. We share a clear schedule upfront.'
        : 'يعتمد على نوع المشروع. غالباً ننجز فيديو سوشيال خلال أيام قليلة، بينما الإعلانات والوثائقيات تحتاج تخطيطاً وتصويراً ومراجعات أكثر. نشاركك جدولاً واضحاً من البداية.',
    },
    {
      q: isEn ? 'Can you mix studio + on-location in one project?' : 'هل يمكنكم تصوير داخل الاستوديو وخارجه بنفس المشروع؟',
      a: isEn
        ? 'Absolutely. We combine studio setups with on-location shooting while keeping a consistent look through lighting and color grading.'
        : 'بالتأكيد. ندمج تصوير الاستوديو مع تصوير المواقع، ونحافظ على نفس الهوية البصرية عبر الإضاءة والتدرج اللوني.',
    },
    {
      q: isEn ? 'Do you offer grading-only services?' : 'هل تقدمون خدمات تدرّج لوني فقط؟',
      a: isEn
        ? 'Yes. If you already have footage, we can take the raws and deliver grading + look design aligned with your brand.'
        : 'نعم. إذا كان لديك تصوير جاهز، يمكننا استلام المواد الخام وتنفيذ Color Grading وتصميم Look حسب هوية مشروعك.',
    },
    {
      q: isEn ? 'How do revisions work?' : 'كيف تتم المراجعات والتعديلات؟',
      a: isEn
        ? 'We keep revisions structured: first cut → consolidated notes → final cut. This reduces time, improves quality, and keeps your team aligned.'
        : 'نستخدم أسلوب مراجعات منظمة: نسخة أولى → ملاحظات مجمعة → نسخة نهائية. هذا يقلل الزمن ويضمن جودة أعلى وتوافقاً داخل فريقك.',
    },
  ]
})

function toggle(i: number) {
  open.value = open.value === i ? -1 : i
}
</script>



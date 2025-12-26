<template>
  <div class="container-pro py-10">
    <div class="space-y-8">
      <SectionTitle
        :kicker="locale === 'ar' ? 'من نحن' : 'About'"
        :subtitle="locale === 'ar'
          ? 'AHMED SAADOON PRODUCTION STUDIO — استوديو إنتاج إعلامي متكامل في بغداد، يعمل بمنهجية واضحة من التخطيط إلى التسليم.'
          : 'AHMED SAADOON PRODUCTION STUDIO — a full-service production studio in Baghdad, operating with a clear system from planning to delivery.'"
      >
        {{ locale === 'ar' ? 'قصة الاستوديو ورؤيتنا' : 'Our story & vision' }}
      </SectionTitle>

      <section class="grid gap-4 lg:grid-cols-12">
        <div class="lg:col-span-7 card p-7">
          <h2 class="text-lg font-extrabold text-bone-50">{{ t('about.story.h') }}</h2>
          <p class="mt-3 text-bone-100/75 leading-relaxed">
            {{ t('about.story.p') }}
          </p>
          <div class="mt-5 grid gap-3 sm:grid-cols-3">
            <div class="card p-4">
              <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'القيمة' : 'Value' }}</p>
              <p class="mt-1 text-sm font-bold text-bone-50">{{ locale === 'ar' ? 'تسويق + إنتاج' : 'Marketing + Production' }}</p>
            </div>
            <div class="card p-4">
              <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'القيمة' : 'Value' }}</p>
              <p class="mt-1 text-sm font-bold text-bone-50">{{ locale === 'ar' ? 'أكثر من 200 عميل' : '200+ clients' }}</p>
            </div>
            <div class="card p-4">
              <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'القيمة' : 'Value' }}</p>
              <p class="mt-1 text-sm font-bold text-bone-50">{{ locale === 'ar' ? 'فريق 13 متخصصاً' : '13 specialists' }}</p>
            </div>
          </div>
        </div>

        <aside class="lg:col-span-5 space-y-3">
          <div class="card p-6">
            <p class="text-xs text-bone-100/70">{{ t('global.location') }}</p>
            <p class="mt-1 text-sm font-bold text-bone-50">{{ t('global.addressValue') }}</p>
            <a href="https://ul.waze.com/ul?ll=33.25863343%2C44.36088324&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" rel="noreferrer" class="mt-3 inline-flex items-center gap-2 text-xs text-bone-100/70 hover:text-blood-400 transition-colors">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {{ locale === 'ar' ? 'الوصول عبر Waze' : 'Get Directions (Waze)' }}
            </a>
          </div>
          <div class="card p-6">
            <p class="text-xs text-bone-100/70">{{ t('global.director') }}</p>
            <p class="mt-1 text-sm font-bold text-bone-50">{{ t('global.directorValue') }}</p>
          </div>
          <div class="card p-6">
            <p class="text-xs text-bone-100/70">{{ t('global.hours') }}</p>
            <p class="mt-1 text-sm font-bold text-bone-50 leading-relaxed">
              {{ t('global.hoursValue') }}
            </p>
          </div>
        </aside>
      </section>

      <section class="grid gap-4 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <SectionTitle
            :kicker="locale === 'ar' ? 'قيمنا' : 'Values'"
            :subtitle="locale === 'ar' ? 'مبادئ تُترجم إلى قرارات يومية داخل فريق الإنتاج.' : 'Principles that turn into daily decisions inside the production team.'"
          >
            {{ locale === 'ar' ? 'ما الذي يميزنا؟' : 'What sets us apart?' }}
          </SectionTitle>
        </div>
        <div class="lg:col-span-7 grid gap-3 sm:grid-cols-2">
          <div v-for="v in values" :key="v.title" class="card p-6">
            <p class="text-sm font-extrabold text-bone-50">{{ v.title }}</p>
            <p class="mt-2 text-sm text-bone-100/75 leading-relaxed">{{ v.desc }}</p>
          </div>
        </div>
      </section>

      <section class="grid gap-4 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <SectionTitle
            :kicker="locale === 'ar' ? 'الإمكانيات' : 'Capabilities'"
            :subtitle="locale === 'ar'
              ? 'فِرق متعددة تعمل معاً: تصوير، مونتاج، تدرج لوني، وتصوير استوديو — مع تركيز على التسليم النهائي.'
              : 'Multiple teams working as one: filming, editing, color grading, and studio shooting — focused on final delivery.'"
          >
            {{ locale === 'ar' ? 'قدراتنا باختصار' : 'What we can do' }}
          </SectionTitle>
        </div>
        <div class="lg:col-span-7 card p-7">
          <ul class="grid gap-3 sm:grid-cols-2 text-sm text-bone-100/80">
            <li>{{ locale === 'ar' ? 'تصوير إعلانات، وثائقيات، حفلات، مناسبات، شركات، ومحتوى سوشيال' : 'Commercials, documentaries, weddings, events, corporate and social content' }}</li>
            <li>{{ locale === 'ar' ? 'مونتاج احترافي بإيقاع يناسب الجمهور والمنصة' : 'Professional editing with pacing tailored to your audience and platform' }}</li>
            <li>{{ locale === 'ar' ? 'Color Grading وتصميم Look وهوية لونية' : 'Color grading + look design + consistent visual identity' }}</li>
            <li>{{ locale === 'ar' ? 'تصوير داخل الاستوديو: منتجات، مقابلات، بودكاست' : 'Studio shoots: products, interviews, podcasts' }}</li>
            <li>{{ locale === 'ar' ? 'تسليم صيغ متعددة + أرشفة منظمة للمواد' : 'Multi-format delivery + organized archiving' }}</li>
            <li>{{ locale === 'ar' ? 'إدارة مشروع: Brief → جدول → مراجعات → تسليم' : 'Project management: brief → schedule → reviews → delivery' }}</li>
          </ul>
        </div>
      </section>

      <section class="grid gap-4 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <SectionTitle
            :kicker="locale === 'ar' ? 'شراكات' : 'Partnerships'"
            :subtitle="locale === 'ar'
              ? 'نرحب بالتعاون مع وكالات الإعلان، فرق التسويق، المنصات، ومنتجي المحتوى.'
              : 'We collaborate with ad agencies, marketing teams, platforms, and content creators.'"
          >
            {{ locale === 'ar' ? 'تعاونات وانتسابات' : 'Collaborations' }}
          </SectionTitle>
        </div>
        <div class="lg:col-span-7 grid gap-3 sm:grid-cols-2">
          <div class="card p-6">
            <p class="text-sm font-extrabold text-bone-50">{{ locale === 'ar' ? 'وكالات الإعلان' : 'Ad agencies' }}</p>
            <p class="mt-2 text-sm text-bone-100/75 leading-relaxed">
              {{ locale === 'ar' ? 'تنفيذ تصوير ومونتاج وتلوين لحملات متعددة بصيغ مختلفة.' : 'Production execution for campaigns across multiple formats.' }}
            </p>
          </div>
          <div class="card p-6">
            <p class="text-sm font-extrabold text-bone-50">{{ locale === 'ar' ? 'شركات ومؤسسات' : 'Companies & organizations' }}</p>
            <p class="mt-2 text-sm text-bone-100/75 leading-relaxed">
              {{ locale === 'ar' ? 'فيديوهات تعريفية، تدريبية، وتقارير مشاريع بأسلوب واضح.' : 'Brand films, training videos, and project reports with clarity.' }}
            </p>
          </div>
          <div class="card p-6">
            <p class="text-sm font-extrabold text-bone-50">{{ locale === 'ar' ? 'منتجو محتوى' : 'Content creators' }}</p>
            <p class="mt-2 text-sm text-bone-100/75 leading-relaxed">
              {{ locale === 'ar' ? 'جلسات تصوير منتظمة، قالب بصري ثابت، وتسليم سريع.' : 'Recurring shoots, consistent templates, and fast delivery.' }}
            </p>
          </div>
          <div class="card p-6">
            <p class="text-sm font-extrabold text-bone-50">{{ locale === 'ar' ? 'فعاليات ومناسبات' : 'Events' }}</p>
            <p class="mt-2 text-sm text-bone-100/75 leading-relaxed">
              {{ locale === 'ar' ? 'تغطية متعددة الكاميرات + Highlights + تسليم قصير وفوري.' : 'Multi-cam coverage + highlights + quick cutdowns.' }}
            </p>
          </div>
        </div>
      </section>

      <CTARequestQuote />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
import CTARequestQuote from '@/components/CTARequestQuote.vue'
import { computed } from 'vue'
import { locale, t } from '@/i18n'

const values = computed(() => {
  const isEn = locale.value === 'en'
  return [
    {
      title: isEn ? 'Quality, no compromises' : 'جودة بلا مساومة',
      desc: isEn ? 'We deliver fewer things, but cleaner — with a review system that reduces waste.' : 'نفضّل تسليم أقل ولكن أنظف وأفضل — مع نظام مراجعات يقلل التكرار.',
    },
    {
      title: isEn ? 'Clarity before execution' : 'وضوح قبل التنفيذ',
      desc: isEn ? 'Brief + shotlist + schedule — so revisions don’t become endless “trial and error”.' : 'Brief + Shotlist + جدول — كي لا تتحول التعديلات إلى “تجريب” بلا نهاية.',
    },
    {
      title: isEn ? 'Identity first' : 'الهوية أولاً',
      desc: isEn ? 'Color, typography, and framing are built to serve the brand and the story.' : 'الألوان، التيبوغرافي، وتكوين الكادر تُبنى لخدمة العلامة والقصة.',
    },
    {
      title: isEn ? 'Respect time' : 'احترام الوقت',
      desc: isEn ? 'Clear deadlines, organized delivery, and quick communication across all stages.' : 'مواعيد واضحة، تسليم منظم، وتواصل سريع طوال مراحل المشروع.',
    },
  ]
})

</script>



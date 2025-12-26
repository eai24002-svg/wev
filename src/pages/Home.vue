<template>
  <div>
    <HeroCinematic />

    <div class="container-pro -mt-6">
      <div class="grid gap-4 lg:grid-cols-12">
        <div class="lg:col-span-8">
          <div class="card p-6">
            <h2 class="text-base font-bold text-bone-50">
              {{ locale === 'ar' ? 'منذ 2012 — تسويق وإنتاج لمنصات التواصل' : 'Since 2012 — social-first marketing & production' }}
            </h2>
            <p class="mt-2 text-sm text-bone-100/75 leading-relaxed">
              {{ locale === 'ar'
                ? 'خدمنا أكثر من 200 عميل بجودة عالية في المحتوى وأفكار مبتكرة تسهم في زيادة المبيعات ورفع الوعي. فريقنا المكوّن من 13 متخصصاً يعمل بشغف لتحقيق أهداف عملائنا.'
                : 'We’ve served 200+ clients with high-quality content and innovative ideas that increase sales and raise awareness. Our team of 13 specialists works with real passion to hit your goals.' }}
            </p>
          </div>
        </div>
        <div class="lg:col-span-4">
          <div class="card p-6">
            <p class="text-xs text-bone-100/70">موقعنا</p>
            <p class="mt-1 text-sm font-bold text-bone-50">بغداد - السيدية - شارع 40</p>
            <div class="mt-4 flex flex-col gap-2">
              <RouterLink to="/contact" class="inline-flex link-subtle text-sm">تواصل الآن</RouterLink>
              <a href="https://ul.waze.com/ul?ll=33.25863343%2C44.36088324&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 text-sm text-bone-100/70 hover:text-blood-400 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                {{ locale === 'ar' ? 'الوصول عبر Waze' : 'Get Directions (Waze)' }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PartnersMarquee />
    <StatsCounter />
    <ServicesGrid />

    <section class="py-14">
      <div class="container-pro">
        <div class="grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <SectionTitle
              kicker="العملية"
              subtitle="إنتاج منظم يضمن الجودة ويقلل التعديلات المتكررة. كل مرحلة تنتهي بمخرجات قابلة للمراجعة."
            >
              من الفكرة إلى التسليم
            </SectionTitle>
          </div>
          <div class="lg:col-span-7">
            <ol class="space-y-3">
              <li v-for="(step, i) in process" :key="step.title" class="card p-5">
                <div class="flex items-start gap-4">
                  <div class="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-blood-400" aria-hidden="true">
                    {{ i + 1 }}
                  </div>
                  <div class="space-y-1">
                    <p class="text-sm font-bold text-bone-50">{{ step.title }}</p>
                    <p class="text-sm text-bone-100/75 leading-relaxed">{{ step.desc }}</p>
                    <div class="mt-3 flex flex-wrap gap-2">
                      <span v-for="t in step.tags" :key="t" class="badge">{{ t }}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <TestimonialSlider />
    <FAQAccordion />
    <CTARequestQuote />

  </div>
</template>

<script setup lang="ts">
import HeroCinematic from '@/components/HeroCinematic.vue'
import PartnersMarquee from '@/components/PartnersMarquee.vue'
import StatsCounter from '@/components/StatsCounter.vue'
import ServicesGrid from '@/components/ServicesGrid.vue'
import TestimonialSlider from '@/components/TestimonialSlider.vue'
import FAQAccordion from '@/components/FAQAccordion.vue'
import CTARequestQuote from '@/components/CTARequestQuote.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { locale } from '@/i18n'

const process = [
  { title: 'ما قبل الإنتاج (Pre-Production)', desc: 'فكرة، سكربت، Shotlist، جدول تصوير، وتجهيزات.', tags: ['Brief', 'Script', 'Plan'] },
  { title: 'الإنتاج (Production)', desc: 'تصوير ميداني/استوديو بإضاءة وصوت وتكوينات محسوبة.', tags: ['Camera', 'Lighting', 'Sound'] },
  { title: 'ما بعد الإنتاج (Post-Production)', desc: 'مونتاج، تدرّج لوني، Motion بسيط، ومراجعات منظمة.', tags: ['Edit', 'Grade', 'Titles'] },
  { title: 'التسليم (Delivery)', desc: 'تسليم بصيغ متعددة حسب المنصات + أرشفة منظمة للمواد.', tags: ['Exports', 'Formats', 'Archive'] },
]

</script>



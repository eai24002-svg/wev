<template>
  <div class="container-pro py-10">
    <div class="space-y-10">
      <SectionTitle
        :kicker="locale === 'ar' ? 'الخدمات' : 'Services'"
        :subtitle="locale === 'ar'
          ? 'تفاصيل الخدمات الأساسية مع طريقة عمل واضحة. الباقات هنا “تشويقية” بدون أرقام ثابتة — لتبقى مرنة حسب احتياجك.'
          : 'Core services with a clear workflow. Packages are shown as teasers (no fixed prices) to stay flexible to your needs.'"
      >
        {{ locale === 'ar' ? 'خدمات إنتاج كاملة — من البداية للنهاية' : 'Full production services — end to end' }}
      </SectionTitle>

      <ServicesGrid />

      <section class="grid gap-4 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <SectionTitle
            :kicker="locale === 'ar' ? 'تفاصيل الخدمات المتوفرة' : 'Available service details'"
            :subtitle="locale === 'ar'
              ? 'تفاصيل عملية واضحة — تساعدك تختار الخدمة المناسبة بسرعة حسب هدفك ومنصاتك.'
              : 'Clear, practical details — so you can pick the right service fast for your goal and platforms.'"
          >
            {{ locale === 'ar' ? 'تفاصيل أدق حسب الأقسام' : 'Deeper breakdown by department' }}
          </SectionTitle>
        </div>

        <div class="lg:col-span-7 grid gap-3">
          <div class="card p-6">
            <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'قسـم ادارة الصفحات' : 'Page management department' }}</p>
            <p class="mt-1 text-base font-extrabold text-bone-50">
              {{ locale === 'ar' ? 'إدارة قنوات التواصل + تفاعل شهري' : 'Social channels management + monthly engagement' }}
            </p>
            <p class="mt-2 text-sm text-bone-100/75 leading-relaxed">
              {{ locale === 'ar'
                ? 'يشمل النشر العام وإدارة التفاعل بطريقة منظمة مع “ردود نموذجية” حسب الاتفاق.'
                : 'Includes structured posting and engagement management with “template replies” based on agreement.' }}
            </p>
            <ul class="mt-4 space-y-2 text-sm text-bone-100/80">
              <li>
                - {{ locale === 'ar'
                  ? 'إدارة قنوات التواصل: النشر العام وعلى حسب أوقات الذروة في الصفحة.'
                  : 'Channel management: posting based on peak times for the page.' }}
              </li>
              <li>
                - {{ locale === 'ar'
                  ? 'النشر العام: 15–20 منشور شهرياً (حسب الأهمية والاتفاق).'
                  : 'General posting: 15–20 posts per month (based on priority and agreement).' }}
              </li>
              <li>
                - {{ locale === 'ar'
                  ? 'متابعة التعليقات على مدار الشهر والرد عليها بأجوبة نموذجية وحسب الاتفاق.'
                  : 'Comments monitoring across the month and replying with template answers (per agreement).' }}
              </li>
              <li>
                - {{ locale === 'ar'
                  ? 'متابعة الرسائل والرد عليها بأجوبة نموذجية (حسب الاتفاق).'
                  : 'Inbox/message monitoring and replying with template answers (per agreement).' }}
              </li>
            </ul>
            <div class="mt-5 flex flex-wrap gap-2">
              <span class="badge">{{ locale === 'ar' ? 'نشر' : 'Posting' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'متابعة' : 'Monitoring' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'ردود نموذجية' : 'Template replies' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'أوقات الذروة' : 'Peak times' }}</span>
            </div>
          </div>

          <div class="card p-6">
            <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'قسـم الانتـاج ( صـور + فيديو )' : 'Production department (photo + video)' }}</p>
            <p class="mt-1 text-base font-extrabold text-bone-50">
              {{ locale === 'ar' ? 'إنتاج جاهز للنشر — حسب نوع الإعلان' : 'Publish-ready production — by ad type' }}
            </p>
            <p class="mt-2 text-sm text-bone-100/75 leading-relaxed">
              {{ locale === 'ar'
                ? 'نقسم الإنتاج حسب المخرجات المطلوبة: صور جاهزة، فيديو قصير، فيديو سينمائي، أو موشن كرافك.'
                : 'We structure production by deliverables: ready photos, short videos, cinematic films, or motion graphics.' }}
            </p>

            <div class="mt-5 grid gap-3 sm:grid-cols-2">
              <div class="card p-5">
                <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'أنتـاج صور جاهز' : 'Ready photo production' }}</p>
                <p class="mt-1 text-sm font-bold text-bone-50">
                  {{ locale === 'ar' ? 'صور بجودة عالية للإعلانات' : 'High-quality photos for ads' }}
                </p>
                <p class="mt-2 text-xs text-bone-100/70 leading-relaxed">
                  {{ locale === 'ar'
                    ? 'صور جاهزة للنشر مع معالجة بسيطة وتنسيق مناسب للمنصات.'
                    : 'Publish-ready photos with clean processing and platform-friendly formatting.' }}
                </p>
              </div>

              <div class="card p-5">
                <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'أنتـاج فيديـو قصير' : 'Short video production' }}</p>
                <p class="mt-1 text-sm font-bold text-bone-50">
                  {{ locale === 'ar' ? 'فيديو سريع بمنطق السوشيال' : 'Fast, social-first video' }}
                </p>
                <p class="mt-2 text-xs text-bone-100/70 leading-relaxed">
                  {{ locale === 'ar'
                    ? 'مناسب لـ Reels/Shorts مع إيقاع سريع ونسخ متعددة.'
                    : 'Ideal for Reels/Shorts with strong pacing and multiple versions.' }}
                </p>
              </div>

              <div class="card p-5">
                <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'أنتـاج فيديو سـينمائي' : 'Cinematic video production' }}</p>
                <p class="mt-1 text-sm font-bold text-bone-50">
                  {{ locale === 'ar' ? 'هوية بصرية قوية + إحساس سينمائي' : 'Strong identity + cinematic feel' }}
                </p>
                <p class="mt-2 text-xs text-bone-100/70 leading-relaxed">
                  {{ locale === 'ar'
                    ? 'للإعلانات التي تحتاج تأثير أعلى: تصوير مضبوط، مونتاج، وتدرّج لوني.'
                    : 'For ads that need more impact: controlled shooting, editing, and color grading.' }}
                </p>
              </div>

              <div class="card p-5">
                <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'أنتـاج فيديو موشـن كرافك' : 'Motion graphics video' }}</p>
                <p class="mt-1 text-sm font-bold text-bone-50">
                  {{ locale === 'ar' ? 'شرح بصري + تايتل + تحريك' : 'Visual explainers + titles + motion' }}
                </p>
                <p class="mt-2 text-xs text-bone-100/70 leading-relaxed">
                  {{ locale === 'ar'
                    ? 'مناسب للعروض والخدمات والأسعار والترويج بمظهر نظيف.'
                    : 'Great for services, promos, offers, and pricing with a clean modern look.' }}
                </p>
              </div>
            </div>

            <div class="mt-5 flex flex-wrap gap-2">
              <span class="badge">{{ locale === 'ar' ? 'صور' : 'Photo' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'فيديو قصير' : 'Short video' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'سينمائي' : 'Cinematic' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'موشن كرافك' : 'Motion graphics' }}</span>
            </div>
          </div>

          <div class="card p-6">
            <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'قسـم التصميـم والكرافك' : 'Design & graphics department' }}</p>
            <p class="mt-1 text-base font-extrabold text-bone-50">
              {{ locale === 'ar' ? 'هوية + قوالب + تصميمات حملات' : 'Identity + templates + campaign-ready creatives' }}
            </p>
            <p class="mt-2 text-sm text-bone-100/75 leading-relaxed">
              {{ locale === 'ar'
                ? 'نطوّر شكل الصفحة ونبني قوالب ثابتة لتسريع الإنتاج وضمان تناسق بصري قوي.'
                : 'We refresh your page look and build reusable templates to speed up output while keeping a strong visual consistency.' }}
            </p>

            <ul class="mt-4 space-y-2 text-sm text-bone-100/80">
              <li>
                - {{ locale === 'ar'
                  ? 'تجديد تصاميم الصفحات (فيسبوك + انستاگرام).'
                  : 'Refreshing page designs (Facebook + Instagram).' }}
              </li>
              <li>
                - {{ locale === 'ar'
                  ? 'تجديد تصاميم الهايلايت (المثبت في الصفحة) + استحداث تصاميم جديدة حسب الأهمية.'
                  : 'Highlight redesign (pinned) + new highlight designs based on priority.' }}
              </li>
              <li>
                - {{ locale === 'ar'
                  ? 'قالب مخصص لـ: فيديو ريل + صور ستوري + صور بوست.'
                  : 'Custom templates for: Reels video + Story images + Post images.' }}
              </li>
              <li>
                - {{ locale === 'ar'
                  ? 'تصاميم إعلانية للنشر العام والستوري، مقترحة من قسم التسويق.'
                  : 'Ad creatives for feed + stories, suggested by the marketing team.' }}
              </li>
              <li>
                - {{ locale === 'ar'
                  ? 'كل تصاميم المناسبات الشهرية.'
                  : 'All monthly occasion designs (seasonal / events).' }}
              </li>
            </ul>

            <div class="mt-5 flex flex-wrap gap-2">
              <span class="badge">{{ locale === 'ar' ? 'هوية' : 'Identity' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'قوالب' : 'Templates' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'ريل/ستوري/بوست' : 'Reels/Stories/Posts' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'مناسبات شهرية' : 'Monthly occasions' }}</span>
            </div>
          </div>

          <div class="card p-6">
            <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'قسـم التصوير' : 'Filming department' }}</p>
            <p class="mt-1 text-base font-extrabold text-bone-50">
              {{ locale === 'ar' ? 'زيارات تصوير أسبوعية + فوتو/فيديو + درون' : 'Weekly shoots + photo/video + drone' }}
            </p>
            <p class="mt-2 text-sm text-bone-100/75 leading-relaxed">
              {{ locale === 'ar'
                ? 'زيارات تصوير أسبوعية أو أكثر حسب الحاجة — تشمل فوتو وفيديو مع خيار التصوير الجوي.'
                : 'Weekly shoots (or more as needed) — covering both photo and video, with optional aerial drone footage.' }}
            </p>
            <ul class="mt-4 space-y-2 text-sm text-bone-100/80">
              <li>
                - {{ locale === 'ar'
                  ? 'زيارات تصوير أسبوعية أو أكثر حسب الحاجة.'
                  : 'Weekly shoots or more depending on need.' }}
              </li>
              <li>
                - {{ locale === 'ar'
                  ? 'تشمل زيارات التصوير: فوتو + فيديو.'
                  : 'Each shoot can include: photo + video.' }}
              </li>
              <li>
                - {{ locale === 'ar'
                  ? 'التصوير الجوي (درون).'
                  : 'Aerial filming (drone).' }}
              </li>
            </ul>
            <div class="mt-5 flex flex-wrap gap-2">
              <span class="badge">{{ locale === 'ar' ? 'زيارات' : 'Visits' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'فوتو' : 'Photo' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'فيديو' : 'Video' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'درون' : 'Drone' }}</span>
            </div>
          </div>

          <div class="card p-6">
            <p class="text-xs text-bone-100/70">{{ locale === 'ar' ? 'قسـم التسـويق الالكتروني' : 'Digital marketing department' }}</p>
            <p class="mt-1 text-base font-extrabold text-bone-50">
              {{ locale === 'ar' ? 'تهيئة الحسابات + استراتيجية + خطة شهرية + تقارير' : 'Account setup + strategy + monthly plan + reporting' }}
            </p>
            <p class="mt-2 text-sm text-bone-100/75 leading-relaxed">
              {{ locale === 'ar'
                ? 'من تهيئة الحسابات إلى كتابة المحتوى والترويج والمتابعة اليومية — مع تقارير واضحة.'
                : 'From setup to copywriting, boosting, and daily monitoring — with clear reports.' }}
            </p>
            <ul class="mt-4 space-y-2 text-sm text-bone-100/80">
              <li>- {{ locale === 'ar' ? 'تهيئة وتحسين الحسابات وتزويدها بالبيانات.' : 'Account optimization and completing profile data.' }}</li>
              <li>- {{ locale === 'ar' ? 'بناء وتطوير الرد الآلي في منصات التواصل.' : 'Building and improving auto-replies on social platforms.' }}</li>
              <li>- {{ locale === 'ar' ? 'ربط جميع مواقع التواصل الاجتماعي.' : 'Linking all social accounts together.' }}</li>
              <li>- {{ locale === 'ar' ? 'التراسل الفوري عبر واتساب مع فريق التسويق.' : 'Instant WhatsApp communication with the marketing team.' }}</li>
              <li>- {{ locale === 'ar' ? 'متابعة يومية للحسابات والحملات الإعلانية.' : 'Daily monitoring for accounts and ad campaigns.' }}</li>
              <li>- {{ locale === 'ar' ? 'استراتيجية تسويقية مرة واحدة كل 3 أشهر.' : 'One marketing strategy refresh every 3 months.' }}</li>
              <li>- {{ locale === 'ar' ? 'خطة تسويقية شهرية + جدول شهري للمحتوى بعد إنشاء الاستراتيجية.' : 'Monthly marketing plan + monthly content calendar after strategy.' }}</li>
              <li>- {{ locale === 'ar' ? 'كتابة المحتوى للإعلانات المدرجة في الجدول الشهري.' : 'Copywriting for ads included in the monthly calendar.' }}</li>
              <li>- {{ locale === 'ar' ? 'الترويج على المنشورات (بدون مبلغ الترويج).' : 'Boosting posts (ad spend not included).' }}</li>
              <li>- {{ locale === 'ar' ? 'تقارير نصف شهرية أو شهرية عن نتائج الترويج.' : 'Bi-weekly or monthly promotion performance reports.' }}</li>
              <li>- {{ locale === 'ar' ? 'خدمات أخرى غير محددة حسب الحاجة.' : 'Other services as needed.' }}</li>
            </ul>
            <div class="mt-5 flex flex-wrap gap-2">
              <span class="badge">{{ locale === 'ar' ? 'استراتيجية' : 'Strategy' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'متابعة يومية' : 'Daily monitoring' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'تقارير' : 'Reports' }}</span>
              <span class="badge">{{ locale === 'ar' ? 'ترويج' : 'Boosting' }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-4 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <SectionTitle
            :kicker="locale === 'ar' ? 'تفاصيل الأقسام' : 'Departments details'"
            :subtitle="locale === 'ar'
              ? 'ملخص عملي لما يشمله كل قسم — مناسب للشركات والبراندات التي تريد فريقاً واحداً يغطي كل شيء.'
              : 'A practical summary of what each department covers — ideal for brands that want one team to handle everything.'"
          >
            {{ locale === 'ar' ? 'ماذا يشمل كل قسم؟' : 'What each department includes' }}
          </SectionTitle>
        </div>
        <div class="lg:col-span-7 grid gap-3 sm:grid-cols-2">
          <div v-for="x in extras" :key="x.title" class="card p-6">
            <p class="text-sm font-extrabold text-bone-50">{{ x.title }}</p>
            <p class="mt-2 text-sm text-bone-100/75 leading-relaxed">{{ x.desc }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="t in x.tags" :key="t" class="badge">{{ t }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-4 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <SectionTitle
            :kicker="locale === 'ar' ? 'الباقات' : 'Packages'"
            :subtitle="locale === 'ar' ? '3 مستويات شائعة تساعدك تختار بسرعة. سنحولها إلى عرض سعر تفصيلي بعد معرفة تفاصيلك.' : 'Three common tiers to choose quickly. We turn it into a detailed quote after your requirements.'"
          >
            {{ locale === 'ar' ? 'باقات مرنة (Teaser)' : 'Flexible packages (teaser)' }}
          </SectionTitle>
        </div>
        <div class="lg:col-span-7 grid gap-3 lg:grid-cols-3">
          <div v-for="p in packages" :key="p.title" class="card p-6 relative overflow-hidden">
            <div class="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blood-500/15 blur-2xl" aria-hidden="true" />
            <p class="text-xs text-bone-100/70">{{ p.level }}</p>
            <p class="mt-1 text-base font-extrabold text-bone-50">{{ p.title }}</p>
            <p class="mt-2 text-sm text-bone-100/75 leading-relaxed">{{ p.desc }}</p>
            <ul class="mt-4 space-y-2 text-sm text-bone-100/80">
              <li v-for="b in p.bullets" :key="b">- {{ b }}</li>
            </ul>
            <RouterLink to="/contact#form" class="mt-6 inline-flex btn-primary w-full justify-center">
              {{ locale === 'ar' ? 'اطلب عرض سعر' : 'Request a quote' }}
            </RouterLink>
          </div>
        </div>
      </section>

      <CTARequestQuote />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/SectionTitle.vue'
import ServicesGrid from '@/components/ServicesGrid.vue'
import CTARequestQuote from '@/components/CTARequestQuote.vue'
import { computed } from 'vue'
import { locale } from '@/i18n'

const extras = computed(() => {
  const isEn = locale.value === 'en'
  return [
    {
      title: isEn ? 'Marketing strategies & campaigns' : 'التسويق والاستراتيجيات',
      desc: isEn ? 'Strategy building, campaign planning, and ad copywriting tailored for social platforms.' : 'إعداد استراتيجيات تسويقية، إنشاء حملات إعلانية، وكتابة المحتوى الإعلاني بما يناسب منصات التواصل.',
      tags: isEn ? ['Strategy', 'Campaigns', 'Copy'] : ['استراتيجية', 'حملات', 'محتوى'],
    },
    {
      title: isEn ? 'Filming (products / conferences / ads)' : 'التصوير (منتجات / مؤتمرات / إعلانات)',
      desc: isEn ? 'Shooting for products, conferences, and ads across all variations with clean setups.' : 'تصوير المنتجات والمؤتمرات والإعلانات بجميع تفرعاتها بإعدادات نظيفة وإضاءة وصوت.',
      tags: isEn ? ['Products', 'Events', 'Commercials'] : ['منتجات', 'فعاليات', 'إعلانات'],
    },
    {
      title: isEn ? 'Production (video + photo)' : 'الإنتاج (فيديو + صور)',
      desc: isEn ? 'Professional videos and high-quality photos for advertising deliverables, ready to publish.' : 'إنتاج فيديوات احترافية وصور بجودة عالية لجميع تفرعات الإعلانات — جاهزة للنشر.',
      tags: isEn ? ['Video', 'Photo', 'Delivery'] : ['فيديو', 'صور', 'تسليم'],
    },
    {
      title: isEn ? 'Design (logo / identity / social posts)' : 'التصميم (شعار / هوية / منشورات)',
      desc: isEn ? 'Logos, full brand identity, and social media posts with consistent visual language.' : 'تصميم شعارات وهوية بصرية ومنشورات للسوشال ميديا ضمن لغة بصرية ثابتة.',
      tags: isEn ? ['Logo', 'Identity', 'Social'] : ['شعار', 'هوية', 'سوشيال'],
    },
    {
      title: isEn ? 'Pages management' : 'إدارة الصفحات',
      desc: isEn ? 'Posting (posts + stories), monitoring, and replying to messages and comments.' : 'النشر (بوست وستوري)، المتابعة، والرد على الرسائل والتعليقات.',
      tags: isEn ? ['Posting', 'Replies', 'Community'] : ['نشر', 'ردود', 'متابعة'],
    },
    {
      title: isEn ? 'Promotion management' : 'إدارة الترويج',
      desc: isEn ? 'Boosting content and campaigns on all platforms with optimization and tracking.' : 'ترويج المحتوى والحملات الإعلانية على جميع المنصات مع تحسين ومتابعة الأداء.',
      tags: isEn ? ['Ads', 'Optimization', 'Tracking'] : ['إعلانات', 'تحسين', 'متابعة'],
    },
    {
      title: isEn ? 'Outdoor advertising spaces' : 'الإعلانات الخارجية',
      desc: isEn ? 'Providing outdoor advertising spaces across different areas for wider reach.' : 'توفير مساحات للإعلانات الخارجية بمختلف المناطق لانتشار أكبر.',
      tags: isEn ? ['Billboards', 'Locations', 'Reach'] : ['لوحات', 'مناطق', 'انتشار'],
    },
  ]
})

const packages = computed(() => {
  const isEn = locale.value === 'en'
  return [
    {
      level: isEn ? 'Tier 01' : 'مستوى 01',
      title: 'Essential',
      desc: isEn ? 'Best for quick social videos or limited coverage.' : 'مناسب لفيديوهات سوشيال سريعة أو تغطية محدودة.',
      bullets: isEn ? ['Short shoot', 'Clean edit', 'Platform versions', 'Limited revisions'] : ['جلسة تصوير قصيرة', 'مونتاج نظيف', 'نسخ للمنصات', 'مراجعات محدودة'],
    },
    {
      level: isEn ? 'Tier 02' : 'مستوى 02',
      title: 'Professional',
      desc: isEn ? 'A balanced solution for companies and mid-scale campaigns.' : 'حل متوازن للشركات والحملات المتوسطة.',
      bullets: isEn ? ['Multi-shot coverage', 'Color grading', 'Titles/subtitles', 'Revision management'] : ['تصوير متعدد اللقطات', 'تدرج لوني', 'تايتل/ترجمة', 'إدارة مراجعات'],
    },
    {
      level: isEn ? 'Tier 03' : 'مستوى 03',
      title: 'Cinematic',
      desc: isEn ? 'For commercials/documentaries that need maximum impact.' : 'للإعلانات والوثائقيات والمشاريع التي تحتاج “Impact”.',
      bullets: isEn ? ['Full planning', 'One or multiple shoot days', 'Sound design', 'Full delivery set'] : ['تخطيط كامل', 'تصوير يوم/أيام', 'Sound Design', 'تسليم شامل'],
    },
  ]
})
</script>



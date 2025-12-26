<template>
  <section class="py-14">
    <div class="container-pro">
      <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          kicker="الأعمال المختارة"
          subtitle="شبكة أعمال قابلة للفلترة مع تأثير فيديو عند المرور. انقر على أي عمل لعرض Case Study داخل نافذة."
        >
          معرض الأعمال
        </SectionTitle>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="c in computedCategories"
            :key="c"
            type="button"
            class="btn"
            :class="c === category ? 'bg-white/10 text-bone-50 border border-white/15' : 'bg-white/0 text-bone-100/75 border border-white/10 hover:bg-white/5'"
            @click="$emit('update:category', c)"
          >
            {{ c }}
          </button>
        </div>
      </div>

      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="item in filtered"
          :key="item.id"
          class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft transition duration-300 ease-premium hover:-translate-y-1 hover:shadow-glow"
        >
          <button
            type="button"
            class="absolute inset-0 z-10 text-right"
            :aria-label="`فتح تفاصيل العمل: ${item.title}`"
            @click="$emit('open', item.id)"
          />

          <div class="relative">
            <img
              class="aspect-[4/3] w-full object-cover opacity-90 transition duration-500 ease-premium group-hover:scale-[1.04]"
              :src="item.poster ?? placeholder"
              :alt="`صورة لعمل: ${item.title}`"
              loading="lazy"
              decoding="async"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/15 to-transparent" />
            <div class="absolute inset-0 opacity-0 transition duration-300 ease-premium group-hover:opacity-100">
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(239,35,60,.22),transparent_55%)]" />
            </div>
            <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
              <div class="space-y-1">
                <p class="text-xs text-bone-100/70">{{ item.category }} • {{ item.year }}</p>
                <h3 class="text-base font-bold text-bone-50">{{ item.title }}</h3>
                <p class="line-clamp-2 text-xs text-bone-100/70 leading-relaxed">
                  {{ item.summary }}
                </p>
              </div>
              <div
                class="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur transition duration-300 ease-premium group-hover:scale-110"
                aria-hidden="true"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M10 8L16 12L10 16V8Z" fill="white" fill-opacity="0.9" />
                </svg>
              </div>
            </div>
          </div>

          <div class="p-4">
            <div class="flex flex-wrap gap-2">
              <span v-for="t in item.tags" :key="t" class="badge">{{ t }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'

const placeholder = '/placeholder.png'

export type PortfolioItem = {
  id: string
  title: string
  category: 'إعلانات' | 'مناسبات' | 'شركات' | 'سوشيال' | 'استوديو'
  year: string
  client: string
  summary: string
  tags: string[]
  poster?: string
}

const props = defineProps<{
  items: PortfolioItem[]
  category: string
  categories?: string[]
}>()

defineEmits<{
  (e: 'update:category', v: string): void
  (e: 'open', id: string): void
}>()

const computedCategories = computed(() => props.categories ?? ['الكل', 'إعلانات', 'مناسبات', 'شركات', 'سوشيال', 'استوديو'])

const filtered = computed(() => {
  if (props.category === 'الكل') return props.items
  return props.items.filter((x) => x.category === props.category)
})
</script>



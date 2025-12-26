<template>
  <section class="py-10">
    <div class="container-pro">
      <div class="flex items-end justify-between gap-6">
        <div class="space-y-2">
          <p class="badge">
            <span class="h-1.5 w-1.5 rounded-full bg-blood-500" aria-hidden="true" />
            {{ t('section.trust.kicker') }}
          </p>
          <h2 class="text-xl font-bold text-bone-50">{{ t('section.trust.title') }}</h2>
        </div>
      </div>

      <div class="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-ink-850/40 backdrop-blur-sm">
        <div class="relative group/container">
          <button
            v-show="canScrollLeft"
            @click="scrollLeft"
            @mouseenter="pauseAutoScroll"
            class="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-ink-900/95 backdrop-blur-md text-bone-50 shadow-xl transition-all duration-300 hover:border-blood-500/70 hover:bg-blood-500/30 hover:text-blood-400 hover:scale-110 hover:shadow-blood-500/40 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
            :disabled="!canScrollLeft"
            aria-label="السابق"
            type="button"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            v-show="canScrollRight"
            @click="scrollRight"
            @mouseenter="pauseAutoScroll"
            class="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-ink-900/95 backdrop-blur-md text-bone-50 shadow-xl transition-all duration-300 hover:border-blood-500/70 hover:bg-blood-500/30 hover:text-blood-400 hover:scale-110 hover:shadow-blood-500/40 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
            :disabled="!canScrollRight"
            aria-label="التالي"
            type="button"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-900 via-ink-900/60 to-transparent" aria-hidden="true" />
          <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-900 via-ink-900/60 to-transparent" aria-hidden="true" />

          <div
            class="partners-scroll-container"
            ref="scrollContainer"
            @scroll="handleScroll"
            @wheel="handleWheel"
            @mouseenter="pauseAutoScroll"
            @mouseleave="resumeAutoScroll"
            @touchstart="pauseAutoScroll"
            @touchend="resumeAutoScroll"
          >
            <div class="partners-track" :class="{ 'is-scrolling': isAutoScrolling }">
              <div
                v-for="(logo, idx) in infiniteLogos"
                :key="`logo-${idx}`"
                class="partner-logo-wrapper"
              >
                <div class="partner-logo-card group">
                  <div class="partner-logo-glow" aria-hidden="true" />
                  <img
                    :src="logo"
                    :alt="`Partner logo ${(idx % logos.length) + 1}`"
                    class="partner-logo-image"
                    @error="handleImageError"
                    loading="lazy"
                  />
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { locale, t } from '@/i18n'

const scrollContainer = ref<HTMLElement | null>(null)
const isAutoScrolling = ref(true)
const canScrollLeft = ref(false)
const canScrollRight = ref(true)
let animationFrameId: number | null = null
let isUserInteracting = false
let resumeTimeout: number | null = null

// قائمة اللوجوهات - مرتبة حسب الأولوية والأسماء البسيطة أولاً
const logoFiles = [
  // لوجوهات إنجليزية بسيطة
  'victoria group.png',
  'ES.png',
  'BDD.png',
  'CANDI.png',
  'REFORMA.png',
  'WATANIA.png',
  'wingers.png',
  'stage.png',
  'NASIR.png',
  'naya4.png',
  'MKKKK.png',
  'ishik.png',
  'ego.png',
  'ak.png',
  'as 3.png',
  'as media.png',
  'Artboard 2 (4).png',
  'heavy 9 spa.png',
  'İstikbal_logo.png',
  'JOOZ 2.png',
  'jorsal.png',
  'logo ouber.png',
  'LOGO SAMAA.png',
  'ruman logo.png',
  'she wow.png',
  'SSS.png',
  'taqa final.png',
  'wk.png',
  'BDD (2).png',
  'CESAR copy.png',
  'crafti.png',
  'Fly Baghdad.png',
  'ford logo.png',
  'happy home.png',
  'LOGO IRIS.png',
  'logo nextlite.png',
  'MASA1.png',
  'max group.png',
  'NOMOOR BLACK.png',
  'notella logo.png',
  'vitra-lgoo-2.png',
  'rave logo.png',
  'jam logo.png',
  // لوجوهات عربية
  'اتلاف الاساس.png',
  'اسد الاعمار.png',
  'القاسم.png',
  'المحطة الهندسية.png',
  'البارق.png',
  'الرامي.png',
  'السيف.png',
  'القره غولي.png',
  'النمور سنتر.png',
  'انتيكه.png',
  'بابليومز.png',
  'بلي لوغو.png',
  'تربل جوكليت.png',
  'تشييد لوغو.png',
  'حسون برغر.png',
  'خطوط الجوية العراقية.png',
  'سدير بغداد.png',
  'سر كافية.png',
  'سولية.png',
  'سيف الدليمي.png',
  'شركة زين.png',
  'طلبات.png',
  'عز بغداد.png',
  'عزيزة.png',
  'عصير تايم.png',
  'كرافت برغر.png',
  'كسار ديكور.png',
  'كص ام كلثوم.png',
  'كلية دجلة قسم الاعلان.png',
  'كوازز.png',
  'كورال.png',
  'كولمن logo.png',
  'كولمن.png',
  'لوغو جود.png',
  'ليبل.png',
  'مسك شعار.png',
  'مطبعة الذهبي.png',
  'مندي الشام.png',
].filter((file, index, self) => self.indexOf(file) === index)

const logos = logoFiles.map(file => {
  try {
    // ترميز صحيح للأسماء مع معالجة المسافات والأحرف الخاصة
    const encodedFile = encodeURIComponent(file)
    return `/logos/${encodedFile}`
  } catch (error) {
    console.warn('خطأ في ترميز اسم الملف:', file, error)
    // في حالة الخطأ، استخدام الاسم كما هو مع استبدال المسافات
    return `/logos/${file.replace(/ /g, '%20')}`
  }
})

const infiniteLogos = computed(() => [...logos, ...logos, ...logos, ...logos, ...logos])

function handleImageError(event: Event) {
  const img = event.target as HTMLImageElement
  console.warn('فشل تحميل الصورة:', img.src)
  // إخفاء الصورة عند فشل التحميل
  img.style.display = 'none'
}

function updateScrollState() {
  if (!scrollContainer.value) {
    canScrollLeft.value = false
    canScrollRight.value = true
    return
  }
  
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
  const threshold = 5
  const maxScroll = scrollWidth - clientWidth
  
  canScrollLeft.value = scrollLeft > threshold
  canScrollRight.value = maxScroll > 0 && scrollLeft < maxScroll - threshold
  
  if (maxScroll <= 0) {
    canScrollLeft.value = false
    canScrollRight.value = false
  }
}

function handleScroll() {
  if (!scrollContainer.value) return
  
  updateScrollState()
  isUserInteracting = true
  
  const { scrollLeft, scrollWidth } = scrollContainer.value
  const singleSetWidth = scrollWidth / 5
  
  if (scrollLeft >= singleSetWidth * 3 - 10) {
    scrollContainer.value.scrollLeft = scrollLeft - singleSetWidth * 2
  } else if (scrollLeft <= 10) {
    scrollContainer.value.scrollLeft = singleSetWidth * 2
  }
  
  if (resumeTimeout) {
    clearTimeout(resumeTimeout)
  }
  resumeTimeout = window.setTimeout(() => {
    isUserInteracting = false
    if (!isAutoScrolling.value) {
      resumeAutoScroll()
    }
  }, 2000)
}

function handleWheel(event: WheelEvent) {
  if (!scrollContainer.value) return
  
  pauseAutoScroll()
  
  if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
    event.preventDefault()
    scrollContainer.value.scrollLeft += event.deltaX
  } else {
    event.preventDefault()
    scrollContainer.value.scrollLeft += event.deltaY
  }
  
  updateScrollState()
  
  if (resumeTimeout) {
    clearTimeout(resumeTimeout)
  }
  resumeTimeout = window.setTimeout(() => {
    resumeAutoScroll()
  }, 2000)
}

function scrollLeft() {
  if (!scrollContainer.value) return
  pauseAutoScroll()
  
  if (resumeTimeout) {
    clearTimeout(resumeTimeout)
  }
  
  const scrollAmount = scrollContainer.value.clientWidth * 0.75
  const newScrollLeft = scrollContainer.value.scrollLeft - scrollAmount
  
  if (newScrollLeft <= 0) {
    const { scrollWidth } = scrollContainer.value
    const singleSetWidth = scrollWidth / 5
    scrollContainer.value.scrollLeft = singleSetWidth * 2 + newScrollLeft
  } else {
    scrollContainer.value.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    })
  }
  
  setTimeout(() => {
    updateScrollState()
  }, 400)
  
  resumeTimeout = window.setTimeout(() => {
    resumeAutoScroll()
  }, 3000)
}

function scrollRight() {
  if (!scrollContainer.value) return
  pauseAutoScroll()
  
  if (resumeTimeout) {
    clearTimeout(resumeTimeout)
  }
  
  const scrollAmount = scrollContainer.value.clientWidth * 0.75
  const { scrollLeft, scrollWidth } = scrollContainer.value
  const singleSetWidth = scrollWidth / 5
  const newScrollLeft = scrollLeft + scrollAmount
  
  if (newScrollLeft >= singleSetWidth * 3 - 10) {
    scrollContainer.value.scrollLeft = newScrollLeft - singleSetWidth * 2
  } else {
    scrollContainer.value.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    })
  }
  
  setTimeout(() => {
    updateScrollState()
  }, 400)
  
  resumeTimeout = window.setTimeout(() => {
    resumeAutoScroll()
  }, 3000)
}

function pauseAutoScroll() {
  isAutoScrolling.value = false
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
}

function resumeAutoScroll() {
  if (!isUserInteracting) {
    isAutoScrolling.value = true
    startAutoScroll()
  }
}

function startAutoScroll() {
  if (!scrollContainer.value) return
  
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
  
  isAutoScrolling.value = true
  let lastTime = performance.now()
  const speed = 0.4
  
  function animate(currentTime: number) {
    if (!scrollContainer.value) {
      animationFrameId = null
      return
    }
    
    if (!isAutoScrolling.value) {
      animationFrameId = null
      return
    }
    
    const deltaTime = Math.min(currentTime - lastTime, 16)
    lastTime = currentTime
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
    const maxScroll = scrollWidth - clientWidth
    
    if (maxScroll <= 0) {
      animationFrameId = requestAnimationFrame(animate)
      return
    }
    
    const singleSetWidth = scrollWidth / 5
    
    if (scrollLeft >= singleSetWidth * 3 - 10) {
      scrollContainer.value.scrollLeft = scrollLeft - singleSetWidth * 2
      updateScrollState()
    } else {
      const scrollAmount = speed * (deltaTime / 16)
      scrollContainer.value.scrollLeft += scrollAmount
      updateScrollState()
    }
    
    animationFrameId = requestAnimationFrame(animate)
  }
  
  lastTime = performance.now()
  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  const checkAndStart = () => {
    if (scrollContainer.value) {
      setTimeout(() => {
        updateScrollState()
        
        const intervalId = setInterval(() => {
          if (scrollContainer.value) {
            updateScrollState()
          } else {
            clearInterval(intervalId)
          }
        }, 500)
        
        setTimeout(() => {
          if (scrollContainer.value && isAutoScrolling.value) {
            startAutoScroll()
          }
        }, 500)
      }, 300)
    } else {
      setTimeout(checkAndStart, 100)
    }
  }
  
  checkAndStart()
  window.addEventListener('resize', updateScrollState)
})

onUnmounted(() => {
  pauseAutoScroll()
  if (resumeTimeout) {
    clearTimeout(resumeTimeout)
  }
  window.removeEventListener('resize', updateScrollState)
})
</script>

<style scoped>
.partners-scroll-container {
  position: relative;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 2.5rem 0;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

.partners-scroll-container::-webkit-scrollbar {
  display: none;
}

@media (hover: hover) and (pointer: fine) {
  .partners-scroll-container {
    cursor: default;
  }
}

@media (hover: none) and (pointer: coarse) {
  .partners-scroll-container {
    cursor: grab;
  }
  
  .partners-scroll-container:active {
    cursor: grabbing;
  }
}

.partners-track {
  display: flex;
  gap: 2rem;
  width: max-content;
  will-change: transform;
}

.partner-logo-wrapper {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-logo-card {
  position: relative;
  display: flex;
  height: 8rem;
  width: 14rem;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 1.5rem 2rem;
  box-shadow: 
    0 0 30px rgba(255, 255, 255, 0.15),
    0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.2, 0.9, 0.2, 1);
}

.partner-logo-card:hover {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.12);
  box-shadow: 
    0 0 30px rgba(255, 255, 255, 0.15),
    0 0 15px rgba(239, 35, 60, 0.25);
  transform: translateY(-2px);
}

.partner-logo-glow {
  position: absolute;
  inset: -2px;
  border-radius: 1rem;
  background: linear-gradient(
    135deg,
    rgba(239, 35, 60, 0.2) 0%,
    transparent 50%,
    rgba(239, 35, 60, 0.2) 100%
  );
  opacity: 0;
  filter: blur(8px);
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.partner-logo-card:hover .partner-logo-glow {
  opacity: 1;
}

.partner-logo-image {
  position: relative;
  z-index: 10;
  max-height: 5rem;
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: brightness(1.4) contrast(1.3) saturate(1.1);
  transition: all 0.4s cubic-bezier(0.2, 0.9, 0.2, 1);
  opacity: 1;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.partner-logo-card:hover .partner-logo-image {
  transform: scale(1.12);
  filter: brightness(1.6) contrast(1.4) saturate(1.2);
}

.partners-scroll-container {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.partner-logo-card {
  transform: translateZ(0);
  will-change: transform, box-shadow;
}
</style>

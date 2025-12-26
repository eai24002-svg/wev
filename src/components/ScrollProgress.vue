<template>
  <div class="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1">
    <div
      class="h-full origin-right bg-gradient-to-l from-blood-500 via-blood-400 to-white/90"
      :style="{ transform: `scaleX(${progress})` }"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

const progress = computed(() => {
  const doc = document.documentElement
  const scrollTop = y.value
  const height = Math.max(1, doc.scrollHeight - doc.clientHeight)
  return Math.min(1, Math.max(0, scrollTop / height))
})
</script>



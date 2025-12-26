<template>
  <header class="space-y-3">
    <p v-if="kicker" class="badge w-fit">
      <span class="h-1.5 w-1.5 rounded-full bg-blood-500 shadow-[0_0_18px_rgba(239,35,60,.65)]" aria-hidden="true" />
      <span class="text-bone-100/90">{{ kicker }}</span>
    </p>
    <h2 class="text-2xl font-bold tracking-tight text-bone-50 sm:text-3xl">
      <slot />
    </h2>
    <p v-if="subtitle" class="max-w-3xl text-bone-100/75 leading-relaxed">
      {{ subtitle }}
    </p>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  kicker?: string
  subtitle?: string
}>()
</script>



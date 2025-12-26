<template>
  <div class="min-h-dvh bg-ink-900">
    <ScrollProgress />
    <Navbar />

    <main id="main" class="pt-16">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ScrollProgress from '@/components/ScrollProgress.vue'
</script>



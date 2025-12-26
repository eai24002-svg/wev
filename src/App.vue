<template>
  <MainLayout>
    <RouterView v-slot="{ Component, route }">
      <Transition :name="String(route.meta?.transition ?? 'page')" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 420ms cubic-bezier(.2,.9,.2,1), transform 520ms cubic-bezier(.2,.9,.2,1), filter 520ms cubic-bezier(.2,.9,.2,1);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
  filter: blur(10px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
  filter: blur(10px);
}
</style>



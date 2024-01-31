<script setup lang="ts">
  const nuxtApp = useNuxtApp()
  const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
  nuxtApp.provide('navigation', navigation)
  /* 
  TODO: make it better
  */
</script>
<template>
  <Header />
  <UContainer>
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-4">
        
      </div>
      <div class="col-span-1">
        <NavBar />
      </div>
      <div class="col-span-3">
        <slot />
      </div>
    </div>
  </UContainer>
</template>
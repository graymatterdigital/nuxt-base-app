<script setup lang="ts">
  const { navigation } = useContent()
</script>
<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-1">
      <NavBar />
    </div>
    <div class="col-span-2">
      <ContentDoc />
    </div>
    <div class="col-span-1">
      <slot name="right" />
    </div>
  </div>
</template>
<script setup lang="ts">
  /* 
  TODO: 
  */
  const { navigation, toc } = useContent()
</script>
<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-1">
      <NavBar />
    </div>
    <div class="col-span-3">
      <slot />
    </div>
  </div>
</template>
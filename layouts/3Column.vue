<template>
  <UContainer>
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-1">
        <slot name="left" />
      </div>
      <div class="col-span-1">
        <slot name="main" />
      </div>
      <div class="col-span-1">
        <slot name="right" />
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
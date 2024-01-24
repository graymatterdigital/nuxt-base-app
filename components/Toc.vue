<script setup lang="ts">
  const props = defineProps(['headings'])
  const refs = useTemplateRefsList<HTMLHeadingElement>()
</script>
<template>
  <div v-for="i of 5" :key="i" :ref="refs.set" />
</template>
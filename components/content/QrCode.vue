<template>
  <QrcodeVue v-bind="props" />
</template>

<script lang="ts" setup>
  import QrcodeVue from 'qrcode.vue'
  const props = defineProps({
    value: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 100
    },
    background: {
      type: String,
      default: '#FFFFFF'
    },
    foreground: {
      type: String,
      default: '#000000'
    },
    level: {
      type: String,
      default: 'H'
    },
    renderAs: {
      type: String,
      default: 'canvas'
    },
    margin: {
      type: Number,
      default: 0
    },
    class: {
      type: String,
      default: ''
    }
  })
</script>
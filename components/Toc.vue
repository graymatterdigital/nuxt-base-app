<script setup lang="ts">
const { toc } = useContent()
const activeHeading = ref(null)

onMounted(async () => {

  watch(toc, () => {
    toc.links.forEach((link, index) => {
      const observer = useIntersectionObserver(
        ref => {
          if (ref.isIntersecting) {
            activeHeading.value = link.id
          }
        },
        { threshold: 0.6 }
      )

      observer.start(document.getElementById(link.id))
    })
  })
})
</script>

<template>
  <div>
    <ul v-if="toc && toc.links">
      <li v-for="link in toc.links" :key="link.text">
        <a :href="`#${link.id}`" :class="{ active: activeHeading === link.id }">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div>
</template>
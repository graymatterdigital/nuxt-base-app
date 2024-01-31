<script setup lang="ts">
const props = defineProps(['toc'])

 
onMounted(async () => {
  console.log(props.toc)
})
/*
TODO: planning on implementing this utilizing the useElementVisibility composable from @vueuse/core 
 
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
}) */
</script>

<template>
  <!--div>
    <ul v-if="toc && toc.links">
      <li v-for="link in toc.links" :key="link.text">
        <a :href="`#${link.id}`" :class="{ active: activeHeading === link.id }">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </div-->
</template>
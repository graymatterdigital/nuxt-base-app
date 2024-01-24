<template>
  <div>
      <ContentQuery :path="`/_partials/${content}`" find="one" v-slot="{ data }">
          <ContentRenderer :value="data">
              <template #empty>
                  <p>No content found.</p>
              </template>
          </ContentRenderer>
      </ContentQuery>
  </div>
</template>

<script setup>
defineProps({
  content: {
      default: "default"
  }
});
/* USAGE: ::partial{content=} */
</script>
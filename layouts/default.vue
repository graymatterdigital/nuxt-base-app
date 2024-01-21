<script setup lang="ts">
  //const { navigation } = useContent()
  /* const links = [{
    label: 'Profile',
    avatar: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    },
    badge: 100
    }, {
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation'
    }, {
    label: 'Vertical Navigation',
    icon: 'i-heroicons-chart-bar',
    to: '/navigation/vertical-navigation'
    }, {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    to: '/navigation/command-palette'
  }] */
</script>
<template>
  <UContainer>
    <div class="grid grid-cols-4 gap-4">
        <div class="col-span-1">
            <NavBar />
            <!--ContentNavigation v-slot="{ navigation }">
                <UVerticalNavigation :links="navigation" />
            </ContentNavigation-->
        </div>
        <div class="col-span-2">
            <ContentDoc />
        </div>
        <div class="col-span-1">
            <slot name="right" />
        </div>
    </div>
  </UContainer>
</template>
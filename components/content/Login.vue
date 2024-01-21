<script setup lang="ts">
const { signIn, signOut, session, status, cookies, getProviders } = useAuth()
const loggedIn = computed(() => status.value === 'authenticated')
</script>

<template>
  <div>
    <div>
      <UButton @click="signOut()" v-if="loggedIn">
        Sign Out
      </UButton>
      <UButton @click="signIn(`github`)" v-else>
        JS Sign In
      </UButton>
      <UAvatar :src=session?.user.image />
    </div>
  </div>
</template>
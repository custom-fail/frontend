<template>
  <NuxtLink href="/">
    <div class="h-[60px] flex justify-center items-center w-300px">
      <img class="rounded-full mr-3 h-[40px] shadow-[yellow] avatar" :src="avatar" alt="">
      <span class="text-[40px] text-white font-bold text-center">Custom</span>
    </div>
  </NuxtLink>

</template>

<script setup>
const avatar = "https://cdn.discordapp.com/avatars/988840106938990632/e2079f59cbdd75708bd2f6894d7ece24.png?size=256"
</script>

<style>
.avatar {
  box-shadow: 0 0 50px #6e5f3e;
}
</style>
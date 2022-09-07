<template>
  <div class="h-[60px] flex justify-center items-center w-300px">
    <img class="rounded-full mr-3 h-[40px] shadow-[yellow] avatar" :src="avatar" alt="">
    <span class="text-[40px] text-white font-bold text-center">Custom</span>
  </div>
</template>

<script setup>
const avatar = "https://cdn.discordapp.com/icons/898986393177567242/2c79cf25dbdd75dedb487063b6f08eca.png?size=160"
</script>

<style>
.avatar {
  box-shadow: 0px 0px 50px #6e5f3e;
}
</style>
<template>
  <nav class="inline fixed w-full" v-if="!authenticated">
    <button class="h-[50px] bg-white mt-[20px] mr-[50px] rounded pl-[20px] pr-[20px] p-[10px] float-right" @click="() => { open(); listen(); }">Login</button>
  </nav>
  <div class="h-[100vh] w-full flex items-center justify-center">
    <div class="text-center">
      <img src="/assets/img/cancel_white_24dp.svg" class="h-[200px] opacity-50">
      <span class="justify-center text-gray-50">Missing permissions {{ authenticated }} {{ x }} {{ y }}</span>
    </div>

  </div>
</template>

<script setup>
let { authenticated, x, y } = useAuth()
const { listen } = useLoginControls()
const { open } = useLoginPopup()

definePageMeta({
  layout: "none"
})
</script>
<template>
  <div class="flex items-center justify-center h-[100vh]">
    <div class="border-loading border-white rounded-full border-[8px] w-[190px] h-[190px]">

    </div>
  </div>
</template>

<script setup>
const { send } = useLoginBroadcast()
const { login } = useLoginControls()

import { onMounted } from 'vue'
onMounted(async () => {
  const code = useRoute().query.code
  await login(code);
  const redirectTo = localStorage.getItem("redirectTo")
  if(redirectTo) localStorage.removeItem("returnPage")
  send()
  return navigateTo({
    path: redirectTo || "/servers"
  })
})

definePageMeta({
  layout: "none"
})

</script>

<style>
.border-loading {
  animation: loading 1.2s cubic-bezier(0.4, 0.5, 0.7, 0.7) infinite;
}

@keyframes loading {
  0% {
    clip-path: circle(120px at 0 0);
    transform: rotate(0deg);
  }

  25% {
    clip-path: circle(80px at 0 0);
  }

  75% {
    clip-path: circle(90px at 0 0);
  }

  100% {
    transform: rotate(360deg);
    clip-path: circle(120px at 0 0);
  }
}

</style>
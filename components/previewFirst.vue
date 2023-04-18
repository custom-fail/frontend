<template>
  <div class="lm absolute right-0 top-[80px] move">
    <div class="flex justify-end p-[10px]" v-for="image in images">
      <img :src="`/img/previews/${image}.svg`">
    </div>
    <div class="flex justify-end p-[10px]" v-for="image in images">
      <img :src="`/img/previews/${image}.svg`">
    </div>
  </div>
</template>

<script setup>
const images = [
    "CaseLast",
    "AutoMod",
    "AutoModLogs",
    "AntiDuplicate",
    "Timeout"
]
</script>

<style>
@media screen and (max-width: 1150px) {
  .lm {
    display: none;
  }
}
.lm {
  z-index: 0;
  /*height: calc(100vh - (80px + 1px + 40px));*/
  opacity: 0.5;
}

.lm > img { margin: 10px }

.move {
  overflow: hidden;
  animation: move 10s linear infinite;
}

@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, -50%);
  }
}
</style>
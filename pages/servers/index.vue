<template>
  <div class="flex justify-center">
    <div v-if="guilds" class="mainn grid">
      <div v-for="guild in guilds" class="mb-[60px]">
        <div class="h-[200px] w-[300px] rounded w-full overflow-y-hidden overflow-x-hidden grid grid-cols-3 grid-rows-3">
          <img :src="guild.icon_url" class="w-[110%] blur max-w-[110%] relative icon-bg rounded-[1rem]">
          <div class="icon w-full max-h-full h-[1000px] flex items-center justify-center align-middle">
            <img :src="guild.icon_url" alt="" class="h-[80px] rounded-full">
          </div>
        </div>
        <div class="flex items-center justify-between w-[300px] h-[60px] p-[10px]">
          <span class="text-white text-[14px]">{{ guild.name }}</span>
          <NuxtLink :to="`/servers/${guild.id}`">
            <button class="h-[40px] w-[100px] rounded bg-white ml-[10px]">Open</button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "list",
  // middleware: ["auth"]
})

const guilds = [
  {
    name: "PYRAX - Ziemniaczany Serwer Discord",
    id: "404004695703814149",
    icon_url: "https://cdn.discordapp.com/icons/404004695703814149/a_bcd06977a24274826f4ce134aef8a614.jpg"
  }, {
    name: "Test Server",
    id: "4040046957038141492",
    icon_url: "https://cdn.discordapp.com/icons/898986393177567242/2c79cf25dbdd75dedb487063b6f08eca.webp?size=160"
  }
]
</script>

<style>

@media screen and (min-width: 1200px) {
  .mainn {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 60px;
  }
}

@media screen and (min-width: 800px) and (max-width: 1200px) {
  .mainn {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 60px;
  }
}

@media screen and (max-width: 800px) {
  .mainn {
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
  }
}

.icon-bg {
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  transform: translateX(-5%) translateY(calc((270px - 100%) / 2));
  position: relative;
}
.icon {
  grid-row: 2 / 2;
  grid-column: 2 / 2;
  z-index: 10;
}
</style>
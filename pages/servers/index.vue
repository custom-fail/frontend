<template>
  <div>
    <div class="flex justify-center mt-[20px]">
      <div class="list grid">
        <div v-for="guild in guilds || []" class="mb-[60px]">
          <div class="h-[200px] w-[300px] rounded w-full overflow-y-hidden overflow-x-hidden grid grid-cols-3 grid-rows-3">
            <img :src="getIconUrl(guild.id, guild.icon)" class="w-[110%] blur max-w-[110%] relative icon-bg rounded-[1rem]">
            <div class="icon w-full max-h-full h-[1000px] flex items-center justify-center align-middle">
              <img :src="getIconUrl(guild.id, guild.icon)" alt="" class="h-[80px] rounded-full">
            </div>
          </div>
          <div class="flex items-center justify-between w-[300px] h-[60px] p-[10px]">
            <span class="text-white text-[14px]">{{ guild.name }}</span>
            <NuxtLink :to="`/servers/${guild.id}`">
              <button class="h-[40px] w-[100px] rounded border-primary border-[1px] ml-[10px]">
                <span class="text-text">Open</span>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
definePageMeta({
  middleware: "auth",
  ssr: false
})

const getIconUrl = (id, icon) => {
  return `https://cdn.discordapp.com/icons/${id}/${icon}.png`
}

const { getGuilds } = useLoginControls()

const response = await getGuilds();
const guilds = ref(response.guilds.filter((guild) => {
  const isAdmin = (Number(guild.permissions) & 1 << 3) === 8
  return (isAdmin || guild.owner) && response.mutual.includes(guild.id)
}))
</script>

<style>
@media screen and (min-width: 1200px) {
  .list {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 60px;
  }
}

@media screen and (min-width: 800px) and (max-width: 1200px) {
  .list {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 60px;
  }
}

@media screen and (max-width: 800px) {
  .list {
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
  z-index: 2;
}
</style>

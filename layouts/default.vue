<template>
  <div>
    <div class="w-full">
      <nav class="w-full absolute top-0 left-0 h-[80px] bg-background z-20 flex justify-between items-center">
        <div class="ml-[60px]">
          <CustomName />
        </div>
        <div class="flex text-text place-items-center">
          <NuxtLink href="/support" class="text-[16px] mr-[40px]">Documentation</NuxtLink>
          <NuxtLink href="https://discord.gg/7HUDwwZjGt" class="mr-[50px] text-[16px]">Discord Server</NuxtLink>
          <NuxtLink href="/servers"><button class="h-[50px] bg-white mr-[50px] rounded p-[10px] text-black">Open Dashboard</button></NuxtLink>
        </div>
      </nav>
    </div>
    <div class="h-100vh">
      <div class="h-[80px]"></div>
      <div class="w-full bg-background">
        <slot />
      </div>
    </div>

  </div>
</template>

<script setup>
import CustomName from "../components/CustomName"
const loginUrl = "https://discord.com/api/oauth2/authorize?client_id=988840106938990632&redirect_uri=https%3A%2F%2Fcustom.fail%2Fservers&response_type=code&scope=identify%20guilds"
</script>
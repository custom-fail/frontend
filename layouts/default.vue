<template>
  <div>
    <nav class="w-full absolute top-0 left-0 h-[80px] bg-selected z-20 flex justify-between items-center">
      <div class="ml-[60px]">
        <CustomName />
      </div>
      <a :href="loginUrl"><button class="h-[50px] bg-white mr-[50px] rounded p-[10px]">Open Dashboard</button></a>
    </nav>
    <div class="w-full h-[100vh] bg-background overflow-y-scroll">
      <div class="h-[80px]"></div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import CustomName from "../components/CustomName"
const loginUrl = "https://discord.com/api/oauth2/authorize?client_id=988840106938990632&redirect_uri=https%3A%2F%2Fcustom.fail%2Fservers&response_type=code&scope=identify%20guilds"
</script>
<template>
  <div>
    <div class="w-full">
      <nav class="w-full absolute top-0 left-0 h-[80px] bg-background z-20 flex justify-between items-center">
        <div class="ml-[60px]">
          <CustomName />
        </div>
        <div>
          <ListBullet class="menu-icon" @click="open = !open" />
          <div :class="open ? `mobile-links-menu` : `mobile-links-menu-closed`">
            <div class="links">
              <NuxtLink href="/support" class="link">Documentation</NuxtLink>
              <NuxtLink href="https://discord.gg/7HUDwwZjGt" class="link">Discord Server</NuxtLink>
              <NuxtLink href="/servers"><button class="open-dashboard">Open Dashboard</button></NuxtLink>
            </div>
          </div>
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
import ListBullet from "../components/icons/ListBullet";
import { ref } from "vue"

const loginUrl = "https://discord.com/api/oauth2/authorize?client_id=988840106938990632&redirect_uri=https%3A%2F%2Fcustom.fail%2Fservers&response_type=code&scope=identify%20guilds"
const open = ref(false)
</script>

<style>
@media only screen and (min-width: 791px) {
  nav > .links { @apply flex text-text place-items-center }
  .links > .link { @apply mr-[50px] text-[16px] text-text }
  .open-dashboard { @apply h-[50px] bg-white mr-[50px] rounded p-[10px] text-black }
  .menu-icon { @apply hidden }
}

@media only screen and (max-width: 790px) {
  .open-dashboard { @apply text-white }
  .mobile-links-menu-closed { @apply hidden }
  .mobile-links-menu { @apply fixed h-[calc(100vh-80px)] p-[20px] top-[80px] left-0 bg-background w-full }
  .links {
    @apply flex text-text;
    flex-direction: column-reverse;
  }
  .menu-icon { @apply text-white mr-[40px] cursor-pointer }
}
</style>
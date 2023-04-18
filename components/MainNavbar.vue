<template>
  <div class="w-full">
    <nav :class="[
          `w-full top-0 left-0 h-[80px] bg-${bgColor} flex justify-between items-center z-[1] absolute`,
          open ? `fixed` : ``
          ]">
      <div class="ml-[60px] z-20 ">
        <CustomName />
      </div>
      <div>
        <ListBullet class="menu-icon" @click="open = !open" />
        <div :class="open ? `mobile-links-menu bg-${bgColor}` : `mobile-links-menu-closed`">
          <div class="links">
            <NuxtLink href="/support" class="link">Documentation</NuxtLink>
            <NuxtLink href="https://discord.gg/7HUDwwZjGt" class="link">Discord Server</NuxtLink>
            <NuxtLink href="/servers"><button class="open-dashboard">Open Dashboard</button></NuxtLink>
          </div>
        </div>
      </div>
    </nav>
    <div class="w-full h-[80px]"></div>
  </div>
</template>

<script setup>
import ListBullet from "~/components/icons/ListBullet.vue";

const props = defineProps(["bgColor"])
const bgColor = props.bgColor || "background"
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
  .mobile-links-menu { @apply fixed h-[calc(100vh-80px)] p-[20px] top-[80px] left-0 w-full z-10 }
  .links {
    @apply flex text-text;
    flex-direction: column-reverse;
  }
  .menu-icon { @apply text-white mr-[40px] cursor-pointer }
}
</style>
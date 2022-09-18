<template>
  <div class="scroll-smooth text-white">
    <div class="first">

    </div>
    <Separator />
    <div class="pr-[5%] pl-[5%]">
      <div class="flex justify-center mb-[100px]">
        <img class="w-[35%] max-w-[500px] mr-[30px]" src="/img/Frame%203.svg" />
        <div class="place-items-center grid">
          <div>
            <span class="text-white text-[20px]">Context menus</span><br>
            <span>Compatible with a discord latest features to improve your experience</span>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="place-items-center grid">
          <div>
            <span class="text-white text-[20px]">Modals/Forms</span><br>
            <span>We are making everything intuitive. Accessibility is our top priority!</span>
          </div>
        </div>
        <img class="w-[35%] max-w-[500px] ml-[30px]" src="/img/Frame%205.svg" />
      </div>
    </div>
    <Separator />
    <div class="h-[300px] w-full grid grid-cols-3 text-text text-center">
      <div class="logobox">
        <span class="white text-[50px] bold text-white mt-[120px] flex justify-center items-center">Custom</span>
      </div>
      <div>
        <a href="https://github.com/custom-fail/">Support Server</a><br>
        <a :href="inviteUrl">Invite bot</a><br>
        <a href="https://github.com/custom-fail/">Github</a>
      </div>
      <div>
        <NuxtLink href="/guidelines">Assets guidelines</NuxtLink><br>
        <NuxtLink href="/tos">Terms of service</NuxtLink><br>
        <NuxtLink href="/privacy">Privacy policy</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import Separator from "../components/content/Separator"
const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=988840106938990632&permissions=8&scope=bot%20applications.commands`
</script>

<style>
.first {
  height: calc(100vh - 80px - 20px - 20px);
}
</style>
<template>
  <div class="scroll-smooth text-white">
    <div class="first">

    </div>
    <Separator />
    <div class="pr-[5%] pl-[5%] bg-[#121313] my-[50px]">
      <div>
        <div class="flex justify-between">
          <div class="flex justify-center place-items-center">
            <div class="mb-[20px]">
              <span class="text-3xl font-bold mb-[20px]">
                Moderation with quality out of the box
              </span><br>
              <div class="ml-[5px]">
                <div class="flex" v-for="text in [`Cases (punishments saving)`, `Auto Moderation`, `Utils commands`]">
                  <img class="h-[25px]" src="/img/icons8-approved-checkmark-symbol-to-verify-the-result.svg">
                  {{ text }}
                </div>
              </div>

            </div>
          </div>
          <img src="/img/previews/AntiDuplicate.svg" class="w-[35%] ml-[5%] mb-[60px]">
        </div>
        <div class="flex">
          <img src="/img/previews/CaseLast.svg" class="w-[35%] mr-[60px]">
          <img src="/img/previews/AutoMod.svg" class="w-[35%] ml-[60px]">
          <img src="/img/previews/AutoModLogs.svg" class="w-[35%] ml-[60px]">
          <img src="/img/previews/Timeout.svg" class="w-[35%] ml-[60px]">
        </div>
      </div>
    </div>
    <Separator />
    <div class="flex justify-between mx-[15%] my-[50px]">
      <div class="flex place-items-center">
        <span>Ready for using inviting Custom to your server?</span>
      </div>
      <div>
        <NuxtLink href="/servers">
          <button class="bg-[#dcc7c7] p-[10px] text-black rounded mr-[10px]">Open Dashboard</button>
        </NuxtLink>
        <NuxtLink href="/support">
          <button class="bg-[#3c56a4] p-[10px] text-white rounded mr-[10px]">Documentation</button>
        </NuxtLink>
        <NuxtLink href="https://discord.gg/7HUDwwZjGt">
          <button class="bg-[#3c56a4] p-[10px] text-white rounded">Support Server</button>
        </NuxtLink>
      </div>
    </div>
    <Separator />
    <div class="pr-[5%] pl-[5%] my-[50px]">
      <div class="flex justify-center mb-[100px]">
        <img class="w-[35%] max-w-[500px] mr-[30px]" src="/img/previews/ContextMenus.svg" />
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
        <img class="w-[35%] max-w-[500px] ml-[30px]" src="/img/previews/Modals.svg" />
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
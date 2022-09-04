<template>
  <div class="scroll-smooth">
    <div class="first">
    </div>
    <separator />
    <div class="first">

    </div>
    <separator />
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
const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=988840106938990632&permissions=8&scope=bot%20applications.commands`
</script>

<style>
.first {
  height: calc(100vh - 80px - 20px - 20px);
}
</style>
<template>
  <div>
    <NuxtLink href="/servers">
      <button class="bg-[#dcc7c7] text-black action-button">Open Dashboard</button>
    </NuxtLink>
    <NuxtLink href="/support">
      <button class="bg-[#3c56a4] text-white action-button">Documentation</button>
    </NuxtLink>
    <NuxtLink href="https://discord.gg/7HUDwwZjGt">
      <button class="bg-[#3c56a4] text-white action-button">Support Server</button>
    </NuxtLink>
  </div>
</template>

<style>
@reference "tailwindcss";

.action-button {
  @apply p-[10px] rounded mr-[10px] mb-[10px]
}
</style>
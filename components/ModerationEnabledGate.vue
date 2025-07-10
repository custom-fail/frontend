<template>
  <slot v-if="config.moderation" />
  <div v-else class="flex items-center flex-col h-[calc(100vh - 80px - 40px)] gap-[10px]">
    <Title>Moderation module is not set-up</Title>
    <button class="p-[10px] cursor-pointer bg-visible text-secondary rounded-md">Continue with recommended configuration</button>
    <button class="p-[10px] cursor-pointer bg-visible rounded-md" @click="enableWithEverythingOff()">Continue with everything disabled</button>
  </div>
</template>

<script setup>
import {useGuildConfig} from "~/composables/confguration";
import Title from "~/components/content/Title.vue";

const config = await useGuildConfig();

const enableWithEverythingOff = () => {
  config.value.moderation = {
    dm_case: false,
    automod: null,
    logs_channel: null,
    native_support: false,
    mute_mode: 1,
    mute_role: null,
    context_menu: false
  }

  config.value.enabled_commands.timeout = false
  config.value.enabled_commands.mute = false
  config.value.enabled_commands.kick = false
  config.value.enabled_commands.warn = false
  config.value.enabled_commands.ban = false

  config.value.enabled_commands.clear = true
}
</script>

<style scoped>

</style>

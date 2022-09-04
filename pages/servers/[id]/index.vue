<template>
  <main class="p-[50px] align-middle">
    <disclosure as="div" :defaultOpen="true"
                class="w-full p-[24px] bg-containers rounded max-w-[1500px] mb-8 "
                v-for="section in data" v-slot="{ open }">
      <div class="flex justify-between">
        <span class="text-[26px] text-white">{{ section.name }}</span>
        <disclosure-button>
          <ChevronUpIcon
              :class="!open ? 'transform rotate-180' : ''"
              class="w-7 h-7 text-white right-0"
          />
        </disclosure-button>
      </div>
      <disclosure-panel>
        <separator />
        <div class="grid grid-cols-3">
          <NuxtLink v-for="plugin in section.plugins" :to="`/servers/${$route.params.id}/${plugin.to}`">
            <div class="bg-visible rounded p-[20px] m-[5px] hover:bg-hover hover:cursor-pointer">
              <img class="h-[50px] mb-[10px]" :src="plugin.icon" alt="">
              <span class="text-white text-[18px] mb-[5px]">{{ plugin.name }}</span><br>
              <span class="text-[#9b9d9f] text-[14px]">{{ plugin.description }}</span>
            </div>
          </NuxtLink>
        </div>
      </disclosure-panel>
    </disclosure>
  </main>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from '@heroicons/vue'

definePageMeta({
  layout: "server"
});

const data = [{
  name: "Moderation",
  plugins: [{
    name: "Moderation",
    description: "Manage executing moderation actions such a timeouts, bans and kicks",
    icon: "/assets/img/icons8-where-to-quest-100.png",
    to: "moderation"
  }, {
    name: "Auto Moderation",
    description: "Automate detecting suspicious behaviour of members on your server",
    icon: "/assets/img/icons8-security-configuration-100.png",
    to: "automod"
  }, {
    name: "Cases",
    description: "Save information about everything that moderators have done",
    icon: "/assets/img/icons8-card-security-100.png",
    to: "cases"
  }]
}]
</script>
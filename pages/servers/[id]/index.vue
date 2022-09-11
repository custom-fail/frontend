<template>
  <main class="p-[50px] align-middle">
    <disclosure as="div" :defaultOpen="true"
                class="w-full p-[24px] bg-containers rounded max-w-[1500px] mb-8 "
                v-for="section in data" v-slot="{ open }">
      <div class="flex justify-between">
        <span class="text-[26px] text-white">{{ section.name }}</span>
        <disclosure-button>
          <ChevronUp
              :class="!open ? 'transform rotate-180' : ''"
              class="w-7 h-7 text-white right-0 transform transition-transform duration-300"
          />
        </disclosure-button>
      </div>
      <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-out"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
      >
        <disclosure-panel>
          <Separator />
          <div class="grid grid-cols-3">
            <NuxtLink v-for="plugin in section
            .plugins" :to="`/servers/${$route.params.id}/${plugin.to}`">
              <div class="bg-visible rounded p-[20px] m-[5px] hover:bg-hover hover:cursor-pointer">
                <img class="h-[50px] mb-[10px]" :src="plugin.icon" alt="">
                <span class="text-white text-[18px] mb-[5px]">{{ plugin.name }}</span><br>
                <span class="text-[#9b9d9f] text-[14px]">{{ plugin.description }}</span>
              </div>
            </NuxtLink>
          </div>
        </disclosure-panel>
      </transition>
    </disclosure>
  </main>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import ChevronUp from "../../../components/icons/ChevronUp";
import Separator from "../../../components/content/Separator"

definePageMeta({
  layout: "server"
});

const data = [{
  name: "Moderation",
  plugins: [{
    name: "Moderation",
    description: "Manage executing moderation actions such a timeouts, bans and kicks",
    icon: "/img/icons8-where-to-quest-100.png",
    to: "moderation"
  }, {
    name: "Auto Moderation",
    description: "Automate detecting suspicious behaviour of members on your server",
    icon: "/img/icons8-security-configuration-100.png",
    to: "automod"
  }, {
    name: "Cases",
    description: "Save information about everything that moderators have done",
    icon: "/img/icons8-card-security-100.png",
    to: "cases"
  }]
}]
</script>
<template>
  <nav class="w-[300px] bg-background h-[100vh] overflow-y-hidden border-r-lines border-r-[1px] pl-[20px] pr-[20px]">
    <div class="mt-[15px] mb-[10px]">
      <custom-name />
    </div>
    <!-- <guilds-selector /> -->
    <div class="m-[2px] mt-[10px] text-[#8e9193]">
      <disclosure as="div" v-for="section in sections" v-slot="{ open }" :defaultOpen="true">
        <div class="mt-[15px]">
          <div class="flex justify-between" v-if="!section.hideName">
            <span class="text-white font-black text-[12px]">{{ section.name }}</span>
            <disclosure-button class="h-[24px] w-[24px]">
              <img
                  src="~/assets/ChevronUp.svg"
                  :class="!open ? 'transform rotate-180' : ''" class="h-[24px] w-[24px] text-white z-0 right-0"
              />
            </disclosure-button>
          </div>
          <disclosure-panel>
            <div v-for="page in section.pages" class="flex text-[#97999b] h-[40px] w-full items-center pl-[10px]"
                 :class="page.id === ($route.params.section || `main`)  ? `bg-containers rounded` : ``">
              <img class="fill-white h-[24px] mr-[15px] opacity-[50%] fill-white" :src="page.icon" alt="">
              <NuxtLink :to="page.id === `main` ? `/servers/${guild_id}` : `/servers/${guild_id}/${page.id}`">
                <span class="hover:text-white text-[13px]"
                      :class="page.id === ($route.params.section || `main`) ? `text-white` : `text-[#8e9193]`">
                  {{ page.name }}
                </span>
              </NuxtLink>
            </div>
          </disclosure-panel>
        </div>
      </disclosure>
    </div>
  </nav>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ref } from "vue";
const router = useRoute()

const open = false;

const selectedSection = ref(router.params.section || "main")
const guild_id = ref(router.params.id)

const sections = [{
  name: "MAIN",
  hideName: true,
  pages: [
    {
      icon: "/assets/img/dashboard_white_24dp.svg",
      name: "Dashboard",
      id: "main",
      premium: false,
      disabled: false,
      selected: true
    },
    // {
    //   icon: "/assets/img/account_circle_white_24dp.svg",
    //   name: "Custom Bot",
    //   id: "custom-bot",
    //   premium: false,
    //   disabled: false,
    //   selected: false
    // }, {
    //   icon: "/assets/img/admin_panel_settings_white_24dp.svg",
    //   name: "Settings",
    //   id: "options",
    //   premium: false,
    //   disabled: false,
    //   selected: false
    // }
      ]
}, {
  name: "MODERATION",
  pages: [{
    icon: "/assets/img/handyman_white_24dp.svg",
    name: "Moderation",
    id: "moderation",
    premium: false,
    disabled: false,
    selected: false
  }, {
    icon: "/assets/img/comments_disabled_white_24dp.svg",
    name: "AutoMod",
    id: "automod",
    premium: false,
    disabled: false,
    selected: false
  }, {
    icon: "/assets/img/settings_backup_restore_white_24dp.svg",
    name: "Cases",
    id: "cases",
    premium: false,
    disabled: false,
    selected: false
  }]
}]
</script>

<style>
.border-navbar {
  border-right: 1px solid rgb(49, 52, 66);
}
</style>
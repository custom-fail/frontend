<template>
  <nav class="w-[300px] bg-background h-[100vh] overflow-y-hidden border-r-lines border-r-[1px] pl-[20px] pr-[20px]">
    <div class="mt-[15px] mb-[10px]">
      <CustomName />
    </div>
    <!-- <guilds-selector /> -->
    <div class="m-[2px] mt-[10px] text-[#8e9193]">
      <disclosure as="div" v-for="section in sections" v-slot="{ open }" :defaultOpen="true">
        <div class="mt-[15px]">
          <div class="flex justify-between" v-if="!section.hideName">
            <span class="text-white font-black text-[12px]">{{ section.name }}</span>
            <disclosure-button class="h-[24px] w-[24px]">
              <ChevronUp
                  :class="!open ? 'transform rotate-180' : ''"
                  class="h-[24px] w-[24px] text-white z-0 right-0 transform transition-transform duration-300"
              />
            </disclosure-button>
          </div>

          <disclosure-panel>
            <div v-for="page in section.pages" class="flex text-[#97999b] h-[40px] w-full items-center pl-[10px]"
                 :class="sectionID === page.id ? `bg-containers rounded` : ``">
              <img class="fill-white h-[24px] mr-[15px] opacity-[50%] fill-white" :src="page.icon" alt="">
              <NuxtLink :to="page.id === `main` ? `/servers/${guildID}` : `/servers/${guildID}/${page.id}`">
                <span class="hover:text-white text-[13px]"
                      :class="sectionID === page.id ? `text-white` : `text-[#8e9193]`">
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
import CustomName from "./CustomName"
import { ref, watch, onMounted } from "vue";
import ChevronUp from "./icons/ChevronUp";
const router = useRoute()

let guildID = ref(router.params.id)
let sectionID = ref("")

const updatePathData = () => {
  const guild = router.params.id;
  const pathParts = router.path.split("/")
  const sectionPart = pathParts[pathParts.length - 1]
  const section = sectionPart === guild ? "main" : sectionPart

  guildID.value = router.params.id
  sectionID.value = section
}

onMounted(updatePathData)
watch(router, updatePathData)

const sections = [{
  name: "MAIN",
  hideName: true,
  pages: [
    {
      icon: "/img/dashboard_white_24dp.svg",
      name: "Dashboard",
      id: "main",
      premium: false,
      disabled: false,
      selected: true
    },
    // {
    //   icon: "/img/account_circle_white_24dp.svg",
    //   name: "Custom Bot",
    //   id: "custom-bot",
    //   premium: false,
    //   disabled: false,
    //   selected: false
    // }, {
    //   icon: "/img/admin_panel_settings_white_24dp.svg",
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
    icon: "/img/handyman_white_24dp.svg",
    name: "Moderation",
    id: "moderation",
    premium: false,
    disabled: false,
    selected: false
  }, {
    icon: "/img/comments_disabled_white_24dp.svg",
    name: "AutoMod",
    id: "automod",
    premium: false,
    disabled: false,
    selected: false
  }, {
    icon: "/img/settings_backup_restore_white_24dp.svg",
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
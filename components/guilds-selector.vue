<template>
  <Listbox as="div" v-model="selected">
    <div class="mt-1 flex justify-center">
      <ListboxButton class="relative w-[100%] h-[56px] bg-[#17181e] text-white center rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <span class="flex items-center">
            <img :src="selected.icon_url" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
            <span class="ml-3 block truncate">{{ selected.name }}</span>
          </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <img
                src="~/assets/ChevronUpDown.svg"
                class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
      </ListboxButton>

      <transition class="mt-[50px]" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute pt-[12px] bg-[#17181e] shadow-lg rounded-b-md z-10">
          <ListboxOption as="template" v-for="guild in guilds" :key="guild.id" :value="guild" v-slot="{ active, selected }">
            <li>
              <div class="relative w-[260px] h-[56px] bg-[#17181e] text-white center rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span class="flex items-center">
                    <img :src="guild.icon_url" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
                    <span class="ml-3 block truncate">{{ guild.name }}</span>
                  </span>
              </div>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { ref } from "vue";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue"
const guilds = [
    {
      name: "PYRAX - Ziemniaczany Serwer Discord",
      id: "404004695703814149",
      icon_url: "https://cdn.discordapp.com/icons/404004695703814149/a_bcd06977a24274826f4ce134aef8a614.jpg"
    }, {
      name: "⭐HORDA KONOPA⭐",
      id: "4040046957038141492",
      icon_url: "https://cdn.discordapp.com/icons/236585785049088003/a_74f561a66ed6dcfe7be6cba2319ee280.webp?size=160"
    }, {
      name: "Test Server",
      id: "4040046957038141492",
      icon_url: "https://cdn.discordapp.com/icons/898986393177567242/2c79cf25dbdd75dedb487063b6f08eca.webp?size=160"
    }
]
const selected = ref(guilds[0])
</script>
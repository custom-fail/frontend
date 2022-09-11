<template>
  <Listbox as="div" v-model="modelValue" @update:modelValue="$emit(`update:modelValue`, $event)">
    <div class="mt-1 flex justify-center cursor-pointer">
      <ListboxButton class="relative w-[100%] h-[56px] bg-selected text-white center rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <span class="flex items-center">
            <img :src="getGuildData(modelValue).icon_url" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
            <span class="ml-3 block truncate">{{ getGuildData(modelValue).name }}</span>
          </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronUpDown class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
      </ListboxButton>

      <transition class="mt-[50px]" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute pt-[12px] bg-selected shadow-lg rounded-b-md z-10">
          <ListboxOption as="template" v-for="guild in guilds" :key="guild.id" :value="guild.id" v-slot="{ active, selected }">
            <li>
              <div class="relative w-[260px] h-[56px] bg-selected text-white center rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue"
import ChevronUpDown from "../icons/ChevronUpDown";

let { modelValue, guilds } = defineProps(["modelValue", "guilds"])
defineEmits(["update:modelValue"])

const getGuildData = (guildID) => guilds.find(guild => guild.id === guildID)
</script>
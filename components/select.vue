<template>
  <Listbox as="div" v-model="selected">
    <div class="mt-1">
      <ListboxButton class="relative max-w-[483px] w-full h-[56px] bg-[#17181e] text-white center rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span class="flex items-center">
                <div :style="`background-image: url(${selected.icon_url})`" alt="" class="bg-cover bg-center flex-shrink-0 h-[25px] w-[25px] rounded-full" />
                <span class="ml-3 block truncate">{{ selected.name }}</span>
              </span>
        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>
      <transition class="mt-[50px]" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute pt-[12px] bg-[#17181e] shadow-lg rounded-b-md z-10">
          <ListboxOption as="template" v-for="option in options" v-slot="{ active, selected }">
            <li>
              <div class="relative h-[56px] bg-[#17181e] text-white center rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span class="flex items-center">
                    <img :src="option.icon_url" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" />
                    <span class="ml-3 block truncate">{{ option.name }}</span>
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
const { modelValue, options } = defineProps(['modelValue, options'])
const $emit = defineEmits(['update:modelValue'])
let selected = ref(modelValue)

watch(selected, (v) => $emit('update:modelValue', v))
</script>
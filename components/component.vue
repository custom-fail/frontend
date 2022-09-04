<template>
  <div class="flex justify-center">
    <div class="max-w-[1500px] w-full">
      <!--
      <div v-else-if="part.type === `switch`">

      </div>
      <div v-else-if="part.type === `line`">
        <hr class="w-full h-[1px] border-[#272934]">
      </div>
      <div v-else-if="part.type === `image`">
        <img :src="part.src" alt="" >
      </div>
      <div v-else-if="part.type === `title`">
        <span class="text-white text-[24px]">{{ part.text }}</span>
      </div>
      <div v-else-if="part.type === `description`">
        <span class="text-[#9b9d9f] text-[14px]">{{ part.text }}</span>
      </div>
      <div v-else-if="part.type === `select`">

      </div>
-->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Switch } from "@headlessui/vue"
import { SelectorIcon } from '@heroicons/vue/solid'

const { part } = defineProps(["part"])

const enabled = ref(true)
</script>
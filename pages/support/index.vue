<template>
  <div class="text-white flex w-[90%]">
    <div v-for="section in sections" class="">
      <NuxtLink v-for="page in section.pages" :href="`/support/${page.url}`">
        <div class="w-[250px] bg-black rounded h-[150px] p-[20px] m-[15px]">
          <div>
            {{ page.name }}
          </div>
          <div>{{ section.name }}</div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useSupportSectionsData } from "~/composables/support";
const sections = useSupportSectionsData()
</script>
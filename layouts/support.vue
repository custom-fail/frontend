<template>
  <div>
    <NuxtLayout name="default" class="w-full h-screen">
      <div class="w-[80%] flex mx-[5%]">
        <div class="ml-[10px] rounded-xl w-[320px] min-w-[320px] max-w-[320px] h-[calc(100vh-90px)] p-[20px] text-text">
          <div v-for="section in sections">
            <span class="text-white text-[20px]">{{ section.name }}</span>
            <div>
              <div v-for="page in section.pages" class="pl-[10px] pt-[5px] pb-[5px] hover:underline">
                <NuxtLink :href="`/support/${page.url}`">{{ page.name }}</NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="p-[20px] w-full text-text pr-[5%]">
          <NuxtPage />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useSupportSectionsData } from "~/composables/support";
const sections = useSupportSectionsData()
console.log(sections)
</script>
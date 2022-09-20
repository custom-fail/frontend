<template>
  <div>
    <Container>
      <NuxtLink href="automod/custom">
        <div class="w-full h-[80px] bg-visible hover:bg-selected rounded cursor-pointer flex justify-between place-items-center px-[3%] mb-[20px]">
          <span>Custom Rules</span>
          <ChevronRight />
        </div>
      </NuxtLink>
      <NuxtLink href="automod/basic">
        <div class="w-full h-[80px] bg-visible hover:bg-selected rounded cursor-pointer flex justify-between place-items-center px-[3%]">
          <span>Basic Rules</span>
          <ChevronRight />
        </div>
      </NuxtLink>
    </Container>
  </div>
</template>

<script setup>
import Container from "../../../../components/content/Container"
import { ref } from "vue"
import ChevronRight from "../../../../components/icons/ChevronRight";

const basicRules = ref([
  { name: "Scam links", enabled: false },
  { name: "Mass mentions", enabled: false },
  { name: "Caps lock", enabled: false },
  { name: "Invites", enabled: false }
])

definePageMeta({
  layout: "server"
})
</script>
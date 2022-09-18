<template>
  <div class="grid grid-cols-2 gap-[20px]">
    <Container>
      <Title>Basic Rules</Title>
      <Separator />
      <div>
        <div v-for="rule in basicRules"
          :class="[
              `w-full bg-selected rounded m-[5px] p-[5px] h-[60px] text-text flex justify-between`,
              rule.enabled ? `` : ``
          ]"
        >
          <span class="ml-[20px]">
            {{ rule.name }}
          </span>
          <Switch v-model="rule.enabled" class="w-[200px]" />
        </div>
      </div>
    </Container>
    <Container>
      <Title>Custom Rules</Title>
      <Separator />
    </Container>
  </div>

</template>

<script setup>
import Container from "../../../../components/content/Container"
import Title from "../../../../components/content/Title"
import { ref } from "vue"
import Separator from "../../../../components/content/Separator";
import {Switch} from "@headlessui/vue";

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
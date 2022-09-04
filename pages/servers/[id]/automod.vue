<template>
  <div class="grid grid-cols-2 gap-[20px]">
    <Container>
<!--      Basic Rules-->
      <div>

        <button v-for="rule in basicRules"
          :class="[
              `w-full bg-selected rounded m-[5px] p-[5px] h-[60px] text-text`,
              rule.enabled ? `` : ``
          ]"
        >
          <div class="w-full grid grid-cols-2 text-left">
            <span class="ml-[20px]">
              {{ rule.name }}
            </span>

          </div>

        </button>
      </div>
    </Container>
    <Container>
      <Title>Custom Rules</Title>

    </Container>
  </div>

</template>

<script setup>
import Container from "../../../components/container"
import { ref } from "vue"

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
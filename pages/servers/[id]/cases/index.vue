<template>
  <div>
    <Container>
      <div class="flex justify-between align-middle">
        <div class="place-items-center inherit">
          <span>Show cases in selected servers</span>
        </div>
        <NuxtLink href="cases/list">
          <button class="rounded h-[50px] w-[230px] bg-secondary">View cases</button>
        </NuxtLink>
      </div>
    </Container>
    <Commands v-model="commands" />
    <container>
<!--      Save messages: <Switch :enabled="enabled" />-->
    </container>
  </div>
</template>

<script setup>
import Container from "../../../../components/content/Container";
import Commands from "../../../../components/content/Commands"
// import { Switch } from "@headlessui/vue"
import {ref} from "vue";
// const enabled = ref(true)

const commands = ref([
  { name: "case edit", description: "Edits reason of a case", options: ["number", "reason"], enabled: false },
  { name: "case details", description: "Show detailed information selected about case", options: ["number"], enabled: false },
  { name: "case list", description: "List all user cases", options: ["member", "page", "type"], enabled: false },
  { name: "case last", description: "Show detailed information about last case" , options: ["member"], enabled: false },
  { name: "case remove", description: "Removes case from user history" , options: ["number"], enabled: false }
])
definePageMeta({
  layout: "server",
  // middleware: ["auth"]
})
</script>
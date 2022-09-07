<template>
  <div>
    <Commands v-model="commands" />
    <container>
      <!--    Save messages: <Switch :enabled="enabled" />-->
    </container>
  </div>
</template>

<script setup>
import Container from "../../../components/container";
import Commands from "../../../components/commands"
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
<template>
  <div>
    <Commands :commands="commands" />
    <container>
      <!--    Save messages: <Switch :enabled="enabled" />-->
    </container>
  </div>
</template>

<script setup>
import Container from "../../../components/container";
// import Switch from "../../../components/SwitchLR";
// import { Switch } from "@headlessui/vue"
import {ref} from "vue";
// const enabled = ref(true)

const commands = [
  { name: "case edit", description: "Edits reason of a case", options: ["number", "reason"], enabled: ref(false) },
  { name: "case details", description: "Show detailed information selected about case", options: ["number"], enabled: ref(false) },
  { name: "case list", description: "List all user cases", options: ["member"], enabled: ref(false) },
  { name: "case last", description: "Show detailed information about last case" , options: ["member"], enabled: ref(false) },
  { name: "case remove", description: "Removes case from user history" , options: ["number"], enabled: ref(false) }
]
definePageMeta({
  layout: "server",
  // middleware: ["auth"]
})
</script>
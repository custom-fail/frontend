<template>
  <div class="text=white">
    <Commands v-model="commands" />
    <Container>
      <Title>Permissions</Title>
      <Separator />
      <Warning>
        Access to selected moderation commands can be disabled/enabled in server settings (Integrations > Bots and Apps > Custom > Command Permissions)<br><br>
        <img
            src="https://cdn.discordapp.com/attachments/988845764925067424/1015291942457856110/unknown.png"
            alt="Screenshot from settings"
        />
      </Warning>
    </Container>
    <Container>
      <Title>Mutes</Title><br><br>
      <div>
        <div class="grid grid-flow-col">
          <span>Mute mode: </span>
          <TabSelect :tabs="muteModes" v-model="muteMode" />
        </div>
        <div v-if="muteMode === `Role` || muteMode === `Depends on command`">
          <span>Role given for muted users:</span>

        </div>
      </div>

    </Container>
    <Container>
      <div class="grid  gap-[10px] buttons">
        Require reasons: <Switch v-model="requireReasons" /><br>
        Context menus: <Switch v-model="contextMenus" /><br>
        Revert actions: <Switch v-model="revertActions" /><br>
      </div>
    </Container>
  </div>
</template>

<script setup>
import Container from "../../../components/container";
import Switch from "../../../components/SwitchLR";
import Warning from "../../../components/warning";
import Title from "../../../components/title";
import Separator from "../../../components/separator";
import TabSelect from "../../../components/TabSelect";
import Commands from "../../../components/commands"

import { ref, watch } from "vue";

const muteModes = ["Depends on command", "Timeout", "Role"]

let requireReasons = ref(true)
let contextMenus = ref(true)
let revertActions = ref(true)
let muteMode = ref("Depends on command")

let commands = ref([])

const timeout = { name: "timeout", description: "Time out user", options: ["member", "duration", "reason"], enabled: true };
const mute = { name: "mute", description: "Mute user", options: ["member", "duration", "reason"], enabled: true };
const kick = { name: "kick", description: "Kick user", options: ["member", "reason"], enabled: true };
const ban = { name: "ban", description: "Ban user", options: ["member", "duration", "reason"], enabled: true };
const unban = { name: "unban", description: "Removes ban", options: ["member", "duration", "reason"], enabled: true };
const unmute = { name: "unmute", description: "Removes mute/timeout", options: ["member", "duration", "reason"], enabled: true };

const updateCommands = () => {
  const results = [kick, ban]

  if(muteMode.value === "Timeout") results.push(timeout)
  else if(muteMode.value === "Role") results.push(mute)
  else if(muteMode.value === "Depends on command") results.push(timeout, mute)

  if(revertActions.value) results.push(unban, unmute)

  commands.value = results
}

updateCommands()
watch(muteMode, updateCommands)

definePageMeta({
  layout: "server",
  // middleware: ["auth"]
})
</script>

<style>
.inherit {
  display: inherit;
}

.buttons {
  grid-template-columns: 1fr 80px;
}
</style>
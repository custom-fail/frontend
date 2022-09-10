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
        <div>
          <span>Mute mode: </span>
          <TabSelect :tabs="muteModes" v-model="muteMode" class="mt-[5px]" />
        </div>
        <div v-if="muteMode === `Role` || muteMode === `Depends on command`" class="mt-[10px]">
          <span>Role given to muted users:</span>
          <RoleSelector :roles="guildRoles" v-model="muteRole" class="mt-[5px]" />
        </div>
      </div>

    </Container>
    <Container>
      <div class="line">Require reasons: <Switch v-model="requireReasons" /></div>
      <div class="line">Context menus: <Switch v-model="contextMenus" /></div>
      <div class="line">Revert actions: <Switch v-model="revertActions" /></div>
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
import RoleSelector from "../../../components/RoleSelector";

import { ref, watch } from "vue";

const muteModes = ["Depends on command", "Timeout", "Role"]

let requireReasons = ref(true)
let contextMenus = ref(true)
let revertActions = ref(false)
let muteMode = ref("Depends on command")

let muteRole = ref("321")

const guildRoles = [{ name: "Administrator", id: "123", color: 0 }, { name: "Muted", id: "321", color: 0 }]

let commands = ref([])

const timeout = { name: "timeout", description: "Time out user", options: ["member", "duration", "reason"], enabled: true };
const mute = { name: "mute", description: "Mute user", options: ["member", "duration", "reason"], enabled: true };
const kick = { name: "kick", description: "Kick user", options: ["member", "reason"], enabled: true };
const ban = { name: "ban", description: "Ban user", options: ["member", "duration", "reason"], enabled: true };
const unban = { name: "unban", description: "Removes ban", options: ["member"], enabled: true };
const unmute = { name: "unmute", description: "Removes mute/timeout", options: ["member"], enabled: true };

const updateCommands = () => {
  const results = [kick, ban]

  if(muteMode.value === "Timeout") results.push(timeout)
  else if(muteMode.value === "Role") results.push(mute)
  else if(muteMode.value === "Depends on command") results.push(timeout, mute)

  if(revertActions.value) results.push(unban, unmute)

  commands.value = results
}

updateCommands()
watch(revertActions, updateCommands)
watch(muteMode, updateCommands)

definePageMeta({
  layout: "server",
  // middleware: ["auth"]
})
</script>

<style>
.buttons {
  grid-template-columns: 1fr 80px;
}

.line {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
</style>
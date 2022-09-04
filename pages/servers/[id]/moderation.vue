<template>
  <div>
    <Commands :commands="commands" />
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
          <TabSelect :tabs="muteModes" v-model="mode" />
        </div>
        <div v-if="mode.toLowerCase() === `role`">
          <span>Role given for muted users:</span>

        </div>
      </div>

    </Container>
    <Container>
      <div class="grid  gap-[10px] buttons">
        <span>Require reasons: </span> <Switch v-model="enabled" /><br>
        Context menus: <Switch v-model="enabled" /><br>
      </div>
      <!--    Revertable actions: <Switch test="a" v-model="enabled" /><br>-->

    </Container>
  </div>
</template>

<script setup>
import Container from "../../../components/container";
import Switch from "../../../components/SwitchLR";
import Warning from "../../../components/warning";
// import Line from "../../../components/line";
import Title from "../../../components/title";
import Separator from "../../../components/separator";
import TabSelect from "../../../components/TabSelect";
import Commands from "../../../components/commands"

import { ref } from "vue";

const commands = [
    { name: "timeout", description: "Blocks possibility to send messages in selected amount of time", options: ["member", "reason"], enabled: ref(true) },
    { name: "mute", description: "Blocks possibility to send messages in selected amount of time" , options: ["member", "reason"], enabled: ref(false) }
]
const enabled = true
// watch(enabled, () => {
//   console.log(enabled)
// })
const muteModes = ["Depends on command", "Timeout", "Role"]
const mode = "Depends on command"

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
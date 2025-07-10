<template>
  <ModerationEnabledGate>
    <CommandsContainer>
      <Command
          v-if="[MuteModes.Timeout, MuteModes.DependsOnCommand].includes(config.moderation?.mute_mode)"
          name="timeout"
          description="Timeouts user"
          :options="
          ['member', 'duration', 'reason']"
          v-model="config.enabled_commands.timeout"
      />
      <Command
          v-if="[MuteModes.Role, MuteModes.DependsOnCommand].includes(config.moderation?.mute_mode)"
          name="mute"
          description="Mutes user"
          :options="['member', 'duration', 'reason']"
          v-model="config.enabled_commands.mute"
      />
      <Command
          name="kick"
          description="Warns user"
          :options="['member', 'reason']"
      />
      <Command
        name="warn"
        description="Warns user"
        :options="['member', 'reason']"
      />
      <Command
          name="ban"
          description="Warns user"
          :options="['member', 'duration', 'reason']"
      />
    </CommandsContainer>

    <Container>
      <Title>Permissions</Title>
      <Separator />
      <MessageBox type="warning">
        Access to selected moderation commands can be disabled/enabled in server settings (Integrations > Bots and Apps > Custom > Command Permissions)<br><br>
        <img
            src="https://cdn.discordapp.com/attachments/988845764925067424/1015291942457856110/unknown.png"
            alt="Screenshot from settings"
        />
      </MessageBox>
    </Container>

    <Container>
      <Title>Mutes</Title>
      <Separator />
      <div>
        <div>
          <span>Mute mode: </span>
          <TabSelect :tabs="muteModes" v-model="config.moderation.mute_mode" class="mt-[5px]" />
        </div>

        <div v-if="[MuteModes.Role, MuteModes.DependsOnCommand].includes(config.moderation.mute_mode)" class="mt-[10px]">
          <span>Role given to muted users:</span>
          <RoleSelector :roles="guildRoles" v-model="config.moderation.mute_role" class="mt-[5px]" />
        </div>
      </div>
    </Container>
    <Container>
<!--      <div class="line">Require reasons: <Switch v-model="requireReasons" /></div>-->
      <div class="line">Context menus: <Switch v-model="config.moderation.context_menus" /></div>
<!--      <div class="line">Revert actions: <Switch v-model="revertActions" /></div>-->
    </Container>
  </ModerationEnabledGate>
</template>

<script setup>
import Container from "../../../components/content/Container";
import Switch from "../../../components/forms/SwitchLR";
import MessageBox from "../../../components/content/MessageBox";
import Title from "../../../components/content/Title";
import Separator from "../../../components/content/Separator";
import TabSelect from "../../../components/forms/TabSelect";
import RoleSelector from "../../../components/forms/RoleSelector";

import {useGuildConfig} from "~/composables/confguration";

const config = await useGuildConfig()

const MuteModes = {
  DependsOnCommand: 1,
  Timeout: 2,
  Role: 3
}

const muteModes = [["Depends on command", MuteModes.DependsOnCommand], ["Timeout", MuteModes.Timeout], ["Role", MuteModes.Role]];

const guildRoles = [{ name: "Administrator", id: "123", color: 0 }, { name: "Muted", id: "321", color: 0 }]

definePageMeta({
  layout: "server",
  middleware: ["auth"]
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

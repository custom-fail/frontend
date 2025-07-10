<template>
  <ModerationEnabledGate>
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
    <CommandsContainer>
      <Command name="case details" description="Shows detailed information about a case" :options="['number']" v-model="config.enabled_commands.case_details" />
      <Command name="case edit" description="Edit case reason" :options="['number', 'reason']" v-model="config.enabled_commands.case_edit" />
      <Command name="case last" description="Last punishment this user has received" :options="['member']" v-model="config.enabled_commands.case_last" />
      <Command name="case list" description="Shows history of user's punishment" :options="['member', 'page', 'type']" v-model="config.enabled_commands.case_list" />
      <Command name="case remove" description="Removes a case from user's history" :options="['number']" v-model="config.enabled_commands.case_remove" />
    </CommandsContainer>
    <container>
<!--      Save messages: <Switch :enabled="enabled" />-->
    </container>
  </ModerationEnabledGate>
</template>

<script setup>
import Container from "../../../../components/content/Container";
import {useGuildConfig} from "~/composables/confguration";

const config = await useGuildConfig()

definePageMeta({
  layout: "server",
  middleware: ["auth"]
})
</script>

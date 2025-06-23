<template>
  <div>
    <Container>
      <div class="w-full overflow-x-scroll flex bg-selected rounded mb-[10px]">
        <div :class="[`automod-custom-rule`, !targetRule ? `bg-background` : `bg-visible`]" @click="targetRule = null">
          General Configuration
        </div>
        <div
            v-for="rule in (config.moderation?.automod?.rules || [])"
            :class="[`automod-custom-rule`, rule === targetRule ? `bg-background` : `bg-visible`]"
            @click="targetRule = rule"
        >
          {{ rule.name }}
        </div>
      </div>
      <div v-if="!targetRule">
        <div>
          Rule name: <input v-model="newRoleName" class="automod-input" />
          <button @click="createNewRole" :class="[`bg-secondary p-[8px] rounded`, error ? `cursor-not-allowed` : ``]">Create rule</button>
        </div>
        <span v-if="error" class="text-red-600">You can create up to 12 custom rules</span>
      </div>
      <div v-else>
        Actions:

      </div>
    </Container>
  </div>
</template>
<script setup>
import Container from "../../../../components/content/Container";
import {useGuildConfig} from "../../../../composables/confguration";

import {computed, ref} from "vue"
import ChevronRight from "../../../../components/icons/ChevronRight";
import TrashCan from "../../../../components/icons/TrashCan";

const config = ref(useGuildConfig())
const newRoleName = ref("")
const selectedRole = ref(false)
const error = computed(() => (config.value.moderation?.automod?.rules?.length || 0) > 2)

const targetRule = ref(null)

const createNewRole = () => {
  if(!newRoleName.value || error.value) return
  config.value.moderation?.automod?.rules?.push({
    name: newRoleName.value,
    reason: "",
    actions: [],
    filters: []
  })
  newRoleName.value = ""
}

definePageMeta({
  layout: "server"
})
</script>

<style>
@reference "~/assets/css/main.css";

.automod-input {
@apply bg-background border border-secondary rounded p-[6px] w-[300px] text-white mr-[10px];
}
.automod-custom-rule {
  @apply rounded cursor-pointer p-[8px] m-[5px]
}
</style>
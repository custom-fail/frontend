<template>
  <Switch
      v-model="enabled"
      :class="enabled ? `bg-[#456E4DFF] left 0.15s ease-out` : `bg-[#555762FF]`"
      class="relative inline-flex items-center h-[28px] rounded-full transition-colors w-[52px] border-white border-[1px]"
  >
    <span :class="enabled ? `translate-x-[26px]` : `translate-x-[4px]`"
          class="inline-block transform h-[20px] w-[20px] rounded-full bg-white transition-transform transform"
    />
  </Switch>
</template>

<script setup>
import {ref} from "vue"
import { Switch } from "@headlessui/vue"
const { modelValue } = defineProps(["modelValue"])
const enabled = ref(modelValue)

</script>
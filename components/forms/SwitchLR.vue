<template>
  <Switch
      v-model="enabled" @update:modelValue="$emit(`update:modelValue`, $event)"
      :class="enabled ? `bg-[#456E4DFF] left 0.15s ease-out` : `bg-[#555762FF]`"
      class="relative inline-flex items-center h-[28px] rounded-full transition-colors w-[52px] border-white border-[1px]"
  >
    <span :class="enabled ? `translate-x-[26px]` : `translate-x-[4px]`"
          class="inline-block h-[20px] w-[20px] rounded-full bg-white transition-transform transform"
    />
  </Switch>
</template>

<script setup>
import { Switch } from "@headlessui/vue"
let { modelValue } = defineProps(["modelValue"])
defineEmits(["update:modelValue"])
let enabled = ref(modelValue)
</script>
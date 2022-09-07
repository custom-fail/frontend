<template>
  <Switch
      v-model="modelValue" @update:modelValue="$emit(`update:modelValue`, $event)"
      :class="modelValue ? `bg-[#456E4DFF] left 0.15s ease-out` : `bg-[#555762FF]`"
      class="relative inline-flex items-center h-[28px] rounded-full transition-colors w-[52px] border-white border-[1px]"
  >
    <span :class="modelValue ? `translate-x-[26px]` : `translate-x-[4px]`"
          class="inline-block transform h-[20px] w-[20px] rounded-full bg-white transition-transform transform"
    />
  </Switch>
</template>

<script setup>
import { Switch } from "@headlessui/vue"
let { modelValue } = defineProps(["modelValue"])
defineEmits(["update:modelValue"])
</script>
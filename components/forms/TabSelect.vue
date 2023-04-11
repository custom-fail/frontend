<template>
  <div class="w-full max-w-xl sm:px-0">
    <RadioGroup
        class="flex space-x-1 rounded-xl bg-visible p-1"
        v-model="selected" @update:modelValue="$emit(`update:modelValue`, $event)"
    >
      <RadioGroupOption
          v-for="tab in tabs"
          as="template"
          :key="tab"
          :value="tab"
          v-slot="{ checked }"
      >
        <button
            :class="[
             'w-full rounded-lg py-2.5 text-sm transition-colors',
             'ring-white ring-opacity-60 focus:outline-none',
             checked
               ? 'bg-containers text-white'
               : 'text-text hover:bg-white/[0.12] hover:text-white',
           ]"
        >
          {{ tab }}
        </button>
      </RadioGroupOption>
    </RadioGroup>
  </div>
</template>

<script setup>
import { RadioGroup, RadioGroupOption } from "@headlessui/vue"
let { modelValue, tabs } = defineProps(["modelValue", "tabs"])
defineEmits(["update:modelValue"])

let selected = ref(modelValue)
</script>
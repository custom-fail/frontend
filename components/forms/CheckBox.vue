<template>
  <input type="checkbox" :required="required" v-model="modelValue"
         @change="$emit(`update:modelValue`, $event.target.checked)"
         class="m-[5px] h-[15px] w-[15px]"
  >
</template>

<script setup>
let { modelValue, required } = defineProps(["modelValue", "required"])
defineEmits(["update:modelValue"])
</script>
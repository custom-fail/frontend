<template>
  <div :class="[
      `border-2 rounded p-[20px]`,
       type === `success` ? `border-success text-success bg-success` : ``,
       type === `warning` ? `border-warning text-warning bg-warning` : ``,
       type === `info` ? `border-info text-info bg-info` : ``
      ]">
    <slot />
  </div>
</template>

<script setup>
const { type } = defineProps(["type"])
</script>
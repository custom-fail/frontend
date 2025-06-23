<template>
  <div :class="[
      `border-2 rounded p-[20px]`,
       type === `success` ? `border-(--border-success) text-(--text-success) bg-(--background-success)` : ``,
       type === `warning` ? `border-(--border-warning) text-(--text-warning) bg-(--background-warning)` : ``,
       type === `info` ? `border-info text-(--text-info) bg-(--background-info)` : ``
      ]">
    <slot />
  </div>
</template>

<script setup>
const { type } = defineProps(["type"])
</script>

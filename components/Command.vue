<template>
  <div>
    <div :class="[
            `m-[2px] p-[20px] rounded grid command w-[100%-4px] my-[3px]`,
            modelValue ? `hover:bg-hover` : `bg-[#00000030] cursor-not-allowed`
            ]"
    >
      <div :class="modelValue ? `` : `opacity-20`">
        <span class="text-white text-[20px] mr-[4px]">/{{ name }}</span>
        <span v-for="option in options" :key="option"
              class="bg-containers text-text rounded p-[4px] ml-[5px]"
        >
              {{ option }}
            </span><br>
        <span class="text-text text-[12px]">{{ description }}</span>
      </div>
      <div class="w-full content-center h-full inherit opacity-100 z-30">
        <button
            @click="toggleEnabled()"
            :class="[`opacity-[1]  p-[10px] rounded cursor-pointer`, modelValue ? `bg-selected` : `bg-[#1f1f1f]`]">
          {{ modelValue ? `Disable` : `Enable` }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { name, description, options } = defineProps(
    ["name", "description", "options"]
);

const modelValue = defineModel()

const toggleEnabled = () => {
  modelValue.value = !modelValue.value
}
</script>

<style scoped>

</style>

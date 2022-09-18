<template>
  <Container>
    <Title>Commands</Title>
    <Separator />
    <div class="m-[10px] p-[2px] bg-visible rounded">
      <div v-for="(command, i) in modelValue" :key="command.name">
        <div :class="[
              `m-[2px] p-[20px] rounded`,
              command.enabled ? `hover:bg-hover` : `bg-black cursor-not-allowed opacity-[20%]`
            ]"
        >
          <div class="grid command">
            <div class="w-full">
              <span class="text-white text-[20px] mr-[4px]">/{{ command.name }}</span>
              <span v-for="option in command.options" :key="option"
                    class="bg-containers text-text rounded p-[4px] ml-[5px]"
              >
                {{ option }}
              </span><br>
              <span class="text-text text-[12px]">{{ command.description }}</span>
            </div>
            <div class="w-full content-center h-full inherit opacity-100 z-50">
              <button
                  @click="setCommand(command, i, $event)"
                  class="opacity-[1] bg-selected p-[10px] rounded z-10">
                {{ command.enabled ? `Disable` : `Enable` }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "./Container"
import Title from "./Title"
import Separator from "./Separator"
import {ref, watch} from "vue";

let { modelValue } = defineProps(["modelValue"])
const $emit = defineEmits(["update:modelValue"])

const setCommand = (command, i, $event) => {
  // $emit(`update:modelValue`, $event)
  console.log(i)
  command.enabled = !command.enabled
}

</script>

<style>
.command {
  grid-template-columns: 1fr 60px;
}

.inherit {
  display: inherit;
}
</style>
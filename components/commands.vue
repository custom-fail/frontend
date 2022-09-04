<template>
  <container>
    <Title>Commands</Title>
    <Separator />
    <div class="m-[10px] p-[2px] bg-visible rounded">
      <div v-for="command in commands" :key="command.name">
        <div :class="[
              `m-[2px] p-[20px] rounded`,
              command.enabled ? `hover:bg-hover` : `bg-black cursor-not-allowed opacity-[20%]`
            ]"
        >
          <div class="grid command">
            <div class="w-full">
              <span class="text-primary text-[20px] mr-[4px]">/{{ command.name }}</span>
              <span v-for="option in command.options" :key="option"
                    class="bg-containers text-text rounded p-[4px] ml-[5px]"
              >
              {{ option }}
            </span><br>
              <span class="text-text text-[12px]">{{ command.description }}</span>
            </div>
            <div class="w-full content-center h-full inherit opacity-100 z-50">
              <button
                  @click="setCommand(command, $event)"
                  class="opacity-[1] bg-selected p-[10px] rounded z-10">
                {{ command.enabled ? `Disable` : `Enable` }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script setup>
import Switch from "./SwitchLR"
import Title from "./title"
import Separator from "./separator"
import { ref } from "vue"

const props = defineProps(["commands"])
const commands = ref(props.commands)

const setCommand = (command, $event) => {
  console.log(command.enabled)
  console.log($event);
  command.enabled = !command.enabled
  console.log(command.enabled)
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
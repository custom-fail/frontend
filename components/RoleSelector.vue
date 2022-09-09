<template>
  <div>
    <div
        class="flex w-[250px] h-[35px] justify-between bg-visible pl-[10px] p-[5px] rounded cursor-pointer relative"
        @click="show = !show"
    >
      <span v-if="selectedRole">{{ selectedRole.name }}</span>
      <span v-else class="text-red">Not set</span>
      <ChevronUpDown class="inherit h-full" />
    </div>
    <div
        v-if="show"
        class="bg-visible w-[250px] p-[10px] rounded mt-[5px] absolute block z-1"
    >
      <input v-model="query" class="bg-hover rounded h-[30px] w-full pl-[5px] pr-[5px] mb-[6px]">
      <div>
        <div
          v-if="matchingRoles.length > 0" v-for="role in matchingRoles"
          class="p-[5px] flex mt-[2px] cursor-pointer hover:bg-hover rounded"
          @click="$emit(`update:modelValue`, role.id)"
        >
          <span class="w-[40px]"><ShieldCheck v-if="modelValue === role.id"/></span>
          <span>{{ role.name }}</span>
        </div>
        <span v-else>Nothing found</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ShieldCheck from "./ShieldCheck";
import ChevronUpDown from "./ChevronUpDown";

let { modelValue, roles } = defineProps(["modelValue", "roles"])
let query = ref('')
let show = ref(false)

let selectedRole = computed(() => {
  return roles.find((r) => r.id === modelValue)?.name
})

defineEmits(["update:modelValue"])

let matchingRoles = computed(() => {
  return query.value === ''
      ? roles
      : roles.filter((role) => {
        return role.name.toLowerCase().includes(query.value.toLowerCase()) || role.id === query.value
      })

})
</script>

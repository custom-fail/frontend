<template>
  <div class="server-layout">
    <SwapSidebar
        v-if="screenWidth < 820" class="z-50" v-model="isSidebarOpen"
    >
      <Sidebar />
    </SwapSidebar>
    <Sidebar v-else />
    <section>
      <nav class="h-[80px] w-full">
        <ListBullet
            class="text-white h-full ml-[50px] cursor-pointer sidebar-open-button"
            @click="isSidebarOpen = !isSidebarOpen"
        />
      </nav>
      <div class="h-[calc(100vh-80px)] bg-background w-full overflow-y-scroll  text-white">
        <div class="m-[20px] flex justify-center page">
          <div class="max-w-[1500px] w-full">
            <slot />
          </div>
        </div>
      </div>
    </section>
    <div>
      <div v-if="!isSaved" class="save-container">
        <span>Careful — you have unsaved changes!</span> <button class="bg-[#00863a] cursor-pointer h-[32px] min-w-[60px] rounded-[8px] px-[10px]" @click="save">Save changes</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/sidebar"
import SwapSidebar from "../components/SwipeSidebar";
import {onMounted} from "vue";

import { ref } from "vue"
import ListBullet from "../components/icons/ListBullet";
import {useGuildConfig} from "~/composables/confguration";

const { users, isSaved, save } = await useGuildConfig();
const isSidebarOpen = ref(false)

const screenWidth = ref(0)
onMounted(() => {
  screenWidth.value = window.innerWidth
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    screenWidth.value = window.innerWidth
  })
})

definePageMeta({
  middleware: ["auth"]
})
</script>

<style>
@reference "~/assets/css/main.css";

@media only screen and (min-width: 820px) {
  .server-layout {
    @apply grid;
    grid-template-columns: 300px 1fr;
  }
  .sidebar-open-button { @apply hidden }

  .save-container {
    width: calc(100vw - 300px - 80px) !important;
    margin-inline: 40px !important;
    left: 300px !important;
  }
}

.save-container {
  @apply flex text-white justify-between h-[54px] p-[10px] fixed bg-visible items-center;
  bottom: 20px;
  width: calc(100% - 40px);
  margin-inline: 20px;
  border: 1px solid;
  border-radius: 8px;
  @apply border-lines
}

.save-container > span {
  font-weight: 600;
}

textarea:focus, input:focus {
  outline: none;
}
</style>

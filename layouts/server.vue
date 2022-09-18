<template>
  <div class="grid main">
    <Sidebar />
    <main>
      <Navbar />
      <div class="content bg-background w-full overflow-y-scroll mt-[80px] text-white">
        <div class="m-[20px] flex justify-center page">
          <div class="max-w-[1500px] w-full">
            <slot />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"
</script>

<style>
.page {
  z-index: -1;
}
.main {
  grid-template-columns: 300px 1fr;
}

.content {
  height: calc(100vh - 80px);
  scrollbar-color: rgba(255, 255, 255, 0.33) rgba(0, 0, 0, 0.14);
  scrollbar-width: thin;
}

::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.14);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.33);
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.24);
}

::-webkit-scrollbar-thumb:active {
  background: rgba(255, 255, 255, 0.14);
}

textarea:focus, input:focus {
  outline: none;
}
</style>
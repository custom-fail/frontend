<template>
  <div class="grid main">
    <Sidebar />
    <main>
      <Navbar />
      <div class="h-[calc(100vh - 80px)] bg-background w-full overflow-y-scroll mt-[80px] text-white">
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
textarea:focus, input:focus {
  outline: none;
}
</style>
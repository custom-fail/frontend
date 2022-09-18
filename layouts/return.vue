<template>
  <div>
    <nav class="fixed w-[100%] h-[80px] bg-visible top-0 left-0 pl-[40px] place-items-center flex">
      <NuxtLink href="../cases">
        <button class="flex text-white border-lines border-[1px] rounded p-[15px]">
          <ChevronLeft class="mr-[10px]" /> Go back
        </button>
      </NuxtLink>
    </nav>
    <div class="mt-[80px]">
      <slot />
    </div>
  </div>
</template>
<script setup>
import ChevronLeft from "../components/icons/ChevronLeft";
</script>
<template>
  <div>
    <div class="sidebar z-50 fixed h-screen w-[300px] bg-black top-0 transition-transform transform ease-linear duration-50" :style="[
       mouseClicked ? `transform: translateX(${calcMargin(cursorPosition, startedClickAt, isSidebarOpen)}px)`: ``,
       !mouseClicked ? isSidebarOpen ? `transform: translateX(0px)` : `transform: translateX(-300px)` : ``
   ]">
      <slot />
    </div>
    <div :class="[
        `h-screen z-40 fixed top-0 left-0 w-full bg-black transition-opacity duration-600`,
        isSidebarOpen ? `opacity-50` : `hidden opacity-0`
    ]" @click="toggleSidebar()"></div>
  </div>
</template>

<script setup>
import {ref, watch} from "vue"

const {modelValue} = defineProps(["modelValue"])
const $emit = defineEmits(["update:modelValue"])
const isSidebarOpen = ref(modelValue || false)

const cursorPosition = ref({ x: 0, y: 0})
const mouseClicked = ref(false)
const startedClickAt = ref({ x: 0, y: 0 })

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
  $emit("update:modelValue", isSidebarOpen.value)
}

const updateMouseClickedStatus = (e) => {
  mouseClicked.value = e.buttons === 1
  startedClickAt.value = e.buttons === 1 ? { x: e.clientX, y: e.clientY } : null
}

const onTouchStart = (e) => {
  startedClickAt.value = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  mouseClicked.value = true
}
const onTouchEnd = () => {
  updateOpenStatus()
  mouseClicked.value = false
}

const updateTouchPosition = (e) => cursorPosition.value = { x: e.touches[0].clientX, y: e.touches[0].clientY }
const updateCursorPosition = (e) => cursorPosition.value = { x: e.pageX, y: e.pageY }

const calcMargin = (cursorPosition, startedClickAt, value) => {
  const movedFor = cursorPosition.x - startedClickAt.x
  const reachedLimit = value ? movedFor > 0 : movedFor > 300
  const margin = value ? 0 : -300
  return (reachedLimit ? 0 : movedFor + margin)
}

const updateOpenStatus = () => {
  const xMargin = cursorPosition.value.x - startedClickAt.value.x
  console.log(xMargin)
  if((xMargin > 100 && !isSidebarOpen.value) || (xMargin < -100 && isSidebarOpen.value)) {
    toggleSidebar()
  }
}

const onMouseDown = (e) => {
  startedClickAt.value = { x: e.clientX, y: e.clientY }
  updateMouseClickedStatus(e)
  updateCursorPosition(e)
}

const onMouseUp = (e) => {
  updateOpenStatus(e)
  updateMouseClickedStatus(e)
  updateCursorPosition(e)
}

onMounted(() => {
  window.addEventListener("touchmove", updateTouchPosition)
  window.addEventListener("touchstart", onTouchStart)
  window.addEventListener("touchend", onTouchEnd)
  window.addEventListener("mousedown", onMouseDown)
  window.addEventListener("mouseup", onMouseUp)
  window.addEventListener('mousemove', updateCursorPosition)
})

onUnmounted(() => {
  window.removeEventListener("touchmove", updateTouchPosition)
  window.removeEventListener("touchstart", onTouchStart)
  window.removeEventListener("touchend", onTouchEnd)
  window.removeEventListener("mousedown", onMouseDown)
  window.removeEventListener("mouseup", onMouseUp)
  window.removeEventListener('mousemove', updateCursorPosition)
})

definePageMeta({
  layout: "none"
})
</script>
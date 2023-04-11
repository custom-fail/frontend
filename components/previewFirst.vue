<template>
  <div class="w-2/5 flex position-items-center align-items-center pre">
    <img src="/img/ContextMenus.svg" class="h-[80vh] transform translate-x-[5vw] hidden" />
    <div v-for="img in images" class="move-img top-0 absolute hidden">
      <img :src="`/img/previews/${img}.svg`" style="">
    </div>
    <!--        123-->
  </div>
</template>

<script setup>
const images = [
    "CaseLast",
    "AutoMod",
    "AutoModLogs",
    "AntiDuplicate",
    // "Timeout"
]

const moveLocations = [
    ["-14px", "calc(8vh + 80px)"],
    ["20px", "calc(60vh + 80px)"],
    ["calc((185 / 224) * 60vh)", "calc(10vh + 80px)"],
    ["calc((185 / 224) * 57vh)", "calc(50vh + 80px)"],
]

// place randomly (data from mvoeLocations) around ContextMenus.svg image elements with class .move-img using translateX and translateY
const moveImages = () => {
    const imgs = document.querySelectorAll(".move-img")
    imgs.forEach((img, i) => {
        const [x, y] = moveLocations[i]
      console.log(x, y)
        img.style.transform = `translate(${x}, ${y})`
        // img.childNodes[0].style.animation = `float${i%3+1} 15s ease-in-out infinite`
    })
}

onMounted(moveImages)
</script>

<style>
/*floating animation*/
.move-img > img {
    /*animation: float1 5s ease-in-out infinite;*/
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  @apply rounded h-[15vh];
}

@keyframes float1 {
    0% { transform: translate(-10px, 0px) }
    50% { transform: translate(0, 10px) }
    100% { transform: translate(5px, -0px);}
}

@keyframes float2 {
    0% { transform: translate(5px, 0px) }
    50% { transform: translate(-10px, -5px) }
    100% { transform: translate(0px, -10px);}
}

@keyframes float3 {
    0% { transform: translate(0px, 0px) }
    50% { transform: translate(0, 10px) }
    100% { transform: translate(0px, -0px);}
}
</style>
<template>
  <div>
    <NuxtLayout name="default" class="w-full h-screen flex">
      <div class="w-full flex">
        <div class="bg-selected w-[320px] min-w-[320px] max-w-[320px] h-[calc(100vh-80px)] overflow-y p-[20px] text-text">
          <div v-for="section in sections">
            <span class="text-white text-[20px]">{{ section.name }}</span>
            <div>
              <div v-for="page in section.pages" class="pl-[10px] pt-[5px] pb-[5px] hover:underline">
                <NuxtLink :href="`/support/${page.url}`">{{ page.name }}</NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="p-[20px] overflow-y w-full h-[calc(100vh-80px)] text-text">
          <NuxtPage />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const sections = [{
  name: "Server setup",
  pages: [{ name: "Adding bot to your server", url: "setup" }]
}, {
  name: "Basic concepts",
  pages: [{ name: "Commands permissions and visibility", url: "commands" }]
}, {
  name: "Configuration",
  pages: [
      { name: "Bans, Kicks, Mutes, Warns", url: "execution" },
      { name: "Auto moderation", url: "automod" },
      { name: "Cases (Saving punishments data)", url: "cases" }
  ]
}]
</script>
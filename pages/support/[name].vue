<template>
  <div class="mb-[50px]">
    <section v-for="section in content">
      <h2 class="text-white text-3xl mt-[10px] mb-[5px]">{{ section.title }}</h2>
      <div v-for="component in section.components">
        <p v-if="component.type === `text` && typeof component.content === `string`">{{ component.content }}</p>
        <p v-else-if="component.type === `text`">
          <span v-for="content in component.content">
            <span v-if="typeof content !== `object`">{{ content }}</span>
            <NuxtLink v-else :href="content.url" class="text-link">{{ content.text }}</NuxtLink>
          </span>
        </p>
        <div v-else-if="component.type === `images`" class="flex m-[20px]">
          <img v-for="image in component.content" :src="image" class="m-[2px] w-1/2">
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useSupportPagesData } from "~/composables/support";


const route = useRoute()
const router = useRouter()

const page = route.params?.name
const data = useSupportPagesData()

const content = (Object.entries(data).find(([n, v]) => page === n) || [])[1]
console.log(content)
if(!content) router.go('/404')

definePageMeta({
  layout: "support"
})
</script>
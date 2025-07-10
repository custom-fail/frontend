<script setup>
import Title from "~/components/content/Title.vue";
import Container from "~/components/content/Container.vue";
import Separator from "~/components/content/Separator.vue";
</script>

<template>
  <Container>
    <Title>Commands</Title>
    <Separator />
    <div class="m-[10px] p-[3px] bg-visible rounded">
      <slot />
    </div>
  </Container>
</template>

<style scoped>

</style>

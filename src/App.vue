<script setup>
// import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/Header/TheHeader.vue";
import Introduction from "./components/Sections/Introduction.vue";
import Gallery from "./components/Sections/Gallery.vue";
</script>

<template>
  <the-header></the-header>
  <main class="min-h-[2000px] bg-emerald-100">
    <introduction></introduction>
    <gallery></gallery>
  </main>
</template>

<style scoped></style>

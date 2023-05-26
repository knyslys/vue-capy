<template>
  <ul class="flex gap-x-2 justify-end">
    <li @click="openNav"><Icon :icon="navIcon" /></li>
    <Presence :exitBeforeEnter="true">
      <mobile-side-bar v-if="navToggle" :nav-paths="navPaths"></mobile-side-bar>
    </Presence>
  </ul>
</template>

<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import { Presence } from "motion/vue";
import MobileSideBar from "./MobileSideBar.vue";
const navToggle = ref(false);

const navIcon = computed(() => {
  return !navToggle.value
    ? "fluent:navigation-24-filled"
    : "carbon:close-outline";
});

const navPaths = [
  {
    name: "Home",
    path: "",
  },
  {
    name: "Facts",
    path: "",
  },
  {
    name: "Where",
    path: "",
    subPaths: [
      {
        name: "In Europe",
        path: "",
      },
      {
        name: "In America",
        path: "",
      },
    ],
  },
];
const openNav = () => {
  navToggle.value = !navToggle.value;
};
</script>

<style scoped></style>

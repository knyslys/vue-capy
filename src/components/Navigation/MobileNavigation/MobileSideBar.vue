<template>
  <Motion
    class="side-bar fixed w-2/6 h-screen bg-gradient-to-b from-emerald-300 from-10% to-emerald-50 right-0 p-4"
    :style="{ top: height }"
    :exit="{ x: 600 }"
    :initial="{ x: 200 }"
    :animate="{ x: 0 }"
    :transition="{ duration: 1 }"
    ref="el"
  >
    <ul class="flex flex-col gap-y-2">
      <mobile-side-bar-link
        v-for="link in navPaths"
        :name="link.name"
        :sub="link?.subPaths"
      ></mobile-side-bar-link>
    </ul>
  </Motion>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { animate } from "motion";
import { Motion, Presence } from "motion/vue";
import MobileSideBarLink from "./MobileSideBarLink.vue";
const el = ref(null);
const height = document.querySelector("nav").offsetHeight + "px";
const props = defineProps({
  navPaths: {
    type: Array,
  },
});
// onMounted(() => {
//   animate(el.value, {
//     x: [200, 0],
//   });
// });
</script>

<style lang="scss" scoped></style>

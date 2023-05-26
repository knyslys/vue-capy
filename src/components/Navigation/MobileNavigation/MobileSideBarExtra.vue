<template>
  <Motion
    class="extra-side-bar fixed bg-emerald-100 w-full h-screen -translate-x-full left-[0.5px] rounded-tl-lg p-2"
    :style="{ top: posY, right: widthSideBar + 'px' }"
    :initial="{ x: 500, opacity: 0 }"
    :animate="{
      opacity: 1,
      x: -widthSideBar,
      transition: { duration: 1 },
    }"
    :exit="{ opacity: 0, transition: { duration: 0.4 } }"
    ref="el"
  >
    <ul class="flex flex-col place-items-center">
      <mobile-side-bar-link
        v-for="link in props.sub"
        :name="link.name"
      ></mobile-side-bar-link>
    </ul>
  </Motion>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { animate } from "motion";
import { Motion } from "motion/vue";
import MobileSideBarLink from "./MobileSideBarLink.vue";
const el = ref(null);
const widthSideBar = ref();

const props = defineProps({
  posY: {
    type: String,
  },
  sub: {
    type: Array,
  },
});

const onResize = (e) => {
  widthSideBar.value = document.querySelector(".side-bar").offsetWidth;
};

onMounted(() => {
  widthSideBar.value = document.querySelector(".side-bar").offsetWidth;
  window.addEventListener("resize", onResize);
  // animate(
  //   el.value,
  //   {
  //     opacity: [0, 1],
  //     scaleX: [0, 1],
  //     x: [0, widthSideBar / 2],
  //   },
  //   { duration: 0.35 }
  // );
});
console.log(props.posY);
</script>

<style scoped></style>

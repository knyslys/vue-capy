<template>
  <header class="bg-emerald-100 min-h-screen">
    <navigation></navigation>
    <div class="header-img-wrapper w-full h-screen absolute top-0 left-0"></div>
    <div class="flex place-items-center min-h-screen">
      <div class="relative container mx-auto p-4 text-center">
        <h1 class="text-6xl uppercase text-emerald-100 mb-2 header-title">
          Factibara
        </h1>
        <p class="text-emerald-50 header-par">
          Discover the Fascinating World of Capybaras: Unveiling Extraordinary
          Facts and Stories
        </p>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from "vue";
import SplitType from "split-type";
import Navigation from "../Navigation/Navigation.vue";
import { animate, timeline, stagger, spring, glide } from "motion";
const backgroundTimeline = ref();

onMounted(() => {
  const headerText = SplitType.create(".header-title");
  const headerPar = SplitType.create(".header-par");
  const headerAllElements = [...headerText.chars, ...headerPar.words];
  const sequance = [
    [
      ".header-img-wrapper",
      {
        clipPath: ["circle(14.0% at 100% 0%)", "circle(141.4% at 100% 0%)"],
      },
      {
        duration: 2.5,
      },
    ],
    [
      headerAllElements,
      {
        y: [20, 0],
        opacity: [0, 1],
      },
      {
        at: "-5",
        delay: stagger(0.13),
        easing: "ease-out",
      },
    ],
  ];

  timeline(sequance);
});
</script>

<style scoped>
.header-img-wrapper {
  background-image: linear-gradient(
      0deg,
      rgba(209, 250, 229, 1) 10%,
      rgba(209, 250, 229, 0.1) 50%
    ),
    url("images/header/capy.jpg");
  background-size: cover;
  background-position: center;
}
</style>

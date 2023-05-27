<script setup>
// import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/Header/TheHeader.vue";
import Introduction from "./components/Sections/Introduction.vue";
import Gallery from "./components/Sections/Gallery.vue";
import Faq from "./components/Sections/Faq.vue";
import { onMounted } from "vue";
import { animate, inView, scroll, ScrollOffset } from "motion";
let b = document.querySelectorAll(".box");
onMounted(() => {
  // let section = document.querySelector(".section-slider");
  // let sectionContent = document.querySelector(".pin");
  // const sectionHeight = 200;
  // section.style.height = sectionHeight + "vh";
  // sectionContent.style.position = "sticky";
  // sectionContent.style.top = "40%";
  // scroll(
  //   animate(
  //     sectionContent,
  //     {
  //       transform: ["translateX(0)", "translateX(-100vw)"],
  //     },
  //     { duration: 2 }
  //   ),
  //   {
  //     target: section,
  //     offset: ScrollOffset.enter,
  //   }
  // );
});
</script>

<template>
  <the-header></the-header>
  <main class="min-h-[2000px] bg-emerald-100">
    <introduction></introduction>
    <gallery></gallery>
    <faq></faq>
    <gallery></gallery>
    <!-- <section class="section-slider container mx-auto">
      <div class="flex gap-x-2 flex-nowrap justify-start pin">
        <div class="box min-h-52 bg-violet-500"></div>
        <div class="box w-52 h-52 bg-violet-500"></div>
        <div class="box w-52 h-52 bg-violet-500"></div>
        <div class="box w-52 h-52 bg-violet-500"></div>
        <div class="box w-52 h-52 bg-violet-500"></div>
        <div class="box w-52 h-52 bg-violet-500"></div>
      </div>
    </section> -->
    <!-- 
    <section class="section-test min-h-screen bg-violet-950">
      <div class="boxx min-h-52 bg-violet-500"></div>
    </section> -->
  </main>
</template>

<style scoped>
.section-slider {
  /* overflow-x: visible; */
  overflow: visible;
  position: relative;
}

.pin {
  position: relative;
}
.box {
  min-width: 20rem;
}
</style>

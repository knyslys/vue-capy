<template>
  <section class="mt-6">
    <section-container sectionName="Gallery">
      <template #section-title>Check Capybaras </template>

      <template #section-desc>
        Get ready to unleash your inner "capybarazzi" as you dive into a
        hilarious capybara photo gallery! These adorable, water-loving critters
        are here to steal your heart and bring an avalanche of smiles.
      </template>
      <div ref="el" class="galery-container p-2 rounded-md shadow-md">
        <swiper-gallery @set-bg="setBackground"></swiper-gallery>
        <p class="text-center mt-6 font-semibold" ref="descEl" :key="descEl">
          {{ description }}
        </p>
      </div>
    </section-container>
  </section>
</template>

<script setup>
import SwiperGallery from "../Swiper/SwiperGallery.vue";
import SplitType from "split-type";
import { animate, stagger } from "motion";
import { ref, watch, nextTick } from "vue";
const el = ref(null);
const descEl = ref(null);
const description = ref("");
const setBackground = (url, desc) => {
  description.value = desc;
  animate(
    el.value,
    {
      backgroundImage:
        "linear-gradient(to bottom, rgba(209, 250, 229,0.2), rgba(52, 211, 153,0.8) 90%), url(" +
        url +
        ")",
      scale: [0.8, 1],
      y: [50, 0],
    },
    {
      duration: 2,
      ease: "easeIn",
    }
  );
};
watch(description, (newValue) => {
  nextTick(() => {
    const words = SplitType.create(descEl.value);
    animate(
      words.words,
      {
        opacity: [0, 1],
        x: [10, -10, 0],
      },
      {
        delay: stagger(0.1),
        duration: 1,
        ease: "easeIn",
      }
    );
  });
});
</script>

<style scoped>
.galery-container {
  background-image: url("images/cards/capy-1.jpg");
  background-size: cover;
  background-position: bottom;
}
</style>

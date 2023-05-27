<template>
  <section class="mt-6">
    <section-container>
      <template #section-title>Check Capybaras </template>

      <template #section-desc>
        Get ready to unleash your inner "capybarazzi" as you dive into a
        hilarious capybara photo gallery! These adorable, water-loving critters
        are here to steal your heart and bring an avalanche of smiles.
      </template>
      <template #other>
        <div
          ref="el"
          class="galery-container p-2 rounded-md shadow-lg mt-4 opacity-0"
        >
          <swiper-gallery @set-bg="setBackground"></swiper-gallery>
          <p class="text-center mt-6 font-semibold" ref="descElz">
            {{ description }}
          </p>
        </div></template
      >
    </section-container>
  </section>
</template>

<script setup>
import SectionContainer from "../UI/SectionContainer.vue";
import SwiperGallery from "../Swiper/SwiperGallery.vue";
import SplitType from "split-type";
import { animate, stagger, inView } from "motion";
import { ref, watch, nextTick, onMounted } from "vue";
const el = ref(null);
const descElz = ref(null);
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
onMounted(() => {
  inView(
    ".galery-container",
    (info) => {
      console.log(info);
      animate(
        ".galery-container",
        {
          opacity: [0, 1],
          y: [20, 0],
        },
        {
          duration: 2,
        }
      );
    },
    { margin: "0px -200px -200px 0px" }
  );
});
watch(description, (newValue) => {
  nextTick(() => {
    const words = SplitType.create(descElz.value);
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

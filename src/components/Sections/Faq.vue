<template>
  <section class="mt-6 faq relative">
    <section-container key="3">
      <template #section-title>Questions about Capybaras</template>

      <template #section-desc>
        The capybara is nature's ultimate chill buddy, a giant guinea pig with a
        "no worries" attitude. With a face that says "I'm ready for a spa day,"
        this laid-back rodent is the real MVP of the animal kingdom's relaxation
        club. Just imagine a furry couch potato living its best life!
      </template>

      <template #other>
        <div class="section-bg-wrapper sticky top-0 w-screen">
          <img src="images/cards/faq-bg.jpg" alt="capy" />
        </div>
        <div class="cards-wrapper flex flex-col gap-y-2 mt-10">
          <card
            v-for="(card, index) in arr"
            :index="index"
            :allCards="arr.length"
            :key="index"
          ></card>
        </div>
      </template>
    </section-container>
  </section>
</template>

<script setup>
import SectionContainer from "../UI/SectionContainer.vue";
import { onMounted, ref } from "vue";
import { animate, scroll, timeline, ScrollOffset } from "motion";
import Card from "../Card.vue";
const arr = ["test", "test", "test", "ne"];
onMounted(() => {
  const sectionBg = document.querySelector(".section-bg-wrapper");
  const faq = document.querySelector(".faq");
  const sequence = [
    [
      sectionBg,
      {
        clipPath: ["circle(50.0% at 100% 0)", "circle(50.0% at 0 100%)"],
      },
      { duration: 5 },
    ],
  ];
  scroll(timeline(sequence), {
    target: faq,
    offset: ["start start", "end end"],
  });
});
</script>

<style scoped>
.cards-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 30rem;
}
.faq {
}
</style>

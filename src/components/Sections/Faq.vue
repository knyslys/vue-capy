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
        <div class="section-bg-wrapper sticky top-0">
          <img src="images/cards/faq-bg.jpg" alt="capy" />
        </div>
        <div class="cards-wrapper flex flex-col gap-y-2 mt-10">
          <!-- <div class="card h-96 bg-slate-700"></div>
          <div class="card h-96 bg-slate-500"></div>
          <div class="card h-96 bg-slate-400"></div>
          <div class="card h-96 bg-slate-300"></div> -->
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
        scale: [0, 1],
      },
      { duration: 5 },
    ],
  ];
  scroll(timeline(sequence), {
    // offset: ["1%", "50%"],

    // `${(props.index / props.allCards) * 10}%`,
    // ${(props.index + 1 / props.allCards) * 10}%
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

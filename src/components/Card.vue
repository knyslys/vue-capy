<template>
  <div class="card" ref="el">
    <div class="card-content bg-emerald-200 shadow-lg h-[200px]">
      <div class="card-content--top bg-emerald-50 p-4 shadow-md">
        Where cappybaras live?
      </div>
      <div class="card-content--desc p-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
        obcaecati veniam labore nam nemo porro minus, aut atque pariatur nulla
        eum architecto voluptate deleniti ipsa adipisci suscipit consequuntur
        fugiat. Dolore!
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { animate, scroll, timeline } from "motion";
const props = defineProps({
  index: Number,
  allCards: Number,
});
const el = ref(null);
onMounted(() => {
  const sectionWrapper = document.querySelector(".faq");
  el.value.style.paddingTop = 30 * props.index + 1 + "px";
  const lastIndex = props.allCards - props.index + 1;
  // el.value.style.top = lastIndex + 1 * 2 + "%";
  // el.style.marginTop = props.index * 500 + "px";
  // el.value.style.marginTop = `calc(${props.index + 1} * 30px)`;
  const secondCardIndex = props.index + 1;
  const sectionBg = document.querySelector(".section-bg-wrapper img");

  const sequence = [
    [
      el.value,
      {
        scale: [1, 1 - 0.1 * lastIndex],
      },
    ],
  ];
  scroll(timeline(sequence), {
    // offset: ["1%", "50%"],
    offset: [
      `${(props.index / props.allCards) * 100}%`,
      `${(props.index + 1 / props.allCards) * 100}%`,
    ],
    // `${(props.index / props.allCards) * 10}%`,
    // ${(props.index + 1 / props.allCards) * 10}%
    target: sectionWrapper,
  });
});
</script>

<style scoped>
.card {
  position: sticky;
  /* top: 20% !important; */
  left: 0;
  top: 30vh;
  /* padding-top: 20rem; */
  transform-origin: 50% 0%;
  will-change: transform;
}
</style>

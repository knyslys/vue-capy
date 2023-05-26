<template>
  <div class="container mx-auto p-4" ref="el">
    <h1 ref="titleEl" class="text-xl text-emerald-500 font-bold">
      <slot name="section-title"></slot>
    </h1>
    <div>
      <p ref="descEl" class="section-desc">
        <slot name="section-desc"> </slot>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { animate, inView, stagger, timeline } from "motion";
import SplitType from "split-type";
const titleEl = ref(null);
const descEl = ref(null);
const el = ref(null);
onMounted(() => {
  const title = SplitType.create(titleEl.value);
  const desc = SplitType.create(descEl.value);
  const sequence = [
    [
      title.chars,
      {
        opacity: [0, 1],
        y: [10, 0],
      },
      {
        delay: stagger(0.3),
      },
    ],
    [
      desc.words,
      {
        opacity: [0, 1],
        y: [-10, 0],
      },
      {
        delay: stagger(0.1),
        duration: 1,
        at: "-5",
      },
    ],
  ];
  inView(
    el.value,
    (info) => {
      // animate(title.chars, { opacity: [0, 1] }, { delay: stagger(0.4) });
      timeline(sequence);
    },
    { margin: "0px 0px 0px 0px" }
  );
});
</script>

<style scoped>
/* :slotted(h1) {
  @apply text-xl text-emerald-500 font-bold;
} */
:slotted(div) {
  @apply mt-2;
}
</style>

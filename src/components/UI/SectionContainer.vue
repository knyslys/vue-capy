<template>
  <div class="container mx-auto p-4" ref="el">
    <h1 ref="titleEls" class="text-xl text-emerald-500 font-bold mb-2">
      <slot name="section-title"></slot>
    </h1>
    <div>
      <p ref="descEls" class="section-desc mb-6">
        <slot name="section-desc"> </slot>
      </p>
    </div>
    <slot> </slot>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { animate, inView, stagger, timeline } from "motion";
import SplitType from "split-type";
const titleEls = ref(null);
const descEls = ref(null);
const el = ref(null);
const props = defineProps({
  sectionName: {
    type: String,
  },
});
onMounted(() => {
  const title = SplitType.create(titleEls.value);
  const desc = SplitType.create(descEls.value);
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
    { margin: "500px 200px 0px 0px" }
  );
});
</script>

<style scoped>
/* :slotted(h1) {
  @apply text-xl text-emerald-500 font-bold;
} */
</style>

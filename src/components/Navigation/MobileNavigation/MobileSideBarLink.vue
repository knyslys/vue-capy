<template>
  <li
    class="text-center uppercase flex gap-x-2 place-items-center p-1"
    @click="toggleExtraSidebar"
  >
    {{ name }}<Icon :icon="getIcon" v-if="sub" />
  </li>
  <Presence>
    <mobile-side-bar-extra
      v-if="toggleExtra"
      :posY="posY"
      :sub="props.sub"
    ></mobile-side-bar-extra>
  </Presence>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref, computed } from "vue";
import { Presence } from "motion/vue";
import MobileSideBarExtra from "./MobileSideBarExtra.vue";
const toggleExtra = ref(false);
const posY = ref();

const getIcon = computed(() =>
  toggleExtra.value ? "ic:outline-arrow-right" : "tabler:dots"
);

const props = defineProps({
  name: {
    type: String,
  },
  sub: {
    type: Array,
    default: undefined,
  },
});

const toggleExtraSidebar = (target) => {
  // jeigu yra subdir displayinam extra sidebara
  if (props.sub) {
    // gaunam pozicijas kur displayint, atsizvelgiant kuris elementas turi sub directorija. Displayinam siektiek zemiau jo
    posY.value =
      target.target.getBoundingClientRect().top -
      target.target.offsetHeight +
      "px";
    toggleExtra.value = !toggleExtra.value;
    return;
  }
};
</script>

<style lang="scss" scoped></style>

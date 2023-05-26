<template>
  <swiper
    @swiper="galleryLoaded"
    @slideChange="changeSectionBg"
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="1"
    :modules="modules"
    class="mySwiper test"
  >
    <swiper-slide v-for="img in capyGallery">
      <img
        :src="img.img"
        alt="Picture of Capybara"
        class="shadow-md rounded-md"
        :key="img.title"
      />
    </swiper-slide>

    ...
  </swiper>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow } from "swiper";
import { EffectCards } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
const emits = defineEmits(["set-bg"]);
const modules = [EffectCoverflow];
const slider = ref(null);
const capyGallery = [
  {
    img: "images/cards/capy-1.jpg",
    title: "TEST1",
    desc: "Lorem ipsum dolor sit, damet consectetur adipisicing elit. Accusantium, dolorem consequatur. Dignissimos voluptas ducimus autem doloribus laborum quam nobis perferendis. Error officia ab aliquam explicabo eum suscipit pariatur porro vero, eaque libero quod numquam aliquid laboriosam, laudantium dolorem placeat inventore doloribus iste adipisci! Quis dolores qui veritatis necessitatibus nostrum reprehenderit.",
  },
  {
    img: "images/cards/capy-2.jpg",
    title: "TEST2",
    desc: "Lorem ipsum dolor sit, gamet consectetur adipisicing elit. Accusantium, dolorem consequatur. Dignissimos voluptas ducimus autem doloribus laborum quam nobis perferendis. Error officia ab aliquam explicabo eum suscipit pariatur porro vero, eaque libero quod numquam aliquid laboriosam, laudantium dolorem placeat inventore doloribus iste adipisci! Quis dolores qui veritatis necessitatibus nostrum reprehenderit.",
  },
  {
    img: "images/cards/capy-3.jpg",
    title: "TEST3",
    desc: "Lorem ipsum dolor sit, samet consectetur adipisicing elit. Accusantium, dolorem consequatur. Dignissimos voluptas ducimus autem doloribus laborum quam nobis perferendis. Error officia ab aliquam explicabo eum suscipit pariatur porro vero, eaque libero quod numquam aliquid laboriosam, laudantium dolorem placeat inventore doloribus iste adipisci! Quis dolores qui veritatis necessitatibus nostrum reprehenderit.",
  },
  {
    img: "images/cards/capy-4.jpg",
    title: "TEST4",
    desc: "Lorem ipsum dolor sit, zamet consectetur adipisicing elit. Accusantium, dolorem consequatur. Dignissimos voluptas ducimus autem doloribus laborum quam nobis perferendis. Error officia ab aliquam explicabo eum suscipit pariatur porro vero, eaque libero quod numquam aliquid laboriosam, laudantium dolorem placeat inventore doloribus iste adipisci! Quis dolores qui veritatis necessitatibus nostrum reprehenderit.",
  },
];

const galleryLoaded = (s) => {
  slider.value = s;
  slider.value.slideNext();
};

const changeSectionBg = () => {
  let imgSrc = capyGallery[slider.value.activeIndex].img;
  let desc = capyGallery[slider.value.activeIndex].desc;
  emits("set-bg", imgSrc, desc);
  console.log(imgSrc);
};
</script>

<style scoped>
img {
  /* max-width: 100%; */
}
.test {
  /* overflow: hidden;
  box-shadow: none !important;
  max-width: 30rem; */
}
</style>

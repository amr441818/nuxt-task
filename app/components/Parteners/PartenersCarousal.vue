<template>
  <div class="xs:hidden md:flex">
    <Swiper
    :modules="modules"
      :spaceBetween="30"
      :freeMode="true"
      :loop="true"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :breakpoints="{
        320: { slidesPerView: 3 },
        668: { slidesPerView: 3 },
        868: { slidesPerView: 6 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 6 }
      }"
      class="myCarousalSwiperMobile"
    >
      <SwiperSlide >
        <div class="flex flex-col gap-[24px] h-[143px] items-center">
          <img src="../../assets/download.png" alt="carousel image" class="w-5 h-3" />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div class="flex flex-col gap-[24px] h-[143px] items-center">
          <img src="../../assets/images.png" alt="carousel image" class="w-5 h-3" />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div class="flex flex-col gap-[24px] h-[143px] items-center">
          <img src="../../assets/images (1).png" alt="carousel image" class="w-5 h-3" />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div class="flex flex-col gap-[24px] h-[143px] items-center">
          <img src="../../assets/download.png" alt="carousel image" class="w-5 h-3" />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div class="flex flex-col gap-[24px] h-[143px] items-center">
          <img src="../../assets/images.png" alt="carousel image" class="w-5 h-3" />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div class="flex flex-col gap-[24px] h-[143px] items-center">
          <img src="../../assets/images (1).png" alt="carousel image" class="w-5 h-3" />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div class="flex flex-col gap-[24px] h-[143px] items-center">
          <img src="../../assets/download.png" alt="carousel image" class="w-5 h-3" />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div class="flex flex-col gap-[24px] h-[143px] items-center">
          <img src="../../assets/images.png" alt="carousel image" class="w-5 h-3" />
        </div>
      </SwiperSlide>
      <SwiperSlide >
        <div class="flex flex-col gap-[24px] h-[143px] items-center">
          <img src="../../assets/images (1).png" alt="carousel image" class="w-5 h-3" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import s1 from "../../assets/download.png";
import s2 from "../..//assets/images (1).png";
import s3 from "../../assets/images.png";
const modules= [Autoplay,FreeMode]
// Swiper configuration

</script>

<style scoped>
/* You can move your custom carousel styles here */
@import "./partenerCarusal.css";
</style>

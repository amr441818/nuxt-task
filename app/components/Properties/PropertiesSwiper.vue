<template>
    <div class="flex justify-center relative m-1">
      <swiper
      :modules="modules"
        :space-between="30"
        loop="true"
        :pagination="{ clickable: true, el: '.custom-pagination' }"
        :autoplay="{ delay: 9500, disableOnInteraction: false }"
        :navigation="{ prevEl: '.custom-prev-btn', nextEl: '.custom-next-btn' }"
        :breakpoints="breakpoints"
        class="mySwiper"
      >
        <swiper-slide >
          <div class="flex flex-col gap-4 w-full">
            <img src="../../assets/pro1.png" alt="property-image" class="w-10" />
            <div class="flex w-full px-3 justify-between">
              <h3>New Cairo</h3>
              <Icon name="material-symbols:arrow-back-rounded" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="flex flex-col gap-4 w-full">
            <img src="../../assets/pro2.png" alt="property-image" class="w-10" />
            <div class="flex w-full px-3 justify-between">
              <h3>New Cairo</h3>
              <Icon name="material-symbols:arrow-back-rounded" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="flex flex-col gap-4 w-full">
            <img src="../../assets/pro3.png" alt="property-image" class="w-10" />
            <div class="flex w-full px-3 justify-between">
              <h3>New Cairo</h3>
              <Icon name="material-symbols:arrow-back-rounded" />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide >
          <div class="flex flex-col gap-4 w-full">
            <img src="../../assets/pro3.png" alt="property-image" class="w-10" />
            <div class="flex w-full px-3 justify-between">
              <h3>New Cairo</h3>
              <Icon name="material-symbols:arrow-back-rounded" />
            </div>
          </div>
        </swiper-slide>
  
        <div class="flex items-center justify-center gap-4 mt-4 custom-pagination-container">
          <div class="custom-prev-btn">
            <Icon name="material-symbols:arrow-back-rounded" />
          </div>
          <div class="custom-pagination"></div>
          <div class="custom-next-btn">
            <Icon name="material-symbols:arrow-forward-rounded" />
          </div>
        </div>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue'; 
  import { Autoplay , Navigation, Pagination} from 'swiper/modules';
    const modules =[Autoplay, Navigation, Pagination]
  import 'swiper/css';
  import 'swiper/css/pagination'
  import 'swiper/css/navigation';
  

//   const properties = ref([
//     { image: '../../assets/pro1.png', name: 'New Cairo' },
//     { image: '../../assets/pro2.png', name: 'October' },
//     { image: '../../assets/pro3.png', name: 'Seaside' },
//   ]);
  
  // Define breakpoints for Swiper
  const breakpoints = {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  };
  </script>
  
  <style scoped>
  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Pagination and Arrows Container */
  .custom-pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    margin: 2rem auto;
  }
  
  /* Style for the Pagination Bullets */
  .custom-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
  }
  
  .custom-pagination .swiper-pagination-bullet-active{
    background: black !important;
    opacity: 1;
  }
  
  /* Custom Previous and Next Arrows */
  .custom-prev-btn,
  .custom-next-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 24px;
    padding: 10px;
  }
  </style>
  
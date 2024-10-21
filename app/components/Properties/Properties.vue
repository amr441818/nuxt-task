<template>
    <div class="container flex flex-col gap-[40px] justify-center items-center">
      <h3 class="font-[900] text-[32px]">Properties</h3>
  
      <div class="w-full p-10">
        <PropertiesSwiper />
      </div>
    </div>
  </template>
  
  <script setup>
  // Import the CustomSwiper component
  import PropertiesSwiper from './PropertiesSwiper.vue' // Adjust the path if necessary
  </script>
  
 
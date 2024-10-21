<template>
    <div class="bg-[#F3F3F1] px-[40px] md:px-[158px] pt-[71px] pb-4 flex flex-col gap-[64px]">
    <NewsLetter/>
      <hr class="bg-[#3E453E] h-[2px]" />
  
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">
        <div class="flex flex-col gap-8 lg:col-span-5 items-center">
          <div class="flex flex-col gap-4 w-full items-center lg:items-start">
            <img src="../../assets/footerLogo.png" alt="footer logo" class="text-black" />
            <p class="text-center lg:text-start">
              Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum. Fusce at dui tincidunt nulla semper.
            </p>
          </div>
  
          <div class="flex gap-4">
            <h3 class="text-[16px] text-[#8D999D]">Follow us on</h3>
            <div class="flex gap-4 items-center">
              <NuxtLink to=""><Icon name="line-md:facebook" class="size-[24px]" /></NuxtLink>
              <NuxtLink to=""><Icon name="devicon:twitter" class="size-[24px]" /></NuxtLink>
              <NuxtLink to=""><Icon name="streamline:instagram" class="size-[24px]" /></NuxtLink>
              <NuxtLink to=""><Icon name="material-symbols:youtube-tv" class="size-[24px]" /></NuxtLink>
             
            </div>
          </div>
        </div>
  
        <div class="flex flex-col md:flex-row justify-between md:justify-around gap-8 lg:col-span-7">
          <div class="flex flex-col gap-7 items-center lg:items-start">
            <div class="flex">
              <NuxtLink to="" class="text-start">Main Links</NuxtLink>
            </div>
            <div class="flex flex-col gap-4 items-center lg:items-start">
              <NuxtLink to="">Home</NuxtLink>
              <NuxtLink to="">Our Projects</NuxtLink>
              <NuxtLink to="">Services</NuxtLink>
              <NuxtLink to="">Contact us</NuxtLink>
            </div>
          </div>
  
          <div class="flex flex-col gap-7 items-center lg:items-start">
            <div class="flex">
              <NuxtLink to="" class="text-start">Quick Links</NuxtLink>
            </div>
            <div class="flex">
              <NuxtLink to="" class="text-start">Privacy policy</NuxtLink>
            </div>
            <div class="flex">
              <NuxtLink to="" class="text-start">Terms of Use</NuxtLink>
            </div>
          </div>
        </div>
      </div>
  
      <hr class="bg-[#3E453E] h-[2px]" />
  
      <div class="flex justify-center">
        <p class="text-center">All Copyrights are reserved by SIANCHES @2024</p>
      </div>
    </div>
  </template>
  
  <script setup>
import NewsLetter from './NewsLetter/NewsLetter.vue';


  
  </script>
  
  <style scoped>
  </style>
  
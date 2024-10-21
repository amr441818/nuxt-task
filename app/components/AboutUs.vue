<template>
    <div class="container flex flex-col gap-[56px] w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[62px]">
        <div class="flex justify-center order-2 lg:order-1">
          <img src="../assets/about.png" class="w-[98%] lg:w-full md:h-[660px]" alt="about us image" />
        </div>
  
        <div class="flex flex-col items-center justify-center gap-[22px]">
          <h3 class="text-[36px] md:text-[40px] font-[700] md:font-[900] text-center lg:text-start">
            We Help You Realize Your Dream Property
          </h3>
          <div class="flex flex-col gap-5">
            <p class="text-[16px] text-center lg:text-start">
              Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum. Fusce at dui tincidunt nulla semper venenatis at et magna. Mauris turpis lorem, ultricies vel justo sed, ultrices auctor nisi.
            </p>
            <p class="text-center lg:text-start">
              Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum. Fusce at dui tincidunt nulla semper.
            </p>
            <div class="flex justify-center lg:justify-start">
              <CusttomButton title="Read More" />
            </div>
          </div>
        </div>
      </div>
  
      <div class="flex flex-col gap-10 md:flex-row justify-between w-full items-center px-[79px]">
        <div class="flex flex-col items-center w-full gap-3">
          <HomeIcon />
          <h3>Property Management</h3>
        </div>
        <div class="flex flex-col items-center w-full gap-3">
          <Support />
          <h3>Great support</h3>
        </div>
        <div class="flex flex-col items-center w-full gap-3">
          <Services />
          <h3>Mortgage Services</h3>
        </div>
        <div class="flex flex-col items-center w-full gap-3">
          <Great />
          <h3>Great support</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import HomeIcon from '../assets/icons/aboutUs/HomeIcon.vue'

import Support from '../assets/icons/aboutUs/Support.vue'
import Services from '../assets/icons/aboutUs/Services.vue'
import Great from '../assets/icons/aboutUs/Great.vue'

  </script>
  

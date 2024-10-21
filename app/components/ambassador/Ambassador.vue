<template>
  <div class="flex container justify-center w-full">
    <div class="grid grid-cols-12 bg-[#F8F8F7] gap-[34px] w-full">
      <div class="col-span-12 lg:col-span-7 flex h-[300px] lg:h-auto relative">
        <img :src="key" alt="this is an image for building" class="w-full h-[351px] absolute top-0 lg:top-[-60px]" />
      </div>
      <div class="flex flex-col gap-6 justify-center items-center lg:items-start w-full col-span-12 lg:col-span-5 py-[71px] px-[56px]">
        <h2 class="text-[22px] lg:text-[32px] font-bold lg:font-[900]">Become an ambassador</h2>
        <div class="flex">
          <CusttomButton title="Register Now" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import key from '../../assets/key.png'
</script>

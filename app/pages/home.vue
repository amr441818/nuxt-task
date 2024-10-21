
<script setup>
import Partener from '~/components/Parteners/Partener.vue';
import Properties from '~/components/Properties/Properties.vue';
import Recently from '~/components/recently/Recently.vue';
import Sell from '~/components/sell/Sell.vue';



</script>
<template>
     <div className="flex  flex-col gap-[120px]">
    <Header/>
    <AboutUs/>
    <Properties/>
    <Sell/>
    <Recently/>
    <Ambassador/>
    <Partener/>
    <Footer/>

  </div>
  </template>
  
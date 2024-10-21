<template>
    <div class="w-full">
      
      <div
      
        class="hidden container sticky top-0 w-full z-50 lg:flex justify-between bg-transparent text-white h-[85px] items-center"
      >
        <div>
          <NuxtLink to="#">
            <img :src="img" class="w-[150px] lg:w-[266px] lg:h-[36px]" alt="" />
          </NuxtLink>
        </div>
  
        <div class="flex gap-4 lg:gap-6 items-center text-white">
          <div class="flex items-center gap-2 lg:gap-6 text-[14px]">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/">About us</NuxtLink>
            <NuxtLink to="/">Services</NuxtLink>
            <NuxtLink to="/">Properties</NuxtLink>
            <NuxtLink to="/">Our Partners</NuxtLink>
            <NuxtLink to="/">Contact us</NuxtLink>
          </div>
  
          <div class="flex items-center">
            <div class="flex items-center gap-4">
              <button class="flex items-center gap-1">
                <Icon name="material-symbols:language" class="size-6" /> Ar
              </button>
              <svg
                width="2"
                height="40"
                viewBox="0 0 2 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0.788086" y1="2.18557e-08" x2="0.788084" y2="40" stroke="#929EAA" />
              </svg>
              <button><Icon name="material-symbols:favorite-outline" class="size-8" /></button>
  
              <CusttomButton title="Become an ambassador" bgColor="white"  text-color="black2" />
            </div>
          </div>
        </div>
      </div>
  
      <!-- Mobile Navigation -->
      <nav class="flex relative mobile_nav z-999 lg:hidden">
        <div class="flex justify-between w-full items-center lg:items-start">
          <img :src="img" alt="" class="w-[150px] h-[50px]" />
          <button
            @click="toggleSidebar"
            aria-controls="default-sidebar"
            type="button"
            class="relative inline-flex items-center p-2 mt-2 ms-3 text-sm text-black rounded-lg focus:outline-none focus:ring-2"
          >
            <span class="sr-only">Open sidebar</span>
            <Icon name="solar:hamburger-menu-linear" class="text-white size-7" />
          </button>
        </div>
      </nav>
  
      <!-- Sidebar -->
      <div v-if="isOpen" @click="closeSidebar" class="w-[100%] lg:hidden layout h-[100vh] fixed right-0 left-0 top-0">
        <aside
          id="default-sidebar"
          class="gradiants lg:hidden fixed top-0 right-0 w-[50%] h-screen transition-transform"
          :class="isOpen ? '' : 'translate-x-full'"
          aria-label="Sidebar"
        >
          <!-- Close button -->
          <button @click="closeSidebar" class="absolute top-0 right-0 m-4 text-black focus:outline-none">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
  
          <div class="h-full px-3 py-[130px] overflow-y-auto">
            <ul class="space-y-2 flex flex-col gap-9">
              <div class="flex flex-col gap-6">
                <NuxtLink to="/" class="w-max flex items-center p-2 text-black rounded-lg">
                  <h3 class="ms-3 text-[18px]">Home</h3>
                </NuxtLink>
                <NuxtLink to="/" class="w-max flex items-center p-2 text-black rounded-lg">
                  <h3 class="ms-3 text-[18px]">Services</h3>
                </NuxtLink>
                <NuxtLink to="/" class="w-max flex items-center p-2 text-black rounded-lg">
                  <h3 class="ms-3 text-[18px]">Properties</h3>
                </NuxtLink>
                <NuxtLink to="/" class="w-max flex items-center p-2 text-black rounded-lg">
                  <h3 class="ms-3 text-[18px]">Our Partners</h3>
                </NuxtLink>
                <NuxtLink to="/" class="w-max flex items-center p-2 text-black rounded-lg">
                  <h3 class="ms-3 text-[18px]">Contact us</h3>
                </NuxtLink>
              </div>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import img from '../assets/logo.svg'


 
  
  const isScrolled = ref(false)
  const isOpen = ref(false)
  
  const toggleSidebar = () => {
    isOpen.value = !isOpen.value
  }
  
  const closeSidebar = () => {
    isOpen.value = false
  }
  
  const handleScroll = () => {
    if (window.scrollY > 0) {
      isScrolled.value = true
    } else {
      isScrolled.value = false
    }
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
  .mobile_nav {
    background-color: transparent;
    padding: 12px 16px;
    width: 100%;
  }
  
  .gradiants {
    color: black;
    background: white;
  }
  
  .layout {
    background-color: rgba(30, 143, 206, 0.5);
    z-index: 10000 !important;
  }
  
  .btn {
    font-size: 16px !important;
    font-weight: 700 !important;
  }
  </style>
  
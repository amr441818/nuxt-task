<template>
    <div class='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 '>
      <div class="flex flex-col gap-1 md:gap-2 justify-center items-center lg:justify-start lg:items-start">
        <h3 class='font-[700] md:font-[900] text-[24px] ms:text-[32px]'>Subscribe to newsletter</h3>
        <p class='text-[14px] md:text-[18px] '>Stay up-to-date with the latest news and offers.</p>
      </div>
  
      <form @submit.prevent="handleSubmit" class="flex">
        <input type="email" placeholder='Enter your email address' v-model="formData.email" required class='w-full p-[8px] lg:p-[26px] text-3 lg:text-[18px]' />
        <button type="submit" 
        class="text-[18px] bg-black2 text-white px-5 lg:px-[48px] lg:py-[26px]" 
        :disabled="loading">
    <span v-if="loading">Sending...</span>
    <span v-else>Subscribe</span>
</button>
       
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import axios from '../../../../Utils/axios'; // Adjust the path as needed
  import { useToast } from "vue-toastification"; // Use Vue Toastification
  const loading = ref(false);
  const toast = useToast();
  const formData = ref({
    email: '',
  });
  
  const handleSubmit = async () => {
    const formDataa = new FormData();
    formDataa.append('email', formData.value.email);
  
    try {
        loading.value=true;
      const response = await axios.post('/newsletter', formDataa);
      loading.value=false; // Hide the loading spinner
      console.log(response)
      if (response.data.status === 'success') {
        toast.success(response.data.message);
        formData.value.email = ''; // Clear the input
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        const message = error.response.data?.message || 'An error occurred.';
        toast.error(message);
      } else {
        toast.error('Network error. Please try again later.');
      }
    }
  };
  </script>
  
<template>
    <div class='grid grid-cols-1 lg:grid-cols-2 h-screen'>
      <div>
        <img src="~/assets/auth-img.png" class='h-full w-full' alt='login image' />
      </div>
  
      <div class="flex flex-col gap-[24px] md:gap-[64px] bg-white px-4 md:px-[120px] py-[36px] md:py-[80px]">
        <div class="flex justify-center">
          <img src="~/assets/auth-logo.png" class='h-[56px] md:h-[67px] w-[150px] md:w-[234px]' alt='login form logo' />
        </div>
  
        <form @submit.prevent="handleSubmit" class="flex w-full gap-[24px] md:gap-[64px]">
          <div class="flex flex-col gap-4 justify-center w-full">
            <div class="flex flex-col gap-8">
              <div class="flex flex-col gap-2 w-full">
      <label class="flex gap-2 items-center text-[16px] text-black2">
        <Icon name="material-symbols:person-2-outline"  /> Email Address
      </label>
      <input
      type="email" 
                placeholder="Enter your email address" 
               class="py-[23px] px-[20px] w-full outline-none bg-[#F4F4F3]"
                v-model="formData.email" 
               
                
      />
    </div>
              <p v-if="errors.email" class="text-[#FF0000] text-[12px]">{{ errors.email[0] }}</p>
  
              <div class="flex flex-col gap-2 relative w-full">
      <label class="flex gap-2 items-center text-[16px] text-black2">
        <Icon name="solar:lock-password-unlocked-linear" class="size-6" /> Password
      </label>
      <input
        :type="isPasswordVisible ? 'text' : 'password'"
        v-model="formData.password"
        
        placeholder="Enter your password"
        class="py-[23px] px-[20px] w-full outline-none bg-[#F4F4F3]"
       
      />
      <div
        class="absolute top-[55px] right-0 pr-3 flex items-center cursor-pointer"
        @click="togglePasswordVisibility"
      >
        <Icon :name="isPasswordVisible ? 'line-md:compass-twotone' : 'line-md:compass-off'" class="h-5 w-5 text-black1" />
      </div>
    </div>
              <p v-if="errors.password" class="text-[#FF0000] text-[12px]">{{ errors.password[0] }}</p>
            </div>
  
            <div class="flex">
              <NuxtLink to="/forgot-password" class='font-medium text-black2'>Forget your password?</NuxtLink>
            </div>

            <CusttomButton type="submit" title='Login' :loading="loading" />
          </div>
        </form>
  
        <div class="flex justify-center">
          <NuxtLink to="/register" class='text-black2 font-semibold'>
            <span class='text-black1 font-normal'>Don’t have an account?</span> Create account
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
 
  import axios from '../../../../Utils/axios.js'; 
  import { z } from 'zod';

  const router = useRouter();
  const loading = ref(false);
  const formData = ref({
    email: '',
    password: '',
  });
  const isPasswordVisible = ref(false);
  const errors = ref({});
  console.log(formData.email)
  const logData = ()=>{
    console.log(formData.value)
  }
  const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
  };
  const formSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    password: z.string().min(3, 'Password must be at least 3 characters'),
  });
  
  const handleSubmit = async () => {
    const result = formSchema.safeParse(formData.value);
    
    if (!result.success) {
      errors.value = result.error.formErrors.fieldErrors;
      return;
    }
  
    try {
      loading.value=true;
      const response = await axios.post('/login', formData.value);
      loading.value=false;
      console.log(response)
      if (response.data.status === 'success') {
       
    useNuxtApp().$toast.success(response?.data?.message, {
      autoClose: 5000,
      dangerouslyHTMLString: true,
    })
        formData.value.email = ''; 
        formData.value.password = '';
       
        router.push('/home'); 
      } 
     else{
        console.log("error")
      }
    } catch (error) {
      loading.value=false;
      const message = error.response?.data?.message || 'An error occurred.';
       useNuxtApp().$toast.error(message, {
      autoClose: 5000,
      dangerouslyHTMLString: true,
    })
    }
  };
  </script>
  
 
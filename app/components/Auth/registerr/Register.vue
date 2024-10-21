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
        <Icon name="material-symbols:person-2-outline"  /> Name
      </label>
      <input
      type="Text" 
                placeholder="Enter your full name" 
               class="py-[23px] px-[20px] w-full outline-none bg-[#F4F4F3]"
                v-model="formData.name" 
               
                
      />
    </div>
    <p v-if="errors.name" class="text-[#FF0000] text-[12px]">{{ errors.name[0] }}</p>
              <div class="flex flex-col gap-2 w-full">
      <label class="flex gap-2 items-center text-[16px] text-black2">
        <Icon name="material-symbols:attach-email-outline"  /> Email Address
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
              <div class="flex flex-col gap-2 relative w-full">
      <label class="flex gap-2 items-center text-[16px] text-black2">
        <Icon name="solar:lock-password-unlocked-linear" class="size-6" /> password_confirmation
      </label>
      <input
        :type="isPasswordVisible ? 'text' : 'password'"
        v-model="formData.password_confirmation"
        
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
              <p v-if="errors.password_confirmation" class="text-[#FF0000] text-[12px]">{{ errors.password_confirmation[0] }}</p>

              <UploadImage :setFile="handleFileChange"/>
            </div>
  
            <div class="flex justify-center lg:justify-start gap-2 items-center">
    <input
      type="checkbox"
      :checked="formData.terms === '1' ? true :false"
      class="w-5 h-5"
      name="terms"
      v-model="formData.terms"
      @change="handleTermsChange"
    />
    <div class="text-black1 font-semibold">
      <span class="text-[#BBB8BF] font-normal">Agree to the </span> terms and conditions
    </div>
  </div>

            <CusttomButton type="submit" title='Register' :loading="loading" />
          </div>
        </form>
  
        <div class="flex justify-center">
          <NuxtLink to="/" class='text-black2 font-semibold'>
            <span className='text-black1 font-normal'>Have an account? </span>login
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
 
  import axios from '../../../../Utils/axios.js'; 
  import { z } from 'zod';
import UploadImage from './UploadImage.vue';

  const router = useRouter();
  const loading = ref(false);
  const formData = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms:"0",
    file: null,
  });
  const file = ref(null)

  const handleFileChange =(file)=>{
  formData.value.file = file
   
  }
  console.log(formData.value)
  const handleTermsChange = (event) => {
  formData.value.terms = event.target.checked ? '1' : '0';
};
  const isPasswordVisible = ref(false);
  const errors = ref({});
  console.log(formData.email)
  const logData = ()=>{
    console.log(formData.value)
  }
  const togglePasswordVisibility = () => {
    isPasswordVisible.value = !isPasswordVisible.value;
  };
  const formSchema = 
    z.object({
        name: z
            .string()
            
            .min(1, "name required ")
            .max(100,'name must be less than 100 characters')  .refine((value) => value.trim().split(/\s+/).length >= 2, {
                message: "name must be at least two words",
            }),
        email: z.string().email(` please enter a valid email`),
        terms: z.string().refine((value) => value === "1", {
            message: " you must accept terms and conditions to continue",
          }),
        password: z
        .string()
        .min(3, ` Password must be at least 3 characters`)
        .refine(
          (value) => /[A-Z]/.test(value), 
          {
            message: `one letters, Capital`,
          }
        )
        ,
        password_confirmation: z.string(),
            
    })  .refine(
        (data) => {
         
          return data.password === data.password_confirmation;
        },
        {
          message: "passwords  not match",
          path: ["password_confirmation"], 
        }
      );
  const handleSubmit = async () => {
    const formDataa = new FormData();
    formDataa.append('national_image', formData.value.file);
    formDataa.append('full_name', formData.value.name);
    formDataa.append('email', formData.value.email);
    formDataa.append('password', formData.value.password);
    formDataa.append('password_confirmation', formData.value.password_confirmation);
    formDataa.append('terms', formData.value.terms);
    const result = formSchema.safeParse(formData.value);
    
    if (!result.success) {
      errors.value = result.error.formErrors.fieldErrors;
      return;
    }
  
    try {
      loading.value=true;
      const response = await axios.post('/register', formDataa,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }});
      loading.value=false;
      console.log(response)
      if (response.data.status === 'success') {
   
        formData.value.email = ''; 
        formData.value.password = '';
       
        router.push('/verify'); 
      } else {
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
  
 
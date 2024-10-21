<template>
    <div class="flex flex-col items-center w-full gap-[10px]">
      <input
        ref="fileInput"
        type="file"
        style="display: none; width: 100%"
        accept="image/*"
        @change="handleFileChange"
      />
  
      <div
        @click="handleButtonClick"
        class="flex cursor-pointer w-full h-[80px] border-[2px] border-[#2D2D2D] border-dotted justify-center items-center"
      >
        <img v-if="imageSrc" :src="imageSrc" alt="Uploaded" class="w-full h-full object-cover" />
        <NationalIcon v-else /> 
      </div>
  
    
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
import NationalIcon from '~/assets/icons/NationalIcon.vue';
 
  
  const props = defineProps({
    user: {
      type: Boolean,
      default: false,
    },
    setFile: Function, // This should be passed down from parent
    editImgUrl: {
      type: String,
      default: null,
    },
  });
  
  const fileInput = ref(null);
  const imageSrc = ref('');
  
  const handleButtonClick = () => {
    fileInput.value.click();
  };
  
  
  
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      props.setFile(file)
  
      const fileReader = new FileReader();
      fileReader.onload = () => {
        imageSrc.value = fileReader.result;
      };
      fileReader.readAsDataURL(file);
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here if needed */
  </style>
  
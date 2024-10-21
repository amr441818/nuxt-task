

<template>
  <button 
    :type="type || 'button'"
     class="flex justify-center items-center"
     :class="[
      bgColor ? 'bg-' + bgColor : 'bg-black2',
      fullWidth ? 'w-full' : 'w-auto',
      `py-[12px] md:py-[18px] gap-2 px-4`,
      textColor ?  'text-' + textColor : 'text-white',
    ]"

  >
  <span v-if="loading">Sending...</span>
    <span v-else>{{ title }}</span>
    

    <Icon name="material-symbols:arrow-outward-rounded" :class="[textColor? 'text-' + textColor :'text-white']"/>

  </button>
</template>

<script setup>

import {defineProps} from "vue"
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  title: {
    type: String,
    required: true
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  bgColor: {
    type: String,
    default: ''
  },
  textColor: {
    type: String,
    default: ''
  }
})
</script>

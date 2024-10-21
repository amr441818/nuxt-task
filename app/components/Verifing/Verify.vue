<template>
     <div class='grid grid-cols-1 lg:grid-cols-2 h-screen   '>



<div class="">
<img src="../../assets/auth-img.png" class='h-full w-full' alt='login image'/>
</div>

<div class="flex flex-col gap-[24px] md:gap-[64px] bg-white px-4 md:px-[120px]  py-[36px] md:py-[80px]  ">
  
  <div class="flex justify-center ">
  <img src="../../assets/auth-logo.png" class=' h-[56px] md:h-[67px]  w-[150px] md:w-[234px] ' alt='login form logo'/>
  </div> 

  <form  class="flex w-full gap-[24px] md:gap-[64px]">

<div class="flex flex-col gap-[40px] w-full">
<NuxtLink href="/register" class="flex gap-2 items-center" >
back
<Icon name="material-symbols:arrow-left-alt-rounded"  />
</NuxtLink>

<div class="flex flex-col gap-2">
<h1>Verification Code</h1>
<p  class='text-[#8D999D]'>Enter the verification code we just sent you on <br/> your email address <span class='text-black'> example40@gmail.com</span></p>
</div>
<div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
      <div class="w-16 h-16 ">
        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
      </div>
      <div class="w-16 h-16 ">
        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
      </div>
      <div class="w-16 h-16 ">
        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
      </div>
      <div class="w-16 h-16 ">
        <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
      </div>
    </div>

          <CusttomButton type="submit" title='Send' />   
</div>


  </form>
  <div class="flex justify-center">

</div>
</div>
</div>
</template>
<script setup>


</script>

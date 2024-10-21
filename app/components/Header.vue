<template>
    <div class="flex flex-col  relative main_header w-full">
   
      <div class="flex  z-50 bg-inherit w-full">
        <Nav />
      </div>
  
      
      <div class="h-screen w-full">
       
        <div class="overlay absolute top-0 left-0 h-screen w-full"></div>
  
      
        <div class="flex flex-col absolute top-0 left-0 h-screen w-full justify-center items-center">
          <div class="main flex flex-col justify-normal items-center gap-[48px]">
            <span class="typo block text-white">
              We Help You <br />
              Realize Your <br />
              Dream Property
            </span>
  
            <CusttomButton title="Explore Properties" textColor="black2" bgColor="white" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
 

  </script>
  
  <style scoped>
  .main_header {
    background-image: url('@/assets/header.png');
    background-position: center center;
    background-size: cover;
  }
  
  .overlay {
    background-color: black;
    opacity: 0.4;
    width: 100%;
    height: 100%;
  }
  
  .main {
    gap: 48px;
  }
  
  .typo {
    font-size: 72px;
    color: white;
    font-weight: 900;
    text-align: center;
    width: 870px;
    line-height: 89px;
    font-style: italic;
  }
  
  @media only screen and (max-width: 768px) {
    .typo {
      font-size: 36px;
      color: white;
      font-weight: 700;
      text-align: center;
      width: 100%;
      line-height: 2.5rem;
      font-style: italic;
    }
  }
  </style>
  
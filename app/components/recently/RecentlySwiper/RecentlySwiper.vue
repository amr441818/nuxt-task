<template>
    <div class="flex justify-center relative m-1">
      <swiper
      :modules="modules"
        :space-between="30"
        loop="true"
        :pagination="{ clickable: true, el: '.custom-pagination' }"
        :autoplay="{ delay: 9500, disableOnInteraction: false }"
        :navigation="{ prevEl: '.custom-prev-btn', nextEl: '.custom-next-btn' }"
        :breakpoints="breakpoints"
        class="mySwiper"
      >
        <swiper-slide >
          <div className="flex flex-col gap-4 w-full  ">
            
            <div className="flex relative">
              <div className="absolute overlay top-0 left-0 z-10   bg-black opacity-70 h-full w-full"></div>
              <div className="flex flex-col justify-between absolute  top-0 left-0 z-10 px-5 py-4 h-full w-full">
  
  <div className="flex items-center justify-between w-full ">
    <div className="flex rounded-full justify-center w-10 h-10">
      <img src="../../../assets/cardLogo.png" alt='card image' className='w-full h-full' />
      </div>
      <button className="flex justify-center items-center w-10 h-10 bg-white rounded-full text-[#D20300]">
        <Icon name="material-symbols:favorite-outline-rounded"  class="text-[red]"/>
    </button>
  
  </div>
  
  <div className="flex justify-end w-full">
    
  
   <button className="flex  justify-center items-center gap-3 px-2 py-1.5  bg-white ">
   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_71_4723)">
  <path d="M2.48438 3.09375H1.52344C1.32928 3.09375 1.17188 3.25116 1.17188 3.44531V4.40625C1.17188 4.60041 1.32928 4.75781 1.52344 4.75781H2.48438C2.67853 4.75781 2.83594 4.60041 2.83594 4.40625V3.44531C2.83594 3.25116 2.67853 3.09375 2.48438 3.09375ZM2.13281 4.05469H1.875V3.79688H2.13281V4.05469ZM2.48438 5.01562H1.52344C1.32928 5.01562 1.17188 5.17303 1.17188 5.36719V6.32812C1.17188 6.52228 1.32928 6.67969 1.52344 6.67969H2.48438C2.67853 6.67969 2.83594 6.52228 2.83594 6.32812V5.36719C2.83594 5.17303 2.67853 5.01562 2.48438 5.01562ZM2.13281 5.97656H1.875V5.71875H2.13281V5.97656ZM2.48438 6.9375H1.52344C1.32928 6.9375 1.17188 7.09491 1.17188 7.28906V8.25C1.17188 8.44416 1.32928 8.60156 1.52344 8.60156H2.48438C2.67853 8.60156 2.83594 8.44416 2.83594 8.25V7.28906C2.83594 7.09491 2.67853 6.9375 2.48438 6.9375ZM2.13281 7.89844H1.875V7.64062H2.13281V7.89844ZM7.17188 3.09375H4.82812C4.63397 3.09375 4.47656 3.25116 4.47656 3.44531V4.40625C4.47656 4.60041 4.63397 4.75781 4.82812 4.75781H7.17188C7.36603 4.75781 7.52344 4.60041 7.52344 4.40625V3.44531C7.52344 3.25116 7.36603 3.09375 7.17188 3.09375ZM6.82031 4.05469H5.17969V3.79688H6.82031V4.05469ZM7.17188 1.17188H4.82812C4.63397 1.17188 4.47656 1.32928 4.47656 1.52344V2.48438C4.47656 2.67853 4.63397 2.83594 4.82812 2.83594H7.17188C7.36603 2.83594 7.52344 2.67853 7.52344 2.48438V1.52344C7.52344 1.32928 7.36603 1.17188 7.17188 1.17188ZM6.82031 2.13281H5.17969V1.875H6.82031V2.13281ZM7.17188 5.01562H4.82812C4.63397 5.01562 4.47656 5.17303 4.47656 5.36719V6.32812C4.47656 6.52228 4.63397 6.67969 4.82812 6.67969H7.17188C7.36603 6.67969 7.52344 6.52228 7.52344 6.32812V5.36719C7.52344 5.17303 7.36603 5.01562 7.17188 5.01562ZM6.82031 5.97656H5.17969V5.71875H6.82031V5.97656ZM7.17188 6.9375H4.82812C4.63397 6.9375 4.47656 7.09491 4.47656 7.28906V8.25C4.47656 8.44416 4.63397 8.60156 4.82812 8.60156H7.17188C7.36603 8.60156 7.52344 8.44416 7.52344 8.25V7.28906C7.52344 7.09491 7.36603 6.9375 7.17188 6.9375ZM6.82031 7.89844H5.17969V7.64062H6.82031V7.89844ZM2.48438 8.85938H1.52344C1.32928 8.85938 1.17188 9.01678 1.17188 9.21094V10.1719C1.17188 10.366 1.32928 10.5234 1.52344 10.5234H2.48438C2.67853 10.5234 2.83594 10.366 2.83594 10.1719V9.21094C2.83594 9.01678 2.67853 8.85938 2.48438 8.85938ZM2.13281 9.82031H1.875V9.5625H2.13281V9.82031Z" fill="#2D2D2D"/>
  <path d="M11.6484 1.92188H8.69531V0.351562C8.69531 0.157406 8.53791 0 8.34375 0H3.65625C3.46209 0 3.30469 0.157406 3.30469 0.351562V1.92188H0.351562C0.157406 1.92188 0 2.07928 0 2.27344V11.6484C0 11.8426 0.157406 12 0.351562 12H11.6484C11.8426 12 12 11.8426 12 11.6484V2.27344C12 2.07928 11.8426 1.92188 11.6484 1.92188ZM3.30469 11.2969H0.703125V2.625H3.30469V11.2969ZM6.58594 11.2969H5.41406V9.5625H6.58594V11.2969ZM7.99219 2.27344V11.2969H7.28906V9.21094C7.28906 9.01678 7.13166 8.85938 6.9375 8.85938H5.0625C4.86834 8.85938 4.71094 9.01678 4.71094 9.21094V11.2969H4.00781V0.703125H7.99219V2.27344ZM11.2969 11.2969H8.69531V2.625H11.2969V11.2969Z" fill="#2D2D2D"/>
  <path d="M10.4766 3.09375H9.51562C9.32147 3.09375 9.16406 3.25116 9.16406 3.44531V4.40625C9.16406 4.60041 9.32147 4.75781 9.51562 4.75781H10.4766C10.6707 4.75781 10.8281 4.60041 10.8281 4.40625V3.44531C10.8281 3.25116 10.6707 3.09375 10.4766 3.09375ZM10.125 4.05469H9.86719V3.79688H10.125V4.05469ZM10.4766 5.01562H9.51562C9.32147 5.01562 9.16406 5.17303 9.16406 5.36719V6.32812C9.16406 6.52228 9.32147 6.67969 9.51562 6.67969H10.4766C10.6707 6.67969 10.8281 6.52228 10.8281 6.32812V5.36719C10.8281 5.17303 10.6707 5.01562 10.4766 5.01562ZM10.125 5.97656H9.86719V5.71875H10.125V5.97656ZM10.4766 6.9375H9.51562C9.32147 6.9375 9.16406 7.09491 9.16406 7.28906V8.25C9.16406 8.44416 9.32147 8.60156 9.51562 8.60156H10.4766C10.6707 8.60156 10.8281 8.44416 10.8281 8.25V7.28906C10.8281 7.09491 10.6707 6.9375 10.4766 6.9375ZM10.125 7.89844H9.86719V7.64062H10.125V7.89844ZM10.4766 8.85938H9.51562C9.32147 8.85938 9.16406 9.01678 9.16406 9.21094V10.1719C9.16406 10.366 9.32147 10.5234 9.51562 10.5234H10.4766C10.6707 10.5234 10.8281 10.366 10.8281 10.1719V9.21094C10.8281 9.01678 10.6707 8.85938 10.4766 8.85938ZM10.125 9.82031H9.86719V9.5625H10.125V9.82031Z" fill="#2D2D2D"/>
  </g>
  <defs>
  <clipPath id="clip0_71_4723">
  <rect width="12" height="12" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  
    <h3 className='font-bold text-[12px]'>Apartment</h3>
    </button>
  
    
    </div>
  
              </div>
  
  
            <img
                src="../../../assets/buld1.png"
                alt="property-image"
               className='w-full '
              />
            </div>
  
            <div className="flex flex-col w-full px-3 gap-6 justify-between">
            <div className="flex flex-col gap-2"> 
              <h3 className='text-start text-[20px]'>TULWA for sale in west orascom</h3>
              <div className="flex items-center gap-3 text-[#8D999D]"> <Icon name="material-symbols:location-on-outline"/> <p className='text-[14px]'>Est St, 77 - Central Park South, NYC</p></div>
            </div>
             <div className="flex gap-6 items-center">
              <div className="flex items-center gap-1">
            <Icon name="material-symbols:bathtub-outline-sharp"/>
                <p className='text-[14px]'>2 bathrooms</p>
              </div>
              <div className="flex   items-center gap-1 ">
             <Icon name="material-symbols:bathtub-outline-sharp"/>
                <p className='text-[14px]'>2 bathrooms</p>
              </div>
              <div className="flex items-center gap-1">
             <Icon name="material-symbols:bathtub-outline-sharp"/>
                <p className='text-[14px]'>280 m</p>
              </div>
             </div>
             <div className="flex justify-between items-center ">
  
              
  <div className="flex flex-col items-start  gap-1 ">
    <h3>524.000 EGP</h3>
    <div className="flex  text-[#8D999D]">  <p className='text-[14px]'>96,500 Monthly</p></div>
  </div>
  <Icon name="material-symbols:arrow-outward-rounded" class="text-black2"/>
  </div>
            </div>
           
            </div>
        </swiper-slide>
        <swiper-slide >
          <div className="flex flex-col gap-4 w-full  ">
            
            <div className="flex relative">
              <div className="absolute overlay top-0 left-0 z-10   bg-black opacity-70 h-full w-full"></div>
              <div className="flex flex-col justify-between absolute  top-0 left-0 z-10 px-5 py-4 h-full w-full">
  
  <div className="flex items-center justify-between w-full ">
    <div className="flex rounded-full justify-center w-10 h-10">
      <img src="../../../assets/cardLogo.png" alt='card image' className='w-full h-full' />
      </div>
      <button className="flex justify-center items-center w-10 h-10 bg-white rounded-full text-[#D20300]">
        <Icon name="material-symbols:favorite-outline-rounded"  class="text-[red]"/>
    </button>
  
  </div>
  
  <div className="flex justify-end w-full">
    
  
   <button className="flex  justify-center items-center gap-3 px-2 py-1.5  bg-white ">
   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_71_4723)">
  <path d="M2.48438 3.09375H1.52344C1.32928 3.09375 1.17188 3.25116 1.17188 3.44531V4.40625C1.17188 4.60041 1.32928 4.75781 1.52344 4.75781H2.48438C2.67853 4.75781 2.83594 4.60041 2.83594 4.40625V3.44531C2.83594 3.25116 2.67853 3.09375 2.48438 3.09375ZM2.13281 4.05469H1.875V3.79688H2.13281V4.05469ZM2.48438 5.01562H1.52344C1.32928 5.01562 1.17188 5.17303 1.17188 5.36719V6.32812C1.17188 6.52228 1.32928 6.67969 1.52344 6.67969H2.48438C2.67853 6.67969 2.83594 6.52228 2.83594 6.32812V5.36719C2.83594 5.17303 2.67853 5.01562 2.48438 5.01562ZM2.13281 5.97656H1.875V5.71875H2.13281V5.97656ZM2.48438 6.9375H1.52344C1.32928 6.9375 1.17188 7.09491 1.17188 7.28906V8.25C1.17188 8.44416 1.32928 8.60156 1.52344 8.60156H2.48438C2.67853 8.60156 2.83594 8.44416 2.83594 8.25V7.28906C2.83594 7.09491 2.67853 6.9375 2.48438 6.9375ZM2.13281 7.89844H1.875V7.64062H2.13281V7.89844ZM7.17188 3.09375H4.82812C4.63397 3.09375 4.47656 3.25116 4.47656 3.44531V4.40625C4.47656 4.60041 4.63397 4.75781 4.82812 4.75781H7.17188C7.36603 4.75781 7.52344 4.60041 7.52344 4.40625V3.44531C7.52344 3.25116 7.36603 3.09375 7.17188 3.09375ZM6.82031 4.05469H5.17969V3.79688H6.82031V4.05469ZM7.17188 1.17188H4.82812C4.63397 1.17188 4.47656 1.32928 4.47656 1.52344V2.48438C4.47656 2.67853 4.63397 2.83594 4.82812 2.83594H7.17188C7.36603 2.83594 7.52344 2.67853 7.52344 2.48438V1.52344C7.52344 1.32928 7.36603 1.17188 7.17188 1.17188ZM6.82031 2.13281H5.17969V1.875H6.82031V2.13281ZM7.17188 5.01562H4.82812C4.63397 5.01562 4.47656 5.17303 4.47656 5.36719V6.32812C4.47656 6.52228 4.63397 6.67969 4.82812 6.67969H7.17188C7.36603 6.67969 7.52344 6.52228 7.52344 6.32812V5.36719C7.52344 5.17303 7.36603 5.01562 7.17188 5.01562ZM6.82031 5.97656H5.17969V5.71875H6.82031V5.97656ZM7.17188 6.9375H4.82812C4.63397 6.9375 4.47656 7.09491 4.47656 7.28906V8.25C4.47656 8.44416 4.63397 8.60156 4.82812 8.60156H7.17188C7.36603 8.60156 7.52344 8.44416 7.52344 8.25V7.28906C7.52344 7.09491 7.36603 6.9375 7.17188 6.9375ZM6.82031 7.89844H5.17969V7.64062H6.82031V7.89844ZM2.48438 8.85938H1.52344C1.32928 8.85938 1.17188 9.01678 1.17188 9.21094V10.1719C1.17188 10.366 1.32928 10.5234 1.52344 10.5234H2.48438C2.67853 10.5234 2.83594 10.366 2.83594 10.1719V9.21094C2.83594 9.01678 2.67853 8.85938 2.48438 8.85938ZM2.13281 9.82031H1.875V9.5625H2.13281V9.82031Z" fill="#2D2D2D"/>
  <path d="M11.6484 1.92188H8.69531V0.351562C8.69531 0.157406 8.53791 0 8.34375 0H3.65625C3.46209 0 3.30469 0.157406 3.30469 0.351562V1.92188H0.351562C0.157406 1.92188 0 2.07928 0 2.27344V11.6484C0 11.8426 0.157406 12 0.351562 12H11.6484C11.8426 12 12 11.8426 12 11.6484V2.27344C12 2.07928 11.8426 1.92188 11.6484 1.92188ZM3.30469 11.2969H0.703125V2.625H3.30469V11.2969ZM6.58594 11.2969H5.41406V9.5625H6.58594V11.2969ZM7.99219 2.27344V11.2969H7.28906V9.21094C7.28906 9.01678 7.13166 8.85938 6.9375 8.85938H5.0625C4.86834 8.85938 4.71094 9.01678 4.71094 9.21094V11.2969H4.00781V0.703125H7.99219V2.27344ZM11.2969 11.2969H8.69531V2.625H11.2969V11.2969Z" fill="#2D2D2D"/>
  <path d="M10.4766 3.09375H9.51562C9.32147 3.09375 9.16406 3.25116 9.16406 3.44531V4.40625C9.16406 4.60041 9.32147 4.75781 9.51562 4.75781H10.4766C10.6707 4.75781 10.8281 4.60041 10.8281 4.40625V3.44531C10.8281 3.25116 10.6707 3.09375 10.4766 3.09375ZM10.125 4.05469H9.86719V3.79688H10.125V4.05469ZM10.4766 5.01562H9.51562C9.32147 5.01562 9.16406 5.17303 9.16406 5.36719V6.32812C9.16406 6.52228 9.32147 6.67969 9.51562 6.67969H10.4766C10.6707 6.67969 10.8281 6.52228 10.8281 6.32812V5.36719C10.8281 5.17303 10.6707 5.01562 10.4766 5.01562ZM10.125 5.97656H9.86719V5.71875H10.125V5.97656ZM10.4766 6.9375H9.51562C9.32147 6.9375 9.16406 7.09491 9.16406 7.28906V8.25C9.16406 8.44416 9.32147 8.60156 9.51562 8.60156H10.4766C10.6707 8.60156 10.8281 8.44416 10.8281 8.25V7.28906C10.8281 7.09491 10.6707 6.9375 10.4766 6.9375ZM10.125 7.89844H9.86719V7.64062H10.125V7.89844ZM10.4766 8.85938H9.51562C9.32147 8.85938 9.16406 9.01678 9.16406 9.21094V10.1719C9.16406 10.366 9.32147 10.5234 9.51562 10.5234H10.4766C10.6707 10.5234 10.8281 10.366 10.8281 10.1719V9.21094C10.8281 9.01678 10.6707 8.85938 10.4766 8.85938ZM10.125 9.82031H9.86719V9.5625H10.125V9.82031Z" fill="#2D2D2D"/>
  </g>
  <defs>
  <clipPath id="clip0_71_4723">
  <rect width="12" height="12" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  
    <h3 className='font-bold text-[12px]'>Apartment</h3>
    </button>
  
    
    </div>
  
              </div>
  
  
            <img
                src="../../../assets/build2.png"
                alt="property-image"
               className='w-full '
              />
            </div>
  
            <div className="flex flex-col w-full px-3 gap-6 justify-between">
            <div className="flex flex-col gap-2"> 
              <h3 className='text-start text-[20px]'>TULWA for sale in west orascom</h3>
              <div className="flex items-center gap-3 text-[#8D999D]"> <Icon name="material-symbols:location-on-outline"/> <p className='text-[14px]'>Est St, 77 - Central Park South, NYC</p></div>
            </div>
             <div className="flex gap-6 items-center">
              <div className="flex items-center gap-1">
            <Icon name="material-symbols:bathtub-outline-sharp"/>
                <p className='text-[14px]'>2 bathrooms</p>
              </div>
              <div className="flex   items-center gap-1 ">
             <Icon name="material-symbols:bathtub-outline-sharp"/>
                <p className='text-[14px]'>2 bathrooms</p>
              </div>
              <div className="flex items-center gap-1">
             <Icon name="material-symbols:bathtub-outline-sharp"/>
                <p className='text-[14px]'>280 m</p>
              </div>
             </div>
             <div className="flex justify-between items-center ">
  
              
  <div className="flex flex-col items-start  gap-1 ">
    <h3>524.000 EGP</h3>
    <div className="flex  text-[#8D999D]">  <p className='text-[14px]'>96,500 Monthly</p></div>
  </div>
  <Icon name="material-symbols:arrow-outward-rounded" class="text-black2"/>
  </div>
            </div>
           
            </div>
        </swiper-slide>
     
        <swiper-slide >
          <div className="flex flex-col gap-4 w-full  ">
            
            <div className="flex relative">
              <div className="absolute overlay top-0 left-0 z-10   bg-black opacity-70 h-full w-full"></div>
              <div className="flex flex-col justify-between absolute  top-0 left-0 z-10 px-5 py-4 h-full w-full">
  
  <div className="flex items-center justify-between w-full ">
    <div className="flex rounded-full justify-center w-10 h-10">
      <img src="../../../assets/cardLogo.png" alt='card image' className='w-full h-full' />
      </div>
      <button className="flex justify-center items-center w-10 h-10 bg-white rounded-full text-[#D20300]">
        <Icon name="material-symbols:favorite-outline-rounded"  class="text-[red]"/>
    </button>
  
  </div>
  
  <div className="flex justify-end w-full">
    
  
   <button className="flex  justify-center items-center gap-3 px-2 py-1.5  bg-white ">
   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_71_4723)">
  <path d="M2.48438 3.09375H1.52344C1.32928 3.09375 1.17188 3.25116 1.17188 3.44531V4.40625C1.17188 4.60041 1.32928 4.75781 1.52344 4.75781H2.48438C2.67853 4.75781 2.83594 4.60041 2.83594 4.40625V3.44531C2.83594 3.25116 2.67853 3.09375 2.48438 3.09375ZM2.13281 4.05469H1.875V3.79688H2.13281V4.05469ZM2.48438 5.01562H1.52344C1.32928 5.01562 1.17188 5.17303 1.17188 5.36719V6.32812C1.17188 6.52228 1.32928 6.67969 1.52344 6.67969H2.48438C2.67853 6.67969 2.83594 6.52228 2.83594 6.32812V5.36719C2.83594 5.17303 2.67853 5.01562 2.48438 5.01562ZM2.13281 5.97656H1.875V5.71875H2.13281V5.97656ZM2.48438 6.9375H1.52344C1.32928 6.9375 1.17188 7.09491 1.17188 7.28906V8.25C1.17188 8.44416 1.32928 8.60156 1.52344 8.60156H2.48438C2.67853 8.60156 2.83594 8.44416 2.83594 8.25V7.28906C2.83594 7.09491 2.67853 6.9375 2.48438 6.9375ZM2.13281 7.89844H1.875V7.64062H2.13281V7.89844ZM7.17188 3.09375H4.82812C4.63397 3.09375 4.47656 3.25116 4.47656 3.44531V4.40625C4.47656 4.60041 4.63397 4.75781 4.82812 4.75781H7.17188C7.36603 4.75781 7.52344 4.60041 7.52344 4.40625V3.44531C7.52344 3.25116 7.36603 3.09375 7.17188 3.09375ZM6.82031 4.05469H5.17969V3.79688H6.82031V4.05469ZM7.17188 1.17188H4.82812C4.63397 1.17188 4.47656 1.32928 4.47656 1.52344V2.48438C4.47656 2.67853 4.63397 2.83594 4.82812 2.83594H7.17188C7.36603 2.83594 7.52344 2.67853 7.52344 2.48438V1.52344C7.52344 1.32928 7.36603 1.17188 7.17188 1.17188ZM6.82031 2.13281H5.17969V1.875H6.82031V2.13281ZM7.17188 5.01562H4.82812C4.63397 5.01562 4.47656 5.17303 4.47656 5.36719V6.32812C4.47656 6.52228 4.63397 6.67969 4.82812 6.67969H7.17188C7.36603 6.67969 7.52344 6.52228 7.52344 6.32812V5.36719C7.52344 5.17303 7.36603 5.01562 7.17188 5.01562ZM6.82031 5.97656H5.17969V5.71875H6.82031V5.97656ZM7.17188 6.9375H4.82812C4.63397 6.9375 4.47656 7.09491 4.47656 7.28906V8.25C4.47656 8.44416 4.63397 8.60156 4.82812 8.60156H7.17188C7.36603 8.60156 7.52344 8.44416 7.52344 8.25V7.28906C7.52344 7.09491 7.36603 6.9375 7.17188 6.9375ZM6.82031 7.89844H5.17969V7.64062H6.82031V7.89844ZM2.48438 8.85938H1.52344C1.32928 8.85938 1.17188 9.01678 1.17188 9.21094V10.1719C1.17188 10.366 1.32928 10.5234 1.52344 10.5234H2.48438C2.67853 10.5234 2.83594 10.366 2.83594 10.1719V9.21094C2.83594 9.01678 2.67853 8.85938 2.48438 8.85938ZM2.13281 9.82031H1.875V9.5625H2.13281V9.82031Z" fill="#2D2D2D"/>
  <path d="M11.6484 1.92188H8.69531V0.351562C8.69531 0.157406 8.53791 0 8.34375 0H3.65625C3.46209 0 3.30469 0.157406 3.30469 0.351562V1.92188H0.351562C0.157406 1.92188 0 2.07928 0 2.27344V11.6484C0 11.8426 0.157406 12 0.351562 12H11.6484C11.8426 12 12 11.8426 12 11.6484V2.27344C12 2.07928 11.8426 1.92188 11.6484 1.92188ZM3.30469 11.2969H0.703125V2.625H3.30469V11.2969ZM6.58594 11.2969H5.41406V9.5625H6.58594V11.2969ZM7.99219 2.27344V11.2969H7.28906V9.21094C7.28906 9.01678 7.13166 8.85938 6.9375 8.85938H5.0625C4.86834 8.85938 4.71094 9.01678 4.71094 9.21094V11.2969H4.00781V0.703125H7.99219V2.27344ZM11.2969 11.2969H8.69531V2.625H11.2969V11.2969Z" fill="#2D2D2D"/>
  <path d="M10.4766 3.09375H9.51562C9.32147 3.09375 9.16406 3.25116 9.16406 3.44531V4.40625C9.16406 4.60041 9.32147 4.75781 9.51562 4.75781H10.4766C10.6707 4.75781 10.8281 4.60041 10.8281 4.40625V3.44531C10.8281 3.25116 10.6707 3.09375 10.4766 3.09375ZM10.125 4.05469H9.86719V3.79688H10.125V4.05469ZM10.4766 5.01562H9.51562C9.32147 5.01562 9.16406 5.17303 9.16406 5.36719V6.32812C9.16406 6.52228 9.32147 6.67969 9.51562 6.67969H10.4766C10.6707 6.67969 10.8281 6.52228 10.8281 6.32812V5.36719C10.8281 5.17303 10.6707 5.01562 10.4766 5.01562ZM10.125 5.97656H9.86719V5.71875H10.125V5.97656ZM10.4766 6.9375H9.51562C9.32147 6.9375 9.16406 7.09491 9.16406 7.28906V8.25C9.16406 8.44416 9.32147 8.60156 9.51562 8.60156H10.4766C10.6707 8.60156 10.8281 8.44416 10.8281 8.25V7.28906C10.8281 7.09491 10.6707 6.9375 10.4766 6.9375ZM10.125 7.89844H9.86719V7.64062H10.125V7.89844ZM10.4766 8.85938H9.51562C9.32147 8.85938 9.16406 9.01678 9.16406 9.21094V10.1719C9.16406 10.366 9.32147 10.5234 9.51562 10.5234H10.4766C10.6707 10.5234 10.8281 10.366 10.8281 10.1719V9.21094C10.8281 9.01678 10.6707 8.85938 10.4766 8.85938ZM10.125 9.82031H9.86719V9.5625H10.125V9.82031Z" fill="#2D2D2D"/>
  </g>
  <defs>
  <clipPath id="clip0_71_4723">
  <rect width="12" height="12" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  
    <h3 className='font-bold text-[12px]'>Apartment</h3>
    </button>
  
    
    </div>
  
              </div>
  
  
            <img
                src="../../../assets/build3.png"
                alt="property-image"
               className='w-full '
              />
            </div>
  
            <div className="flex flex-col w-full px-3 gap-6 justify-between">
            <div className="flex flex-col gap-2"> 
              <h3 className='text-start text-[20px]'>TULWA for sale in west orascom</h3>
              <div className="flex items-center gap-3 text-[#8D999D]"> <Icon name="material-symbols:location-on-outline"/> <p className='text-[14px]'>Est St, 77 - Central Park South, NYC</p></div>
            </div>
             <div className="flex gap-6 items-center">
              <div className="flex items-center gap-1">
            <Icon name="material-symbols:bathtub-outline-sharp"/>
                <p className='text-[14px]'>2 bathrooms</p>
              </div>
              <div className="flex   items-center gap-1 ">
             <Icon name="material-symbols:bathtub-outline-sharp"/>
                <p className='text-[14px]'>2 bathrooms</p>
              </div>
              <div className="flex items-center gap-1">
             <Icon name="material-symbols:bathtub-outline-sharp"/>
                <p className='text-[14px]'>280 m</p>
              </div>
             </div>
             <div className="flex justify-between items-center ">
  
              
  <div className="flex flex-col items-start  gap-1 ">
    <h3>524.000 EGP</h3>
    <div className="flex  text-[#8D999D]">  <p className='text-[14px]'>96,500 Monthly</p></div>
  </div>
  <Icon name="material-symbols:arrow-outward-rounded" class="text-black2"/>
  </div>
            </div>
           
            </div>
        </swiper-slide>
     
        <swiper-slide >
          <div className="flex flex-col gap-4 w-full  ">
            
            <div className="flex relative">
              <div className="absolute overlay top-0 left-0 z-10   bg-black opacity-70 h-full w-full"></div>
              <div className="flex flex-col justify-between absolute  top-0 left-0 z-10 px-5 py-4 h-full w-full">
  
  <div className="flex items-center justify-between w-full ">
    <div className="flex rounded-full justify-center w-10 h-10">
      <img src="../../../assets/cardLogo.png" alt='card image' className='w-full h-full' />
      </div>
      <button className="flex justify-center items-center w-10 h-10 bg-white rounded-full text-[#D20300]">
        <Icon name="material-symbols:favorite-outline-rounded"  class="text-[red]"/>
    </button>
  
  </div>
  
  <div className="flex justify-end w-full">
    
  
   <button className="flex  justify-center items-center gap-3 px-2 py-1.5  bg-white ">
   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_71_4723)">
  <path d="M2.48438 3.09375H1.52344C1.32928 3.09375 1.17188 3.25116 1.17188 3.44531V4.40625C1.17188 4.60041 1.32928 4.75781 1.52344 4.75781H2.48438C2.67853 4.75781 2.83594 4.60041 2.83594 4.40625V3.44531C2.83594 3.25116 2.67853 3.09375 2.48438 3.09375ZM2.13281 4.05469H1.875V3.79688H2.13281V4.05469ZM2.48438 5.01562H1.52344C1.32928 5.01562 1.17188 5.17303 1.17188 5.36719V6.32812C1.17188 6.52228 1.32928 6.67969 1.52344 6.67969H2.48438C2.67853 6.67969 2.83594 6.52228 2.83594 6.32812V5.36719C2.83594 5.17303 2.67853 5.01562 2.48438 5.01562ZM2.13281 5.97656H1.875V5.71875H2.13281V5.97656ZM2.48438 6.9375H1.52344C1.32928 6.9375 1.17188 7.09491 1.17188 7.28906V8.25C1.17188 8.44416 1.32928 8.60156 1.52344 8.60156H2.48438C2.67853 8.60156 2.83594 8.44416 2.83594 8.25V7.28906C2.83594 7.09491 2.67853 6.9375 2.48438 6.9375ZM2.13281 7.89844H1.875V7.64062H2.13281V7.89844ZM7.17188 3.09375H4.82812C4.63397 3.09375 4.47656 3.25116 4.47656 3.44531V4.40625C4.47656 4.60041 4.63397 4.75781 4.82812 4.75781H7.17188C7.36603 4.75781 7.52344 4.60041 7.52344 4.40625V3.44531C7.52344 3.25116 7.36603 3.09375 7.17188 3.09375ZM6.82031 4.05469H5.17969V3.79688H6.82031V4.05469ZM7.17188 1.17188H4.82812C4.63397 1.17188 4.47656 1.32928 4.47656 1.52344V2.48438C4.47656 2.67853 4.63397 2.83594 4.82812 2.83594H7.17188C7.36603 2.83594 7.52344 2.67853 7.52344 2.48438V1.52344C7.52344 1.32928 7.36603 1.17188 7.17188 1.17188ZM6.82031 2.13281H5.17969V1.875H6.82031V2.13281ZM7.17188 5.01562H4.82812C4.63397 5.01562 4.47656 5.17303 4.47656 5.36719V6.32812C4.47656 6.52228 4.63397 6.67969 4.82812 6.67969H7.17188C7.36603 6.67969 7.52344 6.52228 7.52344 6.32812V5.36719C7.52344 5.17303 7.36603 5.01562 7.17188 5.01562ZM6.82031 5.97656H5.17969V5.71875H6.82031V5.97656ZM7.17188 6.9375H4.82812C4.63397 6.9375 4.47656 7.09491 4.47656 7.28906V8.25C4.47656 8.44416 4.63397 8.60156 4.82812 8.60156H7.17188C7.36603 8.60156 7.52344 8.44416 7.52344 8.25V7.28906C7.52344 7.09491 7.36603 6.9375 7.17188 6.9375ZM6.82031 7.89844H5.17969V7.64062H6.82031V7.89844ZM2.48438 8.85938H1.52344C1.32928 8.85938 1.17188 9.01678 1.17188 9.21094V10.1719C1.17188 10.366 1.32928 10.5234 1.52344 10.5234H2.48438C2.67853 10.5234 2.83594 10.366 2.83594 10.1719V9.21094C2.83594 9.01678 2.67853 8.85938 2.48438 8.85938ZM2.13281 9.82031H1.875V9.5625H2.13281V9.82031Z" fill="#2D2D2D"/>
  <path d="M11.6484 1.92188H8.69531V0.351562C8.69531 0.157406 8.53791 0 8.34375 0H3.65625C3.46209 0 3.30469 0.157406 3.30469 0.351562V1.92188H0.351562C0.157406 1.92188 0 2.07928 0 2.27344V11.6484C0 11.8426 0.157406 12 0.351562 12H11.6484C11.8426 12 12 11.8426 12 11.6484V2.27344C12 2.07928 11.8426 1.92188 11.6484 1.92188ZM3.30469 11.2969H0.703125V2.625H3.30469V11.2969ZM6.58594 11.2969H5.41406V9.5625H6.58594V11.2969ZM7.99219 2.27344V11.2969H7.28906V9.21094C7.28906 9.01678 7.13166 8.85938 6.9375 8.85938H5.0625C4.86834 8.85938 4.71094 9.01678 4.71094 9.21094V11.2969H4.00781V0.703125H7.99219V2.27344ZM11.2969 11.2969H8.69531V2.625H11.2969V11.2969Z" fill="#2D2D2D"/>
  <path d="M10.4766 3.09375H9.51562C9.32147 3.09375 9.16406 3.25116 9.16406 3.44531V4.40625C9.16406 4.60041 9.32147 4.75781 9.51562 4.75781H10.4766C10.6707 4.75781 10.8281 4.60041 10.8281 4.40625V3.44531C10.8281 3.25116 10.6707 3.09375 10.4766 3.09375ZM10.125 4.05469H9.86719V3.79688H10.125V4.05469ZM10.4766 5.01562H9.51562C9.32147 5.01562 9.16406 5.17303 9.16406 5.36719V6.32812C9.16406 6.52228 9.32147 6.67969 9.51562 6.67969H10.4766C10.6707 6.67969 10.8281 6.52228 10.8281 6.32812V5.36719C10.8281 5.17303 10.6707 5.01562 10.4766 5.01562ZM10.125 5.97656H9.86719V5.71875H10.125V5.97656ZM10.4766 6.9375H9.51562C9.32147 6.9375 9.16406 7.09491 9.16406 7.28906V8.25C9.16406 8.44416 9.32147 8.60156 9.51562 8.60156H10.4766C10.6707 8.60156 10.8281 8.44416 10.8281 8.25V7.28906C10.8281 7.09491 10.6707 6.9375 10.4766 6.9375ZM10.125 7.89844H9.86719V7.64062H10.125V7.89844ZM10.4766 8.85938H9.51562C9.32147 8.85938 9.16406 9.01678 9.16406 9.21094V10.1719C9.16406 10.366 9.32147 10.5234 9.51562 10.5234H10.4766C10.6707 10.5234 10.8281 10.366 10.8281 10.1719V9.21094C10.8281 9.01678 10.6707 8.85938 10.4766 8.85938ZM10.125 9.82031H9.86719V9.5625H10.125V9.82031Z" fill="#2D2D2D"/>
  </g>
  <defs>
  <clipPath id="clip0_71_4723">
  <rect width="12" height="12" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  
    <h3 className='font-bold text-[12px]'>Apartment</h3>
    </button>
  
    
    </div>
  
              </div>
  
  
            <img
                src="../../../assets/build2.png"
                alt="property-image"
               className='w-full '
              />
            </div>
  
            <div className="flex flex-col w-full px-3 gap-6 justify-between">
            <div className="flex flex-col gap-2"> 
              <h3 className='text-start text-[20px]'>TULWA for sale in west orascom</h3>
              <div className="flex items-center gap-3 text-[#8D999D]"> <Icon name="material-symbols:location-on-outline"/> <p className='text-[14px]'>Est St, 77 - Central Park South, NYC</p></div>
            </div>
             <div className="flex gap-6 items-center">
              <div className="flex items-center gap-1">
            <Icon name="material-symbols:bathtub-outline-sharp"/>
                <p className='text-[14px]'>2 bathrooms</p>
              </div>
              <div className="flex   items-center gap-1 ">
             <Icon name="material-symbols:bathtub-outline-sharp"/>
                <p className='text-[14px]'>2 bathrooms</p>
              </div>
              <div className="flex items-center gap-1">
             <Icon name="material-symbols:bathtub-outline-sharp"/>
                <p className='text-[14px]'>280 m</p>
              </div>
             </div>
             <div className="flex justify-between items-center ">
  
              
  <div className="flex flex-col items-start  gap-1 ">
    <h3>524.000 EGP</h3>
    <div className="flex  text-[#8D999D]">  <p className='text-[14px]'>96,500 Monthly</p></div>
  </div>
  <Icon name="material-symbols:arrow-outward-rounded" class="text-black2"/>
  </div>
            </div>
           
            </div>
        </swiper-slide>
     
  
        <div class="flex items-center justify-center gap-4 mt-4 custom-pagination-container">
          <div class="custom-prev-btn">
            <Icon name="material-symbols:arrow-back-rounded" />
          </div>
          <div class="custom-pagination"></div>
          <div class="custom-next-btn">
            <Icon name="material-symbols:arrow-forward-rounded" />
          </div>
        </div>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue'; 
  import { Autoplay , Navigation, Pagination} from 'swiper/modules';
    const modules =[Autoplay, Navigation, Pagination]
  import 'swiper/css';
  import 'swiper/css/pagination'
  import 'swiper/css/navigation';
  

//   const properties = ref([
//     { image: '../../assets/pro1.png', name: 'New Cairo' },
//     { image: '../../assets/pro2.png', name: 'October' },
//     { image: '../../assets/pro3.png', name: 'Seaside' },
//   ]);
  
  // Define breakpoints for Swiper
  const breakpoints = {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  };
  </script>
  
  <style scoped>
  .swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Pagination and Arrows Container */
  .custom-pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    margin: 2rem auto;
  }
  
  /* Style for the Pagination Bullets */
  .custom-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
  }
  
  .custom-pagination .swiper-pagination-bullet-active{
    background: black !important;
    opacity: 1;
  }
  
  /* Custom Previous and Next Arrows */
  .custom-prev-btn,
  .custom-next-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 24px;
    padding: 10px;
  }
  </style>
  
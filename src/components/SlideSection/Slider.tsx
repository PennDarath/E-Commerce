import React, { useRef, useState } from "react";
import SlideItems from './SlidesItems'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const data = [
    {
        src1: '/images/anime4-removebg-preview.png',
        src2: '/images/chainsaw2-removebg.png',
        title1: 'Trade-in-offer',
        title2: ' Supper value deals',
        title3: 'On all products',
        title4: 'Save more with coupons & up to 70% off',
        title5: 'Shop Now',


    },
    {
        src1: '/images/chainsaw2-removebg.png',
        src2: '/images/anime7-removebg-preview.png',
        title1: 'Hot promotions',
        title2: 'Fashioin Trending',
        title3: 'Greate Collection',
        title4: 'Save more with coupons & up to 20% off',
        title5: 'Shop Now',


    },
    {
        src1: '/images/anime6.webp',
        src2: '/images/anime4-removebg-preview.png',
        title1: 'Upcoming Offer',
        title2: ' Big Deals From',
        title3: 'Manufacutres',
        title4: 'Clothing Shoes & Accessories',
        title5: 'Shop Now',
    }
    
]

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <div className="mb-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide>
        <div className="width-padding">
         <div className="grid justify-between items-center w-full md:grid-cols-1 lg:grid-cols-2 gap-y-4">
         <div className="">
          <h1 className="text-title text-start" style={{fontFamily: "monospace"}} >{item.title1}</h1>
          <h1 className="font-extrabold text-5xl text-black tracking-wide text-start" style={{fontFamily: "monospace"}} >
           {item.title2}
          </h1>
          <h1 className="text-indigo-700 text-6xl font-extrabold tracking-wide pb-4 text-start" style={{fontFamily: "monospace"}} >
            {item.title3}
          </h1>
          <h1 className=" text-indigo-900 text-start">
            {item.title4}
          </h1>
          <div className='pl-20 pt-10'>
            <h1 className='w-fit bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 px-9 py-5 font-bold text-2xl text-white border rounded-lg hover:scale-110 duration-300' style={{fontFamily: "monospace"}} >{data[0].title5}</h1>
          </div>
        </div>
        <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2 md:grid-cols-2">
        <div className="h-[55vh]">

            <img
              src={item.src1}
            />

        </div>
        <div className="h-[55vh]">
            <img
              src={item.src2}
            />
        </div>
        </div>
        </div>
        </div>
        </SwiperSlide>
        ))
          }
        
      </Swiper>
    </div>
  );
}

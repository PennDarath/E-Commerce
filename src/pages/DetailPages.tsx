import React from 'react'
import { FiBriefcase, FiGift, FiHeart, FiRefreshCcw } from 'react-icons/fi'
import Spacer from '../components/Spacer'

export default function DetailPages() {
  return (
    <div className='h-screen width-padding py-5 '>
      <div className='lg:flex gap-x-5'>
      <div>
        <div className='lg:w-[40vw]  w-full  grid grid-cols-4 grid-rows-5 gap-2 '>
          <img className='row-start-1 row-end-4 col-start-1 col-end-5 py-7 px-16 bg-slate-200' src="/public/images/chainsaw2-removebg.png" alt="" />
          <img className='px-5 py-3 bg-slate-200' src="/public/images/chainsaw2-removebg.png" alt="" />
          <img className='px-5 py-3 bg-slate-200' src="/public/images/chainsaw2-removebg.png" alt="" />
          <img className='px-5 py-3 bg-slate-200' src="/public/images/chainsaw2-removebg.png" alt="" />
        </div>
      </div>
      <div className='w-full'>
          <p className="font-medium text-black text-3xl pb-5">Cartoon Astronaut T-Shirt</p>
          <div className='flex justify-between pb-5 border-b-2'>
            <p className="font-medium text-gray-500 ">Brands: <span className='text-indigo-700'>armani</span> </p>
            <div className='flex gap-x-1'>
              <div className="flex items-center gap-x-1 text-yellow-600">
              <FiHeart />
              <FiHeart />
              <FiHeart />
              <FiHeart />
              </div>
              ( 25 Reviews )
            </div>
           
          </div>
           <div className='w-full border-b-2 py-5'>
            <span className='text-3xl font-medium text-indigo-700 pr-4'>$78</span>
            <span className='text-lg text-gray-500 pr-4'>&</span>
            <span className='text-lg'>4%   Off</span>
          </div>
          <p className='text-lg py-5 text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, deserunt ad, quis cum vero deleniti sint soluta fugiat molestias commodi quos repellat rerum nemo beatae, nobis ducimus? Aperiam similique obcaecati quibusdam fugit consequatur! Corrupti illum atque rem numquam vel quis! Dicta laudantium tempora aut corrupti velit neque consequatur, enim nulla.
          </p>
          <div className='py-7'>
            <div className='flex items-center text-gray-600'>
              <FiGift className='pb-[2px] mr-1 text-lg'/>
              <p>1 Year AL Jazeera Brand Warranty</p>
            </div>
            <Spacer height={15} />
            <div className='flex items-center text-gray-600'>
              <FiRefreshCcw className='pb-[2px] mr-1 text-lg'/>
              <p>30 Day Return Policy</p>
            </div>
            <Spacer height={15} />
              <div className='flex items-center text-gray-600'>
              <FiBriefcase className='pb-[2px] mr-1 text-lg'/>
              <p>Cash on Delivery available</p>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <p className='text-lg font-medium pt-3'>Color</p>
            <div className='w-8 h-8 rounded-full bg-red-500'></div>
            <div className='w-8 h-8 rounded-full bg-gray-500'></div>
            <div className='w-8 h-8 rounded-full bg-black'></div>
            <div className='w-8 h-8 rounded-full bg-blue-500'></div>
            <div className='w-8 h-8 rounded-full bg-green-500'></div>
            <div className='w-8 h-8 rounded-full'></div>
          </div>
          <div>
            <p className='text-lg font-medium pt-7'>Size</p>
          </div>
        </div>
        </div>
    </div>
  )
}

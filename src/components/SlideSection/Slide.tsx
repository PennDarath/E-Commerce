import React from 'react'
import SlideItems from './SlidesItems'

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
        src2: '/images/anime5-removebg-preview.png',
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
export default function Slide() {
  return (
//   <div className="carousel w-full">
//     {data.map((item) => (
//  <div id={item.id} className="carousel-item relative w-full">
//       <SlideItems
//         key={item.id}
//         src1={item.src1}
//         src2={item.src2}
//         title1={item.title1}
//         title2={item.title2}
//         title3={item.title3}
//         title4={item.title4}
//         title5={item.title5}
//       />
//      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href='#slide2' className="btn btn-circle">❮</a> 
//       <a href={item.idlink} className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//     ))}
//   </div> 
<div  className=''>
  <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
      <SlideItems src1={data[0].src1} src2={data[0].src2} title1={data[0].title1} title2={data[0].title2} title3={data[0].title3} title4={data[0].title4} title5={data[0].title5}/>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle bg-slate-400">❮</a> 
        <a href="#slide2" className="btn btn-circle bg-slate-400">❯</a>
      </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full ">
      <SlideItems src1={data[1].src1} src2={data[1].src2} title1={data[1].title1} title2={data[1].title2} title3={data[1].title3} title4={data[1].title4} title5={data[1].title5}/>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle bg-slate-400">❮</a> 
        <a href="#slide3" className="btn btn-circle bg-slate-400">❯</a>
      </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full ">
      <SlideItems src1={data[2].src1} src2={data[2].src2} title1={data[2].title1} title2={data[2].title2} title3={data[2].title3} title4={data[2].title4} title5={data[2].title5}/>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle bg-slate-400">❮</a> 
        <a href="#slide1" className="btn btn-circle bg-slate-400">❯</a>
      </div>
    </div>
  </div>
</div>

  )
}

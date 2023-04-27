import React from 'react';

// const images = [{
//   id: 1,
//   src: '/images/anime4-removebg-preview.png',
//   alt: 'phone1',
// }, {
//   id: 2,
//   src: '/images/anime6.webp',
//   alt: 'phone2',
// }
// ]


type Props = {
  src1: string;
  src2: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
}
export default function SlideItems({ src1,src2, title1, title2, title3, title4, title5 }: Props) {

  return (
    <>
      <div className="width-padding flex h-fit max-md:flex-col max-lg:py-16 items-center justify-between pt-24 relative">
        <div>
          <h1 className="text-title">{title1}</h1>
          <h1 className="font-bold text-[47px] text-black tracking-wide">
           {title2}
          </h1>
          <h1 className="text-indigo-700 text-6xl font-bold tracking-wide pb-4">
            {title3}
          </h1>
          <h1 className=" text-indigo-900">
            {title4}
          </h1>
          <div className='pl-20 pt-10'>
            <h1 className='w-fit bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700 px-9 py-5 font-bold text-2xl text-white border rounded-lg hover:scale-110 duration-300' style={{fontFamily: "monospace"}} >{title5}</h1>
          </div>
        </div>
        <div className="flex gap-8 max-md:pt-12 ">

            <img
              className=" h-[400px] max-1 max-lg:h-[300px] max-sm:h-[250px] max-em:w[250px] max-sm:-5"
              src={src1}
              alt=""
            />
            <img
              className=" h-[400px] max-1 max-lg:h-[300px] max-sm:h-[250px] max-esm:w[250px] max-sm:-5"
              src={src2}
              alt=""
            />

        </div>
      </div>
    </>
  );
}

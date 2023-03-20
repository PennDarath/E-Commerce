import React from 'react';
type Props = {
  images: string[];
};

export default function Slides({ images }: Props) {

  return (
    <>
      <div className="width-padding flex h-fit  max-md:flex-col max-lg:py-16 items-center justify-between pt-24">
        <div>
          <h1 className="text-title">Trade-in-offer</h1>
          <h1 className="font-bold text-[47px] text-black tracking-wide">
            Supper value deals
          </h1>
          <h1 className="text-indigo-700 text-6xl font-bold tracking-wide pb-4">
            On all products
          </h1>
          <h1 className=" text-indigo-900">
            Save more with coupons & up to 70% off
          </h1>
          <h1>Shop Now</h1>
        </div>
        <div className="flex gap-8 max-md:pt-12 ">
          {images.map(image => (
            <img
              className=" h-[400px] max-1 max-lg:h-[300px] max-sm:h-[250px] max-sm:-5"
              src={image}
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
}

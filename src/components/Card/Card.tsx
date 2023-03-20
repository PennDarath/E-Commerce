import React from 'react';

const images = [
  '../images/phone1.webp',
  '../images/delivery online.gif',
  '../images/save$.gif',
  '../images/promotions.gif',
  '../images/happy sale.gif',
  '../images/callcenter.gif',
]
// const nameCard = ['Free Shopping', 'Free Delivery']

export default function Card() {
  return (
    <>
      <div className="grid justify-center width-padding lg:pt-14">
        <div className="width-padding flex flex-col md:grid grid-flow-col width-padding max-sm:grid-rows-6 max-sm:mx-auto max-md:grid-rows-3  max-xl:grid-rows-2  ">
          {images.map(image => (
            <div className='w-full'>
              <img
                src={image}
                className="width-padding md:w-44 h-44 rounded-md border object-cover border-indigo-300 "
                alt=""
              />
            </div>
          ))}
          <div>
            <a className="flex w-full items-center justify-center" href="#"></a>
          </div>
        </div>
      </div>
    </>
  );
}

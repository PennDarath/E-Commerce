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
      <div className="width-padding lg:pt-14">
        <div className="flex justify-between">
          {images.map(image => (
            <div className='flex flex-row'>
              <img
                src={image}
                className="w-44 h-44 rounded-md border border-indigo-300 "
                alt=""
              />
            </div>
          ))}
          <div>
            {' '}

              <a className="flex w-full items-center justify-center" href="#">
  
              </a>
            
          </div>
        </div>
      </div>
    </>
  );
}

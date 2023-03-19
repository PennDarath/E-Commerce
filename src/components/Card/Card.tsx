import React from 'react';

export default function Card() {
  return (
    <>
      <div className='width-padding'>
        <div className="h-56 w-56 border-indigo-300 border-2">
          <div>
            <img src="../images/phone1.webp" className="w-56" alt="" />
          </div>
          <div>
            <a className='flex w-full  items-center justify-center' href="#">Free Shoppingg</a>
          </div>
        </div>
      </div>
    </>
  );
}

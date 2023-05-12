import React from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import DetailPages from '../../pages/DetailPages';
import HomePage from '../../pages/HomePage';

type Props = {
  brand: string;
  discount: number;
  price: number;
  image: string;
  description: string;
};

export default function ItemCard({
  brand,
  price,
  image,
  discount,
  description
}: Props) {
  return (
    <>
      <div className="border w-full max-sm:w-full rounded-2xl p-5 border-indigo-200">
          <div className="card  shadow-xl bg-slate-300 mb-2 hover:scale-105 duration-300">
            <figure className="">
               <Link to='/DetailPages'>
                <img src={image} alt="" className="rounded-xl h-[30vh]" />
                </Link>
          </figure>
        </div>

        <h2 className="text-gray-500 cursor-pointer">{brand}</h2>
        <button><p className="font-medium text-black hover:text-indigo-700 ">{description}</p></button>
        <div className="flex justify-between pt-2 items-center">
          <div>
            <div className="flex items-center gap-x-1 text-yellow-600">
              <FiHeart />
              <FiHeart />
              <FiHeart />
              <FiHeart />
              <p className="font-medium text-gray-500 cursor-pointer">{discount}%</p>
            </div>
            <p className="font-bold text-indigo-700 text-xl cursor-pointer">{price}$</p>
          </div>
          <button className="text-2xl text-indigo-700 bg-indigo-30 bg-indigo-200 flex justify-center items-center p-2 rounded-full hover:bg-indigo-700 hover:text-white duration-300 hover:-translate-y-1">
            <FiShoppingCart />
          </button>
          </div>
          </div>
        
    </>
  );
}

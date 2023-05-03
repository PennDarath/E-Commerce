import React from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

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
        <div className="card  shadow-xl bg-slate-300 mb-2">
          <figure className="">
            <img src={image} alt="" className="rounded-xl h-[30vh]" />
          </figure>
        </div>

        <h2 className="text-gray-500">{brand}</h2>
        <p className="font-medium text-black">{description}</p>
        <div className="flex justify-between pt-2 items-center">
          <div>
            <div className="flex items-center gap-x-1 text-yellow-600">
              <FiHeart />
              <FiHeart />
              <FiHeart />
              <FiHeart />
              <p className="font-medium text-gray-500">{discount}%</p>
            </div>
            <p className="font-bold text-indigo-700 text-xl">{price}$</p>
          </div>
          <button className="text-2xl text-indigo-700 pr-">
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </>
  );
}

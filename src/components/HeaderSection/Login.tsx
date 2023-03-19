import React from 'react';
import { GoLocation } from 'react-icons/go';
import { FiPhone, FiUser } from 'react-icons/fi';

export default function Login() {
  return (
    <div className="bg-indigo-200 max-lg:hidden ">
      <div className="width-padding text-sm text-black flex justify-between py-2 items-center">
        <div className="flex text-gray-800 font-medium">
          <div className="flex items-center">
            <FiPhone />
            <a href="#">
              <p className="">(+855)-10441614</p>
            </a>
            <a href="#"></a>
          </div>
          <p className="px-2">|</p>
          <div className="flex items-center">
            <GoLocation />
            <a href="#">
              <p>Our Location</p>
            </a>
          </div>
        </div>
        <div>
          <p className="font-medium text-gray-600">
            Get great devices up to 50% off
            <span className="text-indigo-700">
              <a href="#"> View details</a>
            </span>
          </p>
          <p></p>
        </div>
        <div className="flex items-center">
          <FiUser />

          <div className="text-gray-800 font-medium flex items-center">
            <a href="#"> Log In</a>
            <p className="p-1">/</p>
            <a href="">Sign Up</a>
          </div>
        </div>
      </div>
      <div className="h-1 bg-indigo-400"></div>
    </div>
  );
}

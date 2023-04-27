import React from 'react'
import { FiChevronDown } from 'react-icons/fi';

  type Props = {
    title: string;
  };
  
export default function NavbarItems({title} : Props) {
  
  return (
    <div className="">
      <div className="dropdown-hover dropdown flex items-center ">
        <label
          tabIndex={0}
          className="btn p-0 border-none hover:bg-white hover:text-indigo-700 bg-white font-medium font-navbar"
        >
          {title}
        </label>
        <FiChevronDown className="text-2xl" />

        <ul
          tabIndex={0}
          className="dropdown-content top-10 menu p-2 shadow text-gray-500 bg-white rounded-box w-52 border border-indigo-100"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
      
        </ul>
      </div>
    </div>
  );
}

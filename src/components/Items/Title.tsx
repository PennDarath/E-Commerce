import React from 'react'
import { FiChevronDown } from 'react-icons/fi';
type Props = {
    title: string;
    };
export default function Title({title}: Props) {
  return (
    <div>
        <div className="flex text-size p-3 mr-3 rounded-md w-[11vh] border bg-slate-200 hover:scale-110 duration-300 my-16">
          <p className='text-center w-full font-medium text-indigo-700 cursor-pointer '>{title}</p>
        </div>
    </div>
  );
}

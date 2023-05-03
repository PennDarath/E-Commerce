import React from 'react';
import { FiRotateCw } from 'react-icons/fi';

type Props = {
  show: boolean;
  setShow: (show: boolean) => void;
};
export default function NavbarMobile({ show, setShow }: Props) {
  return (
    <>
      <div
        // className="bg-gray-300 pt-7 px-5 fixed  w-[60vw] top-0 right-0 bottom-0 duration-500 "
        // style={{ transform: show ? '' : 'translateX(100%)' }}
        className="bg-black fixed right-0  top-0 bottom-0 duration-500 z-40 lg:hidden w-[50vw] px-5"
        style={{ transform: show ? '' : 'translateX(100%)'}}
       
      >
        <div className="flex justify-between pt-6">
          <p className="font-medium text-xl text-white">Tεναδα</p>
          <button
            className="bg-gray-700 text-white font-medium text-lg w-13 h-10 p-3 rounded-full tranform -rotate-90 hover:rotate-180 duration-300"
            onClick={() => setShow(false)}
          >
            <FiRotateCw className=''/>
          </button>
        </div>
      </div>
    </>
  );
}

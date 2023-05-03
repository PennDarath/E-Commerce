import React from 'react';

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
        className="bg-black  fixed right-0 top-0 bottom-0 duration-500 z-40 lg:hidden w-[50vw] "
        style={{ transform: show ? '' : 'translateX(100%)'}}
       
      >
        <div className="flex justify-between">
          <p className="font-medium text-xl text-white">Tεναδα</p>
          <button
            className="btn btn-circle hover:bg-indigo-700 "
            onClick={() => setShow(false)}
          >
         
          </button>
        </div>
      </div>
    </>
  );
}

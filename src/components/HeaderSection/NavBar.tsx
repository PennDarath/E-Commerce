import React from 'react';
import {
  FiHeart,
  FiMenu,
  FiPackage,
  FiSearch,
  FiShoppingCart,
  FiShuffle
} from 'react-icons/fi';
import Spacer from '../Spacer';
import NavbarItems from './NavbarItems';


const navItems = ['Shop', 'Mega menu'];


export default function NavBar({setShow}: any) {
  const StickyNav = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const stickyNav = StickyNav.current;
    const stick = stickyNav!.offsetTop;
    const scrollCallBack = () => {
      console.log(stickyNav?.offsetTop);
      if (window.scrollY > 130) {
        stickyNav!.classList.add('border-b-indigo-700');
      } else {
        stickyNav!.classList.remove('border-b-indigo-700');
      }
    };

    window.addEventListener('scroll', scrollCallBack);

    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);

  return (
    <>
      <div className="border-indigo-600 max-lg:border-b-2 pb-4">
        <div className="width-padding text-black pt-7 flex items-center justify-between ">
          <div>
            <p className="font-medium text-black text-3xl">Tεναδα</p>
          </div>
          <div className="w-[65%] border-b-2 border-black max-lg:hidden">
            <div className="flex items-center px-7 w-full">
              <p className="font-navbar">All Categories</p>
              <div className="relative text-gray-400 pl-6 py-2  ml-7 flex-1">
                <span className="absolute left-0 top-1/2 -translate-y-1/2">
                  <FiSearch className="text-xl" />
                </span>
                <input
                  type="search"
                  placeholder="Search"
                  className="bg-white outline-none w-full"
                />
              </div>
            </div>
          </div>
          <div className="lg:hidden text-size max-md:hidden items-center">
            <p>
              Happy<span className="text-indigo-600"> Mother's Day</span>. Big
              Sale Up to 40%
            </p>
          </div>
          <div className="flex text-2xl">
            <button className='flex relative'>
              <FiShuffle />
              <Spacer width={30}/>
              <div className='border bg-indigo-700 w-5 h-5 absolute left-[21px] bottom-3 rounded-full text-sm text-white'>0</div>
            </button>
            <button className='flex relative'>
              <FiHeart className="" />
              <Spacer width={30}/>
              <div className='border bg-indigo-700 w-5 h-5 absolute left-[21px] bottom-3 rounded-full text-sm text-white'>0</div>
            </button>
            <button className='flex relative'>
              <FiShoppingCart />
              <div className='border bg-indigo-700 w-5 h-5 absolute left-[21px] bottom-3 rounded-full text-sm text-white'>1</div>
            </button>
            {/* <button>
             
            </button>
            <button>
              
            </button> */}
            
            
           
              <FiMenu className="lg:hidden ml-6" onClick={()=>setShow(true)}/>
          </div>
        </div>
      </div>
      {/* navbar categories */}
      <div
        className="sticky top-0 z-40 bg-white lg:border-b-2 lg:pb-3"
        ref={StickyNav}
      >
        <div className="width-padding max-lg:hidden flex items-center justify-between">
          <div className="flex items-center">
            <FiPackage className="text-2xl mr-1" />
            <div className="dropdown ">
              <label
                tabIndex={0}
                className="btn p-0 border-none hover:bg-white bg-white  text-color font-medium font-navbar"
              >
                categories
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 "
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex w-[65%] justify-around">
            <NavbarItems title="Home" />
            <div className="flex items-center font-navbar hover:text-indigo-700">
              <a href="#">ABOUT</a>
            </div>
            {navItems.map(item => (
              <NavbarItems title={item} />
            ))}

            <div className="flex items-center font-navbar hover:text-indigo-700">
              <a href="#">CONTACT</a>
            </div>
          </div>

          <div className="font-navbar">
            <a href="#">
              Hotline <span className="text-indigo-700"> 1900-888</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}


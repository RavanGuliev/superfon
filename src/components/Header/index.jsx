import React, { useContext, useState } from 'react';

import { BsTelephone } from "react-icons/bs"
import { FaAngleDown, } from "react-icons/fa"
import { FaBarsStaggered, } from "react-icons/fa6"
import { FiShoppingCart, FiUser } from "react-icons/fi"
import { HiBars3 } from 'react-icons/hi2';
import { IoIosSearch, IoMdClose } from "react-icons/io"
import { LiaBalanceScaleSolid } from "react-icons/lia"
import { MdFavoriteBorder } from "react-icons/md"
import { Link } from 'react-router';
import MobileMenu from './MobileMenu';
import { CartContext } from '../../context/CartContext';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems, total ,favorites} = useContext(CartContext);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const favoriteCount = favorites.length;





  return (
    <header className=" roboto-condensed">
      <section>
        <div className="flex justify-between max-w-[1400px] mx-auto p-4  items-center">
          <div className="flex  gap-2 sm:gap-2 md:gap-4 lg:gap-4">
            <Link to="/store">
              <p className="text-[#021523] text-[12px] sm:text-[12px]  md:text-[14.4px] xl:text-[14.4px]  hover:underline font-sembolid ">Mağazalarımız</p>
            </Link>
            <Link to="/core">
              <p className="text-[#021523] text-[12px] sm:text-[12px] md:text-[14.4px] xl:text-[14.4px] hover:underline font-sembolid ">Korporativ satış</p>
            </Link>
          </div>
          <div className=" flex items-center gap-4 ">
            <div className=" flex items-center text-center  p-1.3 px-3 sm:p-1.3  sm:px-3  md:p-1.3 md:px-3 lg:p-1.5 lg:px-4 border border-[#3c1e6e] hover:bg-[#3c1e6e] hover:text-white  rounded-lg">
              <Link to="/company">
                <button className="font-sembolid text-[12px]  items-center  sm:[12px]  md:text-[14.4px] lg:text-[14.4px] cursor-pointer  ">Kampaniyalar</button>
              </Link>
            </div>
            <div className="hidden sm:hidden  md:hidden lg:flex xl:flex items-center gap-2">
              <BsTelephone />
              <span className="text-[#021523]  font-sembolid"> +994512058888</span>
            </div>
            <div>
              <div className="relative hidden sm:hidden  md:hidden lg:inline-block  xl:inline-block   group">
                <div className=" text-white px-4 py-2 rounded flex  items-center gap-2 cursor-pointer  ">
                  <img src="/image/aze.png" alt="" className="w-6" />
                  <span className="font-semibold text-[#021523]  text-[14px]">AZ</span>
                  <FaAngleDown className="text-black text-[16px] transform transition-all duration-300 group-hover:rotate-180 " />
                </div>
                <div className="absolute left-0 mt-2  bg-white rounded shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-10">
                  <a href="#" className=" px-4 py-2 hover:bg-gray-100 flex  items-center gap-2">
                    <img src="/image/russian.png" alt="" className="w-6" />
                    <span className="font-semibold text-[#021523]   text-[14px]">RU</span>

                  </a>
                </div>
              </div>
            </div>
            <Link to="/log">
              <div className="hidden justify-center items-center  sm:hidden  md:hidden lg:flex xl:flex">
                <div>
                  <FiUser className="text-[34px] font-sembolid" />
                </div>
                <div>
                  <p className="text-[11px] text-[#c3c1c3]">Daxil ol</p>
                  <p className="text-[12px] text-[#310000] font-sembolid">Hesab</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-px bg-gray-200  " />
      </section>
      <div className="w-full h-[0.1px] bg-[#DFE2E8]   md:mb-1 xl:mb-1   " />
      <section >
        <div className="  max-w-[1400px] mx-auto flex gap-3 pt-2  items-center  justify-between  ">
          <div>
            <div className='flex  gap-1 items-center' >
              <HiBars3 className='sm:flex md:flex lg:hidden xl:hidden text-[32px]' onClick={() => setMenuOpen(true)} />
                 <Link to="/">
            <div className="mr-5  w-[160px] sm:w-[180px] md:w-[180px] lg:w-[240px] xl:w-[240px]"><img src="/image/logo.png" alt="" className='' /></div>
          </Link>
            </div>
            <div className={`fixed top-0 left-0 w-[95%] h-full bg-white z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className='flex justify-between items-center py-5 px-2.5'>
                <div className='w-[120px] sm:w-[120px] md:w-[120]'>
                  <img src="/image/logo.png" className='' alt="" />
                </div>
                <IoMdClose onClick={() => setMenuOpen(false)} size={38} />
              </div>
              <div>
                <MobileMenu />
              </div>
            </div>
          </div>
         
          <div className='ml-3'>
            <button className="  cursor-pointer items-center gap-2 bg-[#3c1e6e] text-white px-4 py-3 rounded-lg hidden sm:hidden  md:hidden lg:flex xl:flex">
              <FaBarsStaggered className="w-5 h-5" />
              <span className="font-semibold">Kataloq</span>
            </button>
          </div>
          <div className="hidden sm:hidden md:flex lg:flex justify-between items-center w-[800px] p-2 border border-white  rounded-lg   sm:border-white md:border-white lg:border-[#e5e8ec] xl:border-[#e5e8ec]">
            <input type="text" placeholder="Axtar..." className=" placeholder:text-[#a0abb8] outline-none hidden sm:hidden  md:hidden lg:flex xl:flex" />
            <IoIosSearch className="text-[#c1c1c1] text-[25px] hidden sm:hidden  md:hidden lg:flex xl:flex   " />
          </div>
          <div className="flex gap-4 items-center ">
            <LiaBalanceScaleSolid className=" hidden sm:hidden  md:hidden lg:flex xl:flex  text-[27px] " />
            <IoIosSearch className='text-[27px]  flex sm:flex md:flex lg:hidden xl:hidden' />
            <Link to="/wish" className="relative hidden sm:hidden md:hidden lg:flex xl:flex">
              {favoriteCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#3c1e6e] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {favoriteCount}
                </span>
                )}
               <MdFavoriteBorder className="text-[27px]" />
              </Link>
            <Link to="/basket">
               <div className="relative flex items-center gap-2">
    {totalQuantity > 0 && (
      <span className="absolute top-0 left-0 bg-[#3c1e6e] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full
                       translate-x-1/2 -translate-y-1/2">
        {totalQuantity}
      </span>
    )}
                <FiShoppingCart className=" text-[24px]" />
                <div className="leading-4 mr-2 ">
                  <p className="text-[#c7c7c7] text-[11px] hidden sm:hidden md:hidden lg:flex xl:flex">
                    Məbləğ
                  </p>
                  <p className="text-[16px] font-semibold hidden sm:hidden md:hidden lg:flex xl:flex">
                    {total.toFixed(2)}{' '}
                    <span className="text-[14px] font-normal">₼</span>
                  </p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

    </header>
  )

}

export default Header
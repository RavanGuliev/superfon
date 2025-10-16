import React, { useContext } from 'react'
import { BsChatLeftText } from 'react-icons/bs'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { IoHomeOutline } from 'react-icons/io5'
import { PiScalesThin } from 'react-icons/pi'
import {  NavLink } from 'react-router'
import { CartContext } from '../../context/CartContext'

function Navigator() {
  const {favorites} = useContext(CartContext);

   const favoriteCount = favorites.length;
  return (
<div className='rubik flex items-center fixed bottom-0 left-0 right-0 bg-white shadow-md justify-between py-2 z-50 sm:flex md:flex lg:hidden xl:hidden'>

  <NavLink to="/" className={({ isActive }) => `flex items-center flex-col border-t-2 px-1 pt-2 flex-1 text-center ${
    isActive ? "border-purple-700 text-purple-700" : "border-transparent text-gray-700"
  }`}>
    <IoHomeOutline size={21} />
    <span className="text-[8px] whitespace-nowrap">Əsas səhifə</span>
  </NavLink>

<NavLink
  to="/wish"
  className={({ isActive }) =>
    `flex items-center flex-col border-t-2 px-1 pt-2 flex-1 text-center ${
      isActive
        ? "border-purple-700 text-purple-700"
        : "border-transparent text-gray-700"
    }`
  }
>
  <div className="relative flex items-center justify-center">
    {favoriteCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-[#3c1e6e] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
        {favoriteCount}
      </span>
    )}
    <FaRegHeart size={21} />
  </div>
  <p className="text-[8px] whitespace-nowrap">Ürəyin istəyən</p>
</NavLink>


  <a href="https://wa.me/994512058888?text=Salam%20məlumat%20istəyirəm" target="_blank" rel="noopener noreferrer" className="flex items-center flex-col border-t-2 pt-2 flex-1 border-transparent text-gray-700 px-1 text-center">
    <BsChatLeftText size={23} />
    <span className="text-[8px]">Çat</span>
  </a>

  <NavLink to="/compare" className={({ isActive }) => `flex items-center flex-col border-t-2 px-1 pt-2 flex-1 text-center ${
    isActive ? "border-purple-700 text-purple-700" : "border-transparent text-gray-700"
  }`}>
    <PiScalesThin size={23} />
    <span className="text-[8px]">Müqayisə</span>
  </NavLink>

  <NavLink to="/log" className={({ isActive }) => `flex items-center flex-col border-t-2 px-1 pt-2 flex-1 text-center ${
    isActive ? "border-purple-700 text-purple-700" : "border-transparent text-gray-700"
  }`}>
    <FaRegUser size={23} />
    <span className="text-[8px]">User</span>
  </NavLink>

</div>

  )
}

export default Navigator
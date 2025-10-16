import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { BsTrash3 } from 'react-icons/bs';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link, useNavigate } from 'react-router';

function Basket() {
    const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    total,
  } = useContext(CartContext);

  return (
    <div className="max-w-[1400px]  min-h-[75vh]  mx-auto p-5">
      <h2 className="text-2xl font-semibold">Səbət</h2>
      <div className="border-t border-[#DEE1E7] mt-4 mb-6" />

    <div className="flex flex-wrap sm:flex-wrap group hover:transition-all  md:flex-nowrap xl:flex-nowrap gap-4">
       
        <div     className="w-full max-w-[976px] mx-auto flex flex-col gap-4">
          {cartItems.length === 0 && 
  <div  className="flex flex-col items-center justify-center mx-auto w-full">
                <MdOutlineShoppingCart size={88} />
                <p className='pt-4 text-[16px] font-light'>Səbət boşdur</p>
           </div>}
          {cartItems.map(item => (
            <div key={item.id} onClick={() => navigate(`/${item.type}/${item.id}`)} className="border border-[#DEE1E7] p-4 rounded flex justify-between items-center">
              <div className="flex gap-4">
                <div className='w-[98px]'>
                <img src={item.image || '/image/statikimg.jpg'} alt={item.name} className="w-full object-contain transition-transform duration-300 group-hover:scale-120" />
                </div>
                <div>
                  <p className='pt-10'>{item.name}</p>
                  <p className='pt-5 text-[19.2px]'>{item.price} ₼</p>
                  <div className="flex items-center gap-2 mt-2">
                    <p className='font-bold'>Say:</p>
                    <div className="flex p-1 border border-[#DEE1E7] rounded">
                      <button onClick={(e) => { e.stopPropagation(); decreaseQuantity(item.id);}} className="px-3">-</button>
                      <span className="px-3">{item.quantity}</span>
                      <button onClick={(e) => { e.stopPropagation(); increaseQuantity(item.id);}} className="px-3">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <button  onClick={(e) => { e.stopPropagation(); removeFromCart(item.id);}}  className="bg-black mb-30 text-white p-2 rounded">
                <BsTrash3 />
              </button>
            </div>
          ))}
        </div>

       
        {cartItems.length > 0 && (
 <div className="  w-full max-w-[700px] md:max-w-[350px] p-4   bg-white z-50">
 
    <h3 className="font-bold mb-4">Sifarişin yekunu</h3>
    <div className="flex justify-between mb-2">
      <p>Cəmi məbləğ:</p>
      <p>{total.toFixed(2)} ₼</p>
    </div>
    <div className="flex justify-between mb-2">
      <p>Çatdırılma:</p>
      <p className="flex items-center gap-1">
        Ərazidən asılıdır <IoIosInformationCircleOutline />
      </p>
    </div>
    <div className="border-t border-gray-200 my-2" />
    <div className="flex justify-between font-bold mb-4">
      <p>Yekun:</p>
      <p>{total.toFixed(2)} ₼</p>
    </div>
    <button className="w-full bg-[#021523] hover:bg-[#50627b] text-white py-2.5 rounded">Sifarişi tamamla</button>
    <Link to="/">
    <p className="text-center mt-4 text-sm hover:underline">Alış-verişə davam et</p>
    </Link>
  </div>
)}
      </div>
    </div>
  );
}

export default Basket;

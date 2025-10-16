import React, { useContext } from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useNavigate } from 'react-router';
import { CartContext } from '../../context/CartContext'; 
import toast from 'react-hot-toast';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function BestCard({ best }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); 
   const { toggleFavorite, isFavorite } = useContext(CartContext);

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    addToCart({
      id: best.id,
      name: best.title,
      price: best.price,
      image: `https://cdn.superfon.az/i/p/300/${best.image}`,
      type: 'best'
    });
    toast.success(`${best.title} səbətə əlavə olundu!`);
  };

    const handleFavoriteClick = (e) => {
    e.stopPropagation(); 
    toggleFavorite({
      id: best.id,
      title: best.title,
      price: best.price,
      image: `https://cdn.superfon.az/i/p/300/${best.image}`,
      type: 'best'
    });
    toast.success(
      isFavorite(best.id)
        ? "Sevimlidən çıxarıldı!"
        : "Sevimlilərə əlavə olundu!"
    );
  };

  return (
    <div
      key={best.id}
      onClick={() => navigate(`/best/${best.id}`)}
      className="group relative border border-[#e5e8ec] rounded-lg p-4 flex flex-col items-center  hover: transition w-[311px] h-[427px]"
    >
     
        <div className="w-[215px]  h-[215px] mx-auto overflow-hidden flex items-center justify-center">
          <img
            src={`https://cdn.superfon.az/i/p/300/${best.image}`}
            alt={best.title}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

         <button
    onClick={handleFavoriteClick}
    className="absolute top-4 right-4    bg-white shadow-2xl border border-gray-200 p-2 rounded-full  hover:text-red-500 hover:border-red-500 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" >
    {isFavorite(best.id) ? <FaHeart className='text-red-500'  /> : <FaRegHeart  />}
  </button>
         
         
        <p className="mt-4 pt-10 text-sm font-semibold text-left leading-tight">
          {best.title}
        </p>
        <div className="mt-auto w-full flex justify-between items-center">
          <p className="text-lg font-medium">{best.price} ₼</p>
          <button
            onClick={handleAddToCart}
            className="w-10 group-hover:w-[150px] h-10 bg-green-500 text-white rounded flex items-center overflow-hidden transition-all duration-300 ease-in-out px-2"
          >
            <HiOutlineShoppingCart className="w-5 h-5 min-w-[20px]" />
            <span className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Səbətə əlavə et
            </span>
          </button>
        </div>
     
    </div>
  );
}

export default BestCard;

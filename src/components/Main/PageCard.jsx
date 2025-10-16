import React, { useContext, } from 'react'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useNavigate } from 'react-router'
import { CartContext } from '../../context/CartContext';
import toast from 'react-hot-toast';
import { FaHeart, FaRegHeart } from 'react-icons/fa';


function PageCard({product}) {
    const navigate = useNavigate()
     const { addToCart,toggleFavorite, isFavorite } = useContext(CartContext); 
    

    
      const handleAddToCart = (e) => {
        e.stopPropagation();  
        addToCart({
          id: product.id,
          name: product.title,
          price: product.price,
          image: `https://cdn.superfon.az/i/p/300/${product.image}`,
          type: 'product'
        });
          toast.success(`${product.title} səbətə əlavə olundu!`);
      };

       const handleFavoriteClick = (e) => {
    e.stopPropagation(); 
    toggleFavorite({
      id: product.id,
      title: product.title,
      price: product.price,
      image: `https://cdn.superfon.az/i/p/300/${product.image}`,
      type: 'product'
    });
    toast.success(
      isFavorite(product.id)
        ? "Sevimlidən çıxarıldı!"
        : "Sevimlilərə əlavə olundu!"
    );
  };

    

    return (

      <div
        
        onClick={() => navigate(`/product/${product.id}`)}
        className="group relative border-[#e5e8ec] border rounded-lg p-4 flex flex-col items-centerhover: transition w-[311px] h-[427px]"
      >
        <div className="w-[215px] h-[215px] mx-auto overflow-hidden flex items-center justify-center">
          <img
            src={`https://cdn.superfon.az/i/p/300/${product.image}`}
            alt={product.title}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        {product.newIn && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            Yeni
          </span>
        )}
               <button
  onClick={handleFavoriteClick}
  className="absolute top-2 right-4 bg-white shadow-gray-200 shadow-2xl border border-gray-200 p-2 rounded-full hover:text-red-500 hover:border-red-500 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
>
  {
    isFavorite(product.id)
      ? <FaHeart className="text-red-500 transition-colors duration-200" />
      : <FaRegHeart className="transition-colors duration-200" />
  }
</button>

        

        <p className="mt-4 pt-10 text-sm font-semibold text-left leading-tight">
          {product.title}
        </p>
        <div className="mt-auto w-full flex justify-between items-center">
          <p className="text-md font-medium">{product.price} ₼</p>
          <button   onClick={handleAddToCart} className="w-10 group-hover:w-[150px] h-10 bg-green-500 text-white rounded flex items-center overflow-hidden transition-all duration-300 ease-in-out px-2">
            <HiOutlineShoppingCart className="w-5 h-5 min-w-[20px]" />
            <span className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Səbətə əlavə et
            </span>
          </button>
        </div>
      </div>
   
  
);

}

export default PageCard




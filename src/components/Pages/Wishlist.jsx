import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdFavoriteBorder } from 'react-icons/md';
import { useNavigate } from 'react-router';


function Wishlist() {
    const { favorites, toggleFavorite, isFavorite } = useContext(CartContext);
    const navigate = useNavigate()



    if (favorites.length === 0) {
        return <div className="text-center flex flex-col  items-center pt-30 text-lg  min-h-screen">
            <MdFavoriteBorder size={88} />
            <p className='pt-5'>İstək siyahınız boşdur</p>
        </div>;
    }

    return (
        
        <>
            <div className='max-w-[1400px]  mx-auto p-2'>
                
                <h2 className="text-2xl font-semibold">İstəklər</h2>
                <div className="border-t border-[#DEE1E7] mt-4 mb-2" />
            </div>


            <div className="pb-5">

                <div className=" max-w-[1400px]  mx-auto p-3 flex  gap-4 flex-wrap  justify-center  sm:justify-center md:justify-start lg:justify-start items-center">
                    {favorites.map(item => (
                        <div onClick={() => navigate(`/${item.type}/${item.id}`)} key={item.id} className="group relative border-[#e5e8ec] border rounded-lg p-4 flex flex-col items-centerhover: transition w-[311px] h-[427px]" >
                            <div className="w-[215px] h-[215px] overflow-hidden mx-auto text-center flex items-center justify-center">
                                <img src={item.image ?? "default-image.png"}
                                    alt={item.title}
                                    className=" object-container transition-transform duration-300 group-hover:scale-110"
                                />

                            </div>


                            <button
                                onClick={(e) => {
                                    e.stopPropagation(); 
                                    toggleFavorite(item);
                                }}
                                className="absolute top-2 right-4 bg-white shadow-black shadow-2xl border border-gray-200 p-2 rounded-full hover:text-red-500 hover:border-red-500 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                {
                                    isFavorite(item.id)
                                        ? <FaHeart className='text-red-500' />
                                        : <FaRegHeart />
                                }
                            </button>



                            <p className="mt-4 pt-10 text-sm font-semibold text-left leading-tight">
                                {item.title}
                            </p>
                            <div className="mt-auto w-full flex justify-between items-center">
                                <p className="text-md font-medium">{item.price} ₼</p>
                                <button className="w-10 group-hover:w-[150px] h-10 bg-green-500 text-white rounded flex items-center overflow-hidden transition-all duration-300 ease-in-out px-2">
                                    <HiOutlineShoppingCart className="w-5 h-5 min-w-[20px]" />
                                    <span className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                        Səbətə əlavə et
                                    </span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </>

    );
}

export default Wishlist;

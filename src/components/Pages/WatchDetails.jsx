import React, { useContext, useEffect, useState } from 'react'
import { CiShare2 } from 'react-icons/ci';
import { FaHeart, FaRegHeart, FaRegStar } from 'react-icons/fa'
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { LuBox } from 'react-icons/lu';
import { MdFavoriteBorder, MdOutlineDone } from 'react-icons/md';
import { useParams } from 'react-router';
import { getWatchById } from '../../services';
import { CartContext } from '../../context/CartContext';
import toast from 'react-hot-toast';
import WatchFilter from './WatchFilters';

function WatchDetails() {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const [watch, setWatch] = useState(null);
  const { addToCart, toggleFavorite, isFavorite } = useContext(CartContext)


  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({
      id: watch.id,
      name: watch.title,
      price: watch.price,
      quantity: count,
      totalPrice: watch.price * count,
      image: `https://cdn.superfon.az/i/p/300/${watch.image}`,
      type: 'watch'
    });
    toast.success(`${watch.title} səbətə əlavə olundu!`);
  };

  const handleFavoriteClick = () => {
    toggleFavorite({
      id: watch.id,
      title: watch.title,
      price: watch.price,
      image: `https://cdn.superfon.az/i/p/300/${watch.image}`,
    })
    toast.success(
      isFavorite(watch.id)
        ? 'Məhsul favoridən silindi!'
        : 'Məhsul favorilərə əlavə olundu!'
    )
  }

  useEffect(() => {
    getWatchById(id)
      .then((data) => setWatch(data));
  }, [id]);

  return (
    <div className='max-w-[1400px] mx-auto min-h-[100vh] flex flex-col md:flex-row gap-8 pt-9 px-3 items-center md:items-start rubik'>
       
      <div>
        <div className="w-full md:w-[398px] border border-[#e5e8ec] rounded-md flex-shrink-0">
          <img src={`https://cdn.superfon.az/i/p/300/${watch ? watch.image ?? "Ad yoxdur" : "Yüklənir..."}`} alt="" className='w-[398px]' />
        </div>
        <div className=" w-[100px] mt-3 border border-[#e5e8ec] rounded-md flex-shrink-0">

          <img src={`https://cdn.superfon.az/i/p/300/${watch ? watch.image ?? "Ad yoxdur" : "Yüklənir..."}`} alt="" className='w-[398px]' />

        </div>


      </div>
      <div className="w-full md:flex-1 min-w-0">

        <div>
          <h1 className='text-[22.4px] text-[#021523] font-bold pb-2.5'> {watch ? watch.title ?? "Ad yoxdur" : "Yüklənir..."}</h1>
          <div className="flex items-center gap-3">
            <p className="text-[14.4px] text-[#818ea0] pb-1">
              Məhsulun kodu: {watch ? watch.id ?? "Qiymət yoxdur" : "Yüklənir..."}
            </p>

            <div className="flex items-center justify-center px-2 py-1 bg-[#F1F9F3] gap-2 rounded-lg">
              <MdOutlineDone className="text-[#149336] border rounded-full p-0.5 text-[15px]" />
              <p className="text-[#149336] text-[12.8px] font-semibold">Anbarda var</p>
            </div>
          </div>
        </div>
        <div className='flex  space-x-1 text-gray-300 text-sm pb-5'>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <div>
          <p className='text-[24px] font-semboli'>{watch ? watch.price ?? "Qiymət yoxdur" : "Yüklənir..."} ₼</p>
        </div>
        <div className='pt-5 pb-5'>
          <div className="grid grid-cols-5 w-[350px] text-[14.4px] rubik border border-[#e5e8ec] rounded-lg overflow-hidden">
            <div className="bg-[#f4faf6] border-b border-gray-200 font-semibold p-3"></div>
            <div className="bg-[#f4faf6] border-b border-gray-200 font-semibold p-3 text-center">3 ay</div>
            <div className="bg-[#f4faf6] border-b border-gray-200 font-semibold p-3 text-center">6 ay</div>
            <div className="bg-[#f4faf6] border-b border-gray-200 font-semibold p-3 text-center">9 ay</div>
            <div className="bg-[#f4faf6] border-b border-gray-200 font-semibold p-3 text-center">12 ay</div>
            <div className="flex hover:bg-[#dff6e1] items-center gap-2 p-3 font-medium text-pink-600 border-b border-gray-200">
              <img src="/image/birkart-logo.png" alt="birbank" className="w-12 h-auto" />
            </div>
            <div className="p-3  text-center border-b border-gray-200">14.97 ₼</div>
            <div className="p-3  text-center border-b border-gray-200">7.48 ₼</div>
            <div className="p-3  text-center border-b border-gray-200">4.99 ₼</div>
            <div className="p-3  text-center border-b border-gray-200">3.74 ₼</div>

            <div className="flex  items-center gap-2 p-3 font-medium text-gray-800 border-b border-gray-200">
              <img src="/image/tamkart-logo.png" alt="tam" className="w-12 h-auto" />
            </div>
            <div className="p-3  text-center border-b border-gray-200">14.97 ₼</div>
            <div className="p-3  text-center border-b border-gray-200">7.48 ₼</div>
            <div className="p-3  text-center border-b border-gray-200">4.99 ₼</div>
            <div className="p-3  text-center border-b border-gray-200">3.74 ₼</div>

            <div className="flex  items-center gap-2 p-3 font-medium text-gray-800 border-b border-gray-200">
              <img src="/image/leobank-logo.png" alt="tam" className="w-12 h-auto" />
            </div>
            <div className="p-3  text-center border-b border-gray-200">14.97 ₼</div>
            <div className="p-3  text-center border-b border-gray-200">7.48 ₼</div>
            <div className="p-3  text-center border-b border-gray-200">4.99 ₼</div>
            <div className="p-3  text-center border-b border-gray-200">3.74 ₼</div>
          </div>
        </div>
        <div className='border border-[#e5e8ec] p-3 rounded-md max-w-full overflow-hidden'>
          <div className='flex flex-wrap gap-3 p-2 items-center'>

            <div className="flex items-center rounded-md w-28 min-w-[7rem] justify-between border border-[#e5e8ec] flex-shrink-0">
              <button onClick={() => setCount(prev => Math.max(prev - 1, 1))} className="px-3 py-1 text-lg font-medium">-</button>
              <span className="text-sm font-medium">{count}</span>
              <button onClick={() => setCount(prev => Math.min(prev + 1, 10))} className="px-3 py-1 text-lg font-medium">+</button>
            </div>


            <div className='flex flex-wrap gap-3 flex-1 min-w-[200px]'>
              <button onClick={handleAddToCart} className='text-white text-[14.4px] font-semibold bg-[#24bb42] flex items-center hover:bg-[#1f7931] p-2 rounded-md flex-shrink-0 min-w-[120px] justify-center'>Sebete elave et</button>
              <button className='text-white text-[14.4px] font-semibold bg-[#3c1e6e] flex items-center p-1.5 rounded-md flex-shrink-0 min-w-[100px] justify-center'>Indi al</button>
              {watch && (
                <button onClick={handleFavoriteClick} className="className='text-[#818ea0] text-[24px] p-1 px-2 flex items-center border border-[#e5e8ec] rounded-md hover:text-[#021523] flex-shrink-0'">
                  {isFavorite(watch.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
              )}
              <button className='text-[#818ea0] text-[24px] p-1 px-2 flex items-center border border-[#e5e8ec] rounded-md hover:text-[#021523] flex-shrink-0'>
                <LiaBalanceScaleSolid />
              </button>
              <div className='text-[#818ea0] p-2 px-2 flex items-center gap-2 border border-[#e5e8ec] rounded-md hover:text-[#021523] flex-shrink-0 min-w-[90px] justify-center'>
                <CiShare2 className='text-[24px]' />
                <p className='text-sm'>Paylaş</p>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 mt-3" />

          <div className='flex flex-wrap gap-3 items-center mt-3'>
            <div className='flex gap-2 items-center p-2 flex-shrink-0'>
              <LuBox className='text-[22px]' />
              <p className='text-[14.4px] text-[#021523] font-bold whitespace-nowrap'>1 günə çatdırılma</p>
            </div>
            <div className='flex-1 min-w-[150px]'>
              <p className='text-[14.4px] text-[#021523]'>Sürətli və etibarlı çatdırılma!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchDetails


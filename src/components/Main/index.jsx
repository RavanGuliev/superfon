import { FaCreditCard } from 'react-icons/fa'
import { FiTruck } from 'react-icons/fi'
import { AiOutlineRollback } from 'react-icons/ai'
import { IoIosArrowRoundForward } from 'react-icons/io'
import CardsSlider from '../Slider/CardsSlider'
import Mainslider from '../Slider/Mainslider'
import Brandslider from '../Slider/Brandslider'
import Videoslider from '../Slider/Videoslider'
import React from 'react';
import Navigator from '../Pages/Navigator'
import Menu from './Menu'
import { Link } from 'react-router'
import Bestslider from '../Slider/Bestslider.jsx'



function Main() {
  return (
    <main className='max-w-[1400px] mx-auto px-4 roboto-condensed'>
    
      <section className='pt-5'>
        <div className="flex  items-start gap-10">
          <Menu />

          <div className="flex-1 min-w-0 -mx-4 ">
            <Mainslider />
          </div>
        </div>
      </section>

      <section className='pt-8 md:pt-15 lg:pt-20  '>
        <div className=' flex  justify-around items-center text-[#3c1e6e]   '>
          <div className=' flex  flex-col justify-center items-center '>
            <FaCreditCard className='text-3xl sm:text-3xl md:text-4xl' />
            <p className='font-bold text-[12.8px] sm:text-[14.4px] text-center md:text-[16px] pt-3 md:pt-8 text-[#041e42]'>Asan və təhlükəsiz ödəniş</p>
          </div>
          <div className="w-px  h-40 max-md:hidden"></div>
          <div className=' flex  flex-col justify-center items-center'>
            <FiTruck className='text-3xl sm:text-3xl md:text-4xl' />
            <p className='font-bold text-[12.8px] sm:text-[14.4px] text-center md:text-[16px] pt-3 md:pt-8 text-[#041e42]'>Sürətli çatdırılma</p>
          </div>
          <div className="w-px h-40 max-md:hidden"></div>
          <div className=' flex  flex-col justify-center items-center'>
            <AiOutlineRollback className='text-3xl sm:text-3xl md:text-4xl' />
            <p className='font-bold text-[12.8px] sm:text-[14.4px] text-center md:text-[16px] pt-3 md:pt-8 text-[#041e42]'>Qaytarma və dəyişmə</p>
          </div>
        </div>
      </section>

      <section className='pt-20    '>
        <div className='flex justify-between items-center '>
          <h1 className=' text-[22.4px] font-sembolid'>Yeniliklər</h1>
          <div className=''>
            <Link to="/new" className='flex items-center text-[#0957D4] text-[14.4px] rubik'>
             <p>Hamısına bax</p>
            <IoIosArrowRoundForward />
            </Link>
           
          </div>
        </div>
        <div className='pt-5'>
          <div className="w-full h-px  mx-4 " />
        </div>
        <div className='pt-5'>
          <CardsSlider />
        </div>
      </section>

      <section className='  mt-15 mb-15 bg-[#F8FAFB]  '>
        <div className='p-0 md:p-10'>
          <Brandslider />
        </div>
      </section>

      <section className='pt-0    '>
        <div className='flex justify-between items-center '>
          <h1 className=' text-[22.4px] font-sembolid'>Ən çox satılanlar</h1>
          <div className=''>
            <div>
              <Link to="/best" className='flex items-center text-[#0957D4] text-[14.4px] rubik'>
             <p>Hamısına bax</p>
            <IoIosArrowRoundForward />
              </Link>
            </div>
           
          </div>
        </div>
        <div className='pt-5'>
          <div className="w-full h-px  mx-4 " />
        </div>
        <div className='pt-5 pb-5'>
          <Bestslider />
        </div>
      </section>
      
      <section className='pb-20  w-full '>
        <div className=' flex justify-center pt-15 pb-10    '>
          <h2 className='text-[#021523]  text-[32px] md:text-[48px] rubik '>Superfon TV</h2>
        </div>
        <Videoslider />
      </section>
      <Navigator />
    </main>
  )
}

export default Main

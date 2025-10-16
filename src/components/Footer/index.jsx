import React, { useEffect, useState } from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { LuPhoneCall } from 'react-icons/lu'
import { RiLinkedinLine } from 'react-icons/ri'
import { getAlltags } from '../../services'

function Footer() {


  const [tags, setTags] = useState([])

     useEffect(() => {
          getAlltags().then((data) => {
              setTags(data);
          });
      }, []);


  return (
    <footer className='  rubik bg-[#fafbfc]'>
      <div className='flex flex-wrap justify-between max-w-[1400px] mx-auto pt-4 p-3'>
        <section className='hidden md:flex flex-col '>
          <div>
            <img src="/image/logo.png" alt="" className='w-[145px]' />
          </div>
          <div className='flex  items-center gap-2 text-[25px] pt-15 '>
            <LuPhoneCall />
            <FaWhatsapp />
          </div>
          <div><p className='text-[#021523] pt-2 text-[19.2px] leading-4'>+994 51 205 88 88</p></div>
        </section>
        <section className=''>
          <div>
            <h4 className='text-[#021523] font-bold text-[17.6px]'>Şirkət</h4>
            <ul className='text-[#818ea0] pt-5 text-[14.4px] space-y-2 cursor-pointer '>
              <li className=' hover:underline underline-offset-2'>Kampaniyalar</li>
              <li className=' hover:underline underline-offset-2'>Haqqımızda</li>
              <li className=' hover:underline underline-offset-2'>Mağazalarımız</li>
              <li className=' hover:underline underline-offset-2'>Korporativ satış</li>
              <li className=' hover:underline underline-offset-2'>Karyera</li>
              <li className=' hover:underline underline-offset-2'>Əlaqə</li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h4 className='text-[#021523] font-bold text-[17.6px]'>Müştəri üçün</h4>
            <ul className='text-[#818ea0] pt-5 text-[14.4px] space-y-2 cursor-pointer '>
              <li>Ödəniş şərtləri</li>
              <li>Məxfilik siyasəti</li>
              <li>Çatdırılma</li>
              <li>Geri qaytarılma və dəyişdirilmə</li>
              <li>Tez-tez verilən suallar</li>
              <li>Bloq</li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h4 className='text-[#021523] font-bold text-[17.6px]'>Bizi izləyin</h4>
            <div className='flex gap-2 pt-5 pb-5'>
              <FaFacebookF className=' text-4xl bg-[#d1d6dd] text-white p-2  rounded-[50%] hover:bg-[#041e42] transition-all duration-200' />
              <FaInstagram className=' text-4xl bg-[#d1d6dd] text-white p-2  rounded-[50%] hover:bg-[#041e42] transition-all duration-200' />
              <RiLinkedinLine className=' text-4xl bg-[#d1d6dd] text-white p-2  rounded-[50%] hover:bg-[#041e42] transition-all duration-200' />
              <FaYoutube className=' text-4xl bg-[#d1d6dd] text-white p-2  rounded-[50%] hover:bg-[#041e42] transition-all duration-200' />
              <FaTiktok className=' text-4xl bg-[#d1d6dd] text-white p-2  rounded-[50%] hover:bg-[#041e42] transition-all duration-200' />
            </div>
          </div>
          <div>
            <h4 className='text-[#021523] font-bold text-[17.6px]'>Yeniliklərdən xəbər alın</h4>
            <p className='text-[#818ea0] text-[14.4px] '>Online bültenimizə abunə ol</p>
            <div className='flex mr-2 '>
              <div className='border border-[#cccccc] p-2.5 '>
                <input type="text" placeholder='Email ünvanınız' className='p-1 outline-none' />
              </div>
              <button className='bg-[#021523] text-white text-[14px]  p-3'>Abune ol</button>
            </div>
          </div>
        </section>
      </div>
       
          <div className='flex justify-start gap-2 flex-wrap max-w-[1400px] mx-auto pt-12 pb-10 divide-x-2  divide-[#7b858d] p-2  '>
    {tags.map((item) => (
      <p key={item.title} className='text-[#021523] text-[12px] cursor-pointer hover:underline underline-offset-2 pr-2 '>
        {item.title}
      </p>
    ))}
   <div className="w-full h-px bg-gray-200 mt-10   " />
  </div>

<div className="flex flex-col md:flex-row md:justify-between items-center max-w-[1400px] mx-auto pb-10">
    <p className='text-base text-[13px]'>© 2019-2025 Superfon. Bütün hüquqlar qorunur.</p>
    <div className='flex items-center gap-2  '>
      <img src="/image/visa.png" alt="" className="w-8 h-auto" />
      <img src="/image/card.png" alt="" className="w-8 h-auto" />
      <img src="/image/payment.png" alt=""  className="w-8  h-auto"/>
    </div>
    <div>
      <p>Sayt <a href="https://www.mobius.az/" className='font-bold text-[#0a0a47]'>mobius</a> tərəfindən hazırlandı</p>
    </div>
  </div>

        
    </footer>

  )
}

export default Footer
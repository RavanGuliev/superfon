import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../utility/index2.css';
export default function Brandslider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
         breakpoints={{
           0: { 
              slidesPerView: 2,
               spaceBetween: 20
            },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
     
        className="mySwiper1"
      >
        <SwiperSlide><img src="image/euro.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image/joy.png" alt="" />     </SwiperSlide>
        <SwiperSlide><img src="image/foni.png" alt="" />      </SwiperSlide>
        <SwiperSlide><img src="image/spor.png" alt="" />      </SwiperSlide>
        <SwiperSlide><img src="image/gold.png" alt="" />      </SwiperSlide>
        <SwiperSlide><img src="image/honor.png" alt="" />     </SwiperSlide>
        <SwiperSlide><img src="image/samsung.png" alt="" className='pt-12' /> </SwiperSlide>
        <SwiperSlide><img src="image/oppo.png" alt="" />      </SwiperSlide>
        <SwiperSlide><img src="image/apple.png" alt="" />    </SwiperSlide>
        <SwiperSlide><img src="image/nokia.png" alt="" />     </SwiperSlide>
        <SwiperSlide><img src="image/xioami.png" alt="" />     </SwiperSlide>
      </Swiper>
    </>
  );
}










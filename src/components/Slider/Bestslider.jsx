import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { getAllBest,  } from '../../services';
import React from 'react';
import { Autoplay} from 'swiper/modules';
import BestCard from '../Main/BestCard';



export default function Bestslider() {
  
   const [ best , setBest] = useState([]) 
   
    useEffect(() => { 
        getAllBest().then((data) => {
            setBest(data);
        });
    }, []);

      
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
         breakpoints={{
         0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
           388: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
           509: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        640: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 240,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
           
        }}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
         {best.map((best, index,) => (
                <SwiperSlide key={index}>
                  
                   <BestCard best={best}/>
                </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}

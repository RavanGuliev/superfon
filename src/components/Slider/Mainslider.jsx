import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import React from 'react';

import '../../index.css';


import { Pagination } from 'swiper/modules';

function Mainslider() {
    return (
        
      <Swiper
        
        
        className=' rounded-md'
      >
        <SwiperSlide><img src="image/slider1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image/slider2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image/slider3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="image/slider4.jpg" alt="" /></SwiperSlide>

     
      </Swiper>
    
  );
}
export default Mainslider
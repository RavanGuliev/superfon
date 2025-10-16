import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { getAllCards } from '../../services';
import PageCard from '../Main/PageCard';

export default function CardsSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllCards().then((data) => setProducts(data));
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
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
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <PageCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

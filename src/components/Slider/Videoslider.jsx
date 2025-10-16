import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { getAllvideo } from '../../services';

const VideoModal = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
    <div className="fixed inset-0 z-50 flex bg-[rgba(0,0,0,0.7)] items-center justify-center  bg-opacity-70">
      <div className="relative w-full max-w-3xl h-[50vh] rounded-2xl p-4">
        <button
          onClick={onClose}
          className="absolute top-1 right-1 bg-white border-3  flex justify-center items-center rounded-[50%] w-8 h-8  text-black text-2xl font-sembolid"
        >
          x
        </button>
        <iframe
          className="w-full h-full rounded"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default function Videoslider() {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  useEffect(() => {
    getAllvideo().then((data) => {
      setVideos(data);
    });
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        pagination={{ clickable: true }}
        breakpoints={{
          0:{slidesPerView: 1, spaceBetween: 10},
          427:{slidesPerView: 2, spaceBetween: 10},
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {videos.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-[500px] cursor-pointer"
              onClick={() => setSelectedVideoId(item.videoId)}
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-lg w-full h-[170px] object-cover"
                />
              </div>
              <p className="mt-3 text-left text-[#253D4E] rubik text-[20px] font-semibold">
                {item.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Video modal */}
      <VideoModal
        videoId={selectedVideoId}
        onClose={() => setSelectedVideoId(null)}
      />
    </>
  );
}

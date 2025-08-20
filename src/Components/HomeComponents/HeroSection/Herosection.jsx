
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import assets from "../../../assets/assets";


const Carouselimg = () => {
  const images = [assets.img1, assets.img2, assets.img3];

  return (
    <div className=" relative w-full  bg-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={600}
        pagination={{ clickable: true }}
        navigation={{ enabled: true }}
        className="w-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[21/9] overflow-hidden shadow-lg">
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carouselimg;


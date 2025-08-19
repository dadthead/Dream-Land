// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import assets from "../../../assets/assets"; 

// const Carousel = () => {
  
//   const Slidingimg = [
//     assets.img1,
//     assets.img2,
//     assets.img3,
   
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Move to prev image
//   const prevSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? Slidingimg.length - 1 : prev - 1
//     );
//   };

//   // Move to next image
//   const nextSlide = () => {
//     setCurrentIndex((prev) =>
//       prev === Slidingimg.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <div className="relative w-full  ">
//       {/* Image */}
//       <img
//         src={Slidingimg[currentIndex]}
//         alt="carousel"
//         className="w-full h-200  object-cover rounded-lg shadow"
//       />

//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
//       >
//         <ChevronLeft className="w-6 h-6 text-gray-700" />
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
//       >
//         <ChevronRight className="w-6 h-6 text-gray-700" />
//       </button>
//     </div>
//   );
// };

// export default Carousel;










// Carousel.jsx
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
    <div className="w-full py-0 bg-white">
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


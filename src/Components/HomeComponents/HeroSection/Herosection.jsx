import React, { useState, useEffect } from "react";
import assets from "../../../assets/assets";
import { motion } from "framer-motion";

const Carouselimg = () => {
  const items = [
    {
      image: assets.img1,
      image2: assets.img1_phone,
      text: "Find your perfect space to live and grow",
      btn_1: "Explore",
      btn_2: "Learn More",
    },
    {
      image: assets.im10,
      image2: assets.img1_phone3,
      text: "Modern comfort with timeless design",
      btn_1: "Explore",
      btn_2: "Learn More",
    },
    {
      image: assets.im6,
      image2: assets.img1_phone2,
      text: "Grow Wealth with Red Sandalwood",
      btn_1: "Explore",
      btn_2: "Learn More",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
  <div className="relative w-full bg-black border-none">
  <div className="w-full h-screen">
    {items.map((item, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          index === current ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        {/* Desktop Image */}
        <img
          src={item.image}
          alt={`slide-${index}`}
          className="hidden sm:block w-full h-full object-cover"
        />

        {/* Mobile Image */}
        <img
          src={item.image2}
          alt={`slide-mobile-${index}`}
          className="block sm:hidden w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Text + Buttons */}
        {index === current && ( 
          <div className="absolute inset-0 top-[60%] sm:top-[40%] md:top-[50%] max-w-3xl inline-block mx-auto">
            {/* Heading */}
            <motion.h2
              key={item.text} 
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-slate-200 text-4xl leading-tight w-full sm:text-3xl md:text-6xl font-semibold poppins mb-6 text-center"
            >
              {item.text}
            </motion.h2>

            {/* Buttons */}
            <motion.div
              key={item.btn_1 + item.btn_2} 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="flex justify-center w-full gap-4 sm:gap-6"
            >
              <button className="bg-[#ff6600] hover:bg-[#a01d23] text-white px-5 py-2 sm:px-8 sm:py-2 rounded-lg font-semibold shadow-lg transition poppins">
                {item.btn_1}
              </button>
              <button className="bg-transparent border-2 border-[#ff6600] hover:bg-[#ff6600] hover:text-white text-white px-5 py-2 sm:px-8 sm:py-2 rounded-lg font-semibold shadow-lg transition poppins">
                {item.btn_2}
              </button>
            </motion.div>
          </div>
        )}
      </div>
    ))}
  </div>
</div>

  );
};

export default Carouselimg;

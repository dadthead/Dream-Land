import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {motion, AnimatePresence} from 'framer-motion'

const testimonials = [
  {
    id: 1,
    text: "After retiring, we were looking for a home that offered both comfort and convenience. Sumadhura exceeded our expectations. The walking tracks, senior-friendly facilities, and peaceful environment make it perfect for our lifestyle. What truly stands out is the strong community bond - our neighbors have become like family. The proximity to hospitals and shopping centers gives us complete peace of mind.",
    author: "Rahul Sharma",
    role: "IT Professionals",
    rating: 5,
  },
  {
    id: 2,
    text: " Sumadhura exceeded our expectations. The walking tracks, senior-friendly facilities, and peaceful environment make it perfect for our lifestyle. What truly stands out is the strong community bond - our neighbors have become like family. The proximity to hospitals and shopping centers gives us complete peace of mind.",
    author: "Priya Mehta",
    role: "Software Engineers",
    rating: 4,
  },
  {
    id: 3,
    text: " we were looking for a home that offered both comfort and convenience. Sumadhura exceeded our expectations. The walking tracks, senior-friendly facilities, and peaceful environment make it perfect for our lifestyle. What truly stands out is the strong community bond - our neighbors have become like family. The proximity to hospitals and shopping centers gives us complete peace of mind.",
    author: "Dr. Ramesh Kumar",
    role: "Senior Cardiologist",
    rating: 3,
  },
  {
    id: 4,
    text: " What truly stands out is the strong community bond - our neighbors have become like family. The proximity to hospitals and shopping centers gives us complete peace of mind.",
    author: "Mr. & Mrs. Krishnamurthy",
    role: " Bank Officials",
    rating: 5,
  },

];

const Testimonial=React.memo(()=> {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const { text, author, role, rating } = testimonials[current];

  return (

    <section className="bg-white  w-full  text-black py-16 px-6 flex flex-col lg:px-10 items-center  cursor-grab z-50 ">
      <motion.div
      
      initial={{opacity:0 , x:100}} whileInView={{opacity:1 , x:0}}  viewport={{once:true , amount:0.5}} 
        transition={{duration:1}}
        className=" relative lg:right-80 md:right-40 right-0 sm:right-20">

        <p 
        className="text-[12px] mb-2">Hear from our</p>
        <h2 className="text-xl font-medium mb-2 ">HAPPY CUSTOMERS</h2>
      </motion.div>

      <div className="max-w-4xl min-h-[200px] ">
        <AnimatePresence mode="wait">
          <motion.div 
          key={current}
          initial={{opacity:0 , x:-100}}
          whileInView={{opacity:1 , x:0}}
          viewport={{once:true , amount:0.5}}
          transition={{duration:1}} 
          >


        <motion.p initial={{opacity:0 , y:100}} whileInView={{opacity:1 , y:0}} viewport={{once:true , amount:0.5}} className=" leading-relaxed mb-4  text-[12px] ">"{text}"</motion.p>

        {/* Stars */}
        <div className="flex justify-start mb-2">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-[#a01d23] text-xl ">★</span>
          ))}
        </div>

        <p className="font-medium text-[12px]  ">
          {author}, {role}
        </p>
          </motion.div>
          </AnimatePresence>
      </div>

      {/* Previous & Next Buttons*/}
      <div className="flex  gap-3  md:relative md:left-[300px]">
        <button
          onClick={prevSlide}
          className="bg-[#f17c2e] hover:bg-[#f6985a] text-white  p-1  cursor-pointer "
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#f17c2e] hover:bg-[#f6985a] text-white p-1   cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* View All */}
      <button className=" bg-[#f17c2e] mt-3  text-white px-4 py-[5px] text-[12px] font-small  cursor-pointer border-2 border-transparent  hover:bg-[#f6985a]  transition-all duration-300">
        VIEW ALL
      </button>
    </section>
  );
})

export default Testimonial

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

 function Testimonial() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const { text, author, role, rating } = testimonials[current];

  return (
    <section className="happy-customers  text-[#ff6600] py-16 px-6 flex flex-col items-center justify-start  cursor-grab z-50 ">
        <div className="flex flex-col items-start justify-start md:relative md:left-[-270px]">

      <p className="text-sm  uppercase tracking-wide text-start mb-2">Hear from our</p>
      <h2 className="text-2xl font-semibold mb-2 ">HAPPY CUSTOMERS</h2>
        </div>

      <div className="max-w-3xl ">
        <p className=" leading-relaxed mb-4 italic ">"{text}"</p>

        {/* Stars */}
        <div className="flex justify-start mb-2">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-[#a01d23] text-xl ">★</span>
          ))}
        </div>

        <p className="font-semibold  ">
          {author}, {role}
        </p>
      </div>

      {/* Previous & Next Buttons*/}
      <div className="flex  gap-3 mt-8 md:relative md:left-[300px] mb-5">
        <button
          onClick={prevSlide}
          className="bg-[#f17c2e] hover:bg-[#f6985a] text-white  p-2  cursor-pointer "
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-[#f17c2e] hover:bg-[#f6985a] text-white p-2   cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* View All */}
      <button className=" bg-[#f17c2e]  text-white px-6 py-2 text-sm font-semibold  cursor-pointer border-2 border-transparent  hover:bg-[#f6985a]  transition-all duration-300">
        VIEW ALL
      </button>
    </section>
  );
}

export default Testimonial

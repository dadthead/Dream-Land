import { DivideCircle } from "lucide-react";
import React from "react";

const Aboutcontent = () => {
  return (
    <div className="w-full h-auto bg-slate-50">
      {/* Philosophy / Mission / Vision Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10">
        {/* Card 1 */}
        <div className="flex flex-col gap-2 justify-start px-4 sm:px-6 md:px-8 items-start text-left space-y-3">
          <h2 className="text-md sm:text-lg font-bold text-[#a01d23] underline underline-offset-2">
            OUR MISSION
          </h2>
          <p className="text-sm sm:text-inter   text-gray-700">
           At Dream Land Projects, our mission is to make land ownership a reality for everyone, regardless of their background or financial status. We are committed to building a culture of trust in a world where trust is fading, by offering transparent, reliable, and value-driven ventures that people can depend on.


          </p>
          <p className="text-sm sm:text-inter   text-gray-700">Through our services in real estate, farmlands, open plots, and construction, we strive to create not just investments but life-changing opportunities that bring financial freedom, stability, and pride to our clients.</p>

          <p className="text-sm sm:text-inter   text-gray-700">We believe land is more than just property—it is a symbol of security, a source of growth, and a lasting inheritance. That’s why our mission goes beyond sales; we aim to educate and empower people to make the right investments that will benefit their families today and for generations to come.</p>

          <p className="text-sm sm:text-inter   text-gray-700">With over 10,000+ happy clients, our journey is fueled by the dreams of people who trusted us, and our mission will always be to align our dreams with theirs—delivering trust, prosperity, and happiness in every step.</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-3 justify-start px-4 sm:px-6 md:px-8 items-start text-left space-y-1.5">
          <h2 className="text-md sm:text-lg  font-bold text-[#a01d23] underline underline-offset-2">
            OUR VISSION
          </h2>
          <p className="text-sm sm:text-inter  text-gray-700">
            At Dream Land Projects, we believe that every individual deserves the opportunity to live a life of financial freedom built on the foundation of the right and proper investments. To us, this is what we proudly call a Dream Investment—an investment that secures today, nurtures tomorrow, and leaves behind a legacy for generations.

          </p>
          <p className="text-sm sm:text-inter   text-gray-700">We envision a future where land ownership is not a privilege for a few but a right for everyone. Through our carefully designed ventures in open plots, farmlands, and sustainable developments, we aim to create investment channels that are transparent, reliable, and value-driven.</p>

          <p className="text-sm sm:text-inter   text-gray-700">
            Our vision is not only to help people acquire land but also to educate them about the true power of land investment—a timeless asset that appreciates, protects, and strengthens families. We dream of a society where every individual can proudly say, <span className="text-[#a01d23]">“I own my piece of land, my legacy, my Dream Land.”</span>
          </p>

          <p className="text-sm sm:text-inter   text-gray-700">
            By aligning our vision with the aspirations of our clients, we are committed to creating a world where people don’t just buy land, but also build security, create wealth, and pass on inheritance to the next generation.
          </p>
        </div>



      </div>

      {/* Vision Section
      <div className="max-w-[1240px] mx-auto py-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 pb-16">
        <h1 className="text-md sm:text-md font-bold  text-center text-[#a01d23]">
          Where Vision Meets Construction
        </h1>

        <p className="mt-6 text-sm sm:text-inter  text-gray-600  text-center leading-relaxed max-w-3xl mx-auto">
          Dream Land Project specializes in bringing ideas to life with
          creativity and care. We focus on building spaces that inspire comfort,
          beauty, and growth. Every project is a step toward shaping a better
          tomorrow.
        </p>
      </div> */}
    </div>
  );
};

export default Aboutcontent;

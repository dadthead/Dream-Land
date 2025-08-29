
import React from "react";
import assets from "../../assets/assets";
import { motion } from "framer-motion"

const RealEstate = () => {
  return (
    <section className="w-full py-12 bg-white">
      {/* First Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="order-2 md:order-1 text-center md:text-left space-y-4 p-4 sm:p-6 md:p-10">
          <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold   text-[#a01d23]">
            Real Estate
          </h1>
          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">
            We offer real estate solutions that combine trust, growth, and security.</p>

          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">Every venture is designed to create long-term value for investors and families.</p>

          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">Our transparent approach ensures peace of mind in every transaction</p>

          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed"> With us, real estate isn’t just property—it’s the foundation of dreams.
          </p>
          <button
            className="border border-[#a01d23]  text-[#a01d23] px-4   py-2  text-sm sm:text-base  rounded-md mt-4 hover:bg-[#a01d23] hover:text-white transition duration-300  ">
            Learn More
          </button>
        </motion.div>

        {/* Image */}
        <div className="order-1 md:order-2 overflow-hidden">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            src={assets.aboutimg}
            alt="Real Estate"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">

        {/* Image */}
        <div className="overflow-hidden">
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            src={assets.im4}
            alt="Real Estate"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center md:text-left space-y-4 p-4 sm:p-6 md:p-10">
          <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold   text-[#a01d23]">
            Farm Land
          </h1>
          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">
            Dream Land Projects brings you innovative farm land opportunities like red sandalwood plantations.</p>

          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">We focus on creating eco-friendly investments that grow with time.</p>

          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">Farm lands are not just assets, but a bridge between nature and prosperity.</p>

          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">An investment today becomes a green legacy for tomorrow.</p>

          <button
            className="border border-[#a01d23]  text-[#a01d23] px-4   py-2  text-sm sm:text-base  rounded-md mt-4 hover:bg-[#a01d23] hover:text-white transition duration-300  ">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Third Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="order-2 md:order-1 text-center md:text-left space-y-4 p-4 sm:p-6 md:p-10">
          <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold   text-[#a01d23]">
            Open Plots
          </h1>
          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">
            Our open plots are strategically located and legally clear, ensuring secure ownership.</p>

          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">They are future-ready investments with excellent growth potential.</p>

          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">With transparent documentation and fair pricing, we build customer trust.</p>

          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">An open plot from us is more than land—it’s your path to financial freedom.</p>
          <button
            className="border border-[#a01d23]  text-[#a01d23] px-4   py-2  text-sm sm:text-base  rounded-md mt-4 hover:bg-[#a01d23] hover:text-white transition duration-300  ">
            Learn More
          </button>
        </motion.div>

        {/* Image */}
        <div className="order-1 md:order-2 overflow-hidden">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            src={assets.im3}
            alt="Real Estate"
            className="w-full h-full object-cover"
          />
        </div>


      </div>

      {/* Fourth Section */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">

        {/* Image */}
        <div className="overflow-hidden">
          <motion.img
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            src={assets.im2}
            alt="Real Estate"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center md:text-left space-y-4 p-4 sm:p-6 md:p-10">
          <h1 className="text-xl sm:text-2xl md:text-2xl font-semibold   text-[#a01d23]">
            Construction
          </h1>
          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">
            We turn visions into reality with reliable construction services.</p>

          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">From homes to ventures, we focus on quality, design, and durability</p>

          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">Our projects are built with passion, precision, and modern standards.</p>

          <p className="text-sm  md:text-sm lg:text-md text-gray-600 leading-relaxed">Every structure we create is not just a building, but a space for life.</p>

          <button
            className="border border-[#a01d23]  text-[#a01d23] px-4   py-2  text-sm sm:text-base  rounded-md mt-4 hover:bg-[#a01d23] hover:text-white transition duration-300  ">
            Learn More
          </button>
        </motion.div>
      </div>




    </section>
  );
};

export default RealEstate;








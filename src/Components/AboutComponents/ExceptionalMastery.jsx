
import React from "react";
import assets from "../../assets/assets";
import { motion } from "framer-motion";

const ExceptionalMastery = () => {
    return (
        <div className=" poppins " >

            <div className="max-w-[1240px] mx-auto py-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9 }}
                    className="text-md sm:text-md text-center font-bold text-[#a01d23]">
                    Dream Land Project
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9 }}
                    className="mt-6 text-sm sm:text-base  text-gray-600 font-inter text-center leading-relaxed max-w-3xl mx-auto">
                    Dream Land Project specializes in bringing ideas to life with
                    creativity and care. We focus on building spaces that inspire comfort,
                    beauty, and growth. Every project is a step toward shaping a better
                    tomorrow.
                </motion.p>

                <div className="flex justify-center items-center py-9">
                    <motion.button
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.9 }}

                        className="border border-[#a01d23] bg-transparent text-[#a01d23] px-1 py-2  text-sm  rounded-md mt-4 hover:bg-[#a01d23] hover:text-white transition duration-300 w-50 ">
                        Learn More

                    </motion.button>
                </div>
            </div>

            {/* Grid  */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-2  px-6 sm:px-8 lg:px-52 pb-10">
                {/* Card 1 */}
                <div className="shadow-2xl overflow-hidden bg-white shadow-[#5477a1]/90">

                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.9 }}
                        className="relative">
                        <img
                            src={assets.im10}
                            alt="About Us"
                            className="w-full h-64 sm:h-80 md:h-[420px] object-cover shadow-[#5477a1]/40 shadow-lg duration-200 ease-in-out "
                        />
                        {/* Button o */}
                        <button className="absolute bottom-0 left-0 w-full bg-white text-[#a01d23] py-2 cursor-pointer">
                            View Details →
                        </button>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.9 }}
                        className="p-4 pt-3 pb-6 text-left text-[#a01d23]">
                        <h3 className="text-lg font-semibold">Real Estate Projects</h3>
                        <br></br>
                        <p className="">Dream Land</p>
                        <br></br>
                        {/* <p className="text-sm mt-2">Red Sandalwood</p>
                        <p className="text-sm">Open Lands</p> */}
                        <p className="text-xs ">9876543210</p>
                    </motion.div>
                </div>


                {/* Card 2 */}
                <div className="shadow-2xl overflow-hidden bg-white  shadow-[#213a18]/70 ">

                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.9 }}
                        className="relative ">
                        <img
                            src={assets.im3}
                            alt="About Us"
                            className="w-full h-64 sm:h-80 md:h-[420px] object-cover shadow-[#213a18]/30 shadow-lg duration-200 ease-in-out"
                        />
                        {/* Button  */}
                        <button className="absolute bottom-0 left-0 w-full bg-white text-[#a01d23] py-2 cursor-pointer">
                            View Details →
                        </button>
                    </motion.div>

                    {/* Content  */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.9 }}
                        className="p-4 pt-3 pb-6 text-left text-[#a01d23]">
                        <h3 className="text-lg font-semibold">Open Plots</h3>
                        <br></br>
                        <p className="">Dream Land</p>
                        <br></br>
                        {/* <p className="text-sm mt-2">Red Sandalwood</p>
                        <p className="text-sm">Open Lands</p> */}
                        <p className="text-xs ">9876543210</p>
                    </motion.div>
                </div>


                {/* Card 3 */}
                <div className="shadow-2xl overflow-hidden bg-white shadow-[#a01d23]/70">

                    <div className="relative">
                        <motion.img

                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.9 }}
                            src={assets.im4}
                            alt="About Us"
                            className="w-full h-64 sm:h-80 md:h-[420px] object-cover shadow-[#a01d23]/20 shadow-lg duration-200 ease-in-out"
                        />
                        {/* Button  */}
                        <button className="absolute bottom-0 left-0 w-full bg-white text-[#a01d23] py-2 cursor-pointer">
                            View Details →
                        </button>
                    </div>

                    {/* Content  */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.9 }}
                        className="p-4 pt-3 pb-6 text-[#a01d23] text-left">
                        <h3 className="text-lg font-semibold">Farm Land</h3>
                        <br></br>
                        <p className="">Dream Land</p>
                        <br></br>
                        {/* <p className="text-sm mt-2">Red Sandalwood</p>
                        <p className="text-sm">Open Lands</p> */}
                        <p className="text-xs ">9876543210</p>
                    </motion.div>
                </div>


            </div>
        </div>
    );
};

export default ExceptionalMastery;

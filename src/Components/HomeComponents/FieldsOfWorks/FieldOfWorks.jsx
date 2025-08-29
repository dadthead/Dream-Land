import React from "react";
import { Building2, TreePine, Map, BadgeCheck } from "lucide-react";
import FlexBox from "./FlexBox";
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import assets from "../../../assets/assets";

const FieldOfWorks = () => {
  const fields = [
    { icon: <Building2 size={60} className="text-orange-400" />, label: "Real Estate " , discription:" Smart investments that secure your future", path:"/about" },
    { icon: <TreePine size={60} className="text-orange-400" />, label: "Farm Lands", discription: "Creative and eco-friendly opportunities like red sandalwood plantations", path:"/about" },
    { icon: <Map size={60} className="text-orange-400" />, label: " Open Plots", discription:"Strategically located, legally clear, and future-ready", path:"/about" },
    { icon: <BadgeCheck size={60} className="text-orange-400" />, label: "Construction", discription:"Building homes and spaces that reflect your dreams", path:"/about" },
  ];

  return (
    <div className="bg-gradient-to-b from-green-900 to-black w-full h-auto poppins   ">
      <div className="flex flex-col items-center justify-center gap-4 w-full h-auto text-center  md:py-16 md:px-2 lg:px-30 lg:py-10 py-10 px-6">
        <motion.h2
        initial={{ opacity: 0,  y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl md:text-3xl font-semibold text-white ">
          Our Core Services – Turning Dreams Into Reality

        </motion.h2>
        <motion.p
        initial={{ opacity: 0,  y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm md:text-[12px] text-gray-200 md:px-30">
          In today’s world, where trust is rare, Dream Land Projects stands as a guiding light of reliability and commitment. For the past two decades, we have been redefining real estate by serving our clients with honesty, transparency, and unmatched dedication.

          
        </motion.p>
      </div>

      {/* Icons Section */}
      <div className="md:flex-row flex-col flex px-2 md:px-10 md:gap-10">

      <div className="grid md:grid-cols-2  grid-cols-2  gap-3 px-2  md:gap-6 mt-14 md:w-[50%]  poppins">
        {fields.map((field, i) => (
          <Link to={field.path}>
          <motion.div
           initial={{ opacity: 0,  y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
           key={i} className="flex flex-col items-center gap-2">
            {field.icon}
            <p className="text-white text-center font-sm text-[10px] md:text-[12px]">
              {field.label}
            </p>
            <p className="text-white text-center font-sm text-[10px] md:text-[12px]">
              {field.discription}
            </p>
          </motion.div>
          </Link>
        ))}
      </div>
      <div>
      <img src={assets.f_1} alt="" className="md:w-[90%] w-full" />

      </div>
        </div>
      <FlexBox/>


    </div>
  );
};

export default FieldOfWorks;

import React from "react";
import "./Introduce.css";
import { motion } from "framer-motion";
import PillarGrid from "./PillarGrid";


const Introduce = React.memo(() => {
  return (
    <div className="bg-[#55191c] text-amber-50 min-h-screen px-6 py-10 md:px-12 lg:px-10">
      {/* Intro Section */}
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl md:text-3xl mb-4 font-semibold uppercase">
          Introducing DreamLand
        </h2>
        <div className="space-y-3">
          <p>
            With three decades of legacy, DreamLand’s unique customer-centric
            approach and commitment to delivering excellence and superior
            products have earned the company-wide recognition as a credible and
            reliable entity in the industry, across Vijayawada and Hyderabad.
            The brand promise of “Foundation of Happiness” mirrors the group's
            commitment to becoming the very foundation upon which happiness is
            built.
          </p>
          <p>
            With over 52+ projects delivered, spanning over 12 million square
            feet, and up to 40 million square feet in the pipeline, Sumadhura
            has emerged as a prominent brand in the fast-evolving market of
            developers.
          </p>
        </div>
      </div>

      {/* Pillars Title */}
      <div className="flex items-center justify-center mt-10">
        <motion.h1 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1 , y: 0 }}
        viewport={{ once: true , amount: 0.8 }}
        transition={{ duration: 1.9, delay: 0.5 }}
        className="pillar-text text-3xl md:text-4xl font-bold text-center">
          THE 4 PILLARS
        </motion.h1>
      </div>
      <div className="hidden md:block">

      <div className="w-20 h-0.5 mx-auto bg-amber-50 relative left-[-50%]">
      </div>
      <div className="w-4 h-4 relative  bottom-2 left-[-47%] mx-auto rounded-full bg-amber-50"></div>
      </div>
    <PillarGrid/> 
   
    </div>
  );
});

export default Introduce;

import React from "react";
import "./Introduce.css";
import { motion } from "framer-motion";
import assets from "../../../assets/assets";

const Introduce = React.memo(() => {
  return (
    <div
      className="introduce-section h-[600px] md:h-[500px] sm:h-[400px] text-white overflow-hidden relative">
 <video
    autoPlay
    loop
    muted
    playsInline
    className="fixed inset-0 w-full h-full object-cover -z-10 overflow-hidden"
  >
    <source src={assets.v2} type="video/mp4" />
  </video>    
  
  
  
  
    <div className="absolute top-0 left-0 w-full -z-10 bg-black/80 h-full"></div>
      <div className="max-w-screen-xl mx-auto z-50">
        <motion.h2 
          initial={{ opacity: 0,  y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl md:text-4xl md:mb-2 font-semibold poppins uppercase text-center py-9  ">
          Introducing DreamLand
        </motion.h2>

        <div className="space-y-4 p-6 rounded-xl z-10  font-light ">
          < motion.p
            initial={{ opacity: 0,  y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dream Land Projects, founded in 2005 by Mr. Koteswara Rao, is a true story of passion turning into purpose. Starting with zero resources but an unshakable vision, he built the company on trust, knowledge, and dedication. With over 20 years of experience in the real estate industry, Mr. Rao’s deep understanding of venture pricing, smart real estate investments, and creative opportunities like farm lands and red sandalwood plantations has helped thousands of families and investors fulfill their dreams. Today, Dream Land Projects stands as a symbol of integrity, growth, and prosperity — where every venture is not just an investment, but a step toward a better future.
          </motion.p>
          <motion.p
            initial={{ opacity: 0,  y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.3 }}
          >
            With over 52+ projects delivered, spanning over 12 million square
            feet, and up to 40 million square feet in the pipeline, Sumadhura
            has emerged as a prominent brand in the fast-evolving market of
            developers.
          </motion.p>
        
        </div>
      </div>

      <div className="hidden md:block">
        <div className="w-20 h-0.5 mx-auto bg-amber-50 relative left-[-50%]"></div>
        <div className="w-4 h-4 relative bottom-2 left-[-47%] mx-auto rounded-full bg-amber-50"></div>
      </div>
    </div>
  );
});

export default Introduce;

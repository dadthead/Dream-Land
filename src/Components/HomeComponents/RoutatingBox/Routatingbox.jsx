
import React from "react";
import assets from "../../../assets/assets";
import { motion } from "framer-motion";


const Boxes = React.memo(() => {
  return (
    <div className="w-full h-auto  flex justify-center items-center bg-cover  " style={{ backgroundImage:`url(${assets.img1})`}}>

    <motion.div
    initial={{ opacity: 0,  x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1.5 }}
    
    className="grid grid-cols-3   sm:grid-cols-4 md:grid-cols-5 md:w-full md:h-130   grid-rows-2 w-full h-[400px] cursor-pointer ">
      {/* Box 1 */}
      <div className="box-container hidden md:block  ">
        <div className="box-inner">
          {/* Front */}
          <div className="box-front bg-black/80 text-black font-semibold text-lg">
           
          </div>
          {/* Back */}
          <div className="box-back bg-black/85 text-black font-bold text-lg">
            
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div className="box-container">
        <div className="box-inner">
          <div className="box-front relative flex items-center justify-center text-white font-bold text-xl bg-black/95">
            Happiness
          </div>
          <div className="box-back bg-black/75 text-white  font-semibold px-3 text-lg">
             Our Principles are <br/>
            Built on Layimg <br/>
            Happiness
          </div>
        </div>
      </div>

      {/* Box 3 */}
      <div className="box-container">
        <div className="box-inner">
          <div className="box-front text-4xl bg-black/80 text-white font-medium text-center px-3 flex items-center justify-center">
            40
          </div>
          <div className="box-back bg-black/80 text-white px-4 font-semibold text-lg flex items-center justify-center">
            Million Saft Developing 
          </div>
        </div>
      </div>

      {/* Box 4 */}
      <div className="box-container">
        <div className="box-inner">
          <div className="box-front text-xl text-white font-bold bg-orange-400"> 20 Years</div>
          <div className="box-back bg-orange-400 text-white font-semibold text-lg px-4 flex items-center justify-center">
           2 Decades of Happiness
          </div>
        </div>
      </div>

      {/* Box 5 */}
      <div className="box-container hidden md:block ">
        <div className="box-inner">
          <div className="box-front relative flex items-center justify-center text-white font-bold text-3xl bg-black/70">
            
          </div>
          <div className="box-back bg-black/70  text-white font-semibold text-lg flex items-center justify-center">
            
          </div>
        </div>
      </div>

      {/* second line  Boxs */}
      <div className="box-container hidden md:block ">
        <div className="box-inner">
          <div className="box-front  bg-black/60 text-white font-bold text-3xl flex items-center justify-center"></div>
          <div className="box-back bg-black/60 text-white font-semibold text-lg flex items-center justify-center"></div>
        </div>
      </div>

      <div className="box-container">
        <div className="box-inner">
          <div className="box-front text-4xl font-semibold bg-black/80  shadow-black text-white"> 12K+</div>
          <div className="box-back bg-black/80 text-white font-semibold text-lg flex items-center justify-center">
            Happy Clinets
          </div>
        </div>
      </div>

      <div className="box-container">
        <div className="box-inner">
          <div className="box-front bg-orange-400 text-4xl text-white font-semibold"> 12 </div>
          <div className="box-back bg-orange-400 text-white px-4 font-semibold text-lg flex items-center justify-center">
            Million Sqft Delivered
          </div>
        </div>
      </div>

      <div className="box-container">
        <div className="box-inner">
          <div className="box-front text-4xl text-white  font-semibold bg-black/80"> 22K+ </div>
          <div className="box-back bg-black/50 text-white font-semibold text-lg flex items-center justify-center">
            Happy Familes
          </div>
        </div>
      </div>

      <div className="box-container ">
        <div className="box-inner">
          <div className="box-front bg-black/60  shadow-black text-white font-bold text-3xl flex items-center justify-center"></div>
          <div className="box-back bg-black/60 text-white font-semibold text-lg flex items-center justify-center"></div>
        </div>
      </div>
    </motion.div>
    </div>
  );
});

export default Boxes;

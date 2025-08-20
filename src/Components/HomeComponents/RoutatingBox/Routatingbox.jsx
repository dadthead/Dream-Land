
import React from "react";

const Boxes = () => {
  return (
    <div className="w-full h-auto py-4 flex justify-center items-center">

    <div className="grid grid-cols-3  sm:grid-cols-4 md:grid-cols-5 md:w-full md:h-130   grid-rows-2 w-full h-[400px] cursor-pointer gap-2">
      {/* Box 1 */}
      <div className="box-container hidden md:block ">
        <div className="box-inner">
          {/* Front */}
          <div className="box-front bg-gray-400 text-gray-700 font-semibold text-lg">
           
          </div>
          {/* Back */}
          <div className="box-back bg-[#a01d23]/30 text-white font-bold text-lg">
            
          </div>
        </div>
      </div>

      {/* Box 2 */}
      <div className="box-container">
        <div className="box-inner">
          <div className="box-front relative flex items-center justify-center text-slate-700 font-bold text-xl bg-amber-100">
            Happiness
          </div>
          <div className="box-back bg-slate-700 text-white  font-semibold px-3 text-lg">
             Our Principles are <br/>
            Built on Layimg <br/>
            Happiness
          </div>
        </div>
      </div>

      {/* Box 3 */}
      <div className="box-container">
        <div className="box-inner">
          <div className="box-front text-4xl bg-gray-400 text-white font-medium text-center px-3 flex items-center justify-center">
            40
          </div>
          <div className="box-back bg-[#ff6600]/30 text-white px-4 font-semibold text-lg flex items-center justify-center">
            Million Saft Developing 
          </div>
        </div>
      </div>

      {/* Box 4 */}
      <div className="box-container">
        <div className="box-inner">
          <div className="box-front text-xl text-slate-700 font-bold bg-amber-100"> Decades</div>
          <div className="box-back bg-[#a01d23]/80 text-white font-semibold text-lg px-4 flex items-center justify-center">
           Decades of Happiness
          </div>
        </div>
      </div>

      {/* Box 5 */}
      <div className="box-container hidden md:block ">
        <div className="box-inner">
          <div className="box-front relative flex items-center justify-center text-white font-bold text-3xl bg-gray-400">
            
          </div>
          <div className="box-back bg-[#a01d23]/30  text-white font-semibold text-lg flex items-center justify-center">
            
          </div>
        </div>
      </div>

      {/* second line  Boxs */}
      <div className="box-container hidden md:block ">
        <div className="box-inner">
          <div className="box-front  bg-white text-white font-bold text-3xl flex items-center justify-center"></div>
          <div className="box-back bg-[#a01d23]/30 text-white font-semibold text-lg flex items-center justify-center"></div>
        </div>
      </div>

      <div className="box-container">
        <div className="box-inner">
          <div className="box-front text-4xl font-semibold bg-amber-100"> 12K+</div>
          <div className="box-back bg-white text-white font-semibold text-lg flex items-center justify-center">
            Happy Clinets
          </div>
        </div>
      </div>

      <div className="box-container">
        <div className="box-inner">
          <div className="box-front bg-amber-100 text-4xl text-slate-700 font-semibold"> 12 </div>
          <div className="box-back bg-[#a01d23]/80 text-white px-4 font-semibold text-lg flex items-center justify-center">
            Million Sqft Delivered
          </div>
        </div>
      </div>

      <div className="box-container">
        <div className="box-inner">
          <div className="box-front text-4xl text-slate-700  font-semibold bg-amber-100"> 22K+ </div>
          <div className="box-back bg-[#a01d23]/50 text-white font-semibold text-lg flex items-center justify-center">
            Happy Familes
          </div>
        </div>
      </div>

      <div className="box-container ">
        <div className="box-inner">
          <div className="box-front bg-white"></div>
          <div className="box-back bg-[#a01d23]/30 text-white font-semibold text-lg flex items-center justify-center"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Boxes;

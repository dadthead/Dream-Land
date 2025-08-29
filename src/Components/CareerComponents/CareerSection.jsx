import React from "react";
import { motion } from "framer-motion";
import { Building2, Leaf, Users,  Trees } from "lucide-react";
import assets from "../../assets/assets";

const CareersPage = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src={assets.clients}
          alt="Dream Land Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 " />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 top-27"
        >
          <h1 className="text-xl font-bold ">
            Grow Your Future with <span className="text-[#a01d23]">Dream Land</span>
          </h1>
          <p className="mt-4 text-md max-w-2xl mx-auto">
            Join us in creating premium real estate, sustainable red wood projects,
            and open plots that inspire growth and opportunity.
          </p>
          <button className="mt-6 px-4 py-2 bg-[#ff6600] text-white font-inter rounded-2xl shadow-lg hover:bg-[#e25500] transition">
            Explore Careers
          </button>
        </motion.div>
      </div>

      {/* About Culture */}
      <div className="py-16 px-6 md:px-20 bg-gray-50 text-center">
        <h2 className="text-xl font-bold text-[#a01d23]">
          Life at Dream Land
        </h2>
        <p className="mt-4 text-sm max-w-3xl mx-auto text-gray-600">
          At Dream Land, we believe in innovation, sustainability, and integrity.
          Whether in real estate, red wood, or open plots, we nurture careers
          that grow with nature and community.
        </p>
      </div>

      {/* Why Join Us */}
      <div className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-xl font-bold text-center text-gray-800">
          Why Join Us
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
          {[
            { icon: <Building2 size={40} />, title: "Real Estate Growth" },
            { icon: <Leaf size={40} />, title: "Eco-Driven Vision" },
            { icon: <Users size={40} />, title: "Team Spirit & Culture" },
            { icon: <Trees size={40} />, title: "Sustainable Living" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-50 rounded-2xl shadow-md text-center"
            >
              <div className="flex justify-center mb-4 text-[#a01d23]">{item.icon}</div>
              <h3 className="text-sm font-semibold ">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={assets.im3}
          alt="Nature & Real Estate"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center mt-19 text-white">
          <h2 className="text-xl font-bold px-4">
            Your Career. Your Growth. Our Dream.
          </h2>
          <button className="mt-6 px-4 py-2  bg-[#a01d23] text-white font-semibold rounded-2xl shadow-lg hover:bg-[#7d171c] transition">
            Join Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;

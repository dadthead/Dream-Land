
// FourPillars.jsx
import React from "react";
import assets from "../../../assets/assets";
const pillars = [
  {
    title: "PRIME LOCATION",
    desc: "We are where you want to be",
    img: assets.img1, // replace with your image
  },
  {
    title: "SMART DESIGN",
    desc: "Imagination is the key to architectural innovation",
    img: assets.img2,
  },
  {
    title: "HIGH QUALITY",
    desc: "Path towards excellence is paved with diligence",
    img: assets.img3,
  },
  {
    title: "ON TIME DELIVERY",
    desc: "Every minute counts for moments to be created",
    img: assets.img1,
  },
];

const FourPillars = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-[#ff6600] text-lg font-semibold uppercase tracking-widest">
          Introducing DreamLand
        </h2>
        <p className="mt-4 max-w-4xl mx-auto text-gray-300 leading-relaxed">
          Dream Land Projects, founded in 2005 by Mr. Koteswara Rao, is a true story of passion turning into purpose. Starting with zero resources but an unshakable vision, he built the company on trust, knowledge, and dedication. With over 20 years of experience in the real estate industry, Mr. Rao’s deep understanding of venture pricing, smart real estate investments, and creative opportunities like farm lands and red sandalwood plantations has helped thousands of families and investors fulfill their dreams. Today, Dream Land Projects stands as a symbol of integrity, growth, and prosperity — where every venture is not just an investment, but a step toward a better future.
        </p>
        <h1 className="text-5xl md:text-4xl uppercase font-semibold mt-10 text-[#ff6600]">
          Our Foundation
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-[#a01d23] cursor-pointer hover:shadow-2xl shadow-black rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={pillar.img}
              alt={pillar.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-300 text-sm">{pillar.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourPillars;
